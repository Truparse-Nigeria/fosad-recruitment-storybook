import React, { useState } from "react";

interface ProgressProps {
  step?: number;
  level?: number;
  next?: () => void;
  previous?: () => void;
  onChange?: Function;
}

const Progress = ({ step, level, next, previous, onChange }: ProgressProps) => {
  const [progressCount, setProgressCount] = useState(0);

  const handleBack = () => {
    setProgressCount((prevActiveStep: number) => prevActiveStep - 1);
  };

  const handleNext = () => {
    setProgressCount((prevActiveStep: number) => prevActiveStep + 1);
  };

  return (
    <div className="p-2">
      <div className="w-full bg-gray-200 h-px mb-6">
        <div className="bg-secondary h-[12px] w-[10%]"></div>
      </div>

      <div className="flex flex-row p-6 items-center justify-between">
        <button
          className="text-[16px] px-5 py-[14px] rounded w-32 border"
          onClick={handleBack}
          disabled={progressCount === 0}
        >
          Back
        </button>
        <button
          className="bg-secondary text-white text-[16px] px-5 py-[14px] rounded w-32 m-6"
          onClick={handleNext}
          disabled={progressCount === 5}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Progress;
