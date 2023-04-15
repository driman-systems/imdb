import { Poppins, Roboto } from 'next/font/google'
import styles from './page.module.css'

const poppins = Poppins({ subsets: ['latin'], weight: '400' });
const roboto = Roboto({ subsets: ['latin'], weight: '400' })

const Home = ()=> {
  return (
      <main className={styles.main}>
        <h1 className='text-red-600'>Home</h1>
      </main>
  )
}

export default Home;
