import {
  ColorSwatchIcon,
  CubeTransparentIcon,
  CubeIcon,
} from '@heroicons/react/solid'
export default function Services() {
  return (
    <section className="grid sm:grid-cols-3 px-base my-base gap-10 sm:gap-4">
      <div className="flex flex-col gap-2 items-center text-center">
        <div className="p-4 rounded-full bg-primary text-white w-max">
          <ColorSwatchIcon className="w-8" />
        </div>
        <h3 className="h3">Service Number One</h3>
        <p className="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ab?
          Lorem ipsum, dolor sit amet.
        </p>
      </div>
      <div className="flex flex-col gap-2 items-center text-center">
        <div className="p-4 rounded-full bg-primary text-white w-max">
          <CubeIcon className="w-8" />
        </div>
        <h3 className="h3">Service Number Two</h3>
        <p className="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ab?
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="flex flex-col gap-2 items-center text-center">
        <div className="p-4 rounded-full bg-primary text-white w-max">
          <CubeTransparentIcon className="w-8" />
        </div>
        <h3 className="h3">Service Number Three</h3>
        <p className="p">
          Lorem ipsum dolor sit amet. Maiores, ab?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
    </section>
  )
}
