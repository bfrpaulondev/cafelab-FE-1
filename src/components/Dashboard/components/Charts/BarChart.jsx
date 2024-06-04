import React, { Component } from "react";
import Card from "../Card/Card";
import Chart from "react-apexcharts";
import { barChartData, barChartOptions } from "../../variables/charts";

class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
      chartOptions: {},
    };
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    this.setState({
      chartData: barChartData,
      chartOptions: barChartOptions,
    });
  }

  componentDidUpdate() {
    if (this.chartRef.current) {
      this.chartRef.current.chart.updateOptions({
        chart: {
          width: "100%",
          height: "100%",
        },
      });
    }
  }

  render() {
    return (
      <Card
        py="1rem"
        height={{ sm: "200px" }}
        width="100%"
        bg="linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
        position="relative"
      >
        <Chart
          ref={this.chartRef}
          options={this.state.chartOptions}
          series={this.state.chartData}
          type="bar"
          width="100%"
          height="100%"
        />
      </Card>
    );
  }
}

export default BarChart;
