import { CaseStudy, Service, CompanyInfo, CasesData, ServicesData, CompanyData } from '@/types';

// 数据加载函数
export async function loadCasesData(): Promise<CaseStudy[]> {
  try {
    const data: CasesData = await import('../data/cases.json');
    return data.cases || [];
  } catch (error) {
    console.warn('Failed to load cases.json, using fallback data');
    return getFallbackCases();
  }
}

export async function loadServicesData(): Promise<Service[]> {
  try {
    const data: ServicesData = await import('../data/services.json');
    return data.services || [];
  } catch (error) {
    console.warn('Failed to load services.json, using fallback data');
    return getFallbackServices();
  }
}

export async function loadCompanyData(): Promise<CompanyInfo> {
  try {
    const data: CompanyData = await import('../data/company.json');
    return data;
  } catch (error) {
    console.warn('Failed to load company.json, using fallback data');
    return getFallbackCompany();
  }
}

// 备用数据
function getFallbackCases(): CaseStudy[] {
  return [
    {
      id: 'fallback-1',
      title: '金融APP设计优化',
      client: '保密客户',
      industry: '金融科技',
      description: '专业的金融APP界面设计和用户体验优化服务，帮助客户提升用户满意度和业务转化率。',
      challenge: '原有APP界面陈旧，用户体验不佳，业务流程复杂',
      solution: '采用现代化设计理念，重新设计用户界面，优化业务流程',
      results: [
        {
          metric: '用户活跃度',
          value: '+120%',
          description: '用户日活跃度显著提升'
        },
        {
          metric: '业务转化率',
          value: '+75%',
          description: '核心业务转化率大幅提升'
        }
      ],
      images: {
        thumbnail: '/images/placeholder-case.webp',
        gallery: ['/images/placeholder-case.webp']
      },
      technologies: ['UI/UX设计', '用户研究', '原型设计'],
      duration: '3个月',
      featured: true
    }
  ];
}

function getFallbackServices(): Service[] {
  return [
    {
      id: 'fallback-service-1',
      name: '系统规划设计',
      category: '系统规划',
      description: '为企业提供全方位的数字化解决方案，从系统架构到用户体验的完整规划',
      features: ['需求分析', '架构设计', '技术选型', '实施规划'],
      benefits: ['降低开发风险', '提升系统性能', '优化用户体验', '确保项目成功'],
      process: [
        {
          step: 1,
          title: '需求调研',
          description: '深入了解业务需求和技术现状'
        },
        {
          step: 2,
          title: '方案设计',
          description: '制定详细的技术方案和实施计划'
        },
        {
          step: 3,
          title: '原型验证',
          description: '构建原型验证设计方案可行性'
        }
      ],
      pricing: {
        type: '按项目报价',
        description: '根据项目复杂度和周期定制报价'
      },
      icon: '💡',
      featured: true
    }
  ];
}

function getFallbackCompany(): CompanyInfo {
  return {
    name: '香港速睿森视科技有限公司',
    englishName: 'Susense Technology Co., Limited',
    tagline: '设计驱动，科技赋能',
    description: '自2019年成立以来，专注于为中小企业和大型金融客户提供专业的数字化转型服务。',
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
}

// 数据验证函数
export function validateCaseData(cases: any[]): CaseStudy[] {
  return cases.filter(caseItem => {
    const isValid = caseItem.id && caseItem.title && caseItem.client && caseItem.industry;
    if (!isValid) {
      console.warn('Invalid case data:', caseItem);
    }
    return isValid;
  });
}

export function validateServiceData(services: any[]): Service[] {
  return services.filter(service => {
    const isValid = service.id && service.name && service.category;
    if (!isValid) {
      console.warn('Invalid service data:', service);
    }
    return isValid;
  });
}