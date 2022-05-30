import Image from 'next/image'
import { ChevronRightIcon } from '@heroicons/react/solid'

export default function CtaGrid() {
  return (
    <section className="my-base container gap-10">
      <div className="flex justify-between w-full">
        <h3 className="h3">Latest News</h3>
        <p className="flex items-center ">
          View all <ChevronRightIcon className="w-4" />
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-16 lg:grid-cols-3">
        <div>
          <div className="relative h-64 w-full">
            <Image
              src="https://images.unsplash.com/photo-1653875063110-77ed0dba0af6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80"
              alt="Blog Image"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="grid gap-4 py-base">
            <p className="p font-black">Some Title</p>
            <p className="p">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
              itaque doloribus fugit illum ab dolorem harum fugiat quis quidem
              obcaecati.
            </p>
            <a href="/" className="">
              Continue Reading
            </a>
          </div>
        </div>
        <div>
          <div className="relative h-64 w-full">
            <Image
              src="https://images.unsplash.com/photo-1572566201797-81b5e325dd6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt="Blog Image"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="grid gap-4 py-base">
            <p className="p font-black">Some Title</p>
            <p className="p">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
              itaque doloribus fugit illum ab dolorem harum fugiat quis quidem
              obcaecati.
            </p>
            <a href="/" className="">
              Continue Reading
            </a>
          </div>
        </div>
        <div>
          <div className="relative h-64 w-full">
            <Image
              src="https://images.unsplash.com/photo-1653639012907-65e07772aab0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=985&q=80"
              alt="Blog Image"
              layout="fill"
              className="object-cover"
            />
          </div>
          <div className="grid gap-4 py-base">
            <p className="p font-black">Some Title</p>
            <p className="p">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
              itaque doloribus fugit illum ab dolorem harum fugiat quis quidem
              obcaecati.
            </p>
            <a href="/" className="">
              Continue Reading
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
