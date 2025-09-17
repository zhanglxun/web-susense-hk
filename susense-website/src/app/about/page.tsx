import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const teamMembers = [
  {
    name: '张先生',
    position: '创始人 & CEO',
    description: '10年金融科技行业经验，专注于数字化转型和产品创新',
    avatar: '👨‍💼',
    expertise: ['产品战略', '团队管理', '业务拓展']
  },
  {
    name: '技术团队',
    position: '核心开发团队',
    description: '资深全栈工程师，精通前端、后端和移动端开发',
    avatar: '👨‍💻',
    expertise: ['全栈开发', '系统架构', '技术选型']
  },
  {
    name: '设计团队',
    position: 'UI/UX设计师',
    description: '专业的设计团队，专注于用户体验和视觉设计',
    avatar: '👩‍🎨',
    expertise: ['UI设计', 'UX研究', '交互设计']
  },
  {
    name: '项目管理',
    position: '项目经理',
    description: '经验丰富的项目管理专家，确保项目按时高质量交付',
    avatar: '👨‍💼',
    expertise: ['项目管理', '质量控制', '客户沟通']
  }
];

const milestones = [
  {
    year: '2019',
    title: '公司成立',
    description: '香港速睿森视科技有限公司正式成立，专注于数字化转型服务',
    icon: '🚀'
  },
  {
    year: '2020',
    title: '团队扩张',
    description: '核心团队组建完成，开始承接大型金融客户项目',
    icon: '👥'
  },
  {
    year: '2021',
    title: '技术突破',
    description: '完成首个大型金融APP改版项目，获得客户高度认可',
    icon: '💡'
  },
  {
    year: '2022',
    title: '业务拓展',
    description: '服务范围扩展至餐饮、教育、医疗等多个行业',
    icon: '📈'
  },
  {
    year: '2023',
    title: '国际布局',
    description: '开始面向国际市场，为海外客户提供专业服务',
    icon: '🌍'
  },
  {
    year: '2024',
    title: '持续创新',
    description: '持续技术创新，为客户提供更优质的数字化解决方案',
    icon: '🎯'
  }
];

const values = [
  {
    title: '用户体验优先',
    description: '始终将用户体验放在首位，通过深入的用户研究和设计优化，创造真正有价值的产品',
    icon: '❤️'
  },
  {
    title: '客户服务优先',
    description: '以客户成功为目标，提供7x24小时技术支持，确保项目顺利实施和稳定运行',
    icon: '🤝'
  },
  {
    title: '持续创新',
    description: '紧跟技术发展趋势，不断学习和应用新技术，为客户提供前沿的解决方案',
    icon: '💡'
  },
  {
    title: '专业可靠',
    description: '严格的质量控制体系，完善的项目管理流程，确保每个项目都能高质量交付',
    icon: '🛡️'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: 'hsl(19.37deg 91.3% 59.41%)' }}></div>
        
        {/* 装饰性几何图形 */}
        <div className="absolute top-12 left-6 w-48 h-48 bg-white/15 rounded-full blur-3xl"></div>
        <div className="absolute top-28 right-12 w-36 h-36 bg-white/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/5 w-52 h-52 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-36 right-1/4 w-40 h-40 bg-white/16 rounded-full blur-2xl"></div>
        
        <div className="relative z-10 pt-32 pb-24 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              关于我们
            </h1>
            <p className="text-2xl md:text-3xl text-white/95 mb-8 font-semibold">
              专业的数字化转型合作伙伴
            </p>
            <div className="w-32 h-1 bg-white/40 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              自2019年成立以来，我们专注于为中小企业和大型金融客户提供专业的数字化转型服务。
              我们拥有丰富的行业经验，致力于通过设计驱动和科技赋能，帮助客户实现业务增长。
            </p>
          </div>
        </div>
      </section>

      {/* 公司介绍 */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                香港速睿森视科技有限公司
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Susense Technology Co., Limited 是一家专注于数字化转型的科技公司。
                我们致力于为全球客户提供专业的系统规划设计、UI/UX设计、产品规划咨询和运营活动策划服务。
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                我们的团队由资深技术专家和设计师组成，平均从业经验8年以上。
                我们不仅提供技术服务，更致力于成为您数字化转型路上的可靠伙伴。
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">2019</div>
                  <div className="text-gray-600">成立年份</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">20+</div>
                  <div className="text-gray-600">核心团队</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">100+</div>
                  <div className="text-gray-600">成功项目</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">98%</div>
                  <div className="text-gray-600">客户满意度</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-8">
                <div className="text-6xl mb-4">🏢</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">我们的办公地址</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <span className="text-orange-500 mr-3">📍</span>
                    <div>
                      <div className="font-semibold">香港总部</div>
                      <div className="text-sm">Room 1011, Cloud One, Tung Chau Street</div>
                      <div className="text-sm">Tai Kok Tsui, Yau Tsim Mong, Hong Kong</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-500 mr-3">📧</span>
                    <div>
                      <div className="font-semibold">联系邮箱</div>
                      <div className="text-sm">zhanglixun@susense.cn</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-orange-500 mr-3">🌐</span>
                    <div>
                      <div className="font-semibold">官方网站</div>
                      <div className="text-sm">susense.hk</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">发展历程</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              从2019年成立至今，我们不断成长和进步，为客户创造更多价值
            </p>
          </div>
          
          <div className="relative">
            {/* 时间线 */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-orange-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card variant="white" className="group hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="text-3xl mr-3">{milestone.icon}</div>
                          <div>
                            <div className="text-2xl font-bold text-orange-500">{milestone.year}</div>
                            <h3 className="text-xl font-semibold text-gray-800">{milestone.title}</h3>
                          </div>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* 时间线节点 */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 团队介绍 */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">我们的团队</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              由资深专家组成的专业团队，为您提供最优质的服务
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} variant="white" className="text-center group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {member.avatar}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{member.name}</h3>
                  <div className="text-orange-500 font-medium mb-3">{member.position}</div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.description}</p>
                  <div className="space-y-1">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="inline-block bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full mr-1 mb-1">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 核心价值观 */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">我们的价值观</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              这些核心价值观指导着我们的每一个决策和行动
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} variant="light-green" className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start">
                    <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-4 text-green-800">{value.title}</h3>
                      <p className="text-green-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 服务优势 */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">为什么选择我们？</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我们不仅提供技术服务，更致力于成为您数字化转型路上的可靠伙伴
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card variant="white" className="text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">专业专注</h3>
                <p className="text-gray-600 leading-relaxed">
                  深耕金融科技领域，对行业需求有深度理解，提供专业的技术解决方案
                </p>
              </CardContent>
            </Card>

            <Card variant="white" className="text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">高效交付</h3>
                <p className="text-gray-600 leading-relaxed">
                  敏捷开发流程，快速响应客户需求变化，确保项目按时高质量交付
                </p>
              </CardContent>
            </Card>

            <Card variant="white" className="text-center group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🛡️</div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">质量保证</h3>
                <p className="text-gray-600 leading-relaxed">
                  严格的质量控制体系，完善的测试流程，确保项目成功交付和稳定运行
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">准备开始您的数字化转型之旅？</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            联系我们，让我们的专业团队为您提供定制化的解决方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                variant="black" 
                size="lg" 
                className="px-8 py-4 text-lg font-semibold"
              >
                立即咨询
              </Button>
            </Link>
            <Link href="/">
              <Button 
                variant="secondary" 
                size="lg" 
                className="px-8 py-4 text-lg font-semibold bg-white/15 border-2 border-white/30 text-white hover:bg-white hover:text-orange-600"
              >
                查看案例
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
