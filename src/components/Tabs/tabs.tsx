import React, { useState } from "react";
import TabContainer from ".";

interface TabItemProps {
  step?: number;
  tabNumber: number;
  tabName?: string;
  title?: string;
  foreground?: "primary" | "secondary" | "black";
  changeStep: (step: number) => void;
}

export function TabItem({ tabNumber, tabName, changeStep }: TabItemProps) {
  const [step, setStep] = useState(1);
  return (
    <div
      className={`${
        step === tabNumber && "border-b-2 border-b-primary"
      } flex transition-all`}
    >
      <button
        className="hover:bg-primary hover:bg-opacity-50 p-3"
        onClick={() => changeStep(tabNumber)}
      >
        {tabName}
      </button>
      <TabContainer>
        <TabItem
          step={step}
          tabNumber={1}
          tabName={"hello"}
          changeStep={setStep}
          title={"suggested job"}
        />
        <TabItem
          step={step}
          tabNumber={2}
          tabName={"hello"}
          changeStep={setStep}
          title={"saved jobs"}
        />
        <TabItem
          step={step}
          tabNumber={3}
          tabName={"Item"}
          changeStep={setStep}
          title={"applied jobs"}
        />
      </TabContainer>
    </div>
  );
}
