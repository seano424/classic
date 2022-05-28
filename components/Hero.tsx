import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-[45rem] w-full lg:h-[48rem]">
      <Image
        className="object-cover"
        src="/images/hero.jpg"
        alt="Hero Background Image"
        layout="fill"
      />
      <div>
        <svg
          className="absolute bottom-0"
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
