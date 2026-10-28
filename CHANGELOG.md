# yss-harness-upgrade-skill

## 2.1.0

### Minor Changes

- 增加 Python 标准库环境检查与固定发行包安全引导，默认查询最新正式 CLI 后绑定版本及摘要。对齐 skills/governed 安装、安装方式迁移、CLI 绑定计划和实际结果核查；完善网络诊断、平台资格与宿主发现边界。

## 2.0.1

### Patch Changes

- 对齐当前 YSS CLI 的 Spec/Backend 身份、显式迁移与恢复语法、程序安装资格和就绪验收；同步固定模板提交的便携技能及来源摘要。

## 2.0.0

### Major Changes

- Rename the public skill and Claude Code plugin to `setup-yss-harness`; keep the GitHub repository address. Install the new skill with `npx skills@latest add iloveZzz/yss-harness-upgrade-skill --skill setup-yss-harness`.

  Sync the portable canonical skill and its operation contract. Route by the project's actual identity, preserve local customization, reuse valid authorization, and verify CLI and project transactions independently. Record source and export hashes, and check distribution metadata before publishing.
