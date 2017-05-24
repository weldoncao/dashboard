import React from 'react';
import Datamap from 'react-datamaps';

export default class DataMap extends React.Component {

  render() {
        const geo = this.props.regionData || []
        var counter = 0;
        var gradientCounter = 0;
        var gradient = ["#007991", "#027B92", "#047E93", "#068094", "#098396", "#0B8597", "#0D8898", "#108B9A", "#128D9B", "#14909C", "#17929E", "#19959F", "#1B97A0", "#1E9AA2", "#209DA3", "#229FA4", "#24A2A6", "#27A4A7", "#29A7A8", "#2BA9AA", "#2EACAB", "#30AFAC", "#32B1AE", "#35B4AF", "#37B6B0", "#39B9B2", "#3CBCB3", "#3EBEB4", "#40C1B6", "#42C3B7", "#45C6B8", "#47C8BA", "#49CBBB", "#4CCEBC", "#4ED0BE", "#50D3BF", "#53D5C0", "#55D8C2", "#57DAC3", "#5ADDC4", "#5CE0C6", "#5EE2C7", "#60E5C8", "#63E7CA", "#65EACB", "#67ECCC", "#6AEFCE", "#6CF2CF", "#6EF4D0", "#71F7D2", "#73F9D3", "#75FCD4", "#78FFD6"]
        var gradientMap = gradient.reduce((x, y) => {
	  x[gradientCounter] = y
          gradientCounter++;
          return x;
        }, {})
    
        var data = geo.reduce((x, y) => {
          x[y.code] = {'value': y.value, 'fillKey': counter};
          counter++;
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
                            `<div class='hoverinfo'>${geography.properties.name}\n Count of users: ${data.value}`,
                        highlightBorderWidth: 3
                    }}
                    fills={gradientMap}
                    data={data}
                    labels
                />
        );
    }

}
