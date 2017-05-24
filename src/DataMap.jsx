import React from 'react';
import Datamap from 'react-datamaps';

export default class DataMap extends React.Component {

  constructor(props) {
    super(props);
  }  

  render() {
        var data = this.props.regionData.reduce((x, y) => {
          x[y.code] = {'value': y.value, 'fillKey': 'Democrat'};
          return x;
        }, {})

        return (
                <Datamap
                    scope="usa"
		    height="500"
		    width="650"
                    geographyConfig={{
                        highlightBorderColor: '#bada55',
                        popupTemplate: (geography, data) =>
                            `<div class='hoverinfo'>${geography.properties.name}\n Count: ${data.value}`,
                        highlightBorderWidth: 3
                    }}
                    fills={{
                        'Republican': '#cc4731',
                        'Democrat': '#306596',
                        'Heavy Democrat': '#667faf',
                        'Light Democrat': '#a9c0de',
                        'Heavy Republican': '#ca5e5b',
                        'Light Republican': '#eaa9a8',
                        'defaultFill': '#eddc4e'
                    }}
                    data={data}
                    labels
                />
        );
    }

}
