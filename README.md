# YSS Harness Upgrade Skill

[![skills.sh](https://skills.sh/b/iloveZzz/yss-harness-upgrade-skill)](https://skills.sh/iloveZzz/yss-harness-upgrade-skill)

面向 AI Coding Agent（Claude Code、Codex、Cursor、Antigravity 等）的 YSS 安装、初始化与升级维护技能脚手架。

支持从官方仓库 [iloveZzz/yss-cli](https://github.com/iloveZzz/yss-cli) 自动化取得并固定最新正式 Release，编排四 Profile（`spec` / `design` / `backend` / `frontend`）工程的新建、接管、模板同步、旧实例迁移、资源补装、状态诊断以及事务恢复与回退。

脚手架架构参考 [mattpocock/skills](https://github.com/mattpocock/skills)，支持通过 `skills` CLI 与 Claude Code 插件两种生态开箱即用安装到任意项目。

---

## 快速安装 (30-second setup)

你可以通过 **Claude Code 插件** 或 **[skills.sh](https://skills.sh)** 快速将此技能引入到你的项目中。

### 1. 通用 Agent 安装（Codex / Cursor / Antigravity / 任意支持 skills.sh 的 Agent）

在项目根目录运行 `skills` CLI：

```bash
npx skills@latest add iloveZzz/yss-harness-upgrade-skill
```

或指定安装单个技能：

```bash
npx skills@latest add iloveZzz/yss-harness-upgrade-skill --skill yss-harness-upgrade
```

安装程序会自动检测当前工程中的 Agent 环境（如 `.agents/skills`、`.claude/skills` 或 `.cursor/rules`）并将技能写入为本地文件，你可以完全掌控并按需编辑。

### 2. Claude Code 插件安装

添加本仓库为 Marketplace 源：

```bash
claude plugin marketplace add iloveZzz/yss-harness-upgrade-skill
claude plugin install yss-harness-upgrade@iloveZzz
```

或者在 Claude Code 会话内部直接执行：

```text
/plugin marketplace add iloveZzz/yss-harness-upgrade-skill
/plugin install yss-harness-upgrade@iloveZzz
```

### 3. 手动复制安装

直接将本仓库的 `skills/yss-harness-upgrade` 目录复制到你项目的 `.agents/skills/yss-harness-upgrade` 即可。

---

## 包含技能

### `yss-harness-upgrade`

- **定位**：YSS 程序的安装/在线升级，以及治理工程与业务工程的新建、接管、同版本同步和跨版本迁移。
- **自包含参考**：
  - [统一维护协议](skills/yss-harness-upgrade/references/harness-upgrade.md)：核心操作合同、来源与事务规则。
  - [程序安装与升级](skills/yss-harness-upgrade/references/program-installation.md)：固定官方发布包、校验清单、本地展开与引导安装。
  - [项目初始化与维护](skills/yss-harness-upgrade/references/project-operations.md)：四 Profile 的 `init` / `attach` / `sync` / `migrate` / `ensure` 实操。
  - [统一入口与历史身份](skills/yss-harness-upgrade/references/cli-families.md)：历史四 CLI 身份对照表与绑定规则。

---

## 核心设计与保护原则

1. **固定来源**：默认查询官方仓库 `iloveZzz/yss-cli` 的最新正式 Release，记录 SHA-256、源码 commit 与平台清单，不把未固定的 `latest` 留在生产环境中。
2. **预演与计划保护**：写入操作必须遵循 `plan -> review -> apply`，支持生成独立的 `.json` 计划文件供用户与 Reviewer 审查。
3. **事务与回退隔离**：程序级安装事务与项目级维护事务严格隔离，互不污染；支持幂等回退与安全恢复。
4. **完全自包含**：技能内所有协议与参考文档均自闭环，不依赖外部未导出的宿主工程路径。

---

## 许可证

本项目基于 [MIT 许可证](LICENSE) 开源。脚手架架构借鉴并致谢 [mattpocock/skills](https://github.com/mattpocock/skills)。
