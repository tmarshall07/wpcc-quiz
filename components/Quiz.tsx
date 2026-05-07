"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { Question } from "@/types/quiz";
import type { Therapist } from "@/types/therapist";
import { Button } from "./ui/button";
import { therapists } from "@/data/therapists";
import { matchTherapists } from "@/lib/matchTherapists";
import TherapistCard from "./TherapistCard";

interface QuizProps {
  questions: Question[];
  onComplete?: (answers: Record<string, string[]>, matches: Therapist[]) => void;
}

export default function Quiz({ questions, onComplete }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [matchedTherapists, setMatchedTherapists] = useState<Therapist[]>([]);

  const currentQuestion = questions[currentIndex];
  const selectedAnswers = answers[currentQuestion.id] || [];

  const handleSingleSelect = (optionId: string) => {
    if (submitted) return;
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: [optionId],
    }));
  };

  const handleMultiSelect = (optionId: string) => {
    if (submitted) return;
    setAnswers((prev) => {
      const current = prev[currentQuestion.id] || [];
      if (current.includes(optionId)) {
        return {
          ...prev,
          [currentQuestion.id]: current.filter((id) => id !== optionId),
        };
      }
      return {
        ...prev,
        [currentQuestion.id]: [...current, optionId],
      };
    });
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSubmit = () => {
    setIsLoading(true);

    // Simulate a brief loading period
    setTimeout(() => {
      const matches = matchTherapists(therapists, answers);
      setMatchedTherapists(matches);
      setIsLoading(false);
      setSubmitted(true);
      onComplete?.(answers, matches);
    }, 1500);
  };

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setIsLoading(false);
    setCurrentIndex(0);
    setMatchedTherapists([]);
  };

  const hasCorrectAnswers = (question: Question) => {
    return question.correctAnswers && question.correctAnswers.length > 0;
  };

  const isCorrect = (questionId: string) => {
    const question = questions.find((q) => q.id === questionId);
    if (!question || !hasCorrectAnswers(question)) return false;
    const selected = answers[questionId] || [];
    if (selected.length !== question.correctAnswers!.length) return false;
    return question.correctAnswers!.every((id) => selected.includes(id));
  };

  const gradeableQuestions = questions.filter(hasCorrectAnswers);

  const getScore = () => {
    return gradeableQuestions.filter((q) => isCorrect(q.id)).length;
  };

  const isOptionCorrect = (optionId: string) => {
    return currentQuestion.correctAnswers?.includes(optionId) ?? false;
  };

  const isOptionSelected = (optionId: string) => {
    return selectedAnswers.includes(optionId);
  };

  const getOptionStyle = (optionId: string) => {
    const base =
      "w-full p-4 rounded-lg border-2 text-left transition-colors flex items-center gap-3";

    if (!submitted) {
      if (isOptionSelected(optionId)) {
        return `${base} border-primary/50 bg-primary/20`;
      }
      return `${base} border-border hover:border-foreground/20`;
    }

    // After submission - no grading for questions without correct answers
    if (!hasCorrectAnswers(currentQuestion)) {
      if (isOptionSelected(optionId)) {
        return `${base} border-primary/50 bg-primary/20`;
      }
      return `${base} border-border opacity-60`;
    }

    // Graded questions show correct/incorrect
    if (isOptionCorrect(optionId)) {
      return `${base} border-green-500 bg-green-50`;
    }
    if (isOptionSelected(optionId) && !isOptionCorrect(optionId)) {
      return `${base} border-red-500 bg-red-50`;
    }
    return `${base} border-border opacity-60`;
  };

  // Show loading state
  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center py-16"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full mb-6"
        />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-foreground font-medium"
        >
          Finding your perfect match...
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-muted mt-2"
        >
          Analyzing your preferences
        </motion.p>
      </motion.div>
    );
  }

  // Show results after submission
  if (submitted) {
    const displayTherapists =
      matchedTherapists.length > 0 ? matchedTherapists : therapists;

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="w-full max-w-4xl mx-auto"
      >
        <div
          className="text-center mb-8"
        >
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Your Matched Therapists
          </h2>
          <p className="text-muted">
            {matchedTherapists.length > 0
              ? `We found ${matchedTherapists.length} therapist${matchedTherapists.length === 1 ? "" : "s"} that match your preferences.`
              : "No therapists match all your criteria. Here are all our therapists:"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <AnimatePresence>
            {displayTherapists.map((therapist, index) => (
              <motion.div
                key={therapist.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              >
                <TherapistCard therapist={therapist} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: displayTherapists.length * 0.1 + 0.3 }}
          className="text-center"
        >
          <Button onClick={handleReset} variant="outline">
            Start Over
          </Button>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-muted mb-2">
          <span>
            Question {currentIndex + 1} of {questions.length}
          </span>
        </div>
        <div className="h-2 bg-foreground/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{
              width: `${((currentIndex + 1) / questions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-medium text-muted uppercase">
            {currentQuestion.type === "single"
              ? "Single Choice"
              : "Select All That Apply"}
          </span>
        </div>
        <h2 className="text-xl font-semibold text-foreground">
          {currentQuestion.question}
        </h2>
      </div>

      {/* Options */}
      <div className="space-y-3 mb-8">
        {currentQuestion.options.map((option) => (
          <button
            key={option.id}
            onClick={() =>
              currentQuestion.type === "single"
                ? handleSingleSelect(option.id)
                : handleMultiSelect(option.id)
            }
            className={getOptionStyle(option.id)}
          >
            {/* Radio/Checkbox indicator */}
            <span
              className={`w-5 h-5 rounded-${currentQuestion.type === "single" ? "full" : "md"} border-2 flex items-center justify-center flex-shrink-0 ${
                isOptionSelected(option.id)
                  ? "border-primary bg-primary"
                  : "border-muted"
              }`}
            >
              {isOptionSelected(option.id) && (
                <span className="text-white text-xs">
                  {currentQuestion.type === "single" ? "●" : "✓"}
                </span>
              )}
            </span>
            <span className="text-foreground">{option.text}</span>
          </button>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          Previous
        </Button>

        <div className="flex gap-2">
          {currentIndex < questions.length - 1 ? (
            <Button onClick={handleNext}>Next</Button>
          ) : (
            <Button onClick={handleSubmit} disabled={isLoading}>
              Find My Therapists
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
