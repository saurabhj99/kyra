import ReactECharts from "echarts-for-react";
import { lineChartOptions } from "../../utils/graph";
import { TiktokIcon } from "../../assets";

interface LineGraph {
  likesPoints: Array<any>;
  followersPoints: Array<any>;
  xAxisLabels: Array<any>;
}

export const MultiLineGraph: React.FC<LineGraph> = ({
  likesPoints,
  followersPoints,
  xAxisLabels,
}) => {
  return (
    <div className="mx-auto w-full h-[650px] rounded-3xl border border-gray p-2 sm:px-8 sm:py-5">
      <div className="w-fit ml-auto text-xs my-3 sm:mb-0 gap-x-2 flex bg-gray items-center px-2 py-1 rounded-3xl">
        <TiktokIcon width={15} height={15} />
        TikTok data only
      </div>
      <ReactECharts
        option={lineChartOptions(likesPoints, followersPoints, xAxisLabels)}
        style={{ height: "600px", width: "100%", marginBottom: "50px" }}
      />
    </div>
  );
};
