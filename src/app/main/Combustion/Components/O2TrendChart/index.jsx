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
	['01/12/2020 00:00', 90.2],
	['01/12/2020 01:00', 60.0],
	['01/12/2020 02:00', 40.0],
	['01/12/2020 03:00', 70.0],
	['01/12/2020 04:00', 40.0],
	['01/12/2020 05:00', 34.0],
	['01/12/2020 06:00', 75.0],
	['01/12/2020 07:00', 84.0],
	['01/12/2020 08:00', 46.0],
	['01/12/2020 09:00', 64.0],
	['01/12/2020 10:00', 65.0],
	['01/12/2020 11:00', 44.0],
	['01/12/2020 12:00', 86.0],
	['01/12/2020 13:00', 34.0],
	['01/12/2020 14:00', 75.0],
	['01/12/2020 15:00', 34.0],
	['01/12/2020 16:00', 25.0],
	['01/12/2020 17:00', 34.0],
	['01/12/2020 18:00', 65.0],
	['01/12/2020 19:00', 34.0],
	['01/12/2020 20:00', 35.0],
	['01/12/2020 21:00', 34.0],
	['01/12/2020 22:00', 15.0],
	['01/12/2020 23:00', 34.0]
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
		bgAlpha: 100,
		showLegend: 0,
		showtooltip: 1,
		multiCanvas: false
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
