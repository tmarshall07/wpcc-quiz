export type QuestionType = "single" | "multiple";

// Question ID enum for type-safe references
export enum QuestionId {
  MODE = "mode",
  IDENTITY = "identity",
  LANGUAGE = "language",
  THERAPY_TYPE = "therapy_type",
  SPECIALTIES = "specialties",
}

// Option ID enums for type-safe references
export enum ModeOption {
  IN_PERSON = "in-person",
  TELEHEALTH = "telehealth",
}

export enum IdentityOption {
  MAN = "man",
  WOMAN = "woman",
}

export enum LanguageOption {
  ENGLISH = "english",
  SPANISH = "spanish",
}

export enum TherapyTypeOption {
  INDIVIDUAL = "individual",
  RELATIONAL = "relational",
  SEX = "sex",
}

export enum SpecialtyOption {
  NOT_SURE = "not_sure",
  TRAUMA_PTSD = "trauma_ptsd",
  ANXIETY = "anxiety",
  DEPRESSION = "depression",
  EMOTIONAL_REGULATION = "emotional_regulation",
  RELATIONSHIP_ISSUES = "relationship_issues",
  GRIEF_LOSS = "grief_loss",
  CAREER_TRANSITIONS = "career_transitions",
  NEURODIVERGENCE = "neurodivergence",
  CHRONIC_ILLNESS = "chronic_illness",
  INSOMNIA_SLEEP = "insomnia_sleep",
  SEXUALITY_INTIMACY = "sexuality_intimacy",
  RACIAL_CULTURAL_IDENTITY = "racial_cultural_identity",
  LIMERENCE = "limerence",
  SUBSTANCE_ABUSE = "substance_abuse",
  BURNOUT = "burnout",
  PARENTIFICATION = "parentification",
}

export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: QuestionId | string;
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
