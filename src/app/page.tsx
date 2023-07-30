import AppDownload from "@/components/app-download";
import Banner from "@/components/banner";
import CareServices from "@/components/care-services";
import Clinics from "@/components/clinics";
import Consultation from "@/components/consultation";
import DoctorsComeToYou from "@/components/doctors-come-to-you";
import HealthResources from "@/components/health-resources";
import News from "@/components/news";
import OnlinePharmacy from "@/components/online-pharmacy";
import Partners from "@/components/partners";
import Services from "@/components/services";

export default function Home() {
  return (
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
  );
}
