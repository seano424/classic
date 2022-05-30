import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/solid'

export default function CtaSideBySide() {
  return (
    <section className="container flex flex-col-reverse md:grid md:grid-cols-2 my-base">
      <div className="flex flex-col items-center text-center gap-12">
        <div className="bg-primary p-8 rounded-full w-max">
          <HeartIcon className="w-12 text-white" />
        </div>
        <h2 className="h2">A Place Where People Enjoy Working.</h2>
        <p className="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quo
          voluptatibus fuga sed officia eligendi exercitationem amet soluta
          perspiciatis unde!
        </p>
      </div>
      <div className="relative h-96 md:h-full w-full">
        <Image
          className="object-cover"
          src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          alt="Unsplash Image"
          layout="fill"
        />
      </div>
    </section>
  )
}
