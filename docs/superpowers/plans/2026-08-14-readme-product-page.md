# README Product Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task with review checkpoints.

**Goal:** 将 `kang-frontend-standard` 的 README 重写为只展示 Kang 身份、具有真实证据、可安装验证、可扫描的公开 Skill 产品页。

**Architecture:** 只修改 README 与公开案例素材，不改变 `SKILL.md` 的运行规则、触发边界或版本。README 采用“价值主张 → 安装 → 案例证据 → 安装前后 → 能力矩阵 → 工作流 → 前置条件/排错 → 边界/版本 → 英文区”的线性结构；证据和声明按 `tested locally`、`prototype`、`simulated`、`to verify` 分级。

**Tech Stack:** Markdown、Git、现有 Node/npx Skill CLI、仓库已有 `evals/validate_skill.mjs`。

---

### Task 1: 整理公开案例素材和作者身份边界

**Files:**
- Create: `docs/assets/cases/README.md`（素材说明与证据等级）
- Create: `docs/assets/cases/customer-consultation-desktop-stable-v041.png`（仅在确认素材可公开后加入）
- Create: `docs/assets/cases/casebook-reference-driven-directions.png`（仅在确认素材可公开后加入）
- Modify: `docs/superpowers/plans/2026-08-14-readme-product-page.md`（记录实际选用的素材路径）

- [ ] **Step 1: 检查候选素材是否只包含项目界面**

  检查 `/Users/kang/.codex/visualizations/2026/08/12/019ff3fb-f3a8-74e1-962c-09f8e4fefd36/evidence/customer-consultation-desktop-stable-v041.png` 和案例集相关截图；确认没有姓名、头像、邮箱、手机号、Token、私有域名或第三方品牌标识。

- [ ] **Step 2: 选择并复制可公开素材**

  只复制通过检查的图片到 `docs/assets/cases/`；如果案例集截图不适合公开，保留文字案例，不创建虚假的图片占位。

- [ ] **Step 3: 写入素材证据说明**

  `docs/assets/cases/README.md` 为每张图片记录来源、视口、稳定状态和证据等级；内容只写 `Kang Frontend Standard`、项目功能和验证状态，不写其他个人身份。

- [ ] **Step 4: 检查素材目录敏感信息**

  运行：

  ```bash
  rg -n -i "api[_-]?key|token|cookie|secret|password|手机号|邮箱|身份证|乔木|qiaomu|joeseesun|向阳" docs/assets/cases
  ```

  预期：无命中；若图片中存在不可通过文本搜索发现的敏感信息，删除该图片，不进入 README。

### Task 2: 重写中文 README 产品页

**Files:**
- Modify: `README.md`

- [ ] **Step 1: 保留仓库身份和当前版本**

  保留标题 `Kang Frontend Standard`、仓库安装地址、当前版本 `v0.5.0` 和 MIT License；把唯一公开作者身份写成 `Created and maintained by Kang` 或对应中文表达。

- [ ] **Step 2: 写入首屏价值主张和快速安装**

  使用已确认主张：

  > 让 AI 做前端时，不再只是“能运行”，而是先判断、再设计、再验证。

  首屏紧接 `npx skills add KanG-ciyuan/kang-frontend-standard`、版本/许可证 badges 和真实案例入口；不使用无依据的“行业最佳”或“必然惊艳”声明。

- [ ] **Step 3: 添加案例证据和安装前后对照**

  每个案例按“原始问题 / Skill 介入 / 用户认可 / 仍待验证”四句结构描述，并引用 Task 1 中通过检查的素材；加入安装前后对照表，表述流程差异而不是保证结果。

- [ ] **Step 4: 添加能力矩阵和工作流**

  用表格说明视觉方向、成熟参考、选择性优化、字体层级、组件 Token、动效、响应式、无障碍、性能、测试部署十项能力；再用 5-7 步说明“识别 → 参考 → 视觉决策 → 实现 → 浏览器检查 → 选择性采纳 → 交付”。

- [ ] **Step 5: 添加前置条件、风险和排错**

  写明 `SKILL.md` Agent、Node/npx、本地预览服务等条件；加入至少六条 Troubleshooting，覆盖发现失败、预览打不开、外部参考不可访问、截图时机、证据边界和生产部署差异。

### Task 3: 完善英文区和公开身份检查

**Files:**
- Modify: `README.md`

- [ ] **Step 1: 重写英文区为独立摘要**

  英文区提供价值主张、安装命令、五项核心能力、证据边界和 License；不做逐句翻译，不加入第三方个人姓名、Profile、社交链接或推荐语。

- [ ] **Step 2: 写入 Kang 作者说明**

  只保留 Kang 作为创建者和维护者；不放其他人的姓名、头像、二维码、个人简介、社交账号或致谢文案。

- [ ] **Step 3: 做全仓库公开身份扫描**

  运行：

  ```bash
  rg -n -i "乔木|qiaomu|joeseesun|向阳|个人简介|公众号|打赏|二维码|avatar|profile" README.md docs/assets SKILL.md agents LICENSE
  ```

  预期：没有第三方个人身份命中；`profile` 仅在明确属于通用 UI 术语时允许，作者区必须只出现 Kang。

### Task 4: Markdown、Skill 结构与公开发现验证

**Files:**
- Modify: `README.md`（仅处理验证发现的问题）

- [ ] **Step 1: 检查 Markdown 格式和链接**

  运行：

  ```bash
  git diff --check
  rg -n "https?://|\]\(" README.md
  ```

  预期：无空白错误；每个链接指向仓库、可访问的案例页面或明确的本地/待验证说明，不出现私有路径。

- [ ] **Step 2: 运行仓库已有验证**

  运行：

  ```bash
  node evals/validate_skill.mjs
  ```

  预期：现有 Skill 规则、版本和触发相关检查保持通过；README 改版不能改变 `SKILL.md` 的校验结果。

- [ ] **Step 3: 验证公开 Skill 发现**

  运行：

  ```bash
  env npm_config_cache=/tmp/kang-readme-npm-cache npx --yes skills add KanG-ciyuan/kang-frontend-standard --list
  ```

  预期：输出 `kang-frontend-standard`；完整隔离安装若未执行，README 只写“公开发现已验证”，不写“隔离安装已验证”。

- [ ] **Step 4: 检查最终改动边界**

  运行：

  ```bash
  git status --short
  git diff --stat
  git diff -- README.md
  ```

  预期：只包含 README、公开案例素材、素材说明和必要的文档计划；没有 `.env`、认证文件、用户个人隐私或无关源代码变更。

- [ ] **Step 5: 提交本地 README 改版**

  ```bash
  git add README.md docs/assets/cases docs/superpowers
  git commit -m "docs: rewrite frontend standard README"
  ```

  本计划不包含 GitHub 推送、PR、Release 或远端作者资料修改；这些动作必须另行确认。
