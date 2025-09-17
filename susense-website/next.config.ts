import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静态导出配置
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  // 图片优化 - 静态导出时需要禁用优化
  images: {
    unoptimized: true,
  },
  
  // 性能优化
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  // 压缩优化
  compress: true,
  poweredByHeader: false,
  
  // 静态生成优化
  generateEtags: false,
  
  // 资源路径配置 - 适配 OSS
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
};

export default nextConfig;
