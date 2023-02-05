import React from "react";

type InputProps = {
  placeholder?: string;
  type: string;
  label?: string;
  className?: string;
};

export default function Input({
  placeholder,
  type,
  label,
  className,
}: InputProps) {
  return (
    <div>
      <label className="block mb-1 text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        type={type}
        className={`${className}bg-gray-50 border border-[#D1D5DB] text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 w-full px-3 py-2`}
        placeholder={placeholder}
      />
    </div>
  );
}
