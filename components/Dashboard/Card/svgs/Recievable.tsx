export default function Recievable() {
  return (
    <svg
      width="70"
      height="70"
      viewBox="0 0 70 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_1_3916)">
        <rect
          x="5"
          y="1"
          width="60"
          height="60"
          rx="8"
          fill="url(#paint0_linear_1_3916)"
        />
      </g>
      <g clipPath="url(#clip0_1_3916)">
        <path
          d="M44 30.5L42.3256 28.8256L35.6875 35.4519V21H33.3125V35.4519L26.6862 28.8137L25 30.5L34.5 40L44 30.5Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_1_3916"
          x="0"
          y="0"
          width="70"
          height="70"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="erode"
            in="SourceAlpha"
            result="effect1_dropShadow_1_3916"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_3916"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="erode"
            in="SourceAlpha"
            result="effect2_dropShadow_1_3916"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="3" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1_3916"
            result="effect2_dropShadow_1_3916"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_1_3916"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_3916"
          x1="5"
          y1="1"
          x2="65"
          y2="61"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A76FFF" />
          <stop offset="1" stopColor="#7445F8" />
        </linearGradient>
        <clipPath id="clip0_1_3916">
          <rect
            width="19"
            height="19"
            fill="white"
            transform="translate(25 21)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
