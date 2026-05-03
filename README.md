# @hitszosa/ui

面向 Astro 的 HITSZ OSA 共享 UI 包，提供 OSA logo 资产、Tailwind 主题 token、共享主题样式、客户端主题逻辑，以及可复用的 Astro 组件。

## 安装

```bash
bun add @hitszosa/ui
```

当前已发布至 [npm](https://www.npmjs.com/package/@hitszosa/ui)。

## Astro 接入

在全局样式中引入共享 CSS：

```css
@import 'tailwindcss';
@config '@hitszosa/ui/tailwind/preset';
@source '../../node_modules/@hitszosa/ui/dist/components';
@import '@hitszosa/ui/styles/theme.css';
```

`@source` 是 Tailwind CSS v4 必需的配置，因为 `node_modules` 默认不会被扫描。

如果你的全局样式文件不在 `src/styles/` 下，请按实际目录调整相对路径。

## 主题初始化

在根 `<html>` 元素上添加主题配置：

```astro
<html
  lang="zh"
  data-default-theme-mode="system"
  data-theme-storage-key="theme-preference"
>
</html>
```

然后在 layout 的 `<head>` 中引入共享初始化脚本：

```astro
<script>
  import '@hitszosa/ui/client/theme-init'
</script>
```

`data-default-theme-mode` 支持：

- `light`
- `dark`
- `system`

如果省略或填写了无效值，会默认回退到 `system`。

## 组件

```astro
---
import { ThemeToggle } from '@hitszosa/ui'
---

<ThemeToggle size="md" />
```

`ThemeToggle` 支持以下参数：

- `size`: `sm | md | lg`
- `defaultMode`: `light | dark | system`
- `storageKey`: localStorage key
- `class`: 外层包装类名

## 资产

```astro
---
import { osaLogoPub } from '@hitszosa/ui'
---

<img src={osaLogoPub.src} alt={osaLogoPub.alt} />
```

当前可用的 logo metadata 导出：

- `osaLogoDefault`
- `osaLogoMono`
- `osaLogoPub`
- `osaLogoAlt`
- `osaLogoVtuber`
- `osaLogoOld`
- `osaLogo01`

## 导出入口

- `@hitszosa/ui`
- `@hitszosa/ui/client/theme`
- `@hitszosa/ui/client/theme-init`
- `@hitszosa/ui/tailwind/preset`
- `@hitszosa/ui/styles/theme.css`
- `@hitszosa/ui/components/*`
- `@hitszosa/ui/assets/*`

## 开发

```bash
bun install
bun run build
```

运行本地 preview：

```bash
cd preview
bun install
bun run build
bun run dev
```

## 发布前检查

先确认你已经登录 npm 官方源，并且拥有 `hitszosa` 组织的发布权限：

```bash
npm login
npm whoami
npm org ls hitszosa
```

检查产物与打包内容：

```bash
bun run build
bun pm pack --dry-run
```

## 发布

```bash
bun publish
```
