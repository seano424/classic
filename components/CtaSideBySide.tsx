import Image from 'next/image'

export default function CtaSideBySide() {
  return (
    <section className="relative">
      <div className="grid md:grid-cols-2">
        <div className="bg-primary-light flex flex-col justify-center gap-8 p-16">
          <p className="p uppercase text-neutral">
            Ensuring your systems are optimal
          </p>
          <h2 className="h2 capitalize">
            Our Software Is Quick, Lean, and Market-focused.
          </h2>
          <p className="p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            hic nobis laboriosam nesciunt amet dicta totam dolorem nihil, ex
            quasi.
          </p>
        </div>
        <div className="relative w-full h-[45rem]">
          <Image
            className="object-cover"
            src="/images/people.jpeg"
            alt="Unsplash Image"
            layout="fill"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse md:grid md:grid-cols-2">
        <div className="relative w-full h-[45rem]">
          <Image
            className="object-cover"
            src="/images/architecture.jpeg"
            alt="Unsplash Image"
            layout="fill"
          />
        </div>
        <div className="bg-primary-light flex flex-col justify-center gap-8 p-16">
          <p className="p uppercase text-neutral">
            Ensuring your systems are optimal
          </p>
          <h2 className="h2 capitalize">
            Our Software Is Quick, Lean, and Market-focused.
          </h2>
          <p className="p">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
            hic nobis laboriosam nesciunt amet dicta totam dolorem nihil, ex
            quasi.
          </p>
        </div>
      </div>
      <button className="button bg-primary hover:text-white w-full py-12 absolute bottom-0 md:static">
        Read More About Us
      </button>
    </section>
  )
}
