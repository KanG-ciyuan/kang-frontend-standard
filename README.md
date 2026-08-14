# Kang Frontend Standard

[中文](#中文) | [English](#english)

## 中文

一套面向 AI 编程助手的通用前端设计与交付标准。它适用于首次开发、重构和持续迭代，目标是在不限定框架、页面类型或固定视觉风格的前提下，提高前端页面的视觉质量、结构清晰度、交互完整性和工程可靠性。

### 它解决什么问题

- 在大幅设计任务中先探索并确认视觉方向，减少开发完成后反复推翻。
- 借鉴经过实际检查的成熟产品、开源组件和设计系统，避免无依据地重复造轮子。
- 根据产品目标建立字体、颜色、间距、组件和动态系统，而不是套用固定模板。
- 以现有页面为有效基线，选择性保留、采纳或拒绝改动，不为了重构而强制更换整套视觉风格。
- 使用相同内容、素材、视口和页面深度进行完整页面对比，避免缩略拼盘或比较工具干扰判断。
- 覆盖响应式、无障碍、性能、状态设计、测试、部署和迭代记录。
- 区分概念、原型、已测试实现和生产能力，保持交付证据真实。

### 适用场景

- 网站、产品页、营销页和作品集
- Web 应用、后台、仪表盘和表单流程
- AI 产品、数据工具和交互式体验
- 新项目设计、现有页面重构以及多轮视觉优化

### 安装

将仓库克隆到 Codex Skills 目录：

```bash
git clone https://github.com/KanG-ciyuan/kang-frontend-standard.git ~/.codex/skills/kang-frontend-standard
```

其他支持 `SKILL.md` 的智能体工具，可以将整个仓库放入其个人 Skills 目录。具体目录以对应工具的文档为准。

### 使用

在前端任务中直接调用：

```text
Use $kang-frontend-standard to design and implement this frontend.
```

也可以用自然语言提出要求，例如：

```text
先使用 kang-frontend-standard 为这个产品生成 4 套全尺寸视觉方向，我选定后再实现。
```

### 仓库结构

```text
SKILL.md                 核心规则与执行流程
agents/openai.yaml       Codex 展示与默认调用元数据
evals/trigger_cases.json 触发场景评测用例
evals/validate_skill.mjs 版本与核心规则一致性检查
LICENSE                  MIT 许可证
```

当前版本：`v0.5.0`。该版本已通过装修咨询前端和业务案例集两类真实项目测试，新增选择性优化、公平前后对比和改动采纳规则。

## English

A general frontend design and delivery standard for AI coding agents. It supports first-time builds, redesigns, refactors, and continued iteration without prescribing a framework, page category, font, palette, or fixed layout.

### What it covers

- Visual-direction exploration before substantial implementation
- Reference-led reuse of inspected products, open-source components, and design systems
- Context-specific typography, color, spacing, component, and motion decisions
- Selective improvement that preserves proven strengths instead of forcing a full visual replacement
- Fair full-page comparison using equivalent content, assets, viewports, and page depth
- Responsive behavior, accessibility, performance, states, testing, deployment, and iteration evidence
- Honest boundaries between concepts, prototypes, tested implementations, and production capability

### Install for Codex

```bash
git clone https://github.com/KanG-ciyuan/kang-frontend-standard.git ~/.codex/skills/kang-frontend-standard
```

For other agents that support `SKILL.md`, place the repository in the tool's personal Skills directory.

### Invoke

```text
Use $kang-frontend-standard to design and implement this frontend.
```

Current release: `v0.5.0`. Licensed under the MIT License.
