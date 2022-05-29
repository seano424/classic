import {
  ColorSwatchIcon,
  CubeTransparentIcon,
  CubeIcon,
} from '@heroicons/react/solid'
export default function Services() {
  return (
    <section
      id="services"
      className="grid sm:grid-cols-3 px-base py-base my-base gap-10 sm:gap-4"
    >
      <div className="flex flex-col gap-2 items-center text-center">
        <div className="p-4 rounded-full bg-primary text-white w-max">
          <ColorSwatchIcon className="w-8" />
        </div>
        <h2 className="h2">Service Number One</h2>
        <p className="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ab? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex flex-col gap-2 items-center text-center">
        <div className="p-4 rounded-full bg-primary text-white w-max">
          <CubeIcon className="w-8" />
        </div>
        <h2 className="h2">Service Number Two</h2>
        <p className="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ab? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="flex flex-col gap-2 items-center text-center">
        <div className="p-4 rounded-full bg-primary text-white w-max">
          <CubeTransparentIcon className="w-8" />
        </div>
        <h2 className="h2">Service Number Three</h2>
        <p className="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, ab? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
    </section>
  )
}
