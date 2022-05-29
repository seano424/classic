import Image from 'next/image'

export default function About() {
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
            src="https://images.unsplash.com/photo-1560250056-07ba64664864?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2051&q=80"
            alt="Unsplash Image"
            layout="fill"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse md:grid md:grid-cols-2">
        <div className="relative w-full h-[45rem]">
          <Image
            className="object-cover"
            src="https://images.unsplash.com/photo-1530054221884-f6a6f5e699dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
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
      <button className="button bg-primary hover:text-white w-full py-12 hover:bg-blue-500 transition-all duration-100 ease-linear absolute bottom-0 md:static">
        Read More About Us
      </button>
    </section>
  )
}
