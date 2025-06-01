import { MovingBorderBtn } from "@/components/ui/moving-border";
import Link from "next/link";
import Title from "./Title";

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] w-full flex flex-col-reverse lg:flex-row items-center justify-between px-6 sm:px-12 py-16">
      {/* LEFT CONTENT */}
      <div className="flex flex-col items-center lg:items-start gap-8 text-center lg:text-left max-w-xl">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-green-400 to-indigo-500 bg-clip-text text-transparent">
          Hello! I am Chandrika
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
          Building the web one pixel at a time. A self-taught developer from India on a mission to craft elegant, high-performance experiences.
        </p>

        <div className="flex gap-4">
          <Link href="mailto:chetankesare06@gmail.com" className="group">
            <Title text="Let's Connect " />
          </Link>

          <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
            <p>Available for Work</p>
          </MovingBorderBtn>
        </div>
      </div>

      {/* RIGHT DECORATION WITH ANIMATION */}
      <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative animate-float-slow">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;