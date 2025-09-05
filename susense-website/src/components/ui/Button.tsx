import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'black' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        className={cn(
          // 基础样式
          'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-orange focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
          // 变体样式
          {
            'btn-primary': variant === 'primary',
            'btn-black': variant === 'black', 
            'btn-secondary': variant === 'secondary',
          },
          // 尺寸样式
          {
            'py-2 px-4 text-sm rounded-button': size === 'sm',
            'py-4 px-8 text-base rounded-button': size === 'md',
            'py-5 px-10 text-lg rounded-button': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };