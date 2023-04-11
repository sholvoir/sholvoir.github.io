import "std/dotenv/load.ts";
import { DataSource, findOne, find, insertOne, insertMany, deleteOne, deleteMany, updateOne, updateMany, replaceOne } from './mongo.ts';
import { assertEquals } from 'std/testing/asserts.ts';

Deno.test('Mongo', async (t) => {
    const dataSource: DataSource = {
        "dataSource": "Cluster0",
        "database": "test",
        "collection": "test"
    }
    let id1: string;
    await t.step('insertOne', async () => {
        const d: Record<string, unknown> = { name: 'test1', status: 'complete', created: Date.now() };
        id1 = await insertOne(dataSource, d) as string;
        assertEquals(typeof id1, 'string');
    });
    await t.step('updateOne', async () => {
        const z = await updateOne(dataSource, {_id: { $oid: id1}}, { name: 'new-test1' });
        assertEquals(z, 1);
    });
    await t.step('replaceOne', async () => {
        const z = await replaceOne(dataSource, {_id: {$oid: id1}}, { aaa: 'nothing' });
        assertEquals(z, 1);
    });
    await t.step('findOne', async () => {
        const z = await findOne(dataSource, {_id: {$oid: id1}}) as Record<string, unknown>;
        assertEquals(z.aaa, 'nothing');
        assertEquals(z.name, undefined);
    });
    await t.step('deleteOne', async () => {
        const z = await deleteOne(dataSource, {_id: {$oid: id1}});
        assertEquals(z, 1);
    });
    await t.step('insertMany', async () => {
        const ds: Array<Record<string, unknown>> = [
            { name: 'test2', status: 'pending', created: Date.now() },
            { name: 'test3', status: 'pending', created: Date.now() }
        ];
        const [id2] = await insertMany(dataSource, ds);
        assertEquals(typeof id2, 'string');
    });
    await t.step('updateMany', async () => {
        const z = await updateMany(dataSource, { status: 'pending' }, { status: 'todo' });
        assertEquals(z, 2);
    });
    await t.step('find', async () => {
        const z = await find(dataSource, { status: 'todo' });
        assertEquals(z.length, 2);
    });
    await t.step('deleteMany', async () => {
        const z = await deleteMany(dataSource, { status: 'todo' });
        assertEquals(z, 2);
    });
})