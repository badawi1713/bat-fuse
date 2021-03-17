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
// const dataFetch = [
// 	['01/12/2020 00:00', 1, 2.5],
// 	['01/12/2020 01:00', 1, 5.0],
// 	['01/12/2020 02:00', 1, 3.0],
// 	['01/12/2020 03:00', 1, 4.0],
// 	['01/12/2020 04:00', 1, 2.0],
// 	['01/12/2020 05:00', 1, 3.4],
// 	['01/12/2020 06:00', 1, 4.5],
// 	['01/12/2020 07:00', 1, 2.4],
// 	['01/12/2020 08:00', 1, 3.6],
// 	['01/12/2020 09:00', 1, 4.4],
// 	['01/12/2020 10:00', 1, 5.5],
// 	['01/12/2020 11:00', 1, 5.4],
// 	['01/12/2020 12:00', 1, 4.6],
// 	['01/12/2020 13:00', 1, 4.4],
// 	['01/12/2020 14:00', 1, 5.5],
// 	['01/12/2020 15:00', 1, 5.4],
// 	['01/12/2020 16:00', 1, 5.5],
// 	['01/12/2020 17:00', 1, 3.4],
// 	['01/12/2020 18:00', 1, 3.5],
// 	['01/12/2020 19:00', 1, 2.4],
// 	['01/12/2020 20:00', 1, 4.5],
// 	['01/12/2020 21:00', 1, 5.4],
// 	['01/12/2020 22:00', 1, 3.5],
// 	['01/12/2020 23:00', 1, 4.4]
// ];
export default class TrendChart extends React.Component {
	constructor(props) {
		super(props);
		this.onFetchData = this.onFetchData.bind(this);
		this.state = {
			timeseriesDs: {
				type: 'timeseries',
				renderAt: 'container',
				width: '96%',
				height: this.props.height,
				dataFetch: false,
				schemaFetch: [
					{
						id: 0,
						name: 'Time',
						type: 'date',
						format: '%Y-%m-%d %H:%M:%S'
					},
					{
						id: 1,
						name: 'Value',
						type: 'number'
					}
				],
				dataSource: {
					/*  time navigator */
				}
			}
		};
	}

	async componentDidMount() {
		const { data } = this.props;
		if (data && data.length > 0) {
			this.setState({
				timeseriesDs: {
					...this.state.timeseriesDs,
					dataFetch: await data
				}
			});
			await this.onFetchData();
		}
	}

	async componentDidUpdate(prevProps) {
		if (this.props.data !== prevProps.data) {
			await this.setState(prevState => ({
				timeseriesDs: {
					...prevState.timeseriesDs,
					dataFetch: this.props.data,
					height: this.props.height,
					dataSource: {
						chart: {
							chartLeftMargin: '0',
							chartTopMargin: '0',
							chartRightMargin: '0',
							chartBottomMargin: '0',
							bgColor: '#000',
							bgAlpha: '0',
							showLegend: 0,
							showtooltip: 1,
							multiCanvas: false,
							paletteColors: '#00ff37, #fff000 ',
							style: {
								text: {
									fill: '#fff',
									'font-size': 11
								},

								canvas: {
									'fill-opacity': 0
								},
								background: {
									'fill-opacity': 0
								}
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
										value: 'Value',
										connectNullData: true
									}
								],
								title: this.props.yAxisTitle || '%',
								orientation: 'left',
								plottype: 'smooth-line',
								max: this.props.referenceValue || '0',
								min: this.props.referenceValue || 'auto',
								referenceLine: this.props.referenceValue
									? [
										{
											label: 'Limit',
											value: this.props.referenceValue,
											style: {
												marker: {
													'stroke-dasharray': '4 1',
													fill: '#ff0000',
													stroke: '#ff0000',
													'stroke-width': '3'
												}
											}
										}
									]
									: ''
							}
						]
					}
				}
			}));
			await this.onFetchData();
		}
	}

	async onFetchData() {
		const {
			timeseriesDs: { dataFetch, schemaFetch }
		} = this.state;

		Promise.all([dataFetch, schemaFetch]).then(res => {
			const data = res[0];
			const schema = res[1];
			const fusionTable = new FusionCharts.DataStore().createDataTable(data, schema);
			const timeseriesDs = { ...this.state.timeseriesDs };
			timeseriesDs.dataSource.data = fusionTable;

			this.setState({
				timeseriesDs
			});
		});
	}

	render() {
		return (
			<>
				{this.props.loading ? (
					<div className="w-full text-11 xl:text-16 text-center">Loading Chart</div>
				) : this.props.data.length === 0 ? (
					<div className="w-full text-11 xl:text-16 text-center">No chart available right now</div>
				) : (
					<ReactFC {...this.state.timeseriesDs} />
				)}
			</>
		);
	}
}
