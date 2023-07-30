import Image from "next/image";
import HealthResourceCard from "./HealthResourceCard";
import { healthResourceList } from "./data";

export default function HealthResources() {
  return (
    <div className="relative h-[26vw]">
      <div className="absolute w-[60vw] right-[-20px] top-0">
        <Image
          src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.2/assets/images/health-resource-background.svg"
          alt="Health resources background"
          width={0}
          height={0}
          sizes="60vw"
          className="h-[42vw] w-auto"
        />
      </div>

      <div className="absolute w-[50vw] top-[8vw] right-0">
        <div className="ml-[30px] flex wrap mr-[-15px] gap-[36px]">
          {[...healthResourceList].splice(0, 2).map((healthResource, index) => (
            <HealthResourceCard item={healthResource} key={index} />
          ))}
        </div>

        <div className="ml-[110px] flex wrap mr-[-15px] gap-[36px] mt-[16px]">
          {[...healthResourceList].splice(2, 2).map((healthResource, index) => (
            <HealthResourceCard item={healthResource} key={index} />
          ))}
        </div>

        <div className="flex wrap mr-[-15px] gap-[36px] mt-[16px]">
          {[...healthResourceList].splice(4, 3).map((healthResource, index) => (
            <HealthResourceCard item={healthResource} key={index} />
          ))}
        </div>
      </div>

      <div className="absolute w-[40vw] top-[9vw] left-[5vw]">
        <p className="text-primary text-[48px] leading-[53px] font-bold">
          Health Resources
          <br />
          for Your Life
        </p>
        <div className="mt-[30px] bg-[#2320D4] w-[70px] h-[8px] rounded-[10px]"></div>

        <p className="text-[18px] leading-[24px] mt-[18px] text-[#4a4a4a] outline-0 font-normal">
          Trusted information for all your healthcare needs.
        </p>
      </div>
    </div>
  );
}
