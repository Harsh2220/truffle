import React from "react";
import Input from "../Inputs/Input";

export default function BusinessInformation({
  handleCurrentStep,
}: {
  handleCurrentStep: (stepNumber: number) => void;
}) {
  return (
    <form className="px-24 py-12 flex flex-col gap-8 bg-white w-full">
      <div>
        <h1 className="font-semibold text-xl">Business Information</h1>
        <p className="text-sm text-gray-500 mt-1">
          Use a permanent address where you can receive mail.
        </p>
      </div>
      <Input label="Account ID" placeholder="" type="text" />
      <Input label="Company Name" placeholder="" type="text" />
      <div className="flex items-center gap-5">
        <div className="flex flex-col w-1/2">
          <label>Country of Incorporation</label>
          <select
            name=""
            id=""
            className="py-2 px-3 bg-white mt-1 border border-[#D1D5DB] rounded-md cursor-pointer focus:outline-none"
          >
            <option value="United States" selected>
              United States
            </option>
            <option value="India">India</option>
          </select>
        </div>
        <div className="flex flex-col w-1/2">
          <label>Country of Operation</label>
          <select
            name=""
            id=""
            className="py-2 px-3 bg-white mt-1 border border-[#D1D5DB] rounded-md cursor-pointer focus:outline-none"
          >
            <option value="United States" selected>
              United States
            </option>
            <option value="India">India</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col">
        <label>Business Type</label>
        <select
          name=""
          id=""
          className="py-2 px-3 bg-white mt-1 border border-[#D1D5DB] rounded-md cursor-pointer focus:outline-none"
        >
          <option value="United States" selected>
            United States
          </option>
          <option value="India">India</option>
        </select>
      </div>
      <Input label="Company address" placeholder="" type="text" />
      <div className="flex items-center gap-6">
        <Input
          label="ZIP / Postal"
          placeholder=""
          type="text"
          className="w-1/3"
        />
        <Input
          label="State / Province"
          placeholder=""
          type="text"
          className="w-1/3"
        />
        <Input label="City" placeholder="" type="text" className="w-1/3" />
      </div>
      <Input label="Registration Number" placeholder="" type="number" />
      <Input label="Incorporation Date" placeholder="" type="Date" />
      <div className="flex item-center justify-between">
        <button
          className="px-10 py-2 font-medium border border-[#D1D5DB] rounded-md"
          onClick={() => handleCurrentStep(0)}
        >
          Back
        </button>
        <button className="px-10 py-2 font-medium text-white border bg-[#7445F8] border-[#7445F8] rounded-md shadow-[0px 1px 2px rgba(0, 0, 0, 0.05)]">
          Next
        </button>
      </div>
    </form>
  );
}
