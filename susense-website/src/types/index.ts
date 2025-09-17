// 基础类型定义

export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  description: string;
  image: string;
  featured: boolean;
  createdAt: string;
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

// 数据容器类型
export interface CasesData {
  cases: CaseStudy[];
  lastUpdated: string;
}

export interface ServicesData {
  services: Service[];
  lastUpdated: string;
}

export interface CompanyData {
  company: CompanyInfo;
  lastUpdated: string;
}