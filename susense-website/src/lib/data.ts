import { CasesData, ServicesData, CompanyInfo, NewsData } from '@/types';

// 数据加载工具函数
export async function loadJSONData<T>(filename: string, fallback: T): Promise<T> {
  try {
    const data = await import(`@/data/${filename}`);
    return data.default;
  } catch {
    console.warn(`Failed to load ${filename}, using fallback data`);
    return fallback;
  }
}

// 获取项目案例数据
export async function getCases(): Promise<CasesData> {
  const fallbackData: CasesData = {
    cases: [
      {
        id: 'fallback-1',
        title: '金融APP设计优化',
        client: '保密客户',
        industry: '金融科技',
        description: '专业的金融APP界面设计和用户体验优化服务',
        challenge: '提升用户体验和界面现代化',
        solution: '采用倪爽设计风格，优化交互流程',
        results: [
          {
            metric: '用户活跃度',
            value: '+150%',
            description: '用户日活跃度显著提升'
          }
        ],
        images: {
          thumbnail: '/images/cases/default-thumbnail.webp',
          gallery: []
        },
        technologies: ['React Native', 'UI/UX设计', '用户研究'],
        duration: '3个月',
        featured: true
      }
    ],
    lastUpdated: new Date().toISOString()
  };

  return loadJSONData('cases.json', fallbackData);
}

// 获取服务项目数据
export async function getServices(): Promise<ServicesData> {
  const fallbackData: ServicesData = {
    services: [
      {
        id: 'service-1',
        name: '系统规划设计',
        category: '系统规划',
        description: '为企业提供全方位的数字化解决方案，从系统架构到用户体验的完整规划',
        features: ['需求分析', '架构设计', '技术选型', '实施规划'],
        benefits: ['降低开发风险', '提升系统性能', '优化用户体验'],
        process: [
          { step: 1, title: '需求调研', description: '深入了解业务需求和技术现状' },
          { step: 2, title: '方案设计', description: '制定详细的技术方案和实施计划' },
          { step: 3, title: '原型验证', description: '构建原型验证设计方案可行性' }
        ],
        pricing: {
          type: '按项目报价',
          description: '根据项目复杂度和周期定制报价'
        },
        icon: '💡',
        featured: true
      }
    ],
    lastUpdated: new Date().toISOString()
  };

  return loadJSONData('services.json', fallbackData);
}

// 获取公司信息
export async function getCompanyInfo(): Promise<CompanyInfo> {
  const fallbackData: CompanyInfo = {
    name: '香港速睿森视科技有限公司',
    englishName: 'Susense Technology Co., Limited',
    tagline: '设计驱动，科技赋能',
    description: '专注于为中小企业和大型金融客户提供专业的数字化转型服务',
    founded: '2019',
    teamSize: {
      core: 10,
      partners: 10
    },
    address: {
      chinese: '香港油尖旺区大角咀通州街雲之端1011室',
      english: 'Room 1011, Cloud One, Tung Chau Street, Tai Kok Tsui, Yau Tsim Mong, Hong Kong'
    },
    contact: {
      email: 'zhanglixun@susense.cn',
      website: 'susense.hk'
    },
    services: ['系统规划设计', 'UI/UX设计', '产品规划咨询', '运营活动策划'],
    values: ['用户体验优先', '客户服务优先', '持续创新', '专业可靠']
  };

  return loadJSONData('company.json', fallbackData);
}

// 获取新闻动态数据
export async function getNews(): Promise<NewsData> {
  const fallbackData: NewsData = {
    news: [
      {
        id: 'news-1',
        title: '公司成立五周年，持续专注金融科技领域',
        summary: '自2019年成立以来，我们已成功服务多家金融客户，完成数十个项目',
        content: '详细内容...',
        category: '公司动态',
        publishDate: '2024-01-01',
        author: '速睿森视团队',
        tags: ['公司动态', '金融科技'],
        featured: true
      }
    ],
    lastUpdated: new Date().toISOString()
  };

  return loadJSONData('news.json', fallbackData);
}

// 数据验证函数
export function validateCaseData(cases: unknown[]): unknown[] {
  return cases.filter((caseItem: unknown) => {
    const item = caseItem as Record<string, unknown>;
    return item.id && item.title && item.client && item.industry;
  });
}

export function validateServiceData(services: unknown[]): unknown[] {
  return services.filter((service: unknown) => {
    const item = service as Record<string, unknown>;
    return item.id && item.name && item.category && item.description;
  });
}