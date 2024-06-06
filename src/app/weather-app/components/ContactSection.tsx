import Image from "next/image";

export default function ContactSection() {
  return (
    <section>
      <div className="container mx-auto py-12 flex flex-col items-center px-6" data-aos="fade-up" data-aos-duration="1000">
        <h1 className="text-center font-bold text-white text-2xl md:text-4xl max-w-[800px] mx-auto leading-10 md:leading-[50px] mb-4 md:mb-8">Simplicity & Accuracy At Your Fingertips. WTR - Weather Pro</h1>
        <div className="flex gap-4 mb-4 md:mb-8">
          <a href="https://play.google.com/store/apps/details?id=net.vplay.demos.apps.weatherapp&hl=en" target="_blank">
            <Image
              src='/images/google-play-icon.webp'
              alt='google icon'
              width={178}
              height={53}
            />
          </a>
          <a href="https://apps.apple.com/us/app/weather-pro-forecast-history/id1438432642" target="_blank">
            <Image
              src='/images/app-store-icon.svg'
              alt='app store icon'
              width={178}
              height={53}
            />
          </a>
        </div>
        <div className="text-lg text-center text-primary-dark font-semibold">Now available for iPhone and Android devices.</div>
      </div>
    </section>
  )
}
