import Link from 'next/link'

interface Props {
  showMenu: boolean
}

export default function Menu(props: Props) {
  const { showMenu } = props
  return (
    <section className={`${showMenu ? 'block' : 'hidden'} lg:hidden`}>
      <ul className="absolute w-full flex flex-col border bg-neutral-superlight z-30">
        <Link href="/">
          <a className="bg-white text-primary link">Home</a>
        </Link>
        <Link href="/about">
          <a className="link">About</a>
        </Link>
        <Link href="/projects">
          <a className="link">Projects</a>
        </Link>
        <Link href="/reviews">
          <a className="link">Reviews</a>
        </Link>
        <Link href="/contact-us">
          <a className="link">Contact Us</a>
        </Link>
      </ul>
    </section>
  )
}
