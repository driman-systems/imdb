import { Poppins, Roboto } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: '400' });
const roboto = Roboto({ subsets: ['latin'], weight: '400' })

const Home = ()=> {
  return (
      <main className='space-x-4'>
        <h1 className='text-red-500 text-2xl font-medium'>Home</h1>
      </main>
  )
}

export default Home;
