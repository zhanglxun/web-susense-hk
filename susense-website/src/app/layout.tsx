import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FF8C42',
};

export const metadata: Metadata = {
  title: "香港速睿森视科技有限公司 - 金融APP设计与系统开发专家",
  description: "专业的金融APP设计、科技金融解决方案、系统开发和性能优化服务。服务香港及大陆市场，助力企业数字化转型。",
  keywords: ["金融APP设计", "科技金融", "系统开发", "系统性能优化", "软件开发", "香港", "UI/UX设计"],
  authors: [{ name: "香港速睿森视科技有限公司" }],
  creator: "香港速睿森视科技有限公司",
  publisher: "香港速睿森视科技有限公司",
  robots: "index, follow",
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/logo-icon.svg', sizes: '48x48', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.svg',
    apple: '/logo-icon.svg',
  },
  openGraph: {
    type: "website",
    locale: "zh_HK",
    alternateLocale: ["zh_CN", "en_US"],
    siteName: "香港速睿森视科技有限公司",
    title: "香港速睿森视科技 - 金融APP设计与系统开发专家",
    description: "专业的金融APP设计、科技金融解决方案、系统开发和性能优化服务",
    url: "https://susense.hk",
  },
  twitter: {
    card: "summary_large_image",
    title: "香港速睿森视科技 - 金融APP设计与系统开发专家",
    description: "专业的金融APP设计、科技金融解决方案、系统开发和性能优化服务",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-HK">
      <head>
        {/* DNS预解析 */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* 预连接 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* 关键CSS内联 - 在生产环境中应该内联关键CSS */}
        <style dangerouslySetInnerHTML={{
          __html: `
            body { 
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
              background-color: #F8F9FA;
              color: #2a2a2a;
              margin: 0;
              padding: 0;
            }
            .hero-title {
              font-size: 3.5rem;
              font-weight: 800;
              color: white;
              margin-bottom: 1.25rem;
              letter-spacing: -0.025em;
              line-height: 1.1;
            }
          `
        }} />
      </head>
      <body className="antialiased">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        
        {/* 性能监控脚本 */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // 简单的性能监控
              if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
                try {
                  const observer = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    entries.forEach((entry) => {
                      if (entry.entryType === 'largest-contentful-paint') {
                        console.log('LCP:', entry.startTime + 'ms');
                        if (entry.startTime > 200) {
                          console.warn('LCP exceeds 200ms target');
                        }
                      }
                    });
                  });
                  observer.observe({ entryTypes: ['largest-contentful-paint'] });
                } catch (e) {
                  console.warn('Performance monitoring not supported');
                }
              }
            `
          }}
        />
      </body>
    </html>
  );
}
