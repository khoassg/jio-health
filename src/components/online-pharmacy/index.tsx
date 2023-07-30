import Image from "next/image";
import Button from "../common/button";

export default function OnlinePharmacy() {
  return (
    <div className="relative mt-0 h-[58vw]">
      <div className="absolute top-[14vw] left-0">
        <video
          loop
          muted
          playsInline
          autoPlay
          poster="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.2/assets/images/video-posters/online-pharmacy-video-poster.jpg"
          className="w-[55vw] h-[calc(55vw/1750*1080)]"
        >
          <source
            src="https://cdn.jiohealth.com/video/doctor/Pharmacy_Short_Version_LQ.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.jiohealth.com/video/doctor/Pharmacy_Short_Version_LQ.webm"
            type="video/webm"
          />
        </video>
      </div>

      <div className="absolute top-0 left-[-20px]">
        <Image
          src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.2/assets/images/online-pharmacy-video-cover.svg"
          alt="Video Cover"
          width={0}
          height={0}
          sizes="100vw"
          className="w-screen h-auto"
        />
      </div>

      <div className="absolute w-[41vw] top-[17vw] right-[5vw]">
        <p className="text-primary text-[48px] leading-[53px] font-bold">
          Your Family&apos;s Trusted <br /> Online Pharmacy
        </p>
        <div className="mt-[30px] bg-[#2320D4] w-[70px] h-[8px] rounded-[10px]"></div>

        <p className="text-[18px] leading-[24px] mt-[18px] text-[#4a4a4a] outline-0 font-normal">
          Certified medications at everyday low prices - delivered to you in 2
          hours or less.
        </p>

        <div className="mt-[16px] flex gap-[40px]">
          <div className="flex gap-2 items-center">
            <Image
              src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.2/assets/icons/delivery-icon.svg"
              width={30}
              height={30}
              alt="package icon"
            />
            <p className="text-[14px] leading-[18px] font-medium text-[#4a4a4a]">
              2 Hour Delivery
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <Image
              src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.2/assets/icons/discount-icon.svg"
              width={30}
              height={30}
              alt="discount icon"
            />
            <p className="text-[14px] leading-[18px] font-medium text-[#4a4a4a]">
              10% Savings on all Products
            </p>
          </div>
        </div>

        <div className="mt-[40px] flex gap-4 items-center">
          <Button className="text-white bg-[#1DCBB6]">Shop Now</Button>
        </div>
      </div>
    </div>
  );
}
