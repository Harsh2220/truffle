import { useState } from "react";

function Current({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-8 h-8 border-2 border-[#7445F8] rounded-full flex justify-center items-center">
        <div className="w-2 h-2 bg-[#7445F8] rounded-full"></div>
      </div>
      <p className="text-[#7445F8] font-semibold text-xs uppercase">{name}</p>
    </div>
  );
}

function Next({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-8 h-8 border-2 border-[#D1D5DB] rounded-full"></div>
      <p className="text-[#6B7280] font-semibold text-xs uppercase">{name}</p>
    </div>
  );
}

function Previous({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-8 h-8 border-2 border-[#7445F8] bg-[#7445F8] rounded-full flex justify-center items-center">
        <svg
          width="14"
          height="10"
          viewBox="0 0 14 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L5.70711 9.70711C5.31658 10.0976 4.68342 10.0976 4.29289 9.70711L0.292893 5.70711C-0.0976311 5.31658 -0.0976311 4.68342 0.292893 4.29289C0.683417 3.90237 1.31658 3.90237 1.70711 4.29289L5 7.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893Z"
            fill="#111827"
          />
        </svg>
      </div>
      <p className="text-[#111827] font-semibold text-xs uppercase">{name}</p>
    </div>
  );
}

const steps: string[] = [
  "User Information",
  "Business Information",
  "Business information 2",
  "Upload documents",
  "Preview",
];

export default function Steps({ currentStep }: { currentStep: number }) {
  return (
    <div className="w-[400px] p-12">
      {steps.map((step, index) => (
        <div key={index}>
          {currentStep === index ? (
            <Current name={step} />
          ) : currentStep > index ? (
            <Previous name={step} />
          ) : (
            <Next name={step} />
          )}

          {steps.length - 1 === index ? (
            <></>
          ) : (
            <div
              className={`h-14 w-[2px] ml-[14px] ${
                currentStep >= index ? "bg-[#7445F8]" : "bg-[#6B7280]"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
}
