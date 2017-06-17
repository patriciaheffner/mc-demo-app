import React, { Component } from 'react';
import './Page.css';
import Map from './Map.jsx';
import logo from './assets/logo-color.svg';
// const csvFile = require('./stock_photo_coolness.csv');
const state_hash =  {
  'AL': 'Alabama',
  'AK': 'Alaska',
  'AS': 'American Samoa',
  'AZ': 'Arizona',
  'AR': 'Arkansas',
  'CA': 'California',
  'CO': 'Colorado',
  'CT': 'Connecticut',
  'DE': 'Delaware',
  'DC': 'District Of Columbia',
  'FM': 'Federated States Of Micronesia',
  'FL': 'Florida',
  'GA': 'Georgia',
  'GU': 'Guam',
  'HI': 'Hawaii',
  'ID': 'Idaho',
  'IL': 'Illinois',
  'IN': 'Indiana',
  'IA': 'Iowa',
  'KS': 'Kansas',
  'KY': 'Kentucky',
  'LA': 'Louisiana',
  'ME': 'Maine',
  'MH': 'Marshall Islands',
  'MD': 'Maryland',
  'MA': 'Massachusetts',
  'MI': 'Michigan',
  'MN': 'Minnesota',
  'MS': 'Mississippi',
  'MO': 'Missouri',
  'MT': 'Montana',
  'NE': 'Nebraska',
  'NV': 'Nevada',
  'NH': 'New Hampshire',
  'NJ': 'New Jersey',
  'NM': 'New Mexico',
  'NY': 'New York',
  'NC': 'North Carolina',
  'ND': 'North Dakota',
  'MP': 'Northern Mariana Islands',
  'OH': 'Ohio',
  'OK': 'Oklahoma',
  'OR': 'Oregon',
  'PW': 'Palau',
  'PA': 'Pennsylvania',
  'PR': 'Puerto Rico',
  'RI': 'Rhode Island',
  'SC': 'South Carolina',
  'SD': 'South Dakota',
  'TN': 'Tennessee',
  'TX': 'Texas',
  'UT': 'Utah',
  'VT': 'Vermont',
  'VI': 'Virgin Islands',
  'VA': 'Virginia',
  'WA': 'Washington',
  'WV': 'West Virginia',
  'WI': 'Wisconsin',
  'WY': 'Wyoming',
  'National': 'America'
};

class Page extends Component {

  getFullStateName(abbrev) {
    return state_hash[abbrev];
  }

   getStateName(obj) {
    const abbrev = obj.Demographic;
    return abbrev && this.getFullStateName(abbrev) || '';
  }

  getDynamicBanner() {
    const {data} = this.props
    return <h2>{`Stock Photos of Nice Mountains for ${this.getStateName(data)}`}</h2>
  }

  getDynamicData() {
    const {data} = this.props
    const stateName = data && this.getStateName(data);

    let displayState = stateName === 'America' ? 'American' : stateName;

    return (
      <div>
        <h3>{`${displayState} Voters Love Stock Photos of Mountains`}</h3>
        <h4>{`Percent of ${displayState} voters who say stock photos of mountains are 'Cool' or 'Very cool':`}</h4>
      </div>
    )
    return <div>hi</div>
  }

  getChartByReq() {
    const {data} = this.props;

    const chartReq = (
      <div>This is where the chart for state would go.
        <p>Cool: {data.Cool}</p>
        <p>Very Cool: {data['Very cool']}</p>
      </div>
    )
    return chartReq;
  }

  render(){
      return (
        <div>
          <div id='navigation'>
            <img id='logo' src={logo} />
          </div>

          <div id='navigation-banner'>
            {this.getDynamicBanner()}
          </div>

          <div id='interactive-map'>
            <Map />
          </div>
          <div id='data-description'>
            {this.getDynamicData()}
            {this.getChartByReq()}
          </div>
        </div>
      );
  }
}

export default Page