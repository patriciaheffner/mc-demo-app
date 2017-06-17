import React, { Component } from 'react';
var ReactHighcharts = require('react-highcharts');
var HighchartsMore = require('highcharts-more');
var SolidGauge = require("highcharts-solid-gauge");


HighchartsMore(ReactHighcharts.Highcharts);
SolidGauge(ReactHighcharts.Highcharts);

var config = {
    chart: {
      type: 'solidgauge'
    },
    title: null,
    pane: {
      center: ["50%", "50%"],
      size: "60%",
      startAngle: 0,
      endAngle: 360,
      background: {
        backgroundColor: "#8c8c8c",
        innerRadius: "74%",
        outerRadius: "100%",
        shape: "arc",
        borderColor: "#fff"
      }
    },
    tooltip:     {
        enabled: false
    },
    yAxis: {
      stops: [[0.1, "#ffc107"]],
      minorTickInterval: null,
      tickWidth: 0,
      title: {
        text: 'ALL VOTERS',
        y: 200,
        style: {
          fontSize: '1.2em',
          color: '#8c8c8c',
          textTransform: 'uppercase'
        }
      },
      labels: { enabled: false },
      min: 0,
      max: 100,
      gridLineColor: "#fff",
      minorGridLineColor: "#fff",
      minorTickColor: "#fff",
      tickColor: "#fff"
    },
    credits: { enabled: false },
    plotOptions: {
      solidgauge: {
        innerRadius: "74%",
        dataLabels: {
          enabled: true,
          borderWidth: 0,
          borderColor: "rgba(0,0,0,0)",
          useHTML: !0
        }
      }
    }
};
class Chart extends Component {

  calcPerc(data) {
    const vCool = data['Very cool'] || 0;
    const cool = data.Cool || 0;
    const percent = vCool + cool;

    return Math.round(percent * 100);
  }

  updateChartSeries() {
    let chart = this.refs.chart.getChart();
    const {data} = this.props;

    chart.addSeries({
      data: [this.calcPerc(data)],
      name: 'All voters',
      dataLabels: {
        format: '<div style="text-align:center"><span style="font-size:6em;">{y}</span>' +
               '<span style="font-size:4em;vertical-align:top">%</span></div>',
        x: 0,
        y: -40
      }
    })
  }

  componentDidMount() {
    let chart = this.refs.chart.getChart();
    const {data} = this.props;

    chart.addSeries({
      name: 'All voters',
      data: [this.calcPerc(data)],
      dataLabels: {
        format: '<div style="text-align:center"><span style="font-size:6em;">{y}</span>' +
               '<span style="font-size:4em;vertical-align:top">%</span></div>',
        x: 0,
        y: -40
      }
    })
  }

  componentDidUpdate() {
    this.updateChartSeries();
  }

  render() {
    return <ReactHighcharts config={config} ref="chart" />
  }
}

export default Chart