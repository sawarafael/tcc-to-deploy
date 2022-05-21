import Chart from "react-apexcharts";

export const Graphic = () => {
  const options = {
    chart: {
      id: "basic-bar",
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        "Janeiro",
        "Fevereiro",
        "Marco",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
      ],
    },
  };

  const series = [
    {
      data: [0, 25, 50, 75, 100, 125, 150],
    },
  ];

  return <Chart options={options} series={series} type="bar" width="400" />;
};
