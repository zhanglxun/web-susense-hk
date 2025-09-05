// 性能监控工具

export interface PerformanceMetrics {
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  fcp?: number; // First Contentful Paint
  ttfb?: number; // Time to First Byte
}

// Web Vitals 监控
export function monitorWebVitals(callback: (metrics: PerformanceMetrics) => void) {
  if (typeof window === 'undefined') return;

  const metrics: PerformanceMetrics = {};

  // 监控 LCP (Largest Contentful Paint)
  if ('PerformanceObserver' in window) {
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry & { startTime: number };
        metrics.lcp = lastEntry.startTime;
        callback(metrics);
      });
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch {
      console.warn('LCP monitoring not supported');
    }

    // 监控 FID (First Input Delay)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const fidEntry = entry as PerformanceEntry & { processingStart: number; startTime: number };
          metrics.fid = fidEntry.processingStart - fidEntry.startTime;
          callback(metrics);
        });
      });
      fidObserver.observe({ type: 'first-input', buffered: true });
    } catch {
      console.warn('FID monitoring not supported');
    }

    // 监控 CLS (Cumulative Layout Shift)
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const clsEntry = entry as PerformanceEntry & { value: number; hadRecentInput: boolean };
          if (!clsEntry.hadRecentInput) {
            clsValue += clsEntry.value;
            metrics.cls = clsValue;
            callback(metrics);
          }
        });
      });
      clsObserver.observe({ type: 'layout-shift', buffered: true });
    } catch {
      console.warn('CLS monitoring not supported');
    }
  }

  // 监控页面加载时间
  window.addEventListener('load', () => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      metrics.fcp = navigation.responseStart - navigation.fetchStart;
      metrics.ttfb = navigation.responseStart - navigation.requestStart;
      callback(metrics);
    }
  });
}

// 检查是否达到200ms目标
export function checkPerformanceTarget(metrics: PerformanceMetrics): boolean {
  const { lcp, fcp } = metrics;
  
  // 检查首屏加载是否在200ms内
  if (fcp && fcp > 200) {
    console.warn(`FCP (${fcp}ms) exceeds 200ms target`);
    return false;
  }
  
  if (lcp && lcp > 200) {
    console.warn(`LCP (${lcp}ms) exceeds 200ms target`);
    return false;
  }
  
  return true;
}

// 预加载关键资源
export function preloadCriticalResources() {
  if (typeof window === 'undefined') return;

  // 预加载字体
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.href = '/fonts/system-font.woff2';
  fontLink.as = 'font';
  fontLink.type = 'font/woff2';
  fontLink.crossOrigin = 'anonymous';
  document.head.appendChild(fontLink);

  // DNS预解析
  const dnsLinks = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
  ];

  dnsLinks.forEach(href => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = href;
    document.head.appendChild(link);
  });
}

// 延迟加载非关键资源
export function lazyLoadNonCritical() {
  if (typeof window === 'undefined') return;

  // 延迟加载动画库
  setTimeout(() => {
    import('framer-motion').catch(() => {
      console.warn('Failed to load framer-motion');
    });
  }, 100);
}

// 优化图片加载
export function optimizeImageLoading() {
  if (typeof window === 'undefined') return;

  // 使用 Intersection Observer 实现懒加载
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      }
    });
  });

  // 观察所有懒加载图片
  document.querySelectorAll('img[data-src]').forEach((img) => {
    imageObserver.observe(img);
  });
}