import { JWT } from "./jwt.ts";

Deno.test('Create Token', async () => {
    const jwt = new JWT();
    await jwt.init();
    console.log(`key: ${await jwt.exportKey()}`);
    const token = await jwt.createToken(undefined, 50 * 365 * 24 * 60 * 60);
    console.log(`token: ${token}`);
    console.log(await jwt.verifyToken(token));
});