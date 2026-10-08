# AGENTS.md

本仓库分发 YSS 就绪技能 `setup-yss-harness`，沿用原公开仓库地址。

## 仓库结构与维护原则

1. **技能来源**：唯一事实源为 `iloveZzz/yss-spec-project-template` 的 `.agents/skills/setup-yss-harness/`。在模板仓运行 `scripts/export-yss-skills --skill setup-yss-harness --output <仓外新目录>`，核验 `--check` 后同步导出的 `skills/setup-yss-harness/`；不在本仓独立修改技能正文。
2. **自包含保证**：所有文档链接必须保持相对路径且自闭环，禁止引用宿主工程私有或外部未导出路径。
3. **Claude Code 插件同步**：每次修改技能或发版时，核对 `.claude-plugin/plugin.json` 中的 `skills` 声明与版本。
4. **版本演进**：使用 `@changesets/cli`，执行 `npm run version` 自动同步 `package.json` 与 `.claude-plugin/plugin.json`。
5. **来源与检查**：同步时更新 `.yss-skill-source.json` 的源状态、基线提交、原文及导出摘要；工作树来源不能标成已提交来源。运行 `npm run check`，再用 `skills` CLI 在仓外临时工程验证发现和安装。更名移除旧活动入口，Git 历史保留旧版本。
