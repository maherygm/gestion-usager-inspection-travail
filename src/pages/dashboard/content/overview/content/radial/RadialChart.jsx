import moment from "moment";
import React from "react";
import ReactApexChart from "react-apexcharts";

const RadialChart = ({ data }) => {
  const processData = (data) => {
    const counts = {
      'reglement interieur': 0,
      'differend': 0,
      'contrat de travail': 0,
    };

    const now = moment();

    data.forEach(item => {
      const dossier = item.dossier;
      const date = moment(dossier.date);
      const type = dossier.types.toLowerCase();

      if (now.diff(date, 'weeks') < 4) {
        counts[type]++;
      }
    });

    const total = Object.values(counts).reduce((a, b) => a + b, 0);

    const percentages = {
      'reglement interieur': (counts['reglement interieur'] / total) * 100,
      'differend': (counts['differend'] / total) * 100,
      'contrat de travail': (counts['contrat de travail'] / total) * 100,
    };

    return { counts, percentages };
  };

  const { counts, percentages } = processData(data);

  const series = [
    percentages['reglement interieur'],
    percentages['differend'],
    percentages['contrat de travail']
  ];

  const options = {
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
            formatter: function () {
              return `${Object.values(counts).reduce((a, b) => a + b, 0)} dossiers`;
            },
          },
        },
      },
    },
    labels: ["Reglement Interieur", "Differend", "Contrat de Travail"],
    colors: ["#26822b", "#8f34ff4d", "#8f34ffb3"],
  };

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
    <>
      <div>
        <div id="chart">
          <ReactApexChart
            options={options}
            series={series}
            type="radialBar"
            height={270}
          />
        </div>
        <div id="html-dist">


        </div>
      </div>
      <div className="fotter">
        <div className="asignation">
          <p>Contrat de travail {counts["contrat de travail"]}</p>
          <p>Different {counts.differend}</p>
          <p>Reglement Interieur {counts["reglement interieur"]}</p>
        </div>
      </div>
    </>
  );
};

export default RadialChart;
