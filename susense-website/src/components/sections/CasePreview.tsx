'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CaseStudy } from '@/types';

interface CasePreviewProps {
  cases: CaseStudy[];
}

export function CasePreview({ cases }: CasePreviewProps) {
  const [activeTab, setActiveTab] = useState('all');
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // 按行业分类案例
  const casesByIndustry = {
    all: cases.filter(caseItem => caseItem.featured),
    fintech: cases.filter(caseItem => caseItem.industry === '金融科技'),
    system: cases.filter(caseItem => caseItem.industry === '系统开发'),
    education: cases.filter(caseItem => caseItem.industry === '数字化转型'),
  };

  const currentCases = casesByIndustry[activeTab as keyof typeof casesByIndustry] || casesByIndustry.all;
  const slidesPerView = 3; // 每页显示3个案例
  const totalSlides = Math.ceil(currentCases.length / slidesPerView);

  // 自动轮播
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentSlideCases = () => {
    const start = currentSlide * slidesPerView;
    return currentCases.slice(start, start + slidesPerView);
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">
            成功案例展示
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            我们为各行各业的客户提供专业的数字化转型解决方案，助力企业实现业务增长
          </p>
        </div>

        {/* Tab选项卡 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { key: 'all', label: '全部案例', count: casesByIndustry.all.length },
            { key: 'fintech', label: '金融科技', count: casesByIndustry.fintech.length },
            { key: 'system', label: '系统开发', count: casesByIndustry.system.length },
            { key: 'education', label: '数字化转型', count: casesByIndustry.education.length },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key);
                setCurrentSlide(0);
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.key
                  ? 'bg-orange-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 hover:bg-orange-50 hover:text-orange-600 border border-gray-200'
              }`}
            >
              {tab.label}
              <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                activeTab === tab.key
                  ? 'bg-white/20 text-white'
                  : 'bg-orange-100 text-orange-600'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* 案例轮播区域 */}
        <div className="relative">
          {/* 轮播容器 */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }, (_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentCases
                      .slice(slideIndex * slidesPerView, (slideIndex + 1) * slidesPerView)
                      .map((caseStudy) => (
                        <Card key={caseStudy.id} variant="white" className="group hover:shadow-2xl transition-all duration-300 overflow-hidden">
                          {/* 案例图片区域 */}
                          <div className="relative h-48 bg-gradient-to-br from-orange-100 to-orange-200 overflow-hidden">
                            {/* 预留图片位置 */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="text-center">
                                <div className="text-6xl mb-4 opacity-60">
                                  {caseStudy.industry === '金融科技' ? '🏦' : 
                                   caseStudy.industry === '系统开发' ? '🍽️' : 
                                   caseStudy.industry === '数字化转型' ? '🎓' : '💼'}
                                </div>
                                <div className="text-orange-600 font-semibold text-lg">
                                  {caseStudy.industry}案例
                                </div>
                              </div>
                            </div>
                            {/* 项目标签 */}
                            <div className="absolute top-4 left-4">
                              <span className="text-sm font-medium text-white bg-orange-500 px-3 py-1 rounded-full shadow-lg">
                                {caseStudy.industry}
                              </span>
                            </div>
                            <div className="absolute top-4 right-4">
                              <span className="text-sm font-medium text-white bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full">
                                {caseStudy.duration}
                              </span>
                            </div>
                          </div>
                          
                          <CardHeader className="pb-4">
                            <CardTitle className="text-xl group-hover:text-primary-orange transition-colors duration-200 mb-2">
                              {caseStudy.title}
                            </CardTitle>
                            <CardDescription className="text-sm font-medium text-gray-600">
                              {caseStudy.client}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <p className="text-text-secondary line-clamp-3 leading-relaxed">
                              {caseStudy.description}
                            </p>
                            
                            {/* 成果展示 */}
                            <div className="space-y-3">
                              {caseStudy.results.slice(0, 2).map((result, index) => (
                                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                  <span className="text-sm text-text-secondary font-medium">
                                    {result.metric}
                                  </span>
                                  <span className="text-lg font-bold text-primary-orange">
                                    {result.value}
                                  </span>
                                </div>
                              ))}
                            </div>

                            {/* 技术标签 */}
                            <div className="flex flex-wrap gap-2">
                              {caseStudy.technologies.slice(0, 3).map((tech, index) => (
                                <span
                                  key={index}
                                  className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                              {caseStudy.technologies.length > 3 && (
                                <span className="text-xs text-gray-500 px-3 py-1">
                                  +{caseStudy.technologies.length - 3} 更多
                                </span>
                              )}
                            </div>

                            {/* 客户证言 */}
                            {caseStudy.testimonial && (
                              <div className="pt-4 border-t border-gray-100">
                                <div className="flex items-start space-x-3">
                                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                                    <span className="text-orange-600 font-bold text-sm">
                                      {caseStudy.testimonial.author.charAt(0)}
                                    </span>
                                  </div>
                                  <div className="flex-1">
                                    <p className="text-sm text-gray-600 italic mb-2">
                                      "{caseStudy.testimonial.content}"
                                    </p>
                                    <div className="text-xs text-gray-500">
                                      <span className="font-medium">{caseStudy.testimonial.author}</span>
                                      <span className="mx-1">·</span>
                                      <span>{caseStudy.testimonial.position}</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}

                            <Button variant="secondary" size="sm" className="w-full mt-4 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                              查看详情
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 轮播控制按钮 */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-300 z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* 轮播指示器 */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-orange-500 scale-125'
                      : 'bg-gray-300 hover:bg-orange-300'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* 查看更多按钮 */}
        <div className="text-center mt-16">
          <Link href="/cases">
            <Button variant="primary" size="lg" className="px-8 py-4 text-lg font-semibold">
              查看更多案例
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
