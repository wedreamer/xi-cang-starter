# xi-cang-starter

NestJS TypeScript 启动模版 (Starter Repository)。

## 📦 环境准备

本项目对开发环境有严格的版本要求，以确保依赖兼容性。

- **Node.js**: >= 22.x (推荐 22.4.0+)
- **Package Manager**: pnpm

### 初始化环境

建议使用 [nvm](https://github.com/nvm-sh/nvm) 管理 Node 版本。

```bash
# 1. 切换到项目指定的 Node 版本 (读取 .nvmrc)
nvm use
# 如果未安装对应版本，可运行: nvm install

# 2. 启用 Corepack 并激活 pnpm
corepack enable
corepack prepare pnpm@latest --activate
```

## 🛠️ 安装与运行

```bash
# 安装依赖
# (安装后会自动触发 prepare 脚本配置 husky git hooks)
pnpm install

# 启动开发环境 (Watch Mode)
pnpm start:dev

# 启动调试模式 (Debug Mode)
pnpm start:debug

# 构建并启动生产环境
pnpm build
pnpm start:prod
```

## 🧪 测试

本项目包含单元测试和端到端 (E2E) 测试。

```bash
# 运行单元测试
pnpm test

# 监听模式运行测试
pnpm test:watch

# 生成测试覆盖率报告
pnpm test:cov

# 运行 E2E 测试
pnpm test:e2e
```

## 🎨 代码规范与工作流

为了保持代码质量，项目中集成了多种静态分析工具。

### 静态检查

```bash
# 格式化代码 (Prettier)
pnpm format

# 代码质量检查与自动修复 (ESLint)
pnpm lint

# 单词拼写检查 (CSpell)
pnpm spellcheck
```

### 提交规范 (Git Commit)

本项目配置了 **Husky** 和 **Commitlint**，在提交代码时会自动验证 Commit Message。请严格遵循 [Conventional Commits](https://www.conventionalcommits.org/zh-hans/) 规范。

**格式**: `<type>(<scope>): <subject>`

**常用类型 (Type):**

- `feat`: 新功能
- `fix`: 修复 Bug
- `docs`: 文档变更
- `style`: 代码格式调整（不影响逻辑）
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建/依赖/工具变动

**示例:**

- ✅ `feat(auth): add login controller`
- ✅ `fix: resolve memory leak in scheduler`
- ❌ `update code` (描述过于模糊)
- ❌ `✨ feat: ...` (**请勿**使用 Gitmoji，会导致 Commitlint 校验失败)
