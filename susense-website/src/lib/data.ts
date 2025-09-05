import { CasesData, ServicesData, CompanyInfo, NewsData } from '@/types';

// 数据加载工具函数
export async function loadJSONData<T>(filename: string, fallback: T): Promise<T> {
  try {
    const data = await import(`@/data/${filename}`);

    // 验证数据是否存在
    if (!data.default) {
      console.warn(`No data found in ${filename}, using fallback data`);
      return fallback;
    }

    // 验证数据结构
    if (typeof data.default !== 'object') {
      console.warn(`Invalid data format in ${filename}, using fallback data`);
      return fallback;
    }

    return data.default;
  } catch (error) {
    console.error(`Failed to load ${filename}:`, error);
    console.warn(`Using fallback data for ${filename}`);
    return fallback;
  }
}

// 数据验证和清理函数
export function sanitizeData<T>(data: T, validator?: (item: T) => boolean): T {
  if (!data) {
    throw new Error('Data is null or undefined');
  }

  if (validator && !validator(data)) {
    throw new Error('Data validation failed');
  }

  return data;
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

  try {
    const data = await loadJSONData('cases.json', fallbackData);

    // 验证数据结构
    if (!data.cases || !Array.isArray(data.cases)) {
      console.warn('Invalid cases data structure, using fallback');
      return fallbackData;
    }

    // 验证和清理案例数据
    const validCases = validateCaseData(data.cases);

    return {
      ...data,
      cases: validCases as CasesData['cases']
    };
  } catch (error) {
    console.error('Error loading cases data:', error);
    return fallbackData;
  }
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

  try {
    const data = await loadJSONData('services.json', fallbackData);

    // 验证数据结构
    if (!data.services || !Array.isArray(data.services)) {
      console.warn('Invalid services data structure, using fallback');
      return fallbackData;
    }

    // 验证和清理服务数据
    const validServices = validateServiceData(data.services);

    return {
      ...data,
      services: validServices as ServicesData['services']
    };
  } catch (error) {
    console.error('Error loading services data:', error);
    return fallbackData;
  }
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

  try {
    const data = await loadJSONData('company.json', fallbackData);

    // 验证必要字段
    if (!data.name || !data.englishName || !data.contact?.email) {
      console.warn('Invalid company data structure, using fallback');
      return fallbackData;
    }

    return data;
  } catch (error) {
    console.error('Error loading company data:', error);
    return fallbackData;
  }
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
  if (!Array.isArray(cases)) {
    console.warn('Cases data is not an array');
    return [];
  }

  return cases.filter((caseItem: unknown) => {
    const item = caseItem as Record<string, unknown>;

    // 验证必要字段
    const hasRequiredFields = item.id &&
      item.title &&
      item.client &&
      item.industry &&
      item.description;

    if (!hasRequiredFields) {
      console.warn(`Invalid case data: missing required fields for case ${item.id || 'unknown'}`);
      return false;
    }

    // 验证数组字段
    if (item.results && !Array.isArray(item.results)) {
      console.warn(`Invalid results data for case ${item.id}`);
      return false;
    }

    if (item.technologies && !Array.isArray(item.technologies)) {
      console.warn(`Invalid technologies data for case ${item.id}`);
      return false;
    }

    return true;
  });
}

export function validateServiceData(services: unknown[]): unknown[] {
  if (!Array.isArray(services)) {
    console.warn('Services data is not an array');
    return [];
  }

  return services.filter((service: unknown) => {
    const item = service as Record<string, unknown>;

    // 验证必要字段
    const hasRequiredFields = item.id &&
      item.name &&
      item.category &&
      item.description;

    if (!hasRequiredFields) {
      console.warn(`Invalid service data: missing required fields for service ${item.id || 'unknown'}`);
      return false;
    }

    // 验证数组字段
    if (item.features && !Array.isArray(item.features)) {
      console.warn(`Invalid features data for service ${item.id}`);
      return false;
    }

    if (item.benefits && !Array.isArray(item.benefits)) {
      console.warn(`Invalid benefits data for service ${item.id}`);
      return false;
    }

    if (item.process && !Array.isArray(item.process)) {
      console.warn(`Invalid process data for service ${item.id}`);
      return false;
    }

    return true;
  });
}

// 缓存机制
const dataCache = new Map<string, { data: unknown; timestamp: number }>();
const CACHE_DURATION = 5 * 60 * 1000; // 5分钟缓存

export function getCachedData<T>(key: string): T | null {
  const cached = dataCache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data as T;
  }
  return null;
}

export function setCachedData<T>(key: string, data: T): void {
  dataCache.set(key, {
    data,
    timestamp: Date.now()
  });
}

// 带缓存的数据加载函数
export async function loadCachedJSONData<T>(filename: string, fallback: T): Promise<T> {
  const cacheKey = `json-${filename}`;

  // 尝试从缓存获取
  const cached = getCachedData<T>(cacheKey);
  if (cached) {
    return cached;
  }

  // 加载数据
  const data = await loadJSONData(filename, fallback);

  // 缓存数据
  setCachedData(cacheKey, data);

  return data;
}