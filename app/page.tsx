import Quiz from "@/components/Quiz";
import {
  type Question,
  QuestionId,
  ModeOption,
  IdentityOption,
  LanguageOption,
  TherapyTypeOption,
  SpecialtyOption,
} from "@/types/quiz";

const sampleQuestions: Question[] = [
  {
    id: QuestionId.MODE,
    type: "multiple",
    question: "How would you prefer to receive therapy?",
    options: [
      { id: ModeOption.IN_PERSON, text: "In person" },
      { id: ModeOption.TELEHEALTH, text: "Telehealth" },
    ],
  },
  {
    id: QuestionId.IDENTITY,
    type: "multiple",
    question: "What are your preferred therapist gender identities?",
    options: [
      { id: IdentityOption.MAN, text: "Man" },
      { id: IdentityOption.WOMAN, text: "Woman" },
    ],
  },
  {
    id: QuestionId.LANGUAGE,
    type: "multiple",
    question: "What are your preferred languages?",
    options: [
      { id: LanguageOption.ENGLISH, text: "English" },
      { id: LanguageOption.SPANISH, text: "Spanish" },
    ],
  },
  {
    id: QuestionId.THERAPY_TYPE,
    type: "multiple",
    question: "What types of therapy are you interested in?",
    options: [
      { id: TherapyTypeOption.INDIVIDUAL, text: "Individual Therapy" },
      { id: TherapyTypeOption.RELATIONAL, text: "Couples/Relational Therapy" },
      { id: TherapyTypeOption.SEX, text: "Sex Therapy" },
    ],
  },
  {
    id: QuestionId.SPECIALTIES,
    type: "multiple",
    question: "What are you looking to work through?",
    options: [
      { id: SpecialtyOption.NOT_SURE, text: "Not sure / not listed" },
      { id: SpecialtyOption.TRAUMA_PTSD, text: "Trauma & PTSD" },
      { id: SpecialtyOption.ANXIETY, text: "Anxiety" },
      { id: SpecialtyOption.DEPRESSION, text: "Depression" },
      { id: SpecialtyOption.EMOTIONAL_REGULATION, text: "Emotional Regulation" },
      { id: SpecialtyOption.RELATIONSHIP_ISSUES, text: "Relationship Issues" },
      { id: SpecialtyOption.GRIEF_LOSS, text: "Grief & Loss" },
      { id: SpecialtyOption.CAREER_TRANSITIONS, text: "Career & Life Transitions" },
      { id: SpecialtyOption.NEURODIVERGENCE, text: "Neurodivergence (ADHD, ASD +)" },
      { id: SpecialtyOption.CHRONIC_ILLNESS, text: "Chronic Illness" },
      { id: SpecialtyOption.INSOMNIA_SLEEP, text: "Insomnia & Sleep Issues" },
      { id: SpecialtyOption.SEXUALITY_INTIMACY, text: "Sexuality & Intimacy" },
      { id: SpecialtyOption.RACIAL_CULTURAL_IDENTITY, text: "Racial & Cultural Identity" },
      { id: SpecialtyOption.LIMERENCE, text: "Limerence" },
      { id: SpecialtyOption.SUBSTANCE_ABUSE, text: "Substance Abuse" },
      { id: SpecialtyOption.BURNOUT, text: "Burnout" },
      { id: SpecialtyOption.PARENTIFICATION, text: "Parentification / Emotional Neglect" },
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-[70vh] bg-background">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8 text-foreground">
          Find a therapist who fits you
        </h1>
        <Quiz questions={sampleQuestions} />
      </main>
    </div>
  );
}
