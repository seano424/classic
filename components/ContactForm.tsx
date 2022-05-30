import Image from "next/image"

export default function ContactForm() {
  return (
    <section className="bg-neutral-superlight py-10">
      <div className="flex m-5 sm:m-20 sm:px-base">
        <div className="text-center flex flex-col gap-4 bg-white h-full p-5 sm:p-20">
          <h2 className="h2 mb-4">Contact Us</h2>
          <form className="flex flex-col gap-4">
            <div className="flex gap-4">
              <input
                className="input"
                type="text"
                required
                placeholder="Name*"
              />
              <input
                className="input"
                type="email"
                required
                placeholder="Email*"
              />
            </div>
            <div className="flex gap-4">
              <input
                className="input"
                type="text"
                required
                placeholder="Phone*"
              />
              <input
                className="input"
                type="text"
                required
                placeholder="Location*"
              />
            </div>
            <label className="flex p text-sm pt-4" htmlFor="message">
              Your Message
            </label>
            <textarea
              className="input"
              name="message"
              id=""
              cols={20}
              rows={5}
            ></textarea>
            <button
              className="button bg-neutral text-white mt-8 rounded-md"
              type="submit"
            >
              Contact Us
            </button>
          </form>
        </div>
        <div className="hidden lg:block bg-blue-300 w-[40rem]">
          <div className="relative h-full w-full">
            <Image
              className="object-cover"
              src="https://images.unsplash.com/photo-1606421600602-a242090b9736?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
              alt="Contact Us Form Image"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
