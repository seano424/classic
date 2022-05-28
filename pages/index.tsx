import Hero from '@/components/Hero'
import Layout from '@/components/Layout'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <div className="h-[1000px] px-base py-base">
        <h1 className="h1">Make friends.</h1>
        <h1 className="h1">Create activities.</h1>
        
        <p className='p py-base'>
          Venn means friend in Norwegian. We want to make the world more social
          even without your phone.
        </p>
      </div>
    </Layout>
  )
}

export default Home
