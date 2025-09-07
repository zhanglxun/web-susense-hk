'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input, Textarea } from '@/components/ui/Input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

const services = [
  '系统规划设计',
  'UI/UX设计',
  '产品规划咨询',
  '运营活动策划',
  '其他服务'
];

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = '请输入您的姓名';
    }

    if (!formData.email.trim()) {
      newErrors.email = '请输入您的邮箱';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = '请输入您的联系电话';
    }

    if (!formData.service) {
      newErrors.service = '请选择您感兴趣的服务';
    }

    if (!formData.message.trim()) {
      newErrors.message = '请描述您的项目需求';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // 模拟表单提交
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 这里可以添加实际的表单提交逻辑
      console.log('Form submitted:', formData);
      
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // 清除对应字段的错误
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <Card variant="light-green" className="text-center">
        <CardContent className="py-12">
          <div className="text-6xl mb-4">✅</div>
          <h3 className="text-2xl font-semibold mb-4 text-green-800">
            提交成功！
          </h3>
          <p className="text-green-700 mb-6">
            感谢您的咨询，我们会在24小时内与您联系。
          </p>
          <Button 
            variant="primary" 
            onClick={() => setIsSubmitted(false)}
          >
            继续咨询
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card variant="white">
      <CardHeader>
        <CardTitle className="text-2xl text-center">
          开始您的数字化转型之旅
        </CardTitle>
        <p className="text-center text-text-secondary">
          填写下方表单，我们的专业团队将为您提供定制化解决方案
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="姓名 *"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              error={errors.name}
              placeholder="请输入您的姓名"
            />
            
            <Input
              label="邮箱 *"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              error={errors.email}
              placeholder="请输入您的邮箱地址"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="公司名称"
              value={formData.company}
              onChange={(e) => handleInputChange('company', e.target.value)}
              placeholder="请输入您的公司名称"
            />
            
            <Input
              label="联系电话 *"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              error={errors.phone}
              placeholder="请输入您的联系电话"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              感兴趣的服务 *
            </label>
            <select
              value={formData.service}
              onChange={(e) => handleInputChange('service', e.target.value)}
              className={`w-full py-3 px-4 border rounded-button transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                errors.service
                  ? 'border-red-500 focus:ring-red-500 focus:border-red-500 bg-red-50'
                  : 'border-gray-300 focus:ring-primary-orange focus:border-primary-orange'
              }`}
            >
              <option value="">请选择您感兴趣的服务</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
            {errors.service && (
              <p className="mt-1 text-sm text-red-600">{errors.service}</p>
            )}
          </div>

          <Textarea
            label="项目需求描述 *"
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            error={errors.message}
            placeholder="请详细描述您的项目需求、目标和期望..."
            rows={5}
          />

          <div className="text-center">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              className="w-full md:w-auto"
            >
              {isSubmitting ? '提交中...' : '立即咨询'}
            </Button>
          </div>

          <p className="text-xs text-text-secondary text-center">
            提交表单即表示您同意我们的隐私政策，我们承诺保护您的个人信息安全。
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
