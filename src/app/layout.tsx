import './app.css';
import type { Metadata } from 'next';
import type React from 'react';
import { Header } from '@/components/header';

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='flex min-h-screen flex-col antialiased'>
        <Header />
        <main className='flex flex-1 flex-col'>{children}</main>
      </body>
    </html>
  );
}
