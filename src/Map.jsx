import React, { Component } from 'react';
import data from './us-all';
import geoData from './us-all-geo';
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
    enabled: false
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
    mapData: data,
    joinBy: 'hc-key',
    name: '',
    states: { },
    dataLabels: { enabled: false }
}]
};

class Map extends Component {
  updateMap() {
    let map = this.refs.map.getChart();
    const {stateName} = this.props;
    let text = stateName === 'America' ? 'Choose a State to Learn More' : stateName;
    map.setTitle({text})
  }

  componentDidUpdate() {
    this.updateMap();
  }

  render() {
    return <ReactHighmaps config={config} ref="map"></ReactHighmaps>;
  }
}

export default Map