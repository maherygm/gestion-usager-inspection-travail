import moment from "moment";
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



const HeatMap = ({ data }) => {

  const generateData2 = () => {

    const weekDayCounts = {}
    const fourWeekAgo = moment().subtract(4, 'weeks');

    data.forEach((item) => {

      const date = moment(item.dossier.date);
      if (date.isAfter(fourWeekAgo)) {
        const week = date.isoWeek();
        const day = date.isoWeekday();

        if (!weekDayCounts[week]) {
          weekDayCounts[week] = Array(7).fill(0);
        }

        weekDayCounts[week][day - 1]++;
      }

    })


    const series = Object.keys(weekDayCounts).map((week) => {
      return {
        name: `Semmaine ${week}`,
        data: weekDayCounts[week].map((count, day) => {
          return {
            x: `Jour ${day + 1}`,
            y: count,
          };
        })
      }
    })

    return series;
  }

  const seriesData = [
    {
      name: "Semaine 1",
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Semaine 2",
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Semaine 3",
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: "Semaine 4",
      data: generateData(18, {
        min: 0,
        max: 90,
      }),
    },
  ];

  const series = generateData2();


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
      text: "Dossiers Heatmap par Semaine et jour (4 dernier semaines)",
    },
    xaxis: {
      types: 'category',
      title: {
        text: "Jour de la semaine"
      }
    },
    yaxis: {
      types: 'category',
      title: {
        text: "semaine de l'année"
      }
    }
  };

  return (
    <ReactApexChart
      options={optionsData}
      series={series}
      type="heatmap"
      height={250}
    />
  );
};

export default HeatMap;
