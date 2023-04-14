import Header from '@/components/Header';
import './globals.css';
import Head from 'next/head';

export const metadata = {
  title: 'IMDb',
  description: 'Fazendo avaliações em filmes'
}



export default function RootLayout({ children }) {
  return (
    <>
      <html lang="pt-BR">

        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="viewport" content= "width=device-width,  initial-scale=1, maximum-scale=1" />
        </Head>

        <body>
          <Header />
          {children}
        </body>
      </html>
    </>
  )
}
