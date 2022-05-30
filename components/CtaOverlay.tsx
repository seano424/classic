import Image from 'next/image'

interface Props {
  header?: string
  subheader?: string
  ctaText?: string
  small?: boolean
  image?: string
}

export default function CtaOverlay(props: Props) {
  const {
    header = 'Get it done with us today',
    subheader = 'Talk about the other services they do with keywords and locations where they serve. Try to make this 2-3 lines tall.',
    ctaText = 'Get an estimate now',
    small,
    image = '/images/hero.jpg',
  } = props
  return (
    <section className={`relative w-full ${small ? 'h-[24rem]' : 'h-[30rem]'}`}>
      <div id="overlay" className="bg-black/30 absolute inset-0 z-10" />
      <Image
        className="object-cover"
        src={image}
        alt="Hero Background Image"
        layout="fill"
      />
      <div className="absolute left-0 top-0 right-0 bottom-0 z-20 container">
        <div className="text-center text-white grid gap-10">
          <h2 className="h2 font-bold max-w-sm capitalize mx-auto">{header}</h2>
          {subheader && (
            <p className="p text-neutral-superlight leading-relaxed max-w-lg">
              {subheader}
            </p>
          )}
        </div>
        {ctaText && (
          <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
            <button className="button bg-primary text-neutral">
              {ctaText}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
