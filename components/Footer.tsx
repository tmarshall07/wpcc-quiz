import Image from "next/image";
import logo from "@/assets/images/logos/wpcc-secondary-red-rgb-1500px-w-72ppi.png";

export default function Footer() {
  return (
    <footer className="w-full bg-whisper-pink mt-auto">
      <div className="container mx-auto px-4 py-6 flex flex-col items-center justify-center gap-4">
        <Image
          src={logo}
          alt="WPCC Logo"
          height={100}
          className="h-25 w-auto"
        />
        <p className="text-sm text-foreground/70">
          © 2025 by Wild Poppy Counseling Collective
        </p>
      </div>
    </footer>
  );
}
