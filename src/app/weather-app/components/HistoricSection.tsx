import { ShapeAnimationBg } from "@/components";
import Image from "next/image";

export default function HistoricSection() {
  return (
    <section className="bg-white pb-20 md:pb-40">
      <div className="container mx-auto flex flex-col items-center xl:grid xl:grid-cols-2 px-6">
        <div data-aos="zoom-in-right" className="pt-10 pb-20 xl:py-0">
          <ShapeAnimationBg>
            <Image
              src='/images/weather-app-3.png'
              alt='weather app'
              width={280}
              height={90}
            />
          </ShapeAnimationBg>
        </div>
        <div className="text-primary-dark flex flex-col justify-center xl:pl-20" data-aos="zoom-in-left">
          <h1 className="font-bold text-3xl md:text-5xl text-primary-light md:leading-[60px] text-center xl:text-left">60 YEARS OF HISTORIC WEATHER</h1>
          <h1 className="font-bold text-3xl md:text-5xl text-primary-light mb-10 md:leading-[60px] text-center xl:text-left">DATA:</h1>
          <ul className="list-disc pl-6 text-lg">
            <li className="mb-3 leading-8">
              What’s the best time to go on a city trip or on vacation? Find out what the weather was like in the past at your location, e.g. how was the weather in Paris in July 2018, 2017, 2016? How much does it rain in Bali in September and shall I go there for a holiday?
            </li>
            <li className="mb-3 leading-8">
              Which place is the best to go to a specific month of the year? E.g. what was the weather & snow like in a skiing region the last few years? What is the best time to go to Aspen for skiing?
            </li>
            <li className="mb-3 leading-8">Check the weather timeline for your birthday!</li>
            <li className="mb-3 leading-8">See how the weather changed in the past years in your town!</li>
            <li className="mb-3 leading-8">Was it really cooler in the 70s? What about the summer of ‘69?</li>
            <li className="mb-3 leading-8">Weather calendar / almanac feature with historical data for an entire 60 years time frame</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
