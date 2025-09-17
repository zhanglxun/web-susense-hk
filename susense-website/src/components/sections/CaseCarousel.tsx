'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  description: string;
  image: string;
  featured: boolean;
  createdAt: string;
}

interface CaseCarouselProps {
  cases: CaseStudy[];
}

export function CaseCarousel({ cases }: CaseCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // 自动播放功能（可选）
  useEffect(() => {
    const timer = setInterval(() => {
      if (!isTransitioning) {
        nextCase();
      }
    }, 5000); // 5秒自动切换

    return () => clearInterval(timer);
  }, [currentIndex, isTransitioning]);

  const nextCase = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % cases.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const prevCase = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const goToCase = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  // 键盘事件处理
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevCase();
      } else if (e.key === 'ArrowRight') {
        nextCase();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTransitioning]);

  if (!cases || cases.length === 0) {
    return (
      <div className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-6xl mb-4">📁</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">暂无案例数据</h2>
          <p className="text-gray-600 mb-8">我们正在整理更多成功案例，敬请期待...</p>
          <div className="space-x-4">
            <Button variant="primary" size="lg">
              联系我们
            </Button>
            <Button variant="secondary" size="lg">
              查看服务
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const currentCase = cases[currentIndex];

  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-12">
          <h2 className="section-title mb-6">
            成功案例展示
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            为各行各业的知名企业提供专业的数字化转型服务，用成果证明我们的专业能力
          </p>
        </div>

        {/* 案例展示区域 */}
        <div className="relative">
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-2">
              {/* 案例图片 */}
              <div className="relative">
                <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={currentCase.image}
                    alt={currentCase.title}
                    className="w-full h-full object-cover transition-opacity duration-300"
                    style={{ opacity: isTransitioning ? 0.7 : 1 }}
                  />
                </div>
              </div>

              {/* 案例内容 */}
              <div className="flex flex-col justify-center space-y-4">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-3">
                    {currentCase.title}
                  </h3>
                  <div className="inline-block">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {currentCase.industry}
                    </span>
                  </div>
                </div>

                <div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {currentCase.description}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* 轮播控制 */}
          <div className="flex items-center justify-between mt-8">
            {/* 上一页按钮 */}
            <button
              onClick={prevCase}
              disabled={isTransitioning}
              className="flex items-center justify-center w-12 h-12 bg-white border-2 border-gray-200 rounded-full hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* 页码和指示器 */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                {currentIndex + 1} / {cases.length}
              </span>
              <div className="flex space-x-2">
                {cases.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToCase(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-blue-500'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* 下一页按钮 */}
            <button
              onClick={nextCase}
              disabled={isTransitioning}
              className="flex items-center justify-center w-12 h-12 bg-white border-2 border-gray-200 rounded-full hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
