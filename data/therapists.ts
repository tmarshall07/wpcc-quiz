import type { Therapist } from "@/types/therapist";

import emmaHeadshot from "@/assets/images/heashots/Emma.jpg";
import anthonyHeadshot from "@/assets/images/heashots/Anthony.jpg";
import dianaHeadshot from "@/assets/images/heashots/Diana.jpg";
import zoeHeadshot from "@/assets/images/heashots/Zoe.jpg";
import johnHeadshot from "@/assets/images/heashots/John.jpg";
import aileeHeadshot from "@/assets/images/heashots/Ailee.jpg";

export const therapists: Therapist[] = [
  {
    id: "emma-shandy-anway",
    name: "Emma Shandy Anway",
    image: emmaHeadshot,
    imageAlt: "Headshot of Emma",
    identity: "woman",
    languages: ["English", "Spanish"],
    availability: ["in-person", "telehealth"],
    therapies: [],
    specialties: [],
  },
  {
    id: "sandra-olkowski",
    name: "Sandra Olkowski",
    imageAlt: "Headshot of Sandra",
    identity: "woman",
    languages: ["English"],
    availability: ["in-person", "telehealth"],
    therapies: [],
    specialties: [],
  },
  {
    id: "jesus-anthony-cedillo",
    name: "Jesus Anthony Cedillo",
    image: anthonyHeadshot,
    imageAlt: "Headshot of Anthony",
    identity: "man",
    languages: ["English"],
    availability: ["in-person", "telehealth"],
    therapies: [],
    specialties: [],
  },
  {
    id: "diana-silvestre",
    name: "Diana Silvestre",
    image: dianaHeadshot,
    imageAlt: "Headshot of Diana",
    identity: "woman",
    languages: ["English", "Spanish"],
    availability: ["in-person", "telehealth"],
    therapies: [],
    specialties: [],
  },
  {
    id: "zoe-deibel-tayler",
    name: "Zoë Deibel-Tayler",
    image: zoeHeadshot,
    imageAlt: "Headshot of Zoë",
    identity: "woman",
    languages: ["English"],
    availability: ["in-person", "telehealth"],
    therapies: [],
    specialties: [],
  },
  {
    id: "john-mckelvey",
    name: "John Mckelvey",
    image: johnHeadshot,
    imageAlt: "Headshot of John",
    identity: "man",
    languages: ["English"],
    availability: ["in-person", "telehealth"],
    therapies: [],
    specialties: [],
  },
  {
    id: "ailee",
    name: "Ailee",
    image: aileeHeadshot,
    imageAlt: "Headshot of Ailee",
    identity: "woman",
    languages: ["English"],
    availability: ["in-person", "telehealth"],
    therapies: [],
    specialties: [],
  },
];
