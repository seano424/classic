interface Props {
  header?: string
  subheader?: string
}
export default function Headline(props: Props) {
  const {
    header = 'Some Headline Text',
    subheader = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore laborum optio amet cumque, repellendus labore eligendi laudantium voluptate expedita ipsa!',
  } = props

  return (
    <section className="container text-center gap-8 my-base px-base">
      <h2 className="h2">{header}</h2>
      <p className="p">{subheader}</p>
    </section>
  )
}
