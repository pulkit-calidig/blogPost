import HeaderImage from "../assets/images/Header.jpg"
import WritterImage from "../assets/images/Writter.jpg"

export const Header = () => {
  return (
    <section className="grid grid-cols-1 gap-8 p-6">
      {/* blog title */}
      <div className="flex justify-center">
        <h1 className="font-Playful text-center text-black text-2xl md:text-3xl lg:text-4xl max-w-[25ch] tracking-wide font-semibold">
          Why Customisable Hampers Are the Perfect Father&apos;s Day Gift{" "}
        </h1>
      </div>

      {/* blog writter */}
      <div className="flex gap-6 items-center justify-center">
        <img
          className="rounded-full w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
          src={WritterImage}
          alt="Blog's Writter"
        />
        <div className="font-Merriweather text-sm lg:text-lg">
          <p className="text-neutral-600">John Doe</p>
          <p className="text-neutral-500 font-serif">21 Aug 2024</p>
        </div>
      </div>

      {/* blog main image */}
      <div className="rounded-md lg:w-full lg:max-h-[35rem] bg-gradient-to-r from-neutral-400 via-neutral-500 to-neutral-800">
        <img
          className="rounded-md lg:w-full lg:max-h-[35rem] mix-blend-overlay object-cover"
          src={HeaderImage}
          alt="Heading Image"
        />
      </div>

      {/* some info if available */}
      {/* <div className="flex justify-center">
        <p className="font-Merriweather text-sm md:text-base text-neutral-500 max-w-[60ch] line-clamp-3 md:line-clamp-none hover:line-clamp-none">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          inventore iure obcaecati, ipsum dolores exercitationem, cupiditate
          magni, reiciendis aperiam quam repellendus expedita vel sed voluptate.
          Natus earum mollitia similique nulla.
        </p>
      </div> */}

      {/* links */}
      {/* need to think how to put all those links here */}
    </section>
  )
}
