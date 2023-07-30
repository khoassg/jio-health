"use client";
import AppDownload from "@/components/app-download";
import Banner from "@/components/banner";
import CareServices from "@/components/care-services";
import Clinics from "@/components/clinics";
import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import Consultation from "@/components/consultation";
import DoctorsComeToYou from "@/components/doctors-come-to-you";
import HealthResources from "@/components/health-resources";
import News from "@/components/news";
import OnlinePharmacy from "@/components/online-pharmacy";
import Partners from "@/components/partners";
import Services from "@/components/services";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  return (
    <>
      {isDesktop ? (
        <div className="min-w-[1440px] overflow-auto">
          <Header />
          <main className="min-h-screen">
            <Banner />
            <Clinics />
            <Services />
            <Partners />
            <div className="px-[15px] w-full mx-auto overflow-hidden">
              <DoctorsComeToYou />
              <OnlinePharmacy />
              <CareServices />
              <Consultation />
              <HealthResources />
              <News />
              <AppDownload />
            </div>
          </main>
          <Footer />
        </div>
      ) : (
        <div className="grid place-items-center min-h-screen">
          <p className="text-[20px] font-medium text-center text-primary">
            Please use the website on a computer for the best user experience as
            the mobile version is under development.
          </p>
        </div>
      )}
    </>
  );
}
