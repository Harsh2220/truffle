import React from "react";
import Input from "../Inputs/Input";

export default function UserInformation({
  handleCurrentStep,
}: {
  handleCurrentStep: (stepNumber: number) => void;
}) {
  return (
    <form className="px-24 py-12 flex flex-col gap-8 bg-white w-full">
      <div>
        <h1 className="font-semibold text-xl">User Information</h1>
        <p className="text-sm text-gray-500 mt-1">Please enter your details</p>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex flex-col w-1/3">
          <label>Title</label>
          <select
            name=""
            id=""
            className="py-2 px-3 bg-white mt-1 border border-[#D1D5DB] rounded-md cursor-pointer focus:outline-none"
          >
            <option value="Mr" selected>
              Mr.
            </option>
            <option value="Ms">Ms.</option>
          </select>
        </div>
        <div className="w-1/3">
          <Input label="First name" placeholder="" type="text" />
        </div>
        <div className="w-1/3">
          <Input label="Last name" placeholder="" type="text" />
        </div>
      </div>
      <div>
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Mobile number
          </label>
          <div className="relative mt-1 rounded-md shadow-sm border border-[#D1D5DB]">
            <div className="absolute inset-y-0 left-0 flex items-center">
              <label htmlFor="currency" className="sr-only">
                Country
              </label>
              <select
                id="currency"
                name="currency"
                className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option>US</option>
                <option>In</option>
              </select>
            </div>
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-gray-300 pl-28 pr-3 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="+1 (555) 987-6543"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <label>Gender</label>
        <select
          name=""
          id=""
          className="py-2 px-3 bg-white mt-1 border border-[#D1D5DB] rounded-md cursor-pointer focus:outline-none"
        >
          <option value="Male" selected>
            Male
          </option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label>Nationality</label>
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
      <div className="flex gap-5">
        <div className="w-1/2">
          <Input label="Residential Address" placeholder="" type="text" />
        </div>
        <div className="w-1/2">
          <Input label="Postal Code" placeholder="" type="text" />
        </div>
      </div>
      <Input label="Occupation" placeholder="" type="text" />
      <Input label="Date of Birth" placeholder="" type="Date" />
      <div className="flex justify-end">
        <button
          className="px-10 py-2 font-medium text-white border bg-[#7445F8] border-[#7445F8] rounded-md shadow-[0px 1px 2px rgba(0, 0, 0, 0.05)]"
          onClick={() => handleCurrentStep(1)}
        >
          Next
        </button>
      </div>
    </form>
  );
}
