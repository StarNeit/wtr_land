import { ShapeAnimationBg } from "@/components";
import Image from "next/image";

export default function UsabilitySection() {
  return (
    <section className="bg-white pt-20 xl:pt-64 pb-40">
      <div className="container mx-auto flex flex-col items-center xl:grid xl:grid-cols-2 px-6">
        <div data-aos="zoom-in-right" className="pt-10 pb-20 xl:py-0">
          <ShapeAnimationBg>
            <Image
              src='/images/weather-app-1.png'
              alt='weather app'
              width={280}
              height={90}
            />
          </ShapeAnimationBg>
        </div>
        <div className="text-primary-dark flex flex-col justify-center xl:pl-20" data-aos="zoom-in-left" data-aos-delay="400">
          <h1 className="font-bold text-3xl md:text-5xl text-primary-light mb-10 md:leading-[60px] text-center xl:text-left">FOCUS ON USABILITY & SIMPLICITY</h1>
          <ul className="list-disc pl-6 text-lg">
            <li className="mb-3 leading-8">Weather forecast from all favorite cities and locations in one screen! No clicking through multiple screens and charts to get the most relevant info</li>
            <li className="mb-3 leading-8">5 & 7 day forecasts for all your favorite locations on a single page</li>
            <li className="mb-3 leading-8">Clean interface with the most important info at a glance</li>
          </ul>

          <p className="text-lg leading-8 text-center xl:text-left">
            Choose your favorite weather data provider! You can choose between MetGIS and PirateWeather, to get the most accurate information for your location.
          </p>
        </div>
      </div>
    </section>
  )
}
