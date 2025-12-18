interface LogoProps {
  className?: string;
}

export default function Logo({ className = "h-8 w-8" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`shrink-0 text-[rgb(194,89,194)] ${className}`}
    >
      <rect
        x="5"
        y="5"
        width="18"
        height="18"
        rx="6"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M14 8.2l1.25 3.55 3.65 1.25-3.65 1.25L14 18l-1.25-3.75-3.65-1.25 3.65-1.25L14 8.2z"
        fill="currentColor"
      />
      <circle cx="20.6" cy="8.2" r="2" fill="currentColor" opacity="0.95" />
      <path
        d="M8.6 18.8l.55 1.55 1.6.55-1.6.55-.55 1.6-.55-1.6-1.6-.55 1.6-.55.55-1.55z"
        fill="currentColor"
        opacity="0.55"
      />
    </svg>
  );
}
