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
	['01/12/2020 00:00', 72.5, 1, 1],
	['01/12/2020 01:00', 85.0, 1, 1],
	['01/12/2020 02:00', 83.0, 0, 0],
	['01/12/2020 03:00', 84.0, 1, 1],
	['01/12/2020 04:00', 82.0, 1, 0],
	['01/12/2020 05:00', 83.4, 0, 0],
	['01/12/2020 06:00', 84.5, 1, 0],
	['01/12/2020 07:00', 72.4, 1, 0],
	['01/12/2020 08:00', 73.6, 0, 0],
	['01/12/2020 09:00', 74.4, 0, 0],
	['01/12/2020 10:00', 75.5, 0, 0],
	['01/12/2020 11:00', 75.4, 1, 0],
	['01/12/2020 12:00', 74.6, 1, 0],
	['01/12/2020 13:00', 84.4, 1, 0],
	['01/12/2020 14:00', 85.5, 1, 0],
	['01/12/2020 15:00', 95.4, 1, 0],
	['01/12/2020 16:00', 95.5, 1, 0],
	['01/12/2020 17:00', 83.4, 1, 0],
	['01/12/2020 18:00', 73.5, 1, 0],
	['01/12/2020 19:00', 82.4, 1, 0],
	['01/12/2020 20:00', 94.5, 1, 1],
	['01/12/2020 21:00', 85.4, 1, 0],
	['01/12/2020 22:00', 73.5, 1, 0],
	['01/12/2020 23:00', 84.4, 1, 1],
	['02/12/2020 00:00', 75.0, 1, 0],
	['02/12/2020 01:00', 76.0, 1, 0],
	['02/12/2020 02:00', 76.0, 1, 1],
	['02/12/2020 03:00', 74.0, 1, 0],
	['02/12/2020 04:00', 72.0, 1, 0],
	['02/12/2020 05:00', 84.4, 1, 1],
	['02/12/2020 06:00', 83.5, 1, 0],
	['02/12/2020 07:00', 83.4, 1, 0],
	['02/12/2020 08:00', 83.6, 1, 1],
	['02/12/2020 09:00', 85.4, 1, 1],
	['02/12/2020 10:00', 95.5, 1, 1],
	['02/12/2020 11:00', 95.4, 1, 0],
	['02/12/2020 12:00', 95.6, 1, 1],
	['02/12/2020 13:00', 95.4, 1, 1],
	['02/12/2020 14:00', 93.5, 1, 1],
	['02/12/2020 15:00', 93.4, 1, 1],
	['02/12/2020 16:00', 82.5, 1, 1],
	['02/12/2020 17:00', 84.4, 0, 1],
	['02/12/2020 18:00', 73.5, 0, 1],
	['02/12/2020 19:00', 72.4, 0, 1],
	['02/12/2020 20:00', 82.5, 0, 1],
	['02/12/2020 21:00', 92.4, 0, 1],
	['02/12/2020 22:00', 72.5, 0, 0],
	['02/12/2020 23:00', 85.4, 0, 0]
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
		name: 'Boiler Efficiency',
		type: 'number'
	},
	{
		id: 2,
		name: 'Sootblow Optimization Running',
		type: 'number'
	},
	{
		id: 3,
		name: 'Combustion Optimization Running',
		type: 'number'
	}
];

const dataSource = {
	/*  time navigator */
	chart: {
		chartLeftMargin: '0',
		chartTopMargin: '0',
		chartRightMargin: '0',
		chartBottomMargin: '0',
		bgColor: '#000',
		bgAlpha: '0',
		showLegend: 1,
		showtooltip: 1,
		multiCanvas: false,
		paletteColors: '#00ff37, #fff00, #2196F3',
		style: {
			text: {
				fill: '#fff',
				'font-size': 12
			},

			canvas: {
				'fill-opacity': 0
			},
			background: {
				'fill-opacity': 0
			}
		}
	},

	legend: {
		alignment: 'middle'
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
					value: 'Boiler Efficiency',
					connectNullData: true
				}
			],
			title: '%',
			orientation: 'left',
			plottype: 'smooth-line',
			format: {
				suffix: ' %'
			},
			referenceLine: [
				{
					label: 'Boiler Efficiency',
					value: `83.2`,
					style: {
						marker: {
							'stroke-dasharray': '4 1',
							fill: '#fb8c00',
							stroke: '#fb8c00',
							'stroke-width': '2'
						}
					}
				}
			]
		}
		// {
		// 	id: 2,
		// 	plot: [
		// 		{
		// 			value: 'Sootblow Optimization Running',
		// 			connectNullData: true
		// 		}
		// 	],
		// 	title: '',
		// 	orientation: 'right',
		// 	plottype: 'step-line',
		// 	min: '0',
		// 	max: '1',
		// 	format: {
		// 		defaultFormat: 0,
		// 		round: '0'
		// 	},
		// 	showYAxis: 0
		// },
		// {
		// 	id: 3,
		// 	plot: [
		// 		{
		// 			value: 'Combustion Optimization Running',
		// 			connectNullData: true
		// 		}
		// 	],
		// 	title: 'Sootblow & Combustion Optimization Running',
		// 	orientation: 'right',
		// 	plottype: 'step-line',
		// 	min: '0.0',
		// 	max: '1.0',
		// 	format: {
		// 		defaultFormat: 0,
		// 		round: '0'
		// 	}
		// }
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
				height: '370',
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
		return <>{this.state.timeseriesDs.dataSource.data ? <ReactFC {...this.state.timeseriesDs} /> : 'Loading'}</>;
	}
}
