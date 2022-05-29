import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Services from '@/components/Services'
import type { NextPage } from 'next'


const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Services />
    </Layout>
  )
}

export default Home
