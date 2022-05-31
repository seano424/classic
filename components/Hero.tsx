import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative w-full h-[50rem]">
      <div id="overlay" className="bg-black/40 absolute inset-0 z-10" />
      <Image
        className="object-cover"
        src="/images/hero.jpg"
        alt="Hero Background Image"
        layout="fill"
        priority
      />
      <div className="absolute left-0 top-0 right-0 bottom-20 z-20 sm:container flex flex-col justify-center">
        <div className="text-center text-white grid sm:gap-10 px-base py-base">
          <h1 className="h1 pb-4 sm:pb-0">
            Main Keywords of What They Do, And Location If Needed
          </h1>
          <p className="h3 text-neutral-superlight leading-relaxed">
            Talk about the other services they do with keywords and locations
            where they serve. Try to make this 2-3 lines tall.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-8 sm:flex-row">
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
