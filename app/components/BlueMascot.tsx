export default function BlueMascot({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <ellipse cx="80" cy="130" rx="55" ry="60" fill="#4A9ED8" />
      <ellipse cx="80" cy="75" rx="48" ry="50" fill="#4A9ED8" />
      <circle cx="64" cy="70" r="12" fill="white" />
      <circle cx="96" cy="70" r="12" fill="white" />
      <circle cx="67" cy="72" r="7" fill="#1a2444" />
      <circle cx="99" cy="72" r="7" fill="#1a2444" />
      <circle cx="69" cy="70" r="2.5" fill="white" />
      <circle cx="101" cy="70" r="2.5" fill="white" />
      <path
        d="M64 88 Q80 100 96 88"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse
        cx="22"
        cy="115"
        rx="14"
        ry="22"
        fill="#4A9ED8"
        transform="rotate(-20 22 115)"
      />
      <ellipse
        cx="138"
        cy="115"
        rx="14"
        ry="22"
        fill="#4A9ED8"
        transform="rotate(20 138 115)"
      />
      <ellipse cx="62" cy="185" rx="20" ry="12" fill="#3A8EC8" />
      <ellipse cx="98" cy="185" rx="20" ry="12" fill="#3A8EC8" />
      <ellipse cx="52" cy="85" rx="10" ry="6" fill="#6BBAE8" opacity="0.5" />
      <ellipse cx="108" cy="85" rx="10" ry="6" fill="#6BBAE8" opacity="0.5" />
    </svg>
  );
}
