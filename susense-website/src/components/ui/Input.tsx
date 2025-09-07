import { cn } from '@/lib/utils';
import { InputHTMLAttributes, forwardRef, useState } from 'react';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'default' | 'error' | 'success';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = 'default', size = 'md', label, error, helperText, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-text-primary mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            className={cn(
              // 基础样式
              'w-full border rounded-button transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2',
              // 变体样式
              {
                'border-gray-300 focus:ring-primary-orange focus:border-primary-orange': variant === 'default',
                'border-red-500 focus:ring-red-500 focus:border-red-500': variant === 'error',
                'border-green-500 focus:ring-green-500 focus:border-green-500': variant === 'success',
              },
              // 尺寸样式
              {
                'py-2 px-3 text-sm': size === 'sm',
                'py-3 px-4 text-base': size === 'md',
                'py-4 px-5 text-lg': size === 'lg',
              },
              // 状态样式
              {
                'bg-white': !isFocused,
                'bg-gray-50': isFocused,
              },
              // 错误状态
              {
                'bg-red-50': variant === 'error',
                'bg-green-50': variant === 'success',
              },
              className
            )}
            ref={ref}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-1 text-sm text-red-600">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-sm text-text-secondary">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

// Textarea组件
export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
  variant?: 'default' | 'error' | 'success';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  error?: string;
  helperText?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant = 'default', size = 'md', label, error, helperText, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-text-primary mb-2">
            {label}
          </label>
        )}
        <div className="relative">
          <textarea
            className={cn(
              // 基础样式
              'w-full border rounded-button transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 resize-vertical',
              // 变体样式
              {
                'border-gray-300 focus:ring-primary-orange focus:border-primary-orange': variant === 'default',
                'border-red-500 focus:ring-red-500 focus:border-red-500': variant === 'error',
                'border-green-500 focus:ring-green-500 focus:border-green-500': variant === 'success',
              },
              // 尺寸样式
              {
                'py-2 px-3 text-sm min-h-[80px]': size === 'sm',
                'py-3 px-4 text-base min-h-[100px]': size === 'md',
                'py-4 px-5 text-lg min-h-[120px]': size === 'lg',
              },
              // 状态样式
              {
                'bg-white': !isFocused,
                'bg-gray-50': isFocused,
              },
              // 错误状态
              {
                'bg-red-50': variant === 'error',
                'bg-green-50': variant === 'success',
              },
              className
            )}
            ref={ref}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...props}
          />
        </div>
        {error && (
          <p className="mt-1 text-sm text-red-600">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="mt-1 text-sm text-text-secondary">
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

export { Input, Textarea };