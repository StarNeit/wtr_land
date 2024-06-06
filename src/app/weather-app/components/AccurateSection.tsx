import Image from "next/image";
import { ShapeAnimationBg } from "@/components";

export default function AccurateSection() {
  return (
    <section className="bg-white pt-0 pb-20 md:pb-40">
      <div className="container mx-auto flex flex-col-reverse items-center xl:grid xl:grid-cols-2 px-6">
        <div data-aos="zoom-in-right" data-aos-delay="500" className="text-primary-dark flex flex-col justify-center xl:pr-20">
          <h1 className="font-bold text-3xl md:text-5xl text-primary-light mb-10 md:leading-[60px] text-center xl:text-left">MOST ACCURATE & HYPER LOCAL WEATHER FORECASTS</h1>
          <ul className="list-disc pl-6 text-lg">
            <li className="mb-3 leading-8">Real-time weather data & hourly forecasts</li>
            <li className="mb-3 leading-8">5 & 7-day forecasts around the globe, incl . overviews of all your favorite locations</li>
            <li className="mb-3 leading-8">Daily & hourly rain amount, rain probability and what time of the day it will rain: at what time you need an umbrella</li>
            <li className="mb-3 leading-8">Sunshine hours can tell you when outdoor activities make the best sense for you</li>
          </ul>
        </div>
        <div data-aos="zoom-in-left" className="pb-20 xl:py-0">
          <ShapeAnimationBg>
            <Image
              src='/images/weather-app-2.png'
              alt='weather app'
              width={280}
              height={90}
            />
          </ShapeAnimationBg>
        </div>
      </div>
    </section>
  )
}
