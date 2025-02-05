import React from "react";
import { Card } from "../card";
import clsx from "clsx";

export const HeaderCards: React.FC<any> = ({ profileData }) => {
  const cardClass =
    "border-[1px] border-gray min-w-fit lg:min-w-[150px] xl:min-w-[180px]";
  return (
    <div className="w-11/12 lg:w-8/12 mx-auto  grid grid-cols-2 grid-rows-2 lg:grid-cols-4 lg:grid-rows-1  gap-5 lg:gap-2 lg:justify-between">
      <Card
        title="Average Kyra Fee"
        description={null}
        cardClass={clsx(cardClass, "gap-7 lg:gap-2 xl:gap-7")}
      />
      <Card
        title="Average Kyra CPV"
        description={null}
        cardClass={clsx(cardClass, "gap-7 lg:gap-2 xl:gap-7")}
      />
      <Card
        title="Predicted Fee"
        descriptionPrefix="&#x24;"
        description={Math.floor(profileData.predictedFee)}
        cardClass={cardClass}
      />
      <Card
        title="Predicted CPV"
        descriptionPrefix="&#x24;"
        description={profileData.predictedCpv}
        cardClass={cardClass}
      />
    </div>
  );
};
