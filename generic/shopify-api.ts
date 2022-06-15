// deno-lint-ignore-file no-explicit-any
import { assert } from "https://deno.land/std@0.140.0/_util/assert.ts";
import { Status } from 'https://deno.land/std@0.140.0/http/http_status.ts';
import { encode as b64Encode } from 'https://deno.land/std@0.140.0/encoding/base64.ts';
import { encode as hexEncode } from 'https://deno.land/std@0.140.0/encoding/hex.ts';

const textDecode = new TextDecoder("utf-8").decode;
const textEncode = new TextEncoder().encode;

export async function hmacSha256(secret: string, text: string, encode: 'hex' | 'b64') {
    const key = await crypto.subtle.importKey("raw", textEncode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign", "verify"]);
    const digest = new Uint8Array(await crypto.subtle.sign("HMAC", key, textEncode(text)));
    if (encode == 'hex') return textDecode(hexEncode(digest));
    return b64Encode(digest);
}

type Method = 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD';
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export interface Webhook {
    id?: string;
    topic: string;
    address: string;
    format?: 'json';
    api_version?: string;
}

export interface ScriptTag {
    id?: string;
    event: 'onload';
    src: string;
    display_scope?: string;
    cache?: boolean;
}

export interface OrderParameters {
    created_at_max?: string;
    created_at_min?: string;
    financial_status?: 'authorized' | 'pending' | 'paid' | 'partially_paid' | 'refunded' | 'voided' | 'partially_refunded' | 'any' | 'unpaid';
    fulfillment_status?: 'shipped' | 'partial' | 'unshipped' | 'any' | 'unfulfilled';
    limit?: number;
    status?: 'open' | 'closed' | 'cancelled' | 'any';
}

export interface Order {
    id: string | number;
    name: string;
    email: string;
    phone: string;
    currency: string;
    subtotal_price: number;
    financial_status: 'pending' | 'authorized' | 'partially_paid' | 'paid' | 'partially_refunded' | 'refunded' | 'voided';
    fulfillment_status?: 'fulfilled' | 'partial' | 'restocked'
}

export interface RecurringApplicationCharge {
    id?: string | number;
    name: string;
    price: string;
    return_url?: string;
    trial_days?: number
}

export class ShopifyAPI {
    #shop: string;
    #token: string;
    #apiVersion: string;
    #retries: number;
    #retryWaitTime: number;

    constructor(shop: string, token: string, apiVersion = "2022-04", retries = 0, retryWaitTime = 1000) {
        this.#shop = shop;
        this.#token = token;
        this.#apiVersion = apiVersion;
        this.#retries = retries;
        this.#retryWaitTime = retryWaitTime;
    }

    async request(endpoint: string, method?: Method, data?: unknown): Promise<any> {
        const uri = `https://${this.#shop}/${endpoint}`;
        const headers = new Headers();
        if (this.#token.length) headers.append("X-Shopify-Access-Token", this.#token);
        const params: RequestInit = { headers };
        if (method) params.method = method;
        if (data) {
            params.body = JSON.stringify(data);
            headers.append("Content-Type", "application/json");
            headers.append("Content-Length", params.body.length.toString());
        }
        let tries = 0;
        while (true) {
            const response = await fetch(uri, params);
            if (response.status == Status.OK) {
                const result = await response.json();
                result.http_status = response.status;
                return result;
            } else if (++tries >= this.#retries) return { http_status: response.status };
            await delay(this.#retryWaitTime);
        }
    }

    async graphQL(query: string): Promise<any> {
        const uri = `https://${this.#shop}/admin/api/${this.#apiVersion}/graphql.json`
        const headers = new Headers();
        if (this.#token.length) headers.append("X-Shopify-Access-Token", this.#token);
        headers.append("Content-Length", query.length.toString());
        headers.append("Content-Type", "application/json");
        let tries = 0;
        while (true) {
            const response = await fetch(uri, { method: "POST", headers, body: query });
            if (response.status == Status.OK) {
                const result = await response.json();
                result.http_status = response.status;
                return result;
            } else if (++tries >= this.#retries) return { http_status: response.status };
            await delay(this.#retryWaitTime);
        }
    }

    async getAccessToken(client_id: string, client_secret: string, code: string) {
        return await this.request("/admin/oauth/access_token", 'POST', { client_id, client_secret, code });
    }

    async getWebhooks() {
        return (await this.request(`/admin/api/${this.#apiVersion}/webhooks.json`)).webhooks as Array<Webhook>;
    }

    async createWebhook(webhook: Webhook) {
        webhook = { format: 'json', api_version: this.#apiVersion, ...webhook };
        return (await this.request(`/admin/api/${this.#apiVersion}/webhooks.json`, 'POST', { webhook })).webhook as Webhook;
    }

    async updateWebhook(webhook: Webhook) {
        assert(webhook.id, 'webhook must have an id.')
        webhook = { format: 'json', api_version: this.#apiVersion, ...webhook };
        return (await this.request(`/admin/api/${this.#apiVersion}/webhooks/${webhook.id!}.json`, 'PUT', { webhook })).webhook as Webhook;
    }

    async removeWebhook(webhookID: string | number) {
        return await this.request(`/admin/api/${this.#apiVersion}/webhooks/${webhookID}.json`, 'DELETE');
    }

    async getScriptTags() {
        return (await this.request(`/admin/api/${this.#apiVersion}/script_tags.json`)).script_tags as Array<ScriptTag>;
    }

    async createScriptTag(script_tag: ScriptTag) {
        return (await this.request(`/admin/api/${this.#apiVersion}/script_tags.json`, 'POST', { script_tag })).script_tag as ScriptTag;
    }

    async updateScriptTag(script_tag: ScriptTag) {
        assert(script_tag.id, 'script_tag must have an id.');
        return (await this.request(`/admin/api/${this.#apiVersion}/script_tags/${script_tag.id}.json`, 'PUT', { script_tag })).script_tag as ScriptTag;
    }

    async removeScriptTag(script_tag_id: string | number) {
        return await this.request(`/admin/api/${this.#apiVersion}/script_tags/${script_tag_id}.json`, 'DELETE');
    }

    async getOrders(params?: OrderParameters) {
        const query = params && Object.entries(params).map(([key, value]) => `${key}=${value}`).join('&');
        return (await this.request(`/admin/api/${this.#apiVersion}/orders.json${query && `?${query}`}`)).orders as Array<Order>;
    }

    async getProducts() {
        return (await this.request(`/admin/api/${this.#apiVersion}/products.json`)).products as Array<any>;
    }

    async getRecurringApplicationCharges() {
        return (await this.request(`/admin/api/${this.#apiVersion}/recurring_application_charges.json`)).recurring_application_charges as Array<RecurringApplicationCharge>;
    }

    async createRecurringApplicationCharge(recurring_application_charge: RecurringApplicationCharge, apiKey?: string) {
        recurring_application_charge = { trial_days: 0, return_url: `https://${this.#shop}/admin/apps/${apiKey}`, ...recurring_application_charge };
        return (await this.request(`/admin/api/${this.#apiVersion}/recurring_application_charges.json`, 'POST', { recurring_application_charge }))
            .recurring_application_charge as RecurringApplicationCharge;
    }
}
