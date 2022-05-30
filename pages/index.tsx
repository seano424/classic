import About from '@/components/CtaSideBySideFullScreen'
import CtaOverlay from '@/components/CtaOverlay'
import Headline from '@/components/Headline'
import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import Services from '@/components/Services'
import type { NextPage } from 'next'
import CtaSideBySide from '@/components/CtaSideBySide'
import Employees from '@/components/CtaGridCenter'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Headline />
      <hr className="container" />
      <Services />
      <About />
      <Headline />
      <CtaOverlay />
      <Headline header="People Matter at Company Name" />
      <hr className="container" />
      <CtaSideBySide />
      <Employees />
    </Layout>
  )
}

export default Home
