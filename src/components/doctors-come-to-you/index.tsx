import Image from "next/image";
import Button from "../common/button";

export default function DoctorsComeToYou() {
  return (
    <div className="ml-[5vw]">
      <div className="relative h-[51vw]">
        <div className="absolute top-0 right-[-20px]">
          <video
            className="w-[calc(65vw-3px)] h-[calc(65vw)/1500*1800] object-contain overflow-clip"
            loop
            playsInline
            muted
            autoPlay
            poster="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.2/assets/images/video-posters/doctors-come-to-you-video-poster.jpg"
          >
            <source
              src="https://cdn.jiohealth.com/video/doctor/Our_Doctors_Come_to_You_Short_Ver_LQ.mp4"
              type="video/mp4"
            />
            <source
              src="https://cdn.jiohealth.com/video/doctor/Our_Doctors_Come_to_You_Short_Ver_LQ.webm"
              type="video/webm"
            />
          </video>
        </div>

        <div className="absolute top-0 right-[-20px]">
          <Image
            src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.2/assets/images/doctors-come-to-you-video-cover.svg"
            alt="Video Cover"
            width={0}
            height={0}
            sizes="67vw"
            className="w-[67vw] h-auto"
          />
        </div>

        <div className="absolute top-[21vw] left-0">
          <p className="text-primary text-[48px] leading-[53px] font-bold">
            Out Doctors <br /> Come to You
          </p>
          <div className="mt-[30px] bg-[#2320D4] w-[70px] h-[8px] rounded-[10px]"></div>

          <p className="text-[18px] leading-[24px] mt-[18px] text-[#4a4a4a] outline-0 font-normal">
            <span className="font-medium">Home visits</span> starting only{" "}
            <b>400.000&nbsp;₫</b>
          </p>

          <div className="mt-[40px] flex gap-4 items-center">
            <Button className="text-white bg-[#1DCBB6]">Book Home Visit</Button>
            <Button className="text-white bg-[#2320D4]">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
