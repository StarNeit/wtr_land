import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="h-[800px] sm-x:h-screen w-full sm:pt-20 pt-10">
      <div className="container mx-auto pt-10 flex flex-col items-center px-6">
        <h1 className="text-3xl sm-x:text-4xl sm:text-6xl lg:text-8xl font-bold text-primary-light mb-2 text-center" data-aos="fade-up">WTR - Weather Pro</h1>
        <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-8 text-center" data-aos="fade-up">Simplicity & Accuracy At Your Fingertips.</p>

        <div className="max-w-[900px] text-center text-xl mb-8" data-aos="fade-up" data-aos-delay="300">
          <div className="text-white mb-6">
            <b>Most accurate, hourly weather forecasts & historic data for the last 60 years:</b>
            <p>WTR Weather Pro is your new partner on to go to plan your day!</p>
          </div>
          <p className="text-white">Choose your favorite weather data provider! You can choose between MetGIS and PirateWeather, to get the most accurate information for your location.</p>
          <p className="text-white">Get  WTR Weather Pro now, it&apos;s free!</p>
        </div>
        <div className="flex gap-4 mb-10 sm:mb-20">
          <a data-aos="flip-left" data-aos-delay="400" href="https://play.google.com/store/apps/details?id=net.vplay.demos.apps.weatherapp&hl=en" target="_blank">
            <Image
              src='/images/google-play-icon.webp'
              alt='google icon'
              width={178}
              height={53}
            />
          </a>
          <a data-aos="flip-left" data-aos-delay="400" href="https://apps.apple.com/us/app/weather-pro-forecast-history/id1438432642" target="_blank">
            <Image
              src='/images/app-store-icon.svg'
              alt='app store icon'
              width={178}
              height={53}
            />
          </a>
        </div>

        <div className="w-full flex justify-center" data-aos="zoom-in" data-aos-delay="500">
          <iframe
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:w-[970px] lg:h-[546px]"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            src="https://www.youtube.com/embed/VinJJCNqUh4?enablejsapi=1&amp;origin=https://felgo.com"
            data-service="youtube"
            frameBorder="0"
            data-lf-yt-playback-inspected-kn9eq4rlj5y8rlvp="true"
            data-lf-vimeo-playback-inspected-kn9eq4rlj5y8rlvp="true"
            data-lf-yt-playback-inspected-xbp1oae213n8edvj="true"
            data-lf-vimeo-playback-inspected-xbp1oae213n8edvj="true"
            data-gtm-yt-inspected-2061471_44="true"
            id="729237598"
            title="WTR - Weather Pro"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
