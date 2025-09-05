// 基础类型定义

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: "金融科技" | "数字化转型" | "系统开发" | "UI/UX设计";
  description: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  images: {
    thumbnail: string;
    gallery: string[];
  };
  technologies: string[];
  duration: string;
  testimonial?: {
    content: string;
    author: string;
    position: string;
    company: string;
  };
  featured: boolean;
}

export interface Service {
  id: string;
  name: string;
  category: "系统规划" | "UI/UX设计" | "产品咨询" | "运营策划";
  description: string;
  features: string[];
  benefits: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  pricing?: {
    type: "固定价格" | "按项目报价" | "咨询定制";
    startingPrice?: string;
    description: string;
  };
  icon: string;
  featured: boolean;
}

export interface CompanyInfo {
  name: string;
  englishName: string;
  tagline: string;
  description: string;
  founded: string;
  teamSize: {
    core: number;
    partners: number;
  };
  address: {
    chinese: string;
    english: string;
  };
  contact: {
    email: string;
    website: string;
  };
  services: string[];
  values: string[];
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: "公司动态" | "行业洞察" | "技术分享" | "客户成功";
  publishDate: string;
  author: string;
  tags: string[];
  image?: string;
  featured: boolean;
}

// 数据容器类型
export interface CasesData {
  cases: CaseStudy[];
  lastUpdated: string;
}

export interface ServicesData {
  services: Service[];
  lastUpdated: string;
}

export interface NewsData {
  news: NewsItem[];
  lastUpdated: string;
}