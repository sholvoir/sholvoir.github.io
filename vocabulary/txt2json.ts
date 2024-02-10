export const run = async () => {
    const encoder = new TextEncoder();
    const text = await Deno.readTextFile('0.0.1/vocabulary.txt');
    const file = await Deno.open('0.0.1/vocabulary.json', { write: true, create: true, truncate: true });
    const lines = text.split('\n');
    for (const [index, line] of lines.entries()) {
        const [word, ...tags] = line.split(/[,:] */).map(w=>w.trim());
        if (word) {
            await Deno.write(file.rid, encoder.encode(index == 0 ? '{\n' : ',\n'));
            await Deno.write(file.rid, encoder.encode(`"${word}": ${JSON.stringify(tags.sort())}`));
        }
    }
    await Deno.write(file.rid, encoder.encode('\n}'));
    file.close();
}

if (import.meta.main) await run();