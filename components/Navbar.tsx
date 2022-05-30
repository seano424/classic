import { Spin as Hamburger } from 'hamburger-react'
import Link from 'next/link'
import Image from 'next/image'
interface Props {
  logo?: string
  title?: string
  showMenu: boolean
  setShowMenu: (boolean: any) => void
}

export default function Navbar(props: Props) {
  const { showMenu, setShowMenu } = props
  return (
    <nav className="flex justify-between items-center w-full bg-white/50 filter backdrop-blur-sm px-base py-4">
      {/* Logo 825 X 215*/}
      {/* <Link href="/">
        <a className="relative h-full w-40 lg:w-96">
          <Image
            className="object-cover"
            src="/images/salt.png"
            alt="Logo Image"
            height={215}
            width={825}
            priority
          />
        </a>
      </Link> */}
      {/* Mobile Navigation */}
      <ul
        className="cursor-pointer select-none lg:hidden"
        onClick={() => setShowMenu(!showMenu)}
      >
        <li>
          <Hamburger
            toggled={showMenu}
            toggle={setShowMenu}
            size={20}
            duration={0.2}
            easing="ease-in"
            label="Show Menu"
          />
        </li>
      </ul>
      {/* Main Navigation */}
      <ul className="hidden items-center gap-8 lg:flex font-bold text-xl">
        <Link href="/">
          <a className="hover:text-blue-600">Home</a>
        </Link>
        <Link href="/about">
          <a className="hover:text-blue-600">About</a>
        </Link>
        <Link href="/projects">
          <a className="hover:text-blue-600">Projects</a>
        </Link>
        <Link href="/reviews">
          <a className="hover:text-blue-600">Reviews</a>
        </Link>
        <Link href="/contact-us">
          <a className="hover:text-blue-600">Contact Us</a>
        </Link>
      </ul>
    </nav>
  )
}
