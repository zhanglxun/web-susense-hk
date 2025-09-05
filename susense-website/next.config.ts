import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 图片优化
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 768, 1024, 1280, 1920],
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
};

export default nextConfig;
