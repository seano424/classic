import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-[45rem] w-full lg:h-[50rem]">
      <div id="overlay" className="bg-black/40 absolute inset-0 z-10" />
      <Image
        className="object-cover"
        src="/images/hero.jpg"
        alt="Hero Background Image"
        layout="fill"
        priority
      />
      <div className="absolute left-0 top-0 right-0 bottom-20 z-20 flex flex-col gap-20 items-center justify-center max-w-xl mx-auto">
        <div className="text-center text-white grid gap-10">
          <h1 className='text-6xl font-serif'>Main Keywords of What They Do, And Location If Needed</h1>
          <p className='text-2xl font-light text-neutral-superlight leading-relaxed'>
            Talk about the other services they do with keywords and locations
            where they serve. Try to make this 2-3 lines tall.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
          <button className="px-12 py-5 font-bold text-xl bg-primary text-white">
            Get Started Today
          </button>
          <button className="px-12 py-5 font-bold text-xl bg-neutral text-white">
            Discover More
          </button>
        </div>
      </div>
      <div>
        <svg
          className="hidden sm:block z-20 absolute bottom-0 left-0 right-0"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="100%"
          height="100"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="rgba(255,255,255,1)"
        >
          <path d="M0 100 C40 0 60 0 100 100 Z"></path>
        </svg>
      </div>
    </section>
  )
}
