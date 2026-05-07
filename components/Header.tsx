import Image from "next/image";
import { Button } from "@/components/ui/button";
import logo from "@/assets/images/logos/wpcc-primary-red-rgb-1500px-w-72ppi.png";

export default function Header() {
  return (
    <header className="w-full bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Image
          src={logo}
          alt="WPCC Logo"
          height={48}
          className="h-12 w-auto"
          priority
        />
        <Button asChild>
          <a href="https://www.wildpoppycounseling.com/">
            Visit our Website
          </a>
        </Button>
      </div>
    </header>
  );
}
