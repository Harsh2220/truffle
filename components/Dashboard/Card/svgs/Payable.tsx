import React from "react";

export default function Payable() {
  return (
    <svg
      width="71"
      height="70"
      viewBox="0 0 71 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_dd_1_3924)">
        <rect
          x="5.23141"
          y="1"
          width="59.8347"
          height="60"
          rx="8"
          fill="url(#paint0_linear_1_3924)"
        />
      </g>
      <g clipPath="url(#clip0_1_3924)">
        <path
          d="M26 30.5L27.6744 32.1744L34.3125 25.5481V40H36.6875V25.5481L43.3138 32.1863L45 30.5L35.5 21L26 30.5Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id="filter0_dd_1_3924"
          x="0.231415"
          y="0"
          width="69.8347"
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
            result="effect1_dropShadow_1_3924"
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
            result="effect1_dropShadow_1_3924"
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
            result="effect2_dropShadow_1_3924"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="3" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_1_3924"
            result="effect2_dropShadow_1_3924"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_1_3924"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_1_3924"
          x1="5.23141"
          y1="1"
          x2="65.2312"
          y2="60.8345"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A76FFF" />
          <stop offset="1" stopColor="#7445F8" />
        </linearGradient>
        <clipPath id="clip0_1_3924">
          <rect
            width="19"
            height="19"
            fill="white"
            transform="matrix(-1 0 0 -1 45 40)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
