import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lakini Hope',
  description: 'Play with us',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='w-screen grid uppercase bg-yellow-900 sticky-0 grid-flow-col px-2'>
          <div className='grid place-self-start'>
            <div className='font-bold text-2xl'>lakini Hope</div>
            <div className='text-sm'>play with us</div>
          </div>
          <div className='justify-content-right grid gap-4 grid-flow-col'>
            <Link
            href='/'
            title='Home'
            className='uppercase'>home</Link>
            <Link
            href='/#about'
            title='About us'>
              about us
            </Link>
            <Link
            href='/services'
            title='Our services'>
              our services
            </Link>
            <Link
            href='/#contact'
            title='Contacts'>
              contact us
            </Link>
          </div>
        </div>
        <div>{children}</div>
         {/* footer */}
        <footer className='h-fit w-full grid grid-flow-col'>
          <div id='socials' className='grid grid-flow-col justify-self-start text-lg lg:text-2xl gap-4'>
            <Link href='#' className='p-2'><FaFacebookF /></Link>
            <Link href='#' className='p-2'><FaXTwitter /></Link>
            <Link href='#' className='p-2'><FaInstagram /></Link>
            <Link href='#' className='p-2'><FaYoutube /></Link>
          </div>
          <div className='capitalize'>&copy; 2024 all rights reserved</div>
        </footer>
      </body>
    </html>
  )
}
