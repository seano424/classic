import type { NextPage } from 'next'
import Hero from '@/components/CtaOverlay'
import CtaOverlay from '@/components/CtaOverlay'
import Layout from '@/components/Layout'
import Masonry from '@/components/Masonry'

const Projects: NextPage = () => {
  return (
    <Layout>
      <Hero
        image="https://images.unsplash.com/photo-1624066970160-a7177aa3d010?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
        small
        header="Our Projects"
        subheader=""
        ctaText=""
      />
      <Masonry />
      <CtaOverlay />
    </Layout>
  )
}

export default Projects
