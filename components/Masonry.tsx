import Image from 'next/image'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1619645195119-82a608af08e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXJjaGl0ZWN0dXJlJTIwZGVzaWdufGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    src: 'https://images.unsplash.com/photo-1542711490-65503bcd769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXJjaGl0ZWN0dXJlJTIwZGVzaWdufGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=1400&q=60',
  },
  {
    src: 'https://images.unsplash.com/photo-1606064979325-2ef27740a089?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXJjaGl0ZWN0dXJlJTIwZGVzaWdufGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=1400&q=60',
  },
  {
    src: 'https://images.unsplash.com/photo-1524190764808-ec02814a854e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFyY2hpdGVjdHVyZSUyMGRlc2lnbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=1400&q=60',
  },
  {
    src: 'https://images.unsplash.com/photo-1518871886039-9597decd52af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGFyY2hpdGVjdHVyZSUyMGRlc2lnbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=1400&q=60',
  },
  {
    src: 'https://images.unsplash.com/photo-1482053450283-3e0b78b09a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGFyY2hpdGVjdHVyZSUyMGRlc2lnbnxlbnwwfDF8MHx8&auto=format&fit=crop&w=1400&q=60',
  },
]

export default function Masonry() {
  return (
    <section className="my-base container">
      <div className="masonry sm:masonry-sm lg:masonry-md gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className=
              {`relative break-inside mb-4 w-96 sm:w-64 md:w-[24rem] 
                ${
                  i % 3 === 0 ? 'lg:h-[40rem]' : 'lg:h-[30rem]'
                }
                ${
                  i % 2 === 0 ? 'h-[25rem] md:h-[40rem]' : 'h-[20rem] md:h-[30rem]'
                }
              `}
          >
            <Image
              className="object-cover rounded"
              src={img.src}
              alt="Project Image"
              layout="fill"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
