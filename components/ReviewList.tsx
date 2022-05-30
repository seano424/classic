import Image from 'next/image'
import { StarIcon } from '@heroicons/react/solid'

export default function ReviewList() {
  console.log('hello')
  const fakeReviews = new Array(10).fill('')

  return (
    <section className="container my-base">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-16">
        {fakeReviews.map((_review, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 shadow rounded px-base pb-4 lg:px-4"
          >
            <div className="relative -mt-8">
              <Image
                src="https://buildkit-v3-demo.netlify.app/images/profile.svg"
                alt="Profile Image"
                height={100}
                width={100}
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              sint neque modi expedita quam, eius distinctio praesentium
              similique nam impedit.
            </p>
            <hr className="" />
            <div className="flex justify-between">
              <div>
                <p className="p text-xs font-semibold">Firstname Lastname</p>
                <p className="p text-xs">Homeowner</p>
              </div>
              <div className="flex gap-1">
                <StarIcon className="w-3 text-orange-500" />
                <StarIcon className="w-3 text-orange-500" />
                <StarIcon className="w-3 text-orange-500" />
                <StarIcon className="w-3 text-orange-500" />
                <StarIcon className="w-3 text-orange-500" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
