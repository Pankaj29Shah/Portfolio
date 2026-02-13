import type { Metadata } from "next";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import { ThemeProvider } from '@/contexts/ThemeContext';
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Pankaj Shah - Full Stack Developer | Software Engineer | .NET Core & Node.js Specialist",
    template: "%s | Pankaj Shah - Full Stack Developer"
  },
  description: "Experienced Full Stack Software Developer specializing in React, Next.js, Node.js, .NET Core, and modern web technologies. 4+ years of experience building scalable web applications and microservices architecture.",
  keywords: [
    "Full Stack Developer",
    "Full Stack Engineer",
    "Software Engineer",
    "Software Developer",
    ".NET Core Developer",
    "Node.js Developer",
    "React Developer",
    "Next.js Developer",
    "Microservices",
    "System Design",
    "Web Developer",
    "Freelancer",
    "Portfolio",
    "Pankaj Shah",
    "API Development",
    "RESTful APIs",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Git"
  ],
  authors: [{ name: "Pankaj Shah", url: "https://github.com/pankajshah23" }],
  creator: "Pankaj Shah",
  publisher: "Pankaj Shah",
  metadataBase: new URL('https://pankajshah.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Pankaj Shah - Full Stack Developer | Software Engineer",
    description: "Experienced Full Stack Software Developer with 4+ years of expertise in React, Next.js, Node.js, .NET Core, and modern web technologies. Explore my portfolio of innovative projects.",
    url: "https://pankajshah.dev",
    siteName: "Pankaj Shah Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Pankaj Shah - Full Stack Developer',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pankaj Shah - Full Stack Developer | Software Engineer",
    description: "Experienced Full Stack Software Developer specializing in React, Next.js, Node.js, .NET Core, and modern web technologies.",
    creator: "@pankajshah",
    images: ['/images/profile.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

const theme = {
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Pankaj Shah',
    jobTitle: 'Full Stack Software Developer',
    url: 'https://pankajshah.dev',
    email: 'pankajshah2312@gmail.com',
    telephone: '+91-6375957804',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Gujarat',
      addressCountry: 'IN'
    },
    sameAs: [
      'https://github.com/pankajshah23',
      'https://www.linkedin.com/in/pankaj-shah-dev',
      'https://wa.me/916375957804'
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Silver Oak University'
    },
    knowsAbout: [
      'Full Stack Development',
      'React',
      'Next.js',
      'Node.js',
      '.NET Core',
      'TypeScript',
      'JavaScript',
      'MongoDB',
      'PostgreSQL',
      'Microservices',
      'System Design',
      'RESTful APIs',
      'AWS',
      'Docker',
      'Git'
    ],
    description: 'Experienced Full Stack Software Developer with 4+ years of expertise in building scalable web applications using React, Next.js, Node.js, .NET Core, and modern web technologies.',
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ThemeProvider>
          <AntdRegistry>
            <ConfigProvider
              theme={theme}
              warning={{ strict: false }}
            >
              {children}
            </ConfigProvider>
          </AntdRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
