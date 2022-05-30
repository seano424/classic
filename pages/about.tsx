import type { NextPage } from 'next'
import Hero from '@/components/CtaOverlay'
import CtaOverlay from '@/components/CtaOverlay'
import Layout from '@/components/Layout'
import TextSideBySide from '@/components/TextSideBySide'
import CtaSideBySideFullScreen from '@/components/CtaSideBySideFullScreen'

const About: NextPage = () => {
  return (
    <Layout>
      <Hero
        image="https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
        small
        header="About"
        subheader=""
        ctaText=""
      />
      <TextSideBySide />
      <CtaSideBySideFullScreen readMoreButton={false} />
      <CtaOverlay />
    </Layout>
  )
}

export default About
