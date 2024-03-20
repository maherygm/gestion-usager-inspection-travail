import React from "react";
import ReactApexChart from "react-apexcharts";

const RadialChart = () => {
  const state = {
    series: [44, 55, 67, 83],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: function (w) {
                return 249;
              },
            },
          },
        },
      },
      labels: ["Apples", "Oranges", "Bananas", "Berries"],
      colors: ["#26822b", "#8f34ff4d", "#8f34ffb3", "#9034ff"],
    },
  };

  return (
    <div>
      <div id="chart">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="radialBar"
          height={270}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default RadialChart;
