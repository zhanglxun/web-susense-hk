import { Card, CardContent } from '@/components/ui/Card';

const highlights = [
  {
    title: '数字化咨询服务',
    description: '企业数字化转型评估、战略规划制定、技术选型建议，为企业量身定制数字化转型方案',
    icon: '/images/services/messy_1b.svg',
    variant: 'white'
  },
  {
    title: '软件研发/系统设计',
    description: '定制化软件开发、系统架构设计、技术栈选择，运用先进技术打造高效稳定的软件系统',
    icon: '/images/services/result_4b.svg',
    variant: 'white'
  },
  {
    title: '用户体验设计',
    description: 'UI/UX设计服务、用户研究分析、交互设计优化，创造直观友好的用户界面',
    icon: '/images/services/audit-1.svg',
    variant: 'gray'
  },
  {
    title: 'AI应用开发',
    description: 'AI应用咨询、Agent开发服务、RAG应用开发，提供企业AI应用咨询和培训服务',
    icon: '/images/services/messy_4b.svg',
    variant: 'gray'
  }
];

export function CompanyHighlights() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            四大核心业务服务
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            为企业提供全方位的数字化转型解决方案，助力企业实现智能化升级
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card 
              key={index} 
              variant={highlight.variant === 'gray' ? 'gray' : 'white'} 
              className="text-center group hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="py-4 px-3">
                <div className="text-center">
                  <div className="mb-4">
                    <img 
                      src={highlight.icon} 
                      alt={highlight.title}
                      className="w-12 h-12 mx-auto"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-text-primary">
                    {highlight.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 为什么选择我们 */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="section-title mb-6">
              为什么选择我们
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              我们不仅提供技术服务，更致力于成为您数字化转型路上的可靠伙伴
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card 
              variant="gray" 
              className="text-center group hover:shadow-lg transition-shadow duration-300"
              style={{ backgroundColor: 'rgb(212, 218, 223)' }}
            >
              <CardContent className="py-6 px-4">
                <div className="mb-4">
                  <img 
                    src="/images/services/audit-1.svg" 
                    alt="深度定制服务"
                    className="w-12 h-12 mx-auto"
                  />
                </div>
                <h4 className="text-xl font-bold mb-4 text-gray-800">
                  深度定制服务
                </h4>
                <ul className="text-left space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    针对企业实际需求，提供个性化解决方案
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    拒绝模板化服务，每个项目都是量身定制
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    快速响应，24小时内给出初步方案
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    直击核心问题，避免无效沟通
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="dark-gray" className="text-center group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="py-6 px-4">
                <div className="mb-4">
                  <img 
                    src="/images/services/audit-2w.svg" 
                    alt="实战经验丰富"
                    className="w-12 h-12 mx-auto"
                  />
                </div>
                <h4 className="text-xl font-bold mb-4 text-white">
                  实战经验丰富
                </h4>
                <ul className="text-left space-y-2 text-sm text-gray-200">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    团队平均8年以上行业经验
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    服务客户覆盖金融、电商、制造等多个领域
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    提供可落地的具体实施方案
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    拒绝空谈理论，专注实际效果
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card variant="dark-blue" className="text-center group hover:shadow-lg transition-shadow duration-300">
              <CardContent className="py-6 px-4">
                <div className="mb-4">
                  <img 
                    src="/images/services/audit-3.svg" 
                    alt="成果立即可用"
                    className="w-12 h-12 mx-auto"
                  />
                </div>
                <h4 className="text-xl font-bold mb-4 text-white">
                  成果立即可用
                </h4>
                <ul className="text-left space-y-2 text-sm text-gray-200">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    所有方案都经过实际项目验证
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    提供详细的技术文档和操作指南
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    包含优先级排序，确保实施效率
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    快速交付，立即可投入生产使用
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
