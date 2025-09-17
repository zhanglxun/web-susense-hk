import { Card, CardContent } from '@/components/ui/Card';

const highlights = [
  {
    number: '2019',
    title: '成立年份',
    description: '自2019年成立以来，我们专注于数字化转型服务，积累了丰富的行业经验',
    icon: '🚀'
  },
  {
    number: '20+',
    title: '核心团队',
    description: '由资深技术专家和设计师组成的专业团队，平均从业经验8年以上',
    icon: '👥'
  },
  {
    number: '100+',
    title: '成功项目',
    description: '为金融、餐饮、教育、医疗等多个行业客户提供专业解决方案',
    icon: '🏆'
  },
  {
    number: '150%',
    title: '平均提升',
    description: '通过我们的服务，客户业务效率平均提升150%，用户满意度显著改善',
    icon: '📈'
  }
];

export function CompanyHighlights() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">
            专业团队 卓越成果
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            深耕行业多年，我们深知如何将技术转化为商业价值
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <Card key={index} variant="white" className="text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="py-8">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <div className="text-4xl font-bold text-primary-orange mb-3">
                  {highlight.number}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-text-primary">
                  {highlight.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 为什么选择我们 */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-text-primary">
              为什么选择我们？
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              我们不仅提供技术服务，更致力于成为您数字化转型路上的可靠伙伴
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="light-green" className="text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="py-8">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  🎯
                </div>
                <h4 className="text-xl font-semibold mb-3 text-green-800">
                  专业专注
                </h4>
                <p className="text-green-600 text-sm leading-relaxed">
                  深耕金融科技领域，对行业需求有深度理解，提供专业的技术解决方案
                </p>
              </CardContent>
            </Card>

            <Card variant="light-green" className="text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="py-8">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  ⚡
                </div>
                <h4 className="text-xl font-semibold mb-3 text-green-800">
                  高效交付
                </h4>
                <p className="text-green-600 text-sm leading-relaxed">
                  敏捷开发流程，快速响应客户需求变化，确保项目按时高质量交付
                </p>
              </CardContent>
            </Card>

            <Card variant="light-green" className="text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="py-8">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  🛡️
                </div>
                <h4 className="text-xl font-semibold mb-3 text-green-800">
                  质量保证
                </h4>
                <p className="text-green-600 text-sm leading-relaxed">
                  严格的质量控制体系，完善的测试流程，确保项目成功交付和稳定运行
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
