import { abbreviateNumber } from "./format";
import * as echarts from "echarts";
import dayjs from "dayjs";

type HeatmapData = {
  date: string;
  count: number;
};

export const generateHeatmapData = (
  startDate: string,
  endDate: string
): HeatmapData[] => {
  const start = dayjs(startDate);
  const end = dayjs(endDate);
  const totalDays = end.diff(start, "day") + 1; // Total days between start and end date

  const data: HeatmapData[] = [];
  for (let i = 0; i < totalDays; i++) {
    const date = start.add(i, "day").format("YYYY-MM-DD");
    // Randomly decide whether to include the date
    if (Math.random() < 0.5) {
      data.push({ date, count: 5 });
    }
  }

  return data;
};

export const lineChartOptions = (
  likeGraphSeries: Array<number>,
  followersGraphSeries: Array<number>,
  xAxisLabels: Array<string>
) => {
  const yAxisConfig = {
    type: "value",
    axisLine: {
      show: true,
      lineStyle: {
        color: "#FFFFFF",
      },
    },
    axisLabel: {
      formatter: (value: number) => abbreviateNumber(value),
      fontSize: 16,
    },
    splitLine: {
      show: false,
    },
  };

  const gradient = new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: "rgba(168, 224, 180, 0.4)" },
    { offset: 0.5, color: "rgba(47, 176, 116, 0.6)" },
    { offset: 1, color: "rgba(26, 126, 88, 0.2)" },
  ]);

  const xAxisConfig = {
    type: "category",
    boundaryGap: false,
    axisTick: {
      show: false,
    },
    data: xAxisLabels,
    axisLabel: {
      rotate: 90,
      verticalAlign: "middle",
      fontSize: 16,
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: "#FFFFFF",
      },
    },
    splitLine: {
      show: false,
    },
  };

  const likesCountSeries = {
    name: "Daily Likes",
    areaStyle: {
      color: gradient,
    },
    type: "line",
    data: likeGraphSeries,
    itemStyle: {
      color: "#2fb074",
    },
    symbol: "none",
  };

  const followersCountSeries = {
    name: "Daily Followers",
    type: "line",
    data: followersGraphSeries,
    itemStyle: {
      color: "#007973",
    },
    symbol: "none",
    zIndex: 2,
  };

  return {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Daily Likes", "Daily Followers"],
      textStyle: {
        color: "#FFFFFF",
        fontSize: 18,
      },
      icon: "square",
      itemWidth: 16,
      itemHeight: 16,
      selectedMode: true,
      left: "left",
      orient: "horizontal",
      itemGap: 40,
    },
    grid: {
      top: "15%",
      bottom: "5%",
      left: "1%",
      right: "1%",
      containLabel: true,
    },
    xAxis: xAxisConfig,
    yAxis: yAxisConfig,
    series: [likesCountSeries, followersCountSeries],
    media: [
      {
        query: { maxWidth: 600 },
        option: {
          xAxis: {
            axisLabel: {
              interval: 5,
            },
          },
        },
      },
      {
        query: { minWidth: 601, maxWidth: 1000 },
        option: {
          xAxis: {
            axisLabel: {
              interval: 1,
            },
          },
        },
      },
      {
        query: { minWidth: 1001 },
        option: {
          xAxis: {
            axisLabel: {
              interval: 0,
            },
          },
        },
      },
    ],
    textStyle: {
      color: "#FFFFFF",
      fontSize: 18,
      fontWeight: 500,
    },
  };
};
