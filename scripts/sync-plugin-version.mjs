#!/usr/bin/env node
// Copies package.json's version into the plugin manifest and npm lockfile.
// Runs as part of `npm run version`, immediately after `changeset version`.
// With --check it changes nothing and exits 1 if the two versions differ.

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repo = join(dirname(fileURLToPath(import.meta.url)), "..");
const pluginPath = join(repo, ".claude-plugin", "plugin.json");

const { version } = JSON.parse(readFileSync(join(repo, "package.json"), "utf8"));
const source = readFileSync(pluginPath, "utf8");
const plugin = JSON.parse(source);
const lockPath = join(repo, "package-lock.json");
const lock = JSON.parse(readFileSync(lockPath, "utf8"));

if (plugin.version === version && lock.version === version && lock.packages[""].version === version) {
  console.log(`Plugin and npm lockfile versions are ${version} (already in sync)`);
  process.exit(0);
}

if (process.argv.includes("--check")) {
  console.error(
    `Version mismatch: package=${version}, plugin=${plugin.version}, lock=${lock.version}/${lock.packages[""].version}. Run \`node scripts/sync-plugin-version.mjs\`.`,
  );
  process.exit(1);
}

// Rewrite only the version line, to keep the key order and the formatting.
const updated = source.replace(
  /("version"\s*:\s*")[^"]*(")/,
  `$1${version}$2`,
);

if (JSON.parse(updated).version !== version) {
  console.error(`Could not find a version field to replace in ${pluginPath}.`);
  process.exit(1);
}

writeFileSync(pluginPath, updated);
lock.version = version;
lock.packages[""].version = version;
writeFileSync(lockPath, `${JSON.stringify(lock, null, 2)}\n`);
console.log(`plugin.json version ${plugin.version} -> ${version}`);
console.log(`npm lockfile version -> ${version}`);
