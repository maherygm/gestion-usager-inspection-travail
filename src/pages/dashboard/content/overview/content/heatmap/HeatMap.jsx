import React from "react";
import ReactApexChart from "react-apexcharts";

const generateData = (count, yrange) => {
  let i = 0;
  const series = [];
  while (i < count) {
    const x = `w${i + 1}`;
    const y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push({
      x,
      y,
    });
    i++;
  }
  return series;
};

const HeatMap = () => {
  const seriesData = [
    {
      name: "Metric1",
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric2",
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric3",
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Metric4",
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
  ];

  const optionsData = {
    chart: {
      height: 100,
      type: "heatmap",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#9034ff"],
    title: {
      text: "Daclaration",
    },
  };

  return (
    <ReactApexChart
      options={optionsData}
      series={seriesData}
      type="heatmap"
      height={250}
    />
  );
};

export default HeatMap;
