import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { CaseCarousel } from '@/components/sections/CaseCarousel';
import { CompanyHighlights } from '@/components/sections/CompanyHighlights';
import { loadCasesData } from '@/lib/data';

export default async function Home() {
  const cases = await loadCasesData();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden">
        {/* 使用指定的背景颜色 */}
        <div className="absolute inset-0" style={{ backgroundColor: 'hsl(19.37deg 91.3% 59.41%)' }}></div>
        
        {/* 增加更多白色装饰性几何图形 - 散射分布 */}
        <div className="absolute top-12 left-6 w-48 h-48 bg-white/15 rounded-full blur-3xl"></div>
        <div className="absolute top-28 right-12 w-36 h-36 bg-white/20 rounded-full blur-2xl"></div>
        <div className="absolute top-44 left-1/4 w-28 h-28 bg-white/18 rounded-full blur-xl"></div>
        <div className="absolute top-60 right-1/3 w-32 h-32 bg-white/12 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/5 w-52 h-52 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-36 right-1/4 w-40 h-40 bg-white/16 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/25 rounded-full blur-lg transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/3 left-1/6 w-20 h-20 bg-white/22 rounded-full blur-lg"></div>
        <div className="absolute bottom-1/3 right-1/6 w-16 h-16 bg-white/28 rounded-full blur-md"></div>
        
        {/* 更多白色点缀圆形 - 散射分布 */}
        <div className="absolute top-20 right-1/5 w-8 h-8 bg-white/45 rounded-full"></div>
        <div className="absolute top-36 left-1/8 w-6 h-6 bg-white/55 rounded-full"></div>
        <div className="absolute top-52 right-1/8 w-5 h-5 bg-white/50 rounded-full"></div>
        <div className="absolute top-68 left-1/3 w-7 h-7 bg-white/40 rounded-full"></div>
       
        
        {/* 网格背景 */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.08'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative z-10 pt-24 pb-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              {/* 主标题 - 大字号口号语 */}
              <div className="mb-12">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  设计驱动，科技赋能
          </h1>
                <p className="text-2xl md:text-3xl lg:text-4xl text-white/95 mb-8 font-semibold">
                  专业的数字化建设合作伙伴
                </p>
                <div className="w-32 h-1 bg-white/40 mx-auto rounded-full mb-8"></div>
              </div>
              
              {/* CTA按钮组 */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a href="#contact">
                  <Button 
                    variant="black" 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-orange-500/25 transition-all duration-300"
                  >
                    🚀 开始设计咨询
                  </Button>
                </a>
                <a href="#about">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="px-8 py-4 text-lg font-semibold bg-white/15 border-2 border-white/30 text-white hover:bg-white hover:text-orange-600 transition-all duration-300 backdrop-blur-sm"
                  >
                    💡 了解我们
                  </Button>
                </a>
          </div>
          
              {/* 核心数据展示 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="text-center group">
                  <div className="text-5xl font-bold mb-3 text-white group-hover:scale-110 transition-transform duration-300">2019</div>
                  <div className="text-lg text-white/80 font-medium">成立年份</div>
                  <div className="text-sm text-white/60 mt-1">深耕数字化转型</div>
                </div>
                <div className="text-center group">
                  <div className="text-5xl font-bold mb-3 text-white group-hover:scale-110 transition-transform duration-300">20+</div>
                  <div className="text-lg text-white/80 font-medium">核心团队</div>
                  <div className="text-sm text-white/60 mt-1">资深专家团队</div>
                </div>
                <div className="text-center group">
                  <div className="text-5xl font-bold mb-3 text-white group-hover:scale-110 transition-transform duration-300">100+</div>
                  <div className="text-lg text-white/80 font-medium">成功项目</div>
                  <div className="text-sm text-white/60 mt-1">行业领先经验</div>
                </div>
              </div>
            </div>
            
            {/* 信任指标条 */}
            <div className="mt-16 pt-8 border-t border-white/20">
              <div className="flex flex-wrap justify-center items-center gap-8 text-white/70 text-base">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>资深专家团队</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>及时技术支持</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>可靠项目交付</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>免费方案咨询</span>
                </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Highlights Section */}
      <section id="about">
        <CompanyHighlights />
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* 标题区域 */}
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
            专业服务体系
          </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              我们提供从系统规划到产品落地的全栈服务，助力企业实现数字化转型
            </p>
          </div>
          
          {/* 核心服务展示 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* 系统规划设计 */}
            <Card variant="white" className="group hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">💡</div>
                <CardTitle className="text-xl mb-3">系统规划设计</CardTitle>
                <div className="w-12 h-1 bg-orange-400 rounded-full"></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  全方位数字化转型方案，从概念到落地的完整流程
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                    需求分析与架构设计
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                    技术选型与实施规划
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                    风险控制与质量保证
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-sm font-medium text-orange-600">周期: 2-4周</span>
                </div>
              </CardContent>
            </Card>
            
            {/* UI/UX设计服务 */}
            <Card variant="light-green" className="group hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🎨</div>
                <CardTitle className="text-xl mb-3">UI/UX设计服务</CardTitle>
                <div className="w-12 h-1 bg-green-400 rounded-full"></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  金融APP交互设计升级，现代化界面设计
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    用户研究与需求分析
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    交互设计与原型制作
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    视觉设计与规范制定
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-sm font-medium text-green-600">周期: 3-6周</span>
                </div>
              </CardContent>
            </Card>
            
            {/* 产品规划咨询 */}
            <Card variant="gray" className="group hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">📊</div>
                <CardTitle className="text-xl mb-3">产品规划咨询</CardTitle>
                <div className="w-12 h-1 bg-blue-400 rounded-full"></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  产品策略制定，市场需求分析，竞争力提升方案
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    市场调研与竞品分析
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    产品策略与路线图
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    商业模式优化
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <span className="text-sm font-medium text-blue-600">周期: 2-3周</span>
                </div>
              </CardContent>
            </Card>
            
            {/* 运营活动策划 */}
            <Card variant="dark-blue" className="group hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="text-5xl mb-4 opacity-90 group-hover:scale-110 transition-transform duration-300">🚀</div>
                <CardTitle className="text-white text-xl mb-3">运营活动策划</CardTitle>
                <div className="w-12 h-1 bg-white/40 rounded-full"></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-white/90 text-base leading-relaxed">
                  数据驱动的营销活动设计和用户增长策略
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-white/80">
                    <div className="w-2 h-2 bg-white/60 rounded-full mr-2"></div>
                    活动策划与创意设计
                  </div>
                  <div className="flex items-center text-sm text-white/80">
                    <div className="w-2 h-2 bg-white/60 rounded-full mr-2"></div>
                    用户增长与留存策略
                  </div>
                  <div className="flex items-center text-sm text-white/80">
                    <div className="w-2 h-2 bg-white/60 rounded-full mr-2"></div>
                    数据分析与效果优化
                  </div>
                </div>
                <div className="pt-4 border-t border-white/20">
                  <span className="text-sm font-medium text-white/90">周期: 1-2周</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* 服务流程展示 */}
          <div className="mb-16">
            <h2 className="section-title mb-6">
              我们的服务流程
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-300">
                  <span className="text-2xl font-bold text-orange-600">1</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">需求调研</h4>
                <p className="text-gray-600 text-sm">深入了解业务需求和技术现状</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">方案设计</h4>
                <p className="text-gray-600 text-sm">制定详细的技术方案和实施计划</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">原型验证</h4>
                <p className="text-gray-600 text-sm">构建原型验证设计方案可行性</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                  <span className="text-2xl font-bold text-purple-600">4</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">实施交付</h4>
                <p className="text-gray-600 text-sm">项目开发、测试和上线部署</p>
              </div>
            </div>
          </div>
          
          {/* 服务成果展示 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card variant="orange" className="group hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="text-6xl font-extrabold mb-4 group-hover:scale-105 transition-transform duration-300">+150%</div>
                <CardTitle className="text-white text-2xl mb-4">用户活跃度提升</CardTitle>
                <CardDescription className="text-white/90 text-lg leading-relaxed mb-6">
                  通过专业的设计优化和用户体验改进，帮助客户实现显著的业务增长
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-white/80">
                    <div className="w-2 h-2 bg-white/60 rounded-full mr-3"></div>
                    <span className="text-sm">平均项目周期缩短30%</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <div className="w-2 h-2 bg-white/60 rounded-full mr-3"></div>
                    <span className="text-sm">客户满意度达到98%</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <div className="w-2 h-2 bg-white/60 rounded-full mr-3"></div>
                    <span className="text-sm">项目成功率100%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card variant="dark-gray" className="group hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="text-5xl mb-4 opacity-90 group-hover:scale-110 transition-transform duration-300">🏆</div>
                <CardTitle className="text-white text-2xl mb-4">金融APP设计专家</CardTitle>
                <div className="w-16 h-1 bg-white/40 rounded-full"></div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-white/90 text-lg leading-relaxed">
                  大型金融客户APP改版升级经验丰富，交互设计优化专家
                </CardDescription>
                <div className="space-y-3">
                  <div className="flex items-center text-white/80">
                    <div className="w-2 h-2 bg-white/60 rounded-full mr-3"></div>
                    <span className="text-sm">服务过20+金融机构</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <div className="w-2 h-2 bg-white/60 rounded-full mr-3"></div>
                    <span className="text-sm">累计用户数超过100万</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <div className="w-2 h-2 bg-white/60 rounded-full mr-3"></div>
                    <span className="text-sm">获得多项设计奖项</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/20">
                  <span className="text-sm font-medium text-white/90">专业认证: Adobe认证设计师</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Carousel Section */}
      <section id="cases">
        <CaseCarousel cases={cases} />
      </section>

      {/* Client Logos Section */}
      <section id="clients" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title mb-6">
              我们服务的客户
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              为各行各业的知名企业提供专业的数字化转型服务
            </p>
          </div>
          
          {/* Logo展示区域 */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-items-center">
            {/* 客户Logo展示 - 按指定顺序排列 */}
            <div className="w-36 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-200 p-2 hover:shadow-md transition-shadow duration-300">
              <img 
                src="/images/clients/zhongyinguoji.png" 
                alt="中银国际" 
                className="w-full h-full object-contain transition-all duration-300"
              />
            </div>
            <div className="w-36 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-200 p-2 hover:shadow-md transition-shadow duration-300">
              <img 
                src="/images/clients/haoshi_bio.png" 
                alt="豪石生物" 
                className="w-full h-full object-contain transition-all duration-300"
              />
            </div>
            <div className="w-36 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-200 p-2 hover:shadow-md transition-shadow duration-300">
              <img 
                src="/images/clients/zhihui-iot.png" 
                alt="智荟物联" 
                className="w-full h-full object-contain transition-all duration-300"
              />
            </div>
            <div className="w-36 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-200 p-2 hover:shadow-md transition-shadow duration-300">
              <img 
                src="/images/clients/puhui.png" 
                alt="朴慧智能" 
                className="w-full h-full object-contain transition-all duration-300"
              />
            </div>
            <div className="w-36 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-200 p-2 hover:shadow-md transition-shadow duration-300">
              <img 
                src="/images/clients/pxn.svg" 
                alt="PXN" 
                className="w-full h-full object-contain transition-all duration-300"
              />
            </div>
            <div className="w-36 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-200 p-2 hover:shadow-md transition-shadow duration-300">
              <img 
                src="/images/clients/lanwo.svg" 
                alt="蓝沃服饰" 
                className="w-full h-full object-contain transition-all duration-300"
              />
            </div>
            <div className="w-36 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-200 p-2 hover:shadow-md transition-shadow duration-300">
              <img 
                src="/images/clients/siyinghong.png" 
                alt="思颖红服饰" 
                className="w-full h-full object-contain transition-all duration-300"
              />
            </div>
            <div className="w-36 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-200 p-2 hover:shadow-md transition-shadow duration-300">
              <img 
                src="/images/clients/zhaozhubao.svg" 
                alt="找珠宝网" 
                className="w-full h-full object-contain transition-all duration-300"
              />
            </div>
            <div className="w-36 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-200 p-2 hover:shadow-md transition-shadow duration-300">
              <img 
                src="/images/clients/xiaozuzu.svg" 
                alt="小租租" 
                className="w-full h-full object-contain transition-all duration-300"
              />
            </div>
            <div className="w-36 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-200 p-2 hover:shadow-md transition-shadow duration-300">
              <img 
                src="/images/clients/hicross.svg" 
                alt="HiCross" 
                className="w-full h-full object-contain transition-all duration-300"
              />
            </div>
            <div className="w-36 h-20 bg-white rounded-lg shadow-sm flex items-center justify-center border border-gray-200 p-2 hover:shadow-md transition-shadow duration-300">
              <img 
                src="/images/clients/lianhuikeji.png" 
                alt="莲花科技" 
                className="w-full h-full object-contain transition-all duration-300"
              />
            </div>
          </div>
          
          {/* 信任指标 */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">100+</div>
                <div className="text-gray-600 text-sm">成功项目</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
                <div className="text-gray-600 text-sm">合作客户</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">98%</div>
                <div className="text-gray-600 text-sm">客户满意度</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">5年</div>
                <div className="text-gray-600 text-sm">行业经验</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">准备开始您的数字化转型之旅？</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            联系我们，让我们的专业团队为您提供定制化的解决方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="black" 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold"
            >
              立即咨询
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="px-8 py-4 text-lg font-semibold bg-white/15 border-2 border-white/30 text-white hover:bg-white hover:text-orange-600"
            >
              查看案例
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}