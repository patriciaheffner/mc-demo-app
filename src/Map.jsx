import React, { Component } from 'react';
import Highcharts from 'highcharts/highmaps';
// import Highcharts from 'highcharts';

import ReactHighmaps from 'react-highcharts/ReactHighmaps.src';

var config = {
  title : {
    text : 'Choose a state to learn more',
    style: {
      color: '#FFF',
      letterSpacing: '0.25em',
      fontSize: '1.25em',
      textTransform: 'uppercase'
    }
  },
  mapNavigation: {
            enabled: false,
        },
        
        tooltip: {
            enabled: true
        },
        legend: {
            enabled: false
          },
        colorAxis: {
          min: 0,
          minColor: "#ffffff",
          maxColor: "#ffffff",
          labels: {
            format: "{value:.0f}%",
            style: {
                fontSize: "13px"
            }
          }
        },
        credits: { enabled: false },
        exporting: { enabled: false },
  series : [{
    data : [
      ['us-ma', 0],
      ['us-wa', 1],
      ['us-ca', 2],
      ['us-or', 3],
      ['us-wi', 4],
      ['us-me', 5],
      ['us-mi', 6],
      ['us-nv', 7],
      ['us-nm', 8],
      ['us-co', 9],
      ['us-wy', 10],
      ['us-ks', 11],
      ['us-ne', 12],
      ['us-ok', 13],
      ['us-mo', 14],
      ['us-il', 15],
      ['us-in', 16],
      ['us-vt', 17],
      ['us-ar', 18],
      ['us-tx', 19],
      ['us-ri', 20],
      ['us-al', 21],
      ['us-ms', 22],
      ['us-nc', 23],
      ['us-va', 24],
      ['us-ia', 25],
      ['us-md', 26],
      ['us-de', 27],
      ['us-pa', 28],
      ['us-nj', 29],
      ['us-ny', 30],
      ['us-id', 31],
      ['us-sd', 32],
      ['us-ct', 33],
      ['us-nh', 34],
      ['us-ky', 35],
      ['us-oh', 36],
      ['us-tn', 37],
      ['us-wv', 38],
      ['us-dc', 39],
      ['us-la', 40],
      ['us-fl', 41],
      ['us-ga', 42],
      ['us-sc', 43],
      ['us-mn', 44],
      ['us-mt', 45],
      ['us-nd', 46],
      ['us-az', 47],
      ['us-ut', 48],
      ['us-hi', 49],
      ['us-ak', 50],
      ['undefined', 51]
    ],
    mapData: Highcharts.maps['countries/us/us-all'],
    joinBy: 'hc-key',
    name: '',
    states: { },
    dataLabels: { enabled: false }
},
//  {
//     name: 'Separators',
//     type: 'mapline',
//     data: Highcharts.geojson(Highcharts.maps['countries/us/us-all'], 'mapline'),
//     color: 'silver',
//     showInLegend: false,
//     enableMouseTracking: false
// }
]
};

class Map extends Component {
  componentDidMount() {
    // let chart = this.refs.chart.getChart();
    // chart.series[0].addPoint({x: 10, y: 12});
  }
 
  render() {
    // console.log(Highcharts.maps)
    return <ReactHighmaps config={config} ref="Map"></ReactHighmaps>;
  }
}

export default Map