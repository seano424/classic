import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-[45rem] w-full lg:h-[47rem]">
      <div id="overlay" className="bg-black/40 absolute inset-0 z-10" />
      <Image
        className="object-cover"
        src="/images/hero.jpg"
        alt="Hero Background Image"
        layout="fill"
        priority
      />
      <div className="absolute left-0 top-0 right-0 bottom-20 z-20 flex flex-col gap-20 items-center justify-center mx-auto max-w-lg sm:max-w-xl md:max-w-4xl">
        <div className="text-center text-white grid gap-10">
          <h1 className='h1'>Main Keywords of What They Do, And Location If Needed</h1>
          <h2 className='h2 text-neutral-superlight leading-relaxed'>
            Talk about the other services they do with keywords and locations
            where they serve. Try to make this 2-3 lines tall.
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
          <button className="button bg-primary text-neutral">
            Get Started Today
          </button>
          <button className="button bg-neutral text-white">
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
