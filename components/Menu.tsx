import Link from 'next/link'

interface Props {
  showMenu: boolean
}

export default function Menu(props: Props) {
  const { showMenu } = props
  return (
    <section className={`${showMenu ? 'block' : 'hidden'} lg:hidden`}>
      <ul className="absolute w-full flex flex-col border bg-neutral-superlight z-10">
        <Link href="/">
          <a className="bg-white text-primary link">
            Home
          </a>
        </Link>
        <Link href="/">
          <a className="link">
            About
          </a>
        </Link>
        <Link href="/">
          <a className="link">
            Services
          </a>
        </Link>
        <Link href="/">
          <a className="link">
            Investors
          </a>
        </Link>
        <Link href="/">
          <a className="link">
            News
          </a>
        </Link>
        <Link href="/">
          <a className="link">
            Contact Us
          </a>
        </Link>
      </ul>
    </section>
  )
}
