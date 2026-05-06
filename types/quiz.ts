export type QuestionType = "single" | "multiple";

export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  type: QuestionType;
  question: string;
  options: Option[];
  correctAnswers?: string[]; // Optional array of option IDs - omit for survey-style questions
}

export interface QuizState {
  currentQuestionIndex: number;
  answers: Record<string, string[]>; // questionId -> selected option IDs
  submitted: boolean;
}
