import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  markClassName?: string;
  textClassName?: string;
  name?: string;
};

const BrandLogo = ({
  className,
  markClassName,
  textClassName,
  name = "Meshion",
}: BrandLogoProps) => (
  <span className={cn("inline-flex items-center gap-2 font-bold", className)}>
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      className={cn("h-8 w-8 shrink-0 text-primary", markClassName)}
      role="img"
    >
      <rect x="2" y="2" width="60" height="60" rx="16" fill="currentColor" />
      <path
        d="M15 50V14H24L32 27L40 14H49V50H41V28L32 41L23 28V50H15Z"
        fill="#FFFFFF"
      />
      <circle cx="48" cy="18" r="4" fill="#7FE6B6" />
    </svg>
    <span className={cn("text-xl leading-none", textClassName)}>{name}</span>
  </span>
);

export default BrandLogo;
