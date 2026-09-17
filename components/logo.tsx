import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  dark?: boolean;
  className?: string;
};

export function Logo({ dark = false, className = "" }: LogoProps) {
  return (
    <Link href="/" className={`group flex items-center gap-3 ${className}`}>
      <span className="relative block h-13 w-55 shrink-0 overflow-hidden ">
        <Image
          src="/images/logo.svg"
          alt="Goshen Shelters Logo"
          fill
          priority
          sizes="(max-width: 640px) 220px, 236px"
          className={`object-cover object-center ${dark ? "brightness-0 invert" : ""}`}
        />
      </span>
    </Link>
  );
}
