import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

interface ContributionData {
  date: string;
  count: number;
}

const CELL_SIZE = 15;
const PADDING = 30;
const MONTH_GAP = 15; // Extra spacing between months
const COLORS = ["#161B22", "#0E4429", "#006D32", "#26A641", "#39D353"];
const WEEKDAYS = ["M", "T", "W", "TH", "F", "SA", "SU"];

const ContributionGraph: React.FC<{
  data: Array<ContributionData>;
}> = ({ data }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const today = new Date();
    const startDate = new Date();
    startDate.setFullYear(today.getFullYear() - 1);

    // Get the last day of the current month
    const lastDayOfMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    ).getDate();
    const endDate = new Date(today);
    endDate.setDate(Math.min(lastDayOfMonth, 30)); // Set to min(30, last day of month)

    const allDays = d3.timeDays(startDate, endDate);
    const contributionsMap = new Map(data.map((d) => [d.date, d.count]));

    const formatDate = d3.timeFormat("%Y-%m-%d");
    const months = d3.timeMonths(startDate, endDate);

    const tooltip = d3
      .select("body")
      .append("div")
      .style("position", "absolute")
      .style("background", "#0D1117")
      .style("color", "#fff")
      .style("padding", "5px 10px")
      .style("border-radius", "5px")
      .style("display", "none");

    let xOffset = 0;
    let currentMonth = "";
    const monthOffsets = new Map();

    // Set the graph width to fit all contributions
    const totalWeeks = Math.ceil(allDays.length / 7);
    const currentGraphWidth =
      totalWeeks * (CELL_SIZE + 2) + MONTH_GAP * months.length;
    const graphHeight = 180;

    svg.attr("viewBox", `0 0 ${currentGraphWidth + 50} ${graphHeight}`);

    const grid = svg
      .append("g")
      .attr("transform", `translate(${PADDING}, ${PADDING})`);

    grid
      .selectAll("rect")
      .data(allDays)
      .enter()
      .append("rect")
      .attr("x", (d, i) => {
        const month = d3.timeFormat("%Y-%m")(d);
        if (month !== currentMonth) {
          xOffset += MONTH_GAP; // Add spacing when a new month starts
          currentMonth = month;
          monthOffsets.set(
            month,
            Math.floor(i / 7) * (CELL_SIZE + 2) + xOffset + 45
          );
        }
        return Math.floor(i / 7) * (CELL_SIZE + 2) + xOffset;
      })
      .attr("y", (_, i) => (i % 7) * (CELL_SIZE + 2))
      .attr("width", CELL_SIZE)
      .attr("height", CELL_SIZE)
      .attr("rx", 3)
      .attr("fill", (d) => {
        const count = contributionsMap.get(formatDate(d)) || 0;
        return COLORS[Math.min(count, COLORS.length - 1)];
      })
      .on("mouseover", (event, d) => {
        const count = contributionsMap.get(formatDate(d)) || 0;
        tooltip
          .html(`${formatDate(d)}: ${count} contributions`)
          .style("left", `${event.pageX + 10}px`)
          .style("top", `${event.pageY - 20}px`)
          .style("display", "block");
      })
      .on("mouseout", () => tooltip.style("display", "none"));

    // Add month labels
    svg
      .append("g")
      .attr("transform", `translate(10, 20)`)
      .selectAll("text")
      .data(months)
      .enter()
      .append("text")
      .attr("x", (d) => monthOffsets.get(d3.timeFormat("%Y-%m")(d)) || 0)
      .attr("y", -5)
      .text((d) => d3.timeFormat("%b")(d))
      .attr("fill", "#fff")
      .attr("font-size", "12px");

    // Add weekday labels on the left
    svg
      .append("g")
      .attr("transform", `translate(0, 40)`)
      .selectAll("text")
      .data(WEEKDAYS)
      .enter()
      .append("text")
      .attr("x", 8)
      .attr("y", (_, i) => (i % 7) * (CELL_SIZE + 2))
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .text((d) => d)
      .attr("fill", "#fff")
      .attr("font-size", "12px");
  }, [containerWidth]);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        maxWidth: "100%",
        overflowX: "auto",
        paddingBottom: "10px",
        borderBottom: "1px solid #333",
      }}
    >
      <svg ref={svgRef} height="200"></svg>
    </div>
  );
};

export default ContributionGraph;
