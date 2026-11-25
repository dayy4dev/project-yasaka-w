export function SwissAsterisk({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="37" y="4" width="26" height="92" />
      <rect x="37" y="4" width="26" height="92" transform="rotate(60 50 50)" />
      <rect x="37" y="4" width="26" height="92" transform="rotate(120 50 50)" />
    </svg>
  );
}

export function DisplayDiagonalArrow({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M18 14 H86 V82"
        stroke="currentColor"
        strokeWidth="15"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <line
        x1="83"
        y1="17"
        x2="13"
        y2="87"
        stroke="currentColor"
        strokeWidth="15"
        strokeLinecap="butt"
      />
    </svg>
  );
}

export function HairlineDiagonalArrow({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M4.5 2.5 H13.5 V11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <line
        x1="13"
        y1="3"
        x2="2.5"
        y2="13.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="butt"
      />
    </svg>
  );
}
