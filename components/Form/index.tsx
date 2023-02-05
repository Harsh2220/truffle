import { useState } from "react";
import BusinessInformation from "./BusinessInformation";
import Navbar from "./Navbar/Navbar";
import Steps from "./Steps";
import UserInformation from "./UserInformation";

export default function Form() {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const handleCurrentStep = (stepNumber: number) => {
    setCurrentStep(stepNumber);
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <Steps currentStep={currentStep} />
        {currentStep === 0 ? (
          <UserInformation handleCurrentStep={handleCurrentStep} />
        ) : (
          <BusinessInformation handleCurrentStep={handleCurrentStep} />
        )}
      </div>
    </div>
  );
}
