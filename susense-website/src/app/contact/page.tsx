import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ContactForm } from '@/components/sections/ContactForm';

const contactInfo = [
  {
    title: '办公地址',
    icon: '📍',
    content: [
      '香港油尖旺区大角咀通州街雲之端1011室',
      'Room 1011, Cloud One, Tung Chau Street',
      'Tai Kok Tsui, Yau Tsim Mong, Hong Kong'
    ],
    action: '查看地图'
  },
  {
    title: '联系邮箱',
    icon: '📧',
    content: [
      'zhanglixun@susense.cn',
      '24小时内回复'
    ],
    action: '发送邮件'
  },
  {
    title: '官方网站',
    icon: '🌐',
    content: [
      'susense.hk',
      '了解更多信息'
    ],
    action: '访问网站'
  },
  {
    title: '工作时间',
    icon: '🕒',
    content: [
      '周一至周五: 9:00 - 18:00',
      '周六: 9:00 - 12:00',
      '周日及公众假期休息'
    ],
    action: '预约咨询'
  }
];

const services = [
  {
    name: '系统规划设计',
    description: '全方位数字化转型方案，从概念到落地的完整流程',
    icon: '💡',
    duration: '2-4周'
  },
  {
    name: 'UI/UX设计服务',
    description: '金融APP交互设计升级，现代化界面设计',
    icon: '🎨',
    duration: '3-6周'
  },
  {
    name: '产品规划咨询',
    description: '产品策略制定，市场需求分析，竞争力提升方案',
    icon: '📊',
    duration: '2-3周'
  },
  {
    name: '运营活动策划',
    description: '数据驱动的营销活动设计和用户增长策略',
    icon: '🚀',
    duration: '1-2周'
  }
];

const faqs = [
  {
    question: '你们的服务流程是怎样的？',
    answer: '我们的服务流程包括需求调研、方案设计、原型验证和实施交付四个阶段。每个阶段都有明确的时间节点和质量标准，确保项目顺利进行。'
  },
  {
    question: '项目周期一般需要多长时间？',
    answer: '项目周期根据具体需求而定。系统规划设计通常需要2-4周，UI/UX设计服务需要3-6周，产品规划咨询需要2-3周，运营活动策划需要1-2周。'
  },
  {
    question: '你们提供哪些技术支持？',
    answer: '我们提供7x24小时技术支持，包括项目咨询、技术答疑、问题解决和系统维护等服务。我们的技术团队随时为您提供专业支持。'
  },
  {
    question: '如何保证项目质量？',
    answer: '我们建立了严格的质量控制体系，包括代码审查、测试验证、用户验收等环节。同时，我们采用敏捷开发方法，确保项目按时高质量交付。'
  },
  {
    question: '你们的收费标准是怎样的？',
    answer: '我们根据项目复杂度和工作量提供定制化报价。我们提供免费的项目评估和方案设计，确保您了解项目价值和投资回报。'
  },
  {
    question: '是否提供项目维护服务？',
    answer: '是的，我们提供完整的项目维护服务，包括系统更新、功能优化、性能监控和故障处理等。我们承诺长期的技术支持和维护保障。'
  }
];

export default function ContactPage() {
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
              联系我们
            </h1>
            <p className="text-2xl md:text-3xl text-white/95 mb-8 font-semibold">
              开启您的数字化转型之旅
            </p>
            <div className="w-32 h-1 bg-white/40 mx-auto rounded-full mb-8"></div>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              我们期待与您合作，为您提供专业的数字化转型解决方案。
              立即联系我们，让我们的专家团队为您提供免费的项目评估和咨询服务。
            </p>
          </div>
        </div>
      </section>

      {/* 联系信息 */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">联系信息</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              多种方式联系我们，我们随时为您提供专业服务
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} variant="white" className="text-center group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">{info.title}</h3>
                  <div className="space-y-2 mb-6">
                    {info.content.map((item, itemIndex) => (
                      <p key={itemIndex} className="text-gray-600 text-sm">{item}</p>
                    ))}
                  </div>
                  <Button 
                    variant="primary" 
                    size="sm" 
                    className="w-full"
                  >
                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 服务展示 */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">我们的服务</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              专业的技术团队，为您提供全方位的数字化转型服务
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} variant="white" className="group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <div className="text-orange-500 font-medium text-sm">周期: {service.duration}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 联系表单 */}
      <section id="contact-form" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">立即咨询</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              填写下方表单，我们的专业团队将为您提供定制化解决方案
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>

      {/* 常见问题 */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">常见问题</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              解答您最关心的问题，让合作更加顺畅
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} variant="white" className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 地图区域 */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">我们的位置</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              欢迎您到我们的办公室参观交流
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card variant="light-green" className="p-8">
                <h3 className="text-2xl font-bold text-green-800 mb-6">香港总部办公室</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">📍</span>
                    <div>
                      <div className="font-semibold text-gray-800">地址</div>
                      <div className="text-gray-600">香港油尖旺区大角咀通州街雲之端1011室</div>
                      <div className="text-gray-600">Room 1011, Cloud One, Tung Chau Street</div>
                      <div className="text-gray-600">Tai Kok Tsui, Yau Tsim Mong, Hong Kong</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">🚇</span>
                    <div>
                      <div className="font-semibold text-gray-800">交通方式</div>
                      <div className="text-gray-600">港铁奥运站A出口，步行5分钟</div>
                      <div className="text-gray-600">或乘坐巴士至大角咀站</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">🅿️</span>
                    <div>
                      <div className="font-semibold text-gray-800">停车信息</div>
                      <div className="text-gray-600">大厦提供付费停车位</div>
                      <div className="text-gray-600">建议提前预约停车位</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-6xl mb-4">🗺️</div>
                <div className="text-lg font-semibold">地图位置</div>
                <div className="text-sm">点击查看详细位置</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">准备开始您的项目？</h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            立即联系我们，获得免费的项目评估和专业的解决方案建议
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact-form">
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
