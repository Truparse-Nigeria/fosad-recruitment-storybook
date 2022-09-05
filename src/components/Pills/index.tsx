import React from "react";

interface _PillProps {
  label: string;
  indicatorColor: string | undefined;
  backgroundColor?: string | undefined;
  size: "small" | "medium" | "large" | undefined;
  className?: string;
}

interface PillProps {
    label: string;
    size: "small" | "medium" | "large" | undefined;
    type: PillTypes;
  }
  
  type PillTypes =
    | "active"
    | "onHold"
    | "completed"
    | "cancelled"
    | "applied"
    | "hired"
    | "interview"
    | "rejected"
    | "offer";
  
  export const pillTypeList: {
    name: PillTypes;
    indicatorColor: string;
    backgroundColor: string;
    border?:boolean;
  }[] = [
    {
      name: "active",
      indicatorColor: "#3874CB",
      backgroundColor: "#FFFFFF",
      border: true
    },
    {
      name: "onHold",
      indicatorColor: "#F6C244",
      backgroundColor: "#FFFFFF",
      border: true
    },
    {
      name: "completed",
      indicatorColor: "#67AD5C",
      backgroundColor: "#FFFFFF",
      border: true
    },
    {
      name: "cancelled",
      indicatorColor: "#D34B4B",
      backgroundColor: "#FFFFFF",
      border: true
    },
    {
      name: "applied",
      indicatorColor: "#007EFF",
      backgroundColor: "#D8EBFF",
    },
    {
      name: "interview",
      indicatorColor: "#E8A80E",
      backgroundColor: "#FDEDD5",
    },
    {
      name: "offer",
      indicatorColor: "#9F56D1",
      backgroundColor: "#F1DDFF",
    },
    {
      name: "hired",
      indicatorColor: "#22948B",
      backgroundColor: "#E7FFF6",
    },
    {
      name: "rejected",
      indicatorColor: "#EC722E",
      backgroundColor: "#FFE7E7",
    },
  ];



const _Pill = ({
  label,
  indicatorColor,
  backgroundColor,
  size,
  className,
}: _PillProps) => {
  return (
    <div
      className={`${className ? className : ""} mx-1 my-1 ${
        size === "small"
          ? "py-1 px-2 text-xs"
          : size === "medium"
          ? "py-2 px-4 text-sm"
          : size === "large"
          ? "py-3 px-6 text-lg"
          : "py-2 px-3 text-sm"
      } border border-[#EFF1F4] rounded-full max-w-fit items-center flex justify-between gap-x-2`}
      style={{ backgroundColor: backgroundColor ? backgroundColor : "#ffffff" }}
    >
      <svg
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={
          size === "small"
            ? "h-2 w-2"
            : size === "medium"
            ? "h-3 w-3"
            : size === "large"
            ? "h-4 w-4"
            : "h-[13px] w-[13px]"
        }
      >
        <circle
          cx="6.5"
          cy="6.5"
          r="6.5"
          fill={indicatorColor ? indicatorColor : "#EFF1F4"}
        />
      </svg>
      <span className=" text-[#343E48]"> {label}</span>
    </div>
  );
};

export const PlainPill = _Pill;



const Pill = ({ label, size, type }: PillProps) => {
 
  return (
    <PlainPill
      label={label}
      size={size}
      indicatorColor={
        (pillTypeList.find((pt) => pt.name === type) || {}).indicatorColor
      }
      backgroundColor={
        (pillTypeList.find((pt) => pt.name === type) || {}).backgroundColor
      }
      className={(pillTypeList.find((pt) => pt.name === type) || {}).border || !type ?"":"border-none"}
    />
  );
};


export default Pill;
