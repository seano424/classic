interface Props {
  header?: string
  subheader?: string
  body?: string
}

export default function TextSideBySide(props: Props) {
  const {
    header = 'Welcome to classic theme',
    subheader = 'Classic Theme Is The Perfect Choice For Your Business Software Needs.',
    body = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit aperiam tempora repudiandae neque repellendus. Suscipit maiores deserunt dolor. Labore, iste?',
  } = props
  return (
    <section className="container gap-5 my-base px-base sm:px-0">
      <p className="p uppercase text-left w-full text-blue-600">{header}</p>
      <div className="flex flex-col gap-5 sm:flex-row sm:gap-20 items-center">
        <h3 className="h3 font-sans font-light md:text-4xl">{subheader}</h3>
        <p className="p font-light font-sans">{body}</p>
      </div>
    </section>
  )
}
