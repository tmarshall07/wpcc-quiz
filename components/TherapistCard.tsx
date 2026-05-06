import Image from "next/image";
import type { Therapist } from "@/types/therapist";
import { Button } from "@/components/ui/button";

interface TherapistCardProps {
  therapist: Therapist;
}

export default function TherapistCard({ therapist }: TherapistCardProps) {
  return (
    <div className="bg-white rounded-lg border border-border p-6 flex flex-col items-center text-center">
      {therapist.image ? (
        <Image
          src={therapist.image}
          alt={therapist.imageAlt}
          width={120}
          height={120}
          className="rounded-full object-cover w-28 h-28 mb-4"
        />
      ) : (
        <div className="w-28 h-28 rounded-full bg-whisper-pink flex items-center justify-center mb-4">
          <span className="text-3xl text-muted">
            {therapist.name.charAt(0)}
          </span>
        </div>
      )}

      <h3 className="text-lg font-semibold text-foreground mb-1">
        {therapist.name}
      </h3>

      <p className="text-sm text-muted mb-3">
        {therapist.languages.join(", ")}
      </p>

      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {therapist.availability.map((mode) => (
          <span
            key={mode}
            className="text-xs px-2 py-1 bg-primary/10 text-foreground rounded-full"
          >
            {mode === "in-person" ? "In Person" : "Telehealth"}
          </span>
        ))}
      </div>

      <Button size="sm" className="w-full">
        View Profile
      </Button>
    </div>
  );
}
