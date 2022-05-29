import { Spin as Hamburger } from 'hamburger-react'
import Link from 'next/link'
interface Props {
  logo?: string
  title?: string
  showMenu: boolean
  setShowMenu: (boolean: any) => void
}

export default function Navbar(props: Props) {
  const { logo, title, showMenu, setShowMenu } = props
  return (
    <nav className="flex justify-between items-center w-full bg-white/50 filter backdrop-blur-sm px-base py-8">
      <ul className="flex items-center">
        <li className="flex items-center gap-2 text-4xl font-serif capitalize font-bold">
          <span className="text-6xl">{logo}</span>
          <span className="max-w-sm">{title}</span>
        </li>
      </ul>
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
      <ul className="hidden items-center gap-16 lg:flex text-lg">
        <Link href="/">
          <a className="text-primary">Home</a>
        </Link>
        <Link href="/">
          <a className="">About</a>
        </Link>
        <Link href="/">
          <a className="">Services</a>
        </Link>
        <Link href="/">
          <a className="">Investors</a>
        </Link>
        <Link href="/">
          <a className="">News</a>
        </Link>
        <Link href="/">
          <a className="">Contact Us</a>
        </Link>
      </ul>
    </nav>
  )
}
