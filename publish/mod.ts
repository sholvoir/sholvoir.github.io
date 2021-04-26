export default async function publish(commit: string, cwd?: string) {
    const commands = [{ cmd: ["git", "add", "."], cwd },
        { cmd: ["git", "commit", "-m", `"${commit}"`], cwd },
        { cmd: ["git", "push"], cwd }];
    for (const command of commands) {
        const process = Deno.run(command);
        const result = await process.status();
        if (!result.success) return `Failed at "${command.cmd.join(" ")}"`;
        process.close();
    }
}