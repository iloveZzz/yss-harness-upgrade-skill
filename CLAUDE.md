# CLAUDE.md

Guidelines for developing and maintaining the `yss-harness-upgrade-skill` repository.

## Commands
- `npm run check-plugin-version`: Check that `package.json` version matches `.claude-plugin/plugin.json`.
- `npm run version`: Bump version with changesets and sync plugin version.
- `npx changeset`: Create a new changeset for upcoming release.

## Structure
- `skills/yss-harness-upgrade/`: The primary skill bundle.
- `.claude-plugin/`: Plugin metadata for Claude Code plugin marketplace.
- `scripts/sync-plugin-version.mjs`: Script to synchronize plugin version with package.json.
