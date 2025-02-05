import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { generateHeatmapData } from "../../utils/graph";
import { ContributionHeatmap } from "../contributionGraph";
import { MultiLineGraph } from "../lineGraph";

export const GraphSection = ({ dataPoints }: { dataPoints: any }) => {
  const [graphData, setGraphData] = useState({
    followersPoints: [],
    likesPoints: [],
    xAxisLabels: [],
  });

  const parseGraphData = (points: Array<any>) => {
    const followersPoints: any = [];
    const likesPoints: any = [];
    const xAxisLabels: any = [];

    points?.map((item: any) => {
      likesPoints.push(item?.likesCount || 0);
      followersPoints.push(item?.followersCount || 0);
      xAxisLabels.push(dayjs(item?.createdAt).format("DD MMM"));
    });

    return { followersPoints, likesPoints, xAxisLabels };
  };

  useEffect(() => {
    const parsedData = parseGraphData(dataPoints);
    setGraphData(parsedData);
  }, [dataPoints]);

  const { likesPoints, followersPoints, xAxisLabels } = graphData;

  return (
    <div className="w-full sm:w-11/12 md:10/12 lg:9/12 xl:5/6 mx-auto">
      <MultiLineGraph
        likesPoints={likesPoints}
        followersPoints={followersPoints}
        xAxisLabels={xAxisLabels}
      />
      <ContributionHeatmap
        data={generateHeatmapData("2025-01-01", "2025-12-31")}
      />
    </div>
  );
};
