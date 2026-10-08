import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, lstatSync, readFileSync, readdirSync } from "node:fs";
import { join, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
const readJSON = (path) => JSON.parse(readFileSync(join(root, path), "utf8"));
const source = readJSON(".yss-skill-source.json");
assert.equal(source.format_version, 1);
assert.equal(source.skill, "setup-yss-harness");
const skill = join(root, "skills", source.skill);
const files = readdirSync(skill, { recursive: true }).filter((path) => {
  const stat = lstatSync(join(skill, path));
  assert(!stat.isSymbolicLink(), `Unexpected symlink: ${path}`);
  assert(stat.isFile() || stat.isDirectory(), `Unexpected file type: ${path}`);
  return stat.isFile();
}).map((path) => path.split(sep).join("/")).sort();
assert.deepEqual(files, Object.keys(source.files_sha256).sort());
for (const path of files) {
  const digest = createHash("sha256").update(readFileSync(join(skill, path))).digest("hex");
  assert.equal(digest, source.files_sha256[path], `Skill source drift: ${path}`);
}
assert.match(readFileSync(join(skill, "SKILL.md"), "utf8"), /^---\r?\nname: setup-yss-harness\r?\n/);
assert(!existsSync(join(root, "skills/yss-harness-upgrade")), "Retired skill is still active");
const plugin = readJSON(".claude-plugin/plugin.json");
assert.equal(plugin.name, source.skill);
assert.deepEqual(plugin.skills, [`./skills/${source.skill}`]);
assert.equal(plugin.version, readJSON("package.json").version);
assert.deepEqual(readJSON(".claude-plugin/marketplace.json").plugins.map(({ name }) => name), [source.skill]);
console.log(`Verified ${source.skill}: ${files.length} files, source hashes and plugin metadata`);
