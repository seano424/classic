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
      <ul className="flex items-center">
        <li className='relative h-20 w-80'>
          <Image
            className="object-cover"
            src="/images/salt.png"
            alt="Logo Image"
            layout='fill'
            priority
          />
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
      <ul className="hidden items-center gap-8 lg:flex text-xl font-bold">
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
