import FacebookLogo from "@/assets/images/footer/facebook.png";
import InstagramLogo from "@/assets/images/footer/instagram.png";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-[#242a61] py-[85px] w-full">
      <div className="mx-auto max-w-[1200px] w-full">
        <div>
          <Image
            src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.2/assets/images/footer-logo-white.svg"
            alt="Footer logo"
            width={270}
            height={40}
          />
        </div>
        <div className="mt-[30px] flex">
          <div className="max-w-[41.67%] w-full flex flex-col gap-2">
            <p className="text-[14px] text-white font-bold">
              Hotline <span className="font-normal">1900636893</span>
            </p>
            <p className="text-[14px] text-white font-bold">
              Email <span className="font-normal">support@jiohealth.com</span>
            </p>
            <p className="text-[14px] text-white font-normal">
              Copyright © 2017-2023 Rai and Rohl Technologies, Inc. All rights
              reserved.
            </p>
          </div>

          <div className="max-w-[16.67%] w-full flex flex-col gap-2">
            <p className="text-[14px] text-white font-bold">Services</p>
            <p className="text-[14px] text-white font-normal">
              Doctor Home Visit
            </p>
            <p className="text-[14px] text-white font-normal">
              Jio Online Pharmacy
            </p>
            <p className="text-[14px] text-white font-normal">Jio Prime</p>
          </div>

          <div className="max-w-[16.67%] w-full flex flex-col gap-2">
            <p className="text-[14px] text-white font-bold">Learn More</p>
            <p className="text-[14px] text-white font-normal">Our Doctors</p>
            <p className="text-[14px] text-white font-normal">Care Services</p>
            <p className="text-[14px] text-white font-normal">For Press</p>
            <p className="text-[14px] text-white font-normal">Recruitment</p>
          </div>

          <div className="max-w-[25%] w-full flex flex-col gap-2">
            <p className="text-[14px] text-white font-bold">Customer Support</p>
            <p className="text-[14px] text-white font-normal">FAQs</p>
            <p className="text-[14px] text-white font-normal">
              Confidentiality Policies
            </p>
            <p className="text-[14px] text-white font-normal">Contact</p>
          </div>
        </div>

        <div className="mt-[30px] border-solid border-t-[1px] border-[#4a4a4a]">
          <div className="pt-[30px] flex">
            <div className="flex-1  flex flex-col gap-2">
              <p className="text-[14px] text-white font-bold">
                JIO HEALTH POLYCLINIC COMPANY LIMITED
              </p>
              <p className="text-[14px] text-white font-bold">
                Licence No.{" "}
                <span className="font-normal">
                  {" "}
                  0309145924, first registered on 06/07/2009, sixth amended on
                  11/09/2019, issued by Department of Planning and Investment of
                  Ho Chi Minh city.
                </span>
              </p>
            </div>

            <div className="max-w-[33.33%] w-full  flex flex-col gap-2">
              <p className="text-[14px] text-white font-bold">Address</p>
              <p className="text-[14px] text-white font-normal">
                Jio Smart Clinic <br /> mPlaza, 39 Le Duan, Ben Nghe Ward,
                District 1, Ho Chi Minh city, Vietnam
              </p>
              <p className="text-[14px] text-white font-bold">Stay in touch</p>

              <div className="flex gap-2">
                <Image
                  src={FacebookLogo.src}
                  width={30}
                  height={30}
                  alt="Facebook icon"
                  className="cursor-pointer"
                />

                <Image
                  src={InstagramLogo.src}
                  width={30}
                  height={30}
                  alt="Instagram icon"
                  className="cursor-pointer"
                />
              </div>
            </div>

            <div className="max-w-[25%] w-full">
              <Image
                src="https://cdn.jiohealth.com/jio-website/home-page/jio-website-v2.2/assets/images/dathongbao.png"
                width={160}
                height={61}
                alt="Bo Cong Thuong"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
