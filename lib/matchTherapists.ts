import type { Therapist } from "@/types/therapist";

export interface QuizAnswers {
  mode?: string[];        // q1: "a" (in-person) or "b" (telehealth)
  identity?: string[];    // q2: "man" or "woman"
  language?: string[];    // q3: "english" or "spanish"
  therapies?: string[];   // q4: therapy types
  specialties?: string[]; // q5: specialties/issues to work through
}

export function matchTherapists(
  therapists: Therapist[],
  answers: Record<string, string[]>
): Therapist[] {
  const quizAnswers: QuizAnswers = {
    mode: answers["q1"],
    identity: answers["q2"],
    language: answers["q3"],
    therapies: answers["q4"],
    specialties: answers["q5"],
  };

  return therapists.filter((therapist) => {
    // Filter by availability/mode
    if (quizAnswers.mode && quizAnswers.mode.length > 0) {
      const wantsInPerson = quizAnswers.mode.includes("a");
      const wantsTelehealth = quizAnswers.mode.includes("b");

      const hasInPerson = therapist.availability.includes("in-person");
      const hasTelehealth = therapist.availability.includes("telehealth");

      if (wantsInPerson && !hasInPerson) return false;
      if (wantsTelehealth && !hasTelehealth) return false;
    }

    // Filter by clinician identity
    if (quizAnswers.identity && quizAnswers.identity.length > 0) {
      const wantedIdentity = quizAnswers.identity[0]; // single choice
      if (therapist.identity && therapist.identity !== wantedIdentity) {
        return false;
      }
    }

    // Filter by language
    if (quizAnswers.language && quizAnswers.language.length > 0) {
      const wantedLanguage = quizAnswers.language[0]; // single choice
      const languageMap: Record<string, string> = {
        english: "English",
        spanish: "Spanish",
      };
      const languageName = languageMap[wantedLanguage];
      if (languageName && !therapist.languages.includes(languageName)) {
        return false;
      }
    }

    // Filter by therapy types (if therapist has any specified)
    // For now, skip this filter since therapies[] is empty in data
    // if (quizAnswers.therapies && quizAnswers.therapies.length > 0 && therapist.therapies.length > 0) {
    //   const hasMatchingTherapy = quizAnswers.therapies.some(t =>
    //     therapist.therapies.includes(t)
    //   );
    //   if (!hasMatchingTherapy) return false;
    // }

    // Filter by specialties (if therapist has any specified)
    // For now, skip this filter since specialties[] is empty in data
    // if (quizAnswers.specialties && quizAnswers.specialties.length > 0 && therapist.specialties.length > 0) {
    //   const hasMatchingSpecialty = quizAnswers.specialties.some(s =>
    //     therapist.specialties.includes(s)
    //   );
    //   if (!hasMatchingSpecialty) return false;
    // }

    return true;
  });
}
