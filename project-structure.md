# 香港速睿森视科技品牌展示网站 - 简化项目目录结构

## 📁 经典Next.js项目结构 (简化版)

```
susense-website/                    # 项目根目录
├── .kiro/                         # Kiro IDE 配置
│   └── specs/
│       └── brand-showcase-website/
│           ├── requirements.md    # 需求文档
│           ├── design.md         # 设计文档
│           └── tasks.md          # 任务清单
├── public/                        # 静态资源
│   ├── images/                    # 图片文件
│   │   ├── hero.webp             # 首页主图
│   │   ├── cases/                # 案例图片
│   │   ├── team/                 # 团队照片
│   │   └── services/             # 服务图片
│   ├── icons/                     # 图标和favicon
│   ├── logo.svg                   # 公司Logo
│   └── robots.txt                 # SEO文件
├── src/                           # 源代码
│   ├── app/                       # Next.js App Router
│   │   ├── globals.css           # 全局样式
│   │   ├── layout.tsx            # 根布局
│   │   ├── page.tsx              # 首页
│   │   ├── about/page.tsx        # 关于我们
│   │   ├── services/page.tsx     # 服务项目
│   │   ├── cases/page.tsx        # 案例展示
│   │   └── contact/page.tsx      # 联系我们
│   ├── components/                # 组件
│   │   ├── Header.tsx            # 页头
│   │   ├── Footer.tsx            # 页脚
│   │   ├── Hero.tsx              # 首页主视觉
│   │   ├── Services.tsx          # 服务展示
│   │   ├── Cases.tsx             # 案例展示
│   │   ├── Contact.tsx           # 联系表单
│   │   └── ui/                   # 基础组件
│   │       ├── Button.tsx        # 按钮
│   │       ├── Card.tsx          # 卡片
│   │       └── Input.tsx         # 输入框
│   ├── data/                      # JSON数据文件
│   │   ├── cases.json            # 案例数据
│   │   ├── services.json         # 服务数据
│   │   └── company.json          # 公司信息
│   ├── lib/                       # 工具函数
│   │   ├── utils.ts              # 通用工具
│   │   └── data.ts               # 数据加载
│   └── types/                     # 类型定义
│       └── index.ts              # 主要类型
├── .gitignore                     # Git忽略文件
├── .eslintrc.json                 # ESLint配置
├── tailwind.config.ts             # Tailwind配置
├── next.config.js                 # Next.js配置
├── tsconfig.json                  # TypeScript配置
├── package.json                   # 项目依赖
└── README.md                      # 项目说明
```

## 📋 关键目录说明

### � ***核心特点**
- **简洁结构** - 经典Next.js目录，易于理解和维护
- **JSON数据驱动** - `src/data/` 目录管理所有内容数据
- **倪爽风格** - 通过Tailwind配置实现橙色主题设计系统
- **200ms性能** - 通过Next.js静态生成和图片优化实现

### 📊 **JSON数据管理**
```
src/data/
├── cases.json      # 项目案例 (你只需要更新这个文件)
├── services.json   # 服务项目
└── company.json    # 公司基本信息
```

### 🎨 **倪爽风格实现**
- `src/app/globals.css` - 包含倪爽风格的CSS类
- `tailwind.config.ts` - 橙色主题配色系统
- `src/components/ui/` - 卡片、按钮等基础组件

### ⚡ **性能优化策略**
- **静态生成** - Next.js自动优化
- **图片优化** - WebP格式 + Next.js Image组件
- **代码分割** - 按页面自动分割
- **简单配置** - 在next.config.js中设置

## 🔧 **关键配置文件**

### package.json 依赖
```json
{
  "dependencies": {
    "next": "14.0.0",
    "react": "18.0.0",
    "tailwindcss": "^3.0.0",
    "framer-motion": "^10.0.0",
    "lucide-react": "^0.300.0"
  }
}
```

### tailwind.config.ts (倪爽风格)
```typescript
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: '#FF8C42',
          'orange-hover': '#FF6B35',
        },
        card: {
          white: '#ffffff',
          'light-green': '#F0FDF4',
          gray: '#F1F5F9',
          'dark-gray': '#64748B',
          'dark-blue': '#1E293B',
        },
        background: '#F8F9FA',
        text: {
          primary: '#2a2a2a',
          secondary: '#666666',
        },
      },
      borderRadius: {
        'card': '16px',
        'button': '12px',
      },
    },
  },
}
```

### next.config.js (性能优化)
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // 静态导出
  images: {
    unoptimized: true,     // 静态导出兼容
  },
  compress: true,          // 启用压缩
  poweredByHeader: false,  // 移除X-Powered-By
}
```

## 🚀 **开发流程**

1. **初始化项目** - `npx create-next-app@latest`
2. **配置Tailwind** - 添加倪爽风格配色
3. **创建JSON数据** - 在`src/data/`目录
4. **开发组件** - 基于设计系统
5. **优化性能** - 静态生成 + 图片优化
6. **部署** - Vercel一键部署

**这个简化版本更适合维护，你觉得怎么样？**