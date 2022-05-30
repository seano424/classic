import type { NextPage } from 'next'
import Hero from '@/components/CtaOverlay'
import CtaOverlay from '@/components/CtaOverlay'
import Layout from '@/components/Layout'
import CtaGridCenter from '@/components/CtaGridCenter'
import { directors } from 'lib/seeds'
import Headline from '@/components/Headline'
import TextSideBySide from '@/components/TextSideBySide'
import ContactForm from '@/components/ContactForm'

const Projects: NextPage = () => {
  return (
    <Layout>
      <Hero
        image="https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        small
        header="Contact Us"
        subheader=""
        ctaText=""
      />
      <ContactForm />
      <TextSideBySide />
      <CtaOverlay />
      <Headline header="Our Directors" />
      <CtaGridCenter people={directors} />
    </Layout>
  )
}

export default Projects
