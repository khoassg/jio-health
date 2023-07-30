import Image from "next/image";
import NewsCard from "./NewsCard";
import { newsIconUrls } from "./data";

export default function News() {
  return (
    <div className="h-[32vw]">
      <div className="relative h-[26vw]">
        <div className="absolute w-[24vw] top-0 left-[-20px]">
          <Image
            src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.2/assets/images/as-seen-on-news-background.svg"
            alt="News Background"
            width={0}
            height={0}
            sizes="24vw"
            className="w-[24vw] h-auto"
          />
        </div>

        <div className="absolute 2xl:top-[10vw] left-[5vw] max-w-[1200px] top-[320px] z-10">
          <div className="flex flex-wrap gap-[40px]">
            {newsIconUrls.slice(0, 3).map((iconUrl, index) => (
              <NewsCard iconUrl={iconUrl} key={index} />
            ))}
          </div>

          <div className="flex flex-wrap gap-[40px] mt-[16px]">
            {newsIconUrls.slice(3, 6).map((iconUrl, index) => (
              <NewsCard iconUrl={iconUrl} key={index} />
            ))}
          </div>

          <div className="flex flex-wrap gap-[40px] mt-[16px]">
            {newsIconUrls.slice(6, 10).map((iconUrl, index) => (
              <NewsCard iconUrl={iconUrl} key={index} />
            ))}
          </div>
        </div>

        <div className="absolute 2xl:w-[30vw] 2xl:top-[10vw] 2xl:right-[10vw] 2xl:left-[initial] w-[60vw] top-[150px] left-[5vw] right-[initial]">
          <p className="text-primary text-[48px] leading-[53px] font-bold">
            As Seen on The News
          </p>
          <div className="mt-[30px] bg-[#2320D4] w-[70px] h-[8px] rounded-[10px]"></div>

          <p className="text-[18px] leading-[24px] mt-[18px] text-[#4a4a4a] outline-0 font-normal">
            Explore what the press is saying about Jio Health and how we&apos;re
            transforming healthcare.
          </p>
        </div>
      </div>
    </div>
  );
}
