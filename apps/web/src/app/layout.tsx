import './globals.css';

import { ThemeProvider } from 'next-themes';

import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { extractRouterConfig } from 'uploadthing/server';

import { Toaster } from '@rechain/ui/toast';

import { TRPCReactProvider } from '@/lib/trpc/react';

import { fileRouter } from './api/uploadthing/core';

import { PostHogReactProvider } from '@/lib/posthog/react';

const PostHogPageView = dynamic(() => import('@/lib/posthog/view'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

/**
 * The root layout of the entire application. This is where we wrap the entire application in the necessary providers.
 * @param props The props to the layout, which will be every page in this application.
 * @param props.children The children, which is the page the user is currently on.
 * @returns The layout of the application.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <PostHogReactProvider>
        <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
          <PostHogPageView />
          <NextSSRPlugin routerConfig={extractRouterConfig(fileRouter)} />
          <ThemeProvider
            attribute="class"
            enableSystem
            disableTransitionOnChange
          >
            <TRPCReactProvider>{children}</TRPCReactProvider>
            <Toaster />
          </ThemeProvider>
        </body>
      </PostHogReactProvider>
    </html>
  );
}
