import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { CasePreview } from '@/components/sections/CasePreview';
import { ContactForm } from '@/components/sections/ContactForm';
import { CompanyHighlights } from '@/components/sections/CompanyHighlights';
import { loadCasesData } from '@/lib/data';

export default async function Home() {
  const cases = await loadCasesData();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-orange pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="hero-title">
            香港速睿森视科技有限公司
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
            设计驱动，科技赋能 - 专业的数字化转型伙伴
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button variant="black" size="lg">
              开始设计评审
            </Button>
            <Button variant="secondary" size="lg" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary-orange">
              立即解锁竞争力
            </Button>
          </div>
          
          {/* 装饰性元素 */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-white/80">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2019</div>
              <div className="text-lg">成立年份</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-lg">核心团队</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-lg">成功项目</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Highlights Section */}
      <CompanyHighlights />

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-title">
            专业服务体系
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card variant="white">
              <CardHeader>
                <div className="text-4xl mb-4">💡</div>
                <CardTitle>系统规划设计</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  全方位数字化转型方案，从概念到落地的完整流程
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card variant="light-green">
              <CardHeader>
                <div className="text-4xl mb-4">🎨</div>
                <CardTitle>UI/UX设计服务</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  金融APP交互设计升级，现代化界面设计
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card variant="gray">
              <CardHeader>
                <div className="text-4xl mb-4">📊</div>
                <CardTitle>产品规划咨询</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  产品策略制定，市场需求分析，竞争力提升方案
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card variant="dark-blue">
              <CardHeader>
                <div className="text-4xl mb-4 opacity-90">⚡</div>
                <CardTitle className="text-white">专业级服务</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/90">
                  20年实战经验，大厂和创业双重背景，直接可实操干货
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="orange">
              <CardContent>
                <div className="text-6xl font-extrabold mb-4">+150%</div>
                <CardTitle className="text-white text-2xl mb-3">用户活跃度提升</CardTitle>
                <CardDescription className="text-white/90">
                  通过专业的设计优化和用户体验改进，帮助客户实现显著的业务增长
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card variant="dark-gray">
              <CardHeader>
                <div className="text-4xl mb-4 opacity-90">🏆</div>
                <CardTitle className="text-white">金融APP设计专家</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white/90">
                  大型金融客户APP改版升级经验丰富，交互设计优化专家
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Preview Section */}
      <CasePreview cases={cases} />

      {/* Contact Form Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">
              开始您的项目
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              告诉我们您的需求，我们的专业团队将为您提供定制化的解决方案
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}