'use client';

import { ConfigProvider, App, theme } from 'antd';
import { StyleProvider } from '@ant-design/cssinjs';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { useTheme } from '@/contexts/ThemeContext';
import { ReactNode } from 'react';

const antdTheme = {
  token: {
    colorPrimary: '#667eea',
    borderRadius: 8,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial',
  },
  components: {
    Button: {
      controlHeight: 42,
      fontSize: 16,
    },
    Spin: {
      contentHeight: 400,
    },
  },
};

export default function ClientLayout({ children }: { children: ReactNode }) {
  const { theme: currentTheme } = useTheme();

  return (
    <AntdRegistry>
      <StyleProvider hashPriority="high" ssrInline>
        <ConfigProvider
          theme={{
            ...antdTheme,
            algorithm: currentTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
          }}
          warning={{ strict: false }}
        >
          <App>
            {children}
          </App>
        </ConfigProvider>
      </StyleProvider>
    </AntdRegistry>
  );
}
