import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Personal Portfolio',
  description: 'Research Portfolio showcasing software engineering and physics works.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body className={`${inter.className} bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 antialiased min-h-screen flex flex-col transition-colors duration-300`}>
        <ThemeProvider>
          <Navbar />
          <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-10">
            {children}
          </main>
          <footer className="border-t border-zinc-200 dark:border-zinc-800 py-6 text-center text-xs text-zinc-400">
            © {new Date().getFullYear()} • Built with Next.js & Tailwind
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}