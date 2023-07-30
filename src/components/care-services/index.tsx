import Image from "next/image";
import Button from "../common/button";

export default function CareServices() {
  return (
    <div className="mt-[-275px] mr-[-20px] ml-[5vw]">
      <div className="relative h-[60vw]">
        <div className="absolute w-[55vw] top-0 right-0">
          <Image
            src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.2/assets/images/not-feeling-well.svg"
            alt="Medical Tool"
            width={0}
            height={0}
            sizes="55vw"
            className="h-[55vw] w-auto"
          />
        </div>

        <div className="absolute w-[40vw] top-[22vw] left-0">
          <p className="text-primary text-[48px] leading-[53px] font-bold">
            Not Feeling Well?
            <br /> We Can Help.
          </p>
          <div className="mt-[30px] bg-[#2320D4] w-[70px] h-[8px] rounded-[10px]"></div>

          <p className="text-[18px] leading-[24px] mt-[18px] text-[#4a4a4a] outline-0 font-normal">
            Learn about Jio's wide variety of care services, from helping with a
            simple cold to long term chronic disease management.
          </p>

          <div className="mt-[16px] flex gap-[40px]">
            <div className="flex gap-2 items-center">
              <Image
                src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.2/assets/icons/stethoscope-icon.svg"
                width={30}
                height={30}
                alt="medical icon"
              />
              <p className="text-[14px] leading-[18px] font-medium text-[#4a4a4a]">
                Home Doctor & Nursing Services
              </p>
            </div>

            <div className="flex gap-2 items-center">
              <Image
                src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.2/assets/icons/lab-icon.svg"
                width={30}
                height={30}
                alt="lab icon"
              />
              <p className="text-[14px] leading-[18px] font-medium text-[#4a4a4a]">
                Home Lab Collection
              </p>
            </div>
          </div>

          <div className="mt-[40px] flex gap-4 items-center">
            <Button className="text-white bg-[#1DCBB6]">
              Explore Care Services
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
