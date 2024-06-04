import React, { useRef, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import { lineChartData, lineChartOptions } from "../../variables/charts";

const LineChart = ({ lineCharts }) => {
  const [chartData, setChartData] = useState([]);
  const [chartOptions, setChartOptions] = useState({});
  const chartRef = useRef();

  useEffect(() => {
    setChartData(lineCharts.data);
    setChartOptions(lineCharts.options);
  }, [lineCharts]);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.chart.updateOptions({
        chart: {
          width: "100%",
          height: "100%",
        },
      });
    }
  }, [chartData, chartOptions]);

  return (
    <ReactApexChart
      ref={chartRef}
      options={chartOptions}
      series={chartData}
      type="area"
      width="100%"
      height="100%"
    />
  );
};

export default LineChart;
