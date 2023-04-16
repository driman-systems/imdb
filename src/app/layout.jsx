"use client";
import './globals.css';
import Header from '@/components/Header';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import Navbar from '@/components/Navbar';
import SearchBox from '@/components/SearchBox.jsx';

const RootLayout = ({ children })=> {
  return ( <>
      <html lang="pt-BR">
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="viewport" content= "width=device-width,  initial-scale=1, maximum-scale=1" />
        </Head>

        <body>
            <ThemeProvider enableSystem={true} attribute='class'>
              <div className='dark:bg-gray-700 dark:text-gray-200 text-gray-700 transition-colors duration-300 min-h-screen select-none'>
                <Header />
                <Navbar />
                <div className='container sm:mx-auto max-w-6xl px-3 sm:px-2'>
                  <SearchBox />
                {children} 
                </div>
              </div>
            </ThemeProvider>
        </body>
      </html>
    </>
  )
}

export default RootLayout;
