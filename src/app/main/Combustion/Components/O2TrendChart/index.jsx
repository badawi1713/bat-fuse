import FusionCharts from 'fusioncharts';
import TimeSeries from 'fusioncharts/fusioncharts.timeseries';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import React from 'react';
import ReactFC from 'react-fusioncharts';

ReactFC.fcRoot(FusionCharts, TimeSeries, FusionTheme);
FusionCharts.options.license({
	key:
		'lB-21D8ramD4A2I3I2B4D2C7E6D5F3H2I2crtE2D6D-11A-9qmzA7C8qgpC4D1I4D1B3D3E2E6C1G1B4F4B3B6C1E3gzzC1G4B1zB1E4B1oreA33A8B14cetB4A4H4gyB-33A7A3A3D6C1C4C1C3C5A2B2B-13vvF1B3EC2fbqE6D4G4i1sB8TD6B5iizH3H3B5D9A6D5B5B1F4D3H2C9C5C1f1==',
	creditLabel: false
});
const dataFetch = [
	['01/12/2020 00:00', 2.5],
	['01/12/2020 01:00', 5.0],
	['01/12/2020 02:00', 3.0],
	['01/12/2020 03:00', 4.0],
	['01/12/2020 04:00', 2.0],
	['01/12/2020 05:00', 3.4],
	['01/12/2020 06:00', 4.5],
	['01/12/2020 07:00', 2.4],
	['01/12/2020 08:00', 3.6],
	['01/12/2020 09:00', 4.4],
	['01/12/2020 10:00', 5.5],
	['01/12/2020 11:00', 5.4],
	['01/12/2020 12:00', 4.6],
	['01/12/2020 13:00', 4.4],
	['01/12/2020 14:00', 5.5],
	['01/12/2020 15:00', 5.4],
	['01/12/2020 16:00', 5.5],
	['01/12/2020 17:00', 3.4],
	['01/12/2020 18:00', 3.5],
	['01/12/2020 19:00', 2.4],
	['01/12/2020 20:00', 4.5],
	['01/12/2020 21:00', 5.4],
	['01/12/2020 22:00', 3.5],
	['01/12/2020 23:00', 4.4],
	['02/12/2020 00:00', 5.0],
	['02/12/2020 01:00', 6.0],
	['02/12/2020 02:00', 6.0],
	['02/12/2020 03:00', 4.0],
	['02/12/2020 04:00', 2.0],
	['02/12/2020 05:00', 4.4],
	['02/12/2020 06:00', 3.5],
	['02/12/2020 07:00', 3.4],
	['02/12/2020 08:00', 3.6],
	['02/12/2020 09:00', 5.4],
	['02/12/2020 10:00', 5.5],
	['02/12/2020 11:00', 5.4],
	['02/12/2020 12:00', 5.6],
	['02/12/2020 13:00', 5.4],
	['02/12/2020 14:00', 3.5],
	['02/12/2020 15:00', 3.4],
	['02/12/2020 16:00', 2.5],
	['02/12/2020 17:00', 4.4],
	['02/12/2020 18:00', 3.5],
	['02/12/2020 19:00', 2.4],
	['02/12/2020 20:00', 2.5],
	['02/12/2020 21:00', 2.4],
	['02/12/2020 22:00', 2.5],
	['02/12/2020 23:00', 5.4]
];

const schemaFetch = [
	{
		id: 0,
		name: 'Time',
		type: 'date',
		format: '%-d/%-m/%Y %H:%M'
	},
	{
		id: 1,
		name: 'O2',
		type: 'number'
	}
];

const dataSource = {
	/*  time navigator */
	chart: {
		bgColor: '#000',
		bgAlpha: '0',
		showLegend: 0,
		showtooltip: 1,
		multiCanvas: false,
		paletteColors: '#00ff37',
		style: {
			text: {
				fill: '#fff',
				'font-size': 9
			},

			canvas: {
				'fill-opacity': 0
			},
			background: {
				'fill-opacity': 0
			}
		}
	},

	plotConfig: {
		style: {
			fill: '#ff0000'
		}
	},

	navigator: {
		enabled: 0
	},
	extensions: {
		customRangeSelector: {
			enabled: '0'
		}
	},

	yaxis: [
		{
			id: 1,
			plot: [
				{
					value: 'O2',
					type: 'line'
				}
			],
			title: '%',
			orientation: 'left'
		}
	]
};

export default class O2TrendChart extends React.Component {
	constructor(props) {
		super(props);
		this.onFetchData = this.onFetchData.bind(this);
		this.state = {
			timeseriesDs: {
				type: 'timeseries',
				renderAt: 'container',
				width: '100%',
				height: 184,

				dataSource
			}
		};
	}

	async componentDidMount() {
		await this.onFetchData();
	}

	onFetchData() {
		Promise.all([dataFetch, schemaFetch]).then(res => {
			const data = res[0];
			const schema = res[1];
			const fusionTable = new FusionCharts.DataStore().createDataTable(data, schema);
			const timeseriesDs = Object.assign({}, this.state.timeseriesDs);
			timeseriesDs.dataSource.data = fusionTable;

			this.setState({
				timeseriesDs
			});
		});
	}

	render() {
		return (
			<div>{this.state.timeseriesDs.dataSource.data ? <ReactFC {...this.state.timeseriesDs} /> : 'Loading'}</div>
		);
	}
}
