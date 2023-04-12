import { Poppins, Roboto } from 'next/font/google'
import styles from './page.module.css'
import Head from 'next/head';

const poppins = Poppins({ subsets: ['latin'], weight: '400' });
const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content= "width=device-width,  initial-scale=1, maximum-scale=1" />
      </Head>
      <main className={styles.main}>
        <h1 className={roboto.className}>Home</h1>
      </main>
    
    </>
  )
}
