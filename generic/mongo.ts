const endpoint = Deno.env.get('MONGO_DB_END_POINT')!;
const method = 'POST';
const headers = new Headers({
    "Content-Type": "application/json",
    "Access-Control-Request-Headers": "*",
    "apiKey": Deno.env.get('MONGO_DB_API_KEY')!
});

export interface DataSource {
    dataSource: string,
    database: string,
    collection: string
}

async function act<S extends DataSource>(action: string, body: S) {
    const response = await fetch(`${endpoint}/action/${action}`, { method, headers, body: JSON.stringify(body) });
    if (response.status < 200 || response.status > 299) throw new Error(`Error: ${response.status}`);
    return await response.json();
}

export async function findOne(dataSource: DataSource, filter: Record<string, unknown>) {
    return (await act('findOne', { ...dataSource, filter })).document;
}

export async function find(dataSource: DataSource, filter: Record<string, unknown>) {
    return (await act('find', { ...dataSource, filter })).documents as Array<unknown>;
}

export async function insertOne(dataSource: DataSource, document: Record<string, unknown>) {
    return (await act('insertOne', { ...dataSource, document })).insertedId as string;
}

export async function insertMany(dataSource: DataSource, documents: Array<Record<string, unknown>>) {
    return (await act('insertMany', { ...dataSource, documents })).insertedIds as Array<string>;
}

export async function updateOne(dataSource: DataSource, filter: Record<string, unknown>, document: Record<string, unknown>) {
    if (document._id) delete document._id;
    return (await act('updateOne', { ...dataSource, filter, update: { "$set": document } })).modifiedCount as number;
}

export async function updateMany(dataSource: DataSource, filter: Record<string, unknown>, document: Record<string, unknown>) {
    if (document._id) delete document._id;
    return (await act('updateMany', { ...dataSource, filter, update: { "$set": document } })).modifiedCount as number;
}

export async function replaceOne(dataSource: DataSource, filter: Record<string, unknown>, replacement: Record<string, unknown>) {
    if (replacement._id) delete replacement._id;
    return (await act('replaceOne', { ...dataSource, filter, replacement })).modifiedCount as number;
}

export async function deleteOne(dataSource: DataSource, filter: Record<string, unknown>) {
    return (await act('deleteOne', { ...dataSource, filter })).deletedCount as number;
}

export async function deleteMany(dataSource: DataSource, filter: Record<string, unknown>) {
    return (await act('deleteMany', { ...dataSource, filter })).deletedCount as number;
}
