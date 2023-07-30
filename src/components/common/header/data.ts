import DentalCareIcon from "@/assets/images/header/dentistry.svg";
import EnIcon from "@/assets/images/header/en.png";
import GeneralCareIcon from "@/assets/images/header/general_care.svg";
import GynecologyIcon from "@/assets/images/header/gynecology.svg";
import OBGYNIcon from "@/assets/images/header/maternity.svg";
import PediatricsIcon from "@/assets/images/header/pediatrics.svg";
import VaccineIcon from "@/assets/images/header/vaccine_consultation.svg";
import ViIcon from "@/assets/images/header/vi.png";

export const ClinicalSpecialties = [
  {
    icon: GeneralCareIcon.src,
    title: "General Care",
  },
  {
    icon: PediatricsIcon.src,
    title: "Pediatrics",
  },
  {
    icon: VaccineIcon.src,
    title: "Vaccine Consultations",
  },
  {
    icon: OBGYNIcon.src,
    title: "OBGYN",
  },
  {
    icon: GynecologyIcon.src,
    title: "Gynecology",
  },
  {
    icon: DentalCareIcon.src,
    title: "Dental Care",
  },
];

export const Languages = [
  {
    title: "Tiếng Việt",
    value: "Vi",
    icon: ViIcon.src,
  },
  {
    title: "English",
    value: "En",
    icon: EnIcon.src,
  },
];
