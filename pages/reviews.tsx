import type { NextPage } from 'next'
import Hero from '@/components/CtaOverlay'
import CtaOverlay from '@/components/CtaOverlay'
import Layout from '@/components/Layout'
import ReviewList from '@/components/ReviewList'

const Reviews: NextPage = () => {
  return (
    <Layout>
      <Hero
        image="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
        small
        header="Our Reviews"
        subheader=""
        ctaText=""
      />
      <ReviewList />
      <CtaOverlay />
    </Layout>
  )
}

export default Reviews
