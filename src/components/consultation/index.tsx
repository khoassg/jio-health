import Image from "next/image";

export default function Consultation() {
  return (
    <div className="relative h-[48vw]">
      <div className="absolute top-0 left-[-20px]">
        <Image
          src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.2/assets/images/new-24-7-video-chat.png"
          alt="video-chat"
          width={0}
          height={0}
          sizes="85vw"
          className="w-[85vw] h-auto"
        />
      </div>

      <div className="absolute w-[40vw] top-[9vw] right-[2vw]">
        <p className="text-primary text-[48px] leading-[53px] font-bold">
          24/7 Video & Chat
          <br /> Consultation
        </p>
        <div className="mt-[30px] bg-[#2320D4] w-[70px] h-[8px] rounded-[10px]"></div>

        <p className="text-[18px] leading-[24px] mt-[18px] text-[#4a4a4a] outline-0 font-normal">
          Connect to our experienced team of specialists anytime, anywhere and
          get immediate medical advice via video consultations and care chat.
        </p>

        <div className="mt-[16px] flex gap-[40px]">
          <div className="flex gap-2 items-center">
            <Image
              src="	https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.2/assets/icons/video-icon.svg"
              width={30}
              height={30}
              alt="camera icon"
            />
            <p className="text-[14px] leading-[18px] font-medium text-[#4a4a4a]">
              Video Call with Doctors
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <Image
              src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.2/assets/icons/chat-icon.svg"
              width={30}
              height={30}
              alt="chat icon"
            />
            <p className="text-[14px] leading-[18px] font-medium text-[#4a4a4a]">
              Chat with Care Professionals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
