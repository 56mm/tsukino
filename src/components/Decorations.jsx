const blossoms = [
  [82, 52, 0],
  [139, 19, 28],
  [153, 41, -18],
  [214, 116, 5],
  [270, 83, -25],
  [293, 117, 18],
  [316, 180, -12],
  [35, 74, -20],
];

export function BlossomBranch({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 360 240" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeLinecap="round">
        <path d="M6 2C74 64 118 61 155 111S234 146 355 204" strokeWidth="2" />
        <path
          d="M81 66C94 28 113 18 138 9M121 94c-2-35 12-54 26-66M200 134c18-31 44-46 75-49M250 158c17-6 35-26 47-44M72 61c-21-3-44 3-58 14"
          strokeWidth="1.3"
        />
      </g>

      {blossoms.map(([x, y, angle], index) => (
        <g
          key={index}
          transform={`translate(${x} ${y}) rotate(${angle})`}
          fill="currentColor"
        >
          {[0, 72, 144, 216, 288].map((rotation) => (
            <ellipse
              key={rotation}
              cx="0"
              cy="-7"
              rx="3.4"
              ry="7"
              transform={`rotate(${rotation})`}
            />
          ))}
          <circle r="2.4" fill="#e7d4bf" />
        </g>
      ))}
    </svg>
  );
}

const smallBlossoms = [
  [298, 29],
  [279, 73],
  [317, 95],
  [326, 57],
];

export function TeaIllustration({ className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 380 260"
      fill="none"
      role="img"
      aria-label="Illustration of a tea cup and flowering branches"
    >
      <g stroke="#71543e" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="180" cy="211" rx="119" ry="15" fill="#e6d8c7" opacity=".5" stroke="none" />
        <path
          d="M88 113h175l-17 75c-3 16-15 24-33 24h-72c-19 0-29-9-33-25l-20-74Z"
          fill="#eee4d8"
          strokeWidth="2.7"
        />
        <ellipse cx="175.5" cy="113" rx="87.5" ry="18.5" fill="#f7f3ec" strokeWidth="2.7" />
        <ellipse cx="175.5" cy="111" rx="75.5" ry="11" fill="#879478" strokeWidth="1.2" />
        <path d="M265 133c54-12 61 52-7 58" strokeWidth="9" />
        <path d="M265 133c54-12 61 52-7 58" stroke="#f7f3ec" strokeWidth="4" />
        <path
          d="M150 111c10-8 24-10 38-5-15 0-20 6-20 9 12-6 25-3 30 1"
          stroke="#f4f0de"
          strokeWidth="3"
        />
      </g>

      <path
        d="M315 62c-22 17-38 22-64 19M315 62c0-14-3-27-12-39M292 73c12 12 16 21 17 36"
        stroke="#988471"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      {smallBlossoms.map(([x, y], index) => (
        <g key={index} transform={`translate(${x} ${y})`} fill="#d8b6b1" opacity=".9">
          {[0, 72, 144, 216, 288].map((rotation) => (
            <ellipse key={rotation} rx="4.6" ry="9" cy="-6" transform={`rotate(${rotation})`} />
          ))}
          <circle r="2.6" fill="#c69779" />
        </g>
      ))}

      <path
        d="M61 209c-23-12-30-27-27-49m22 22c-17-5-24-15-26-27"
        stroke="#a3a18a"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
