export interface IDataSource {
    dataSource: string,
    database: string,
    collection: string
}

export class Mongo {
    #reqInit: RequestInit;
    #endpoint: string;
    constructor(endpoint: string, apiKey: string) {
        this.#endpoint = endpoint;
        this.#reqInit = {
            method: 'POST',
            headers: new Headers({
                "Content-Type": "application/json",
                "Access-Control-Request-Headers": "*",
                apiKey
            })
        }
    }
    async #act<S extends IDataSource>(action: string, body: S) {
        this.#reqInit.body = JSON.stringify(body);
        const res = await fetch(`${this.#endpoint}/action/${action}`, this.#reqInit);
        if (res.ok) return await res.json();
        throw new Error(`Error: ${res.status}`);
    }
    
    async findOne(dataSource: IDataSource, filter: Record<string, unknown>) {
        return (await this.#act('findOne', { ...dataSource, filter })).document;
    }
    
    async find(dataSource: IDataSource, filter: Record<string, unknown>) {
        return (await this.#act('find', { ...dataSource, filter })).documents as Array<unknown>;
    }
    
    async insertOne(dataSource: IDataSource, document: Record<string, unknown>) {
        return (await this.#act('insertOne', { ...dataSource, document })).insertedId as string;
    }
    
    async insertMany(dataSource: IDataSource, documents: Array<Record<string, unknown>>) {
        return (await this.#act('insertMany', { ...dataSource, documents })).insertedIds as Array<string>;
    }
    
    async updateOne(dataSource: IDataSource, filter: Record<string, unknown>, document: Record<string, unknown>) {
        if (document._id) delete document._id;
        return (await this.#act('updateOne', { ...dataSource, filter, update: { "$set": document } })).modifiedCount as number;
    }
    
    async updateMany(dataSource: IDataSource, filter: Record<string, unknown>, document: Record<string, unknown>) {
        if (document._id) delete document._id;
        return (await this.#act('updateMany', { ...dataSource, filter, update: { "$set": document } })).modifiedCount as number;
    }
    
    async replaceOne(dataSource: IDataSource, filter: Record<string, unknown>, replacement: Record<string, unknown>) {
        if (replacement._id) delete replacement._id;
        return (await this.#act('replaceOne', { ...dataSource, filter, replacement })).modifiedCount as number;
    }
    
    async deleteOne(dataSource: IDataSource, filter: Record<string, unknown>) {
        return (await this.#act('deleteOne', { ...dataSource, filter })).deletedCount as number;
    }
    
    async deleteMany(dataSource: IDataSource, filter: Record<string, unknown>) {
        return (await this.#act('deleteMany', { ...dataSource, filter })).deletedCount as number;
    }
}