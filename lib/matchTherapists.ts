import type { Therapist } from "@/types/therapist";
import {
  QuestionId,
  ModeOption,
  LanguageOption,
  IdentityOption,
} from "@/types/quiz";

export interface QuizAnswers {
  mode?: string[];
  identity?: string[];
  language?: string[];
  therapies?: string[];
  specialties?: string[];
}

export function matchTherapists(
  therapists: Therapist[],
  answers: Record<string, string[]>
): Therapist[] {
  const quizAnswers: QuizAnswers = {
    mode: answers[QuestionId.MODE],
    identity: answers[QuestionId.IDENTITY],
    language: answers[QuestionId.LANGUAGE],
    therapies: answers[QuestionId.THERAPY_TYPE],
    specialties: answers[QuestionId.SPECIALTIES],
  };

  return therapists.filter((therapist) => {
    // Filter by availability/mode
    if (quizAnswers.mode && quizAnswers.mode.length > 0) {
      const wantsInPerson = quizAnswers.mode.includes(ModeOption.IN_PERSON);
      const wantsTelehealth = quizAnswers.mode.includes(ModeOption.TELEHEALTH);

      const hasInPerson = therapist.availability.includes("in-person");
      const hasTelehealth = therapist.availability.includes("telehealth");

      if (wantsInPerson && !hasInPerson) return false;
      if (wantsTelehealth && !hasTelehealth) return false;
    }

    // Filter by clinician identity
    if (quizAnswers.identity && quizAnswers.identity.length > 0) {
      const hasNoPreference = quizAnswers.identity.includes(IdentityOption.NO_PREFERENCE);
      if (!hasNoPreference) {
        const matchesIdentity = quizAnswers.identity.some(
          (id) => therapist.identity === id
        );
        if (!matchesIdentity) return false;
      }
    }

    // Filter by language
    if (quizAnswers.language && quizAnswers.language.length > 0) {
      const languageMap: Record<string, string> = {
        [LanguageOption.ENGLISH]: "English",
        [LanguageOption.SPANISH]: "Spanish",
      };

      const matchesLanguage = quizAnswers.language.some((lang) => {
        const languageName = languageMap[lang];
        return languageName && therapist.languages.includes(languageName);
      });

      if (!matchesLanguage) return false;
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
