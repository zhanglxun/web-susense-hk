import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CaseStudy } from '@/types';

interface CasePreviewProps {
  cases: CaseStudy[];
}

export function CasePreview({ cases }: CasePreviewProps) {
  // 只显示精选案例
  const featuredCases = cases.filter(caseItem => caseItem.featured).slice(0, 3);

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            成功案例展示
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            我们为各行各业的客户提供专业的数字化转型解决方案，助力企业实现业务增长
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCases.map((caseStudy) => (
            <Card key={caseStudy.id} variant="white" className="group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-primary-orange bg-orange-100 px-3 py-1 rounded-full">
                    {caseStudy.industry}
                  </span>
                  <span className="text-sm text-text-secondary">
                    {caseStudy.duration}
                  </span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary-orange transition-colors duration-200">
                  {caseStudy.title}
                </CardTitle>
                <CardDescription className="text-sm">
                  {caseStudy.client}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-text-secondary mb-6 line-clamp-3">
                  {caseStudy.description}
                </p>
                
                {/* 成果展示 */}
                <div className="space-y-3 mb-6">
                  {caseStudy.results.slice(0, 2).map((result, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-text-secondary">
                        {result.metric}
                      </span>
                      <span className="text-lg font-semibold text-primary-orange">
                        {result.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 技术标签 */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {caseStudy.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {caseStudy.technologies.length > 3 && (
                    <span className="text-xs text-gray-500">
                      +{caseStudy.technologies.length - 3} 更多
                    </span>
                  )}
                </div>

                <Button variant="secondary" size="sm" className="w-full">
                  查看详情
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 查看更多按钮 */}
        <div className="text-center">
          <Link href="/cases">
            <Button variant="primary" size="lg">
              查看更多案例
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
