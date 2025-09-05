import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // 倪爽风格配色系统
        primary: {
          orange: '#FF8C42',
          'orange-hover': '#FF6B35',
        },
        card: {
          white: '#ffffff',
          'light-green': '#F0FDF4',
          gray: '#F1F5F9',
          'dark-gray': '#64748B',
          'dark-blue': '#1E293B',
        },
        background: '#F8F9FA',
        text: {
          primary: '#2a2a2a',
          secondary: '#666666',
        },
      },
      borderRadius: {
        'card': '16px',
        'button': '12px',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0,0,0,0.08)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.15)',
        'orange': '0 8px 24px rgba(255, 140, 66, 0.4)',
        'dark': '0 8px 24px rgba(31, 41, 55, 0.4)',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'PingFang SC',
          'Hiragino Sans GB',
          'Microsoft YaHei',
          'sans-serif',
        ],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '800' }],
        'section': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'button-press': 'buttonPress 0.2s ease-out',
      },
      keyframes: {
        fadeInUp: {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        buttonPress: {
          '0%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(1px) scale(0.98)' },
          '100%': { transform: 'translateY(-2px) scale(1)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;