import Quiz from "@/components/Quiz";
import type { Question } from "@/types/quiz";

const sampleQuestions: Question[] = [
  {
    id: "q1",
    type: "single",
    question: "Mode of therapy",
    options: [
      { id: "a", text: "In person" },
      { id: "b", text: "Telehealth" },
    ],
    // No correctAnswers - this is a survey-style question
  },
  {
    id: "q2",
    type: "single",
    question: "Clinician gender identity",
    options: [
      { id: "man", text: "Man" },
      { id: "woman", text: "Woman" },
    ],
  },
  {
    id: "q3",
    type: "single",
    question: "Language",
    options: [
      { id: "english", text: "English" },
      { id: "spanish", text: "Spanish" },
    ],
  },
  {
    id: "q4",
    type: "multiple",
    question: "What are you looking to work through?",
    options: [
      { id: "individual", text: "Individual" },
      { id: "sex", text: "Sex" },
      { id: "relational", text: "Relational" },
    ],
  },
  {
    id: "q5",
    type: "multiple",
    question: "What are you looking to work through?",
    options: [
      { id: "a", text: "Not sure / not listed" },
      { id: "b", text: "Trauma & PTSD" },
      { id: "c", text: "Anxiety" },
      { id: "d", text: "Depression" },
      { id: "e", text: "Emotional Regulation" },
      { id: "f", text: "Relationship Issues" },
      { id: "g", text: "Grief & Loss" },
      { id: "h", text: "Career & Life Transitions" },
      { id: "i", text: "Neurodivergence (ADHD, ASD +)" },
      { id: "j", text: "Chronic Illness" },
      { id: "k", text: "Insomnia & Sleep Issues" },
      { id: "l", text: "Sexuality & Intimacy" },
      { id: "m", text: "Racial & Cultural Identity" },
      { id: "n", text: "Limerence" },
      { id: "o", text: "Substance Abuse" },
      { id: "p", text: "Burnout" },
      { id: "q", text: "Parentification / Emotional Neglect" },
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
