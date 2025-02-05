import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import React from "react";
import { TiktokIcon } from "../../assets";
import PostingHistoryGraph from "../postingHistory";
dayjs.extend(advancedFormat);

interface ContributionData {
  date: string;
  count: number;
}

export const ContributionHeatmap: React.FC<{
  data: Array<ContributionData>;
}> = ({ data }) => {
  return (
    <div className="p-3 sm:py-6 sm:px-8 bg-black border border-gray text-white rounded-3xl my-8">
      <div className="flex flex-col-reverse sm:flex-row justify-start items-center my-6 gap-x-4">
        <div className="flex justify-start items-center gap-x-2">
          <h1 className="text-left text-lg sm:text-2xl ml-0 sm:ml-3 font-bold">
            Posting History
          </h1>
          <div className="text-base sm:text-lg">
            Last Posted: {dayjs(data?.[0]?.date).format("Do MMM 'YY")}
          </div>
        </div>
        <div className="w-fit ml-auto text-xs my-3 sm:mb-0 gap-x-2 flex bg-gray items-center px-2 py-1 rounded-3xl">
          <TiktokIcon width={15} height={15} />
          TikTok data only
        </div>
      </div>
      <div className="w-[1200] overflow-hidden">
        <PostingHistoryGraph data={data} />
      </div>
    </div>
  );
};
