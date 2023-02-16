import { Inter } from '@next/font/google'
import { NextSeo } from 'next-seo'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NextSeo
        title='reddit home'
        description='reddit clone'
      />
      <h1>Something happened...</h1>
    </>
  )
}
