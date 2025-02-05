import clsx from "clsx";
import React from "react";
import { CounterAnimation } from "../counterAnimation";

type CardProps = {
  cardClass?: string;
  growth?: React.ReactNode;
  title: string;
  description: number | null;
  descriptionPrefix?: string;
  descriptionSuffix?: string;
  descriptionClass?: string;
};

export const abbreviateNumber = (value: number) => {
  const absValue = Math.abs(value);
  if (absValue >= 1e12) {
    return parseFloat((absValue / 1e12).toFixed(2));
  } else if (absValue >= 1e9) {
    return parseFloat((absValue / 1e9).toFixed(2));
  } else if (absValue >= 1e6) {
    return parseFloat((absValue / 1e6).toFixed(2));
  } else if (absValue >= 1e3) {
    return parseFloat((absValue / 1e3).toFixed(2));
  } else {
    return absValue;
  }
};

export const abbreviateNumberSuffix = (value: number | null) => {
  if (typeof value === "number") {
    const absValue = Math.abs(value);
    const sign = value < 0 ? "-" : "";
    if (absValue >= 1e12) {
      return `${sign}${" t"}`;
    } else if (absValue >= 1e9) {
      return `${sign}${" b"}`;
    } else if (absValue >= 1e6) {
      return `${sign}${" m"}`;
    } else if (absValue >= 1e3) {
      return `${sign}${" k"}`;
    } else {
      return ``;
    }
  } else return;
};

export const Card: React.FC<CardProps> = ({
  cardClass,
  growth,
  title,
  description,
  descriptionPrefix,
  descriptionSuffix,
  descriptionClass,
}) => {
  return (
    <div
      className={clsx(
        "w-full lg:w-1/5 min-h-fit lg:min-h-24 flex flex-col items-center px-5 py-3 rounded-3xl min-w-fit",
        cardClass
      )}
    >
      <h2 className="text-[0.8rem] lg:text-[1rem] text-gray-100 text-center">
        {title}
      </h2>
      <div
        className={clsx(
          "flex items-center text-xl lg:text-4xl font-light",
          descriptionClass
        )}
      >
        {descriptionPrefix}
        {description !== null ? (
          <div>
            <CounterAnimation value={abbreviateNumber(description)} />
          </div>
        ) : (
          <div className="bg-white h-[2px] w-7 rounded-lg"></div>
        )}

        {descriptionSuffix
          ? descriptionSuffix
          : abbreviateNumberSuffix(description)}
      </div>
      {growth ? growth : ""}
    </div>
  );
};
