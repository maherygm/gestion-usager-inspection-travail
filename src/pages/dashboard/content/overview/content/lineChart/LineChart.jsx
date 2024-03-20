import React from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = () => {
  const seriesData = [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
      color: "#9034ff",
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  const optionsData = {
    chart: {
      height: 350,
      type: "area",
    },

    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  };

  return (
    <ReactApexChart
      options={optionsData}
      series={seriesData}
      type="area"
      height={350}
    />
  );
};

export default LineChart;
