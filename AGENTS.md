# AGENTS.md

本仓库是 YSS 安装与升级维护技能 `yss-harness-upgrade` 的公开分发脚手架仓库。

## 仓库结构与维护原则

1. **技能位置**：核心技能保存在 `skills/yss-harness-upgrade/`，包含唯一的 `SKILL.md` 及 `references/` 支持文档。
2. **自包含保证**：所有文档链接必须保持相对路径且自闭环，禁止引用宿主工程私有或外部未导出路径。
3. **Claude Code 插件同步**：每次修改技能或发版时，核对 `.claude-plugin/plugin.json` 中的 `skills` 声明与版本。
4. **版本演进**：使用 `@changesets/cli`，执行 `npm run version` 自动同步 `package.json` 与 `.claude-plugin/plugin.json`。
