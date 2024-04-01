import Image from "next/image";
import heroimg from "../../public/images/heroimg.webp";

const Hero = () => {
  return (
    <>
      <div className="w-screen flex flex-col md:flex-row gap-10 md:gap-72 h-auto px-2 md:px-8 pt-32 md:h-screen m-auto justify-stretch sm:h-auto">
        <div className="flex flex-col gap-4 md:gap-8 md:w-[30vw] w-full">
          <h1 className="md:text-6xl text-neutral-900 font-semibold text-3xl">
            A designer and developer—helping people shape digital products and
            visual systems.
          </h1>
          <p className="md:text-xl text-neutral-900">
            I&apos;m a Jakarta-based designer specializing in interrelating
            humans and technology through reductive design and code. Over the
            last decade, I&apos;ve had the pleasure of helping people build
            companies, develop brands, and digital products with a focus on
            simplicity, usability, and scalability.
          </p>
          <p className="md:text-xl text-neutral-900">
            Find me elsewhere on the web:{" "}
            <span className="underline-offset-4 hover:underline">
              <a target="_blank" href="https://instagram.com/rezaptrk">Instagram</a>
            </span>
            ,{" "}
            <span className="underline-offset-4 hover:underline">
              <a target="_blank" href="https://www.linkedin.com/in/rezzadtyp/">LinkedIn</a>
            </span>{" "}
            or email me at{" "}
            <span className="underline-offset-4 hover:underline">
              <a target="_blank" href="mailto:rezzadityap@gmail.com">rezzadityap@gmail.com</a>
            </span>
            .
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-[400px]">
          <div className="md:h-[600px] overflow-hidden">
            <Image
              src={heroimg}
              alt="hero"
              className="hover:grayscale hover:scale-[1.1] transition-all duration-500 object-cover h-full"
            />
          </div>
          <p>
            Outside of my day-to-day, I enjoy traveling, food, pop-punk music
            and taking photos with my pocket camera-phone.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
