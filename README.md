# Setup YSS Harness

[![skills.sh](https://skills.sh/b/iloveZzz/yss-harness-upgrade-skill)](https://skills.sh/iloveZzz/yss-harness-upgrade-skill)

安全安装或升级 YSS CLI，并按工程的真实环境初始化、接管、同步或迁移研发治理实例。保护业务文件、本地定制、唯一 Context 与 Git 状态；程序与项目分别规划、应用、恢复和验收。

技能名称为 **`setup-yss-harness`**，沿用 GitHub 仓库 `iloveZzz/yss-harness-upgrade-skill`。2.0.0 起替代旧 `yss-harness-upgrade` 入口；新 [skills.sh 页面](https://skills.sh/ilovezzz/yss-harness-upgrade-skill/setup-yss-harness) 随平台索引更新。技能分发版本与 [YSS CLI 正式发行](https://github.com/iloveZzz/yss-cli/releases)独立，已发布 CLI Bundle 的资源标识以实际 `skills list` 为准。

## 安装与调用

在工程根目录安装到所选 Agent；加 `-g` 可安装为用户级技能：

```bash
npx skills@latest add iloveZzz/yss-harness-upgrade-skill --skill setup-yss-harness
```

安装后请求 Agent：“使用 setup-yss-harness，让这个工程的 YSS CLI 和研发治理实例就绪。”明确目标工程与用途后，Agent 按真实身份选择 `init`、`attach`、`sync`、`migrate` 或插件接口；只需安装程序时明确该范围。它不创建生产应用脚手架，也不批准产品阶段。

Claude Code 插件安装：

```bash
claude plugin marketplace add iloveZzz/yss-harness-upgrade-skill
claude plugin install setup-yss-harness@iloveZzz
```

已有该 Marketplace 的用户先执行 `claude plugin marketplace update iloveZzz`。原独立技能或插件用户确认新入口可用后，按原安装方式移除旧安装；既有 YSS 工程中的受管技能沿用 CLI 计划和事务处理。

也可将 `skills/setup-yss-harness/` 完整复制到用户或工程的技能目录。技能所需的参考资料均随包提供，可在未安装 YSS CLI、未检出模板仓库时调用。

## 随包参考

- [操作合同](skills/setup-yss-harness/references/operation-contract.md)：身份、授权、来源、冲突处置和事务保护。
- [程序安装与升级](skills/setup-yss-harness/references/program-installation.md)：固定官方 Release、摘要核验、安装和恢复。
- [项目操作](skills/setup-yss-harness/references/project-operations.md)：按环境选择初始化、接管、同步、迁移和资源补装。
- [CLI 家族](skills/setup-yss-harness/references/cli-families.md)：原生、历史及插件绑定实例的识别。

## 维护

唯一事实源为 [YSS 模板仓库](https://github.com/iloveZzz/yss-spec-project-template) 的 `.agents/skills/setup-yss-harness/`。通过模板的 `scripts/export-yss-skills` 导出便携包，再同步本仓；[来源记录](.yss-skill-source.json)分别保留原文与导出内容的摘要。当前快照来自来源记录绑定的模板提交；原文与导出文件分别保留摘要。

```bash
npm ci
npm run check
npm run version # 有待发布 changeset 时同步版本
```

分发结构参考 [mattpocock/skills](https://github.com/mattpocock/skills)，复用 `skills/`、Claude Code 插件声明及 Changesets 版本管理。采用 [MIT 许可证](LICENSE)。
