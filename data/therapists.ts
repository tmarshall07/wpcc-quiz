import type { Therapist } from "@/types/therapist";

import emmaHeadshot from "@/assets/images/heashots/Emma.jpg";
import anthonyHeadshot from "@/assets/images/heashots/Anthony.jpg";
import dianaHeadshot from "@/assets/images/heashots/Diana.jpg";
import zoeHeadshot from "@/assets/images/heashots/Zoe.jpg";
import johnHeadshot from "@/assets/images/heashots/John.jpg";
// import aileeHeadshot from "@/assets/images/heashots/Ailee.jpg";

export const therapists: Therapist[] = [
  {
    id: "emma-shandy-anway",
    name: "Emma Shandy Anway, MA, MS, LMFT, CST",
    image: emmaHeadshot,
    imageAlt: "Headshot of Emma",
    identity: "woman",
    languages: ["English", "Spanish"],
    availability: ["in-person", "telehealth"],
    therapies: [],
    specialties: [],
    slug: 'emma-shandy-anway'
  },
  {
    id: "sandra-olkowski",
    name: "Sandra Olkowski, PhD, MA, AMFT",
    imageAlt: "Headshot of Sandra",
    identity: "woman",
    languages: ["English"],
    availability: ["in-person", "telehealth"],
    therapies: [],
    specialties: [],
    slug: 'sandra-olkowski',
  },
  {
    id: "jesus-anthony-cedillo",
    name: "Jesus Anthony Cedillo, MA, AMFT",
    image: anthonyHeadshot,
    imageAlt: "Headshot of Anthony",
    identity: "man",
    languages: ["English"],
    availability: ["in-person", "telehealth"],
    therapies: [],
    specialties: [],
    slug: 'anthony-cedillo'
  },
  {
    id: "diana-silvestre",
    name: "Diana Silvestre, MA, AMFT",
    image: dianaHeadshot,
    imageAlt: "Headshot of Diana",
    identity: "woman",
    languages: ["English", "Spanish"],
    availability: ["in-person", "telehealth"],
    therapies: [],
    specialties: [],
    slug: 'diana-silvestre'
  },
  {
    id: "zoe-deibel-tayler",
    name: "Zoë Deibel-Tayler, MA",
    image: zoeHeadshot,
    imageAlt: "Headshot of Zoë",
    identity: "woman",
    languages: ["English"],
    availability: ["in-person", "telehealth"],
    therapies: [],
    specialties: [],
    slug: 'zoe-deibel-tayler'
  },
  {
    id: "john-mckelvey",
    name: "John Mckelvey, MA",
    image: johnHeadshot,
    imageAlt: "Headshot of John",
    identity: "man",
    languages: ["English"],
    availability: ["in-person", "telehealth"],
    therapies: [],
    specialties: [],
    slug: 'john-mckelvey'
  },
];
