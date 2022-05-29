import About from '@/components/About'
import Headline from '@/components/Headline'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Services from '@/components/Services'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Headline />
      <hr className="container" />
      <Services />
      <About />
    </Layout>
  )
}

export default Home
