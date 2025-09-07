import Link from 'next/link';
import { Card } from '@/components/ui/Card';

const quickLinks = [
  { name: '首页', href: '/' },
  { name: '服务项目', href: '/services' },
  { name: '案例展示', href: '/cases' },
  { name: '关于我们', href: '/about' },
  { name: '联系我们', href: '/contact' },
];

const services = [
  { name: '系统规划设计', href: '/services#system-planning' },
  { name: 'UI/UX设计', href: '/services#ui-ux-design' },
  { name: '产品规划咨询', href: '/services#product-consulting' },
  { name: '运营活动策划', href: '/services#operation-planning' },
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/susense', icon: '💼' },
  { name: 'GitHub', href: 'https://github.com/susense', icon: '💻' },
  { name: 'Email', href: 'mailto:zhanglixun@susense.cn', icon: '📧' },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 公司信息 */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="text-2xl font-bold text-primary-orange mb-4">
                香港速睿森视科技有限公司
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                设计驱动，科技赋能 - 专业的数字化转型伙伴。专注于金融APP设计、系统开发和性能优化服务。
              </p>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📍 香港油尖旺区大角咀通州街雲之端1011室</p>
                <p>📧 zhanglixun@susense.cn</p>
                <p>🌐 susense.hk</p>
              </div>
            </div>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-orange transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 服务项目 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">服务项目</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-primary-orange transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 社交媒体和联系信息 */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="flex items-center space-x-2 text-gray-300 hover:text-primary-orange transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-xl">{social.icon}</span>
                  <span className="text-sm">{social.name}</span>
                </a>
              ))}
            </div>
            
            <div className="text-sm text-gray-400">
              © 2025 香港速睿森视科技有限公司. 保留所有权利.
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
