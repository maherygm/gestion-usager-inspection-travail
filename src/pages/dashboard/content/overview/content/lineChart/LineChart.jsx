import moment from "moment/moment";
import React from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = ({ data }) => {

  const processData = (data) => {
    // Initialize counts
    const counts = {
      'reglement interieur': {},
      'differend': {},
      'contrat de travail': {}
    };

    // Get the current date
    const now = moment();

    // Iterate over each dossier in the data
    data.forEach(item => {
      const dossier = item.dossier;
      const date = moment(dossier.date).startOf('day').format('YYYY-MM-DD');
      const type = dossier.types.toLowerCase();

      if (now.diff(moment(date), 'weeks') < 4) {
        if (!counts[type][date]) {
          counts[type][date] = 0;
        }
        counts[type][date]++;
      }
    });

    // Generate the last 4 weeks dates
    const dates = [];
    for (let i = 0; i < 28; i++) {
      dates.push(now.clone().subtract(i, 'days').format('YYYY-MM-DD'));
    }
    dates.reverse();

    // Create series data for each type
    const series = Object.keys(counts).map(type => {
      return {
        name: type,
        data: dates.map(date => counts[type][date] || 0)
      };
    });

    return { series, dates };
  };



  const seriesData = [
    {
      name: "Reglement Interieur",
      data: [31, 40, 28, 51, 42, 109, 100],
      color: "#9034ff",
    },
    {
      name: "Differents",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
    {
      name: "Contrat de Travail",
      data: [19, 46, 67, 2, 37, 72, 40],
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

  const { series, dates } = processData(data);
  const options = {
    chart: {
      height: 350,
      type: 'line'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
      categories: dates
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy'
      }
    }
  };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="area"
      height={350}
    />
  );
};

export default LineChart;
