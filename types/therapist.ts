import type { StaticImageData } from "next/image";

export interface Therapist {
  id: string;
  name: string;
  image?: StaticImageData;
  imageAlt: string;
  identity?: string;
  languages: string[];
  availability: ("in-person" | "telehealth")[];
  therapies: string[];
  specialties: string[];
}
