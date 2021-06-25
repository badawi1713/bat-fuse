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
export default class Chart extends React.Component {
	constructor(props) {
		super(props);
		this.onFetchData = this.onFetchData.bind(this);
		this.state = {
			schemaFetch: [
				{
					id: 0,
					name: 'Time',
					type: 'date',
					format: '%-d/%-m/%y %H:%M'
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
			],
			dataFetch: false,
			timeseriesDs: {
				type: 'timeseries',
				id: 'home-chart',
				renderAt: 'container',
				width: '100%',
				height: this.props.height || '350',
				dataSource: {
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
									connectNullData: true,
								}
							],
							title: '',
							orientation: 'left',
							plottype: 'smooth-line',
							format: {
								suffix: ' %'
							},
							referenceLine: [
								{
									label: 'Boiler Efficiency',
									value: this.props.referenceValue,
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
						},
						{
							id: 2,
							plot: [
								{
									value: 'Sootblow Optimization Running',
									connectNullData: true,
									aggregation: "Last"

								}
							],
							title: '',
							orientation: 'right',
							plottype: 'step-line',
							min: '0',
							max: '1',
							format: {
								defaultFormat: 0,
								round: '1'
							},

							showYAxis: 0
						},
						{
							id: 3,
							plot: [
								{
									value: 'Combustion Optimization Running',
									connectNullData: true,
									aggregation: "Last"

								}
							],
							title: 'Sootblow & Combustion Optimization Running',
							orientation: 'right',
							plottype: 'step-line',
							min: '0',
							max: '1',
							format: {
								defaultFormat: 0,
								round: '1'
							},
							style: {
								text: {
									color: '#000',
									'font-size': 11
								}
							}
						}
					]
				}
			},
		};
	}

	async componentDidMount() {
		const { data } = this.props
		const { timeseriesDs: { dataSource } } = this.state
		this.setState({
			dataFetch: await data,
			dataSource
		})

		await this.onFetchData()

		await this.removeRightYAxis()

	}

	removeRightYAxis() {
		setTimeout(() => {
			const getChart = document.getElementById('home-chart')
			let removeYAxis = []

			if (getChart) {
				// get all meso-axis
				const gMexoAxis = getChart.getElementsByTagName('g');
				if (gMexoAxis && gMexoAxis.length > 0) {
					for (let index = 0; index < gMexoAxis.length; index++) {
						// remove anomaly y-axis
						let classElement = gMexoAxis[index].getAttribute('class');
						if (classElement.indexOf('chart-meso') !== -1) {
							let getYaxis = gMexoAxis[index].getElementsByTagName('g');

							if (getYaxis && getYaxis.length > 0) {
								for (let j = 0; j < getYaxis.length; j++) {
									let yAxisElement = getYaxis[j].getAttribute('class')
									if (yAxisElement.indexOf('meso-axis') !== -1) {
										removeYAxis.push(
											getYaxis[j]
										)

									}
								}
							}
						}

					}
				}
				if (removeYAxis.length > 2) {
					for (let index = 2; index < removeYAxis.length; index++) {
						removeYAxis[index].style.display = 'none'
					}
				}
			}
		}, 2000)
	}

	async onFetchData() {
		const {
			dataFetch, schemaFetch
		} = this.state;
		Promise.all([dataFetch, schemaFetch]).then((res) => {
			const data = res[0];
			const schema = res[1];
			const fusionTable = new FusionCharts.DataStore().createDataTable(
				data,
				schema
			);
			const timeseriesDs = Object.assign({}, this.state.timeseriesDs);
			timeseriesDs.dataSource.data = fusionTable;
			this.setState({
				timeseriesDs,
			});
		});
	}

	render() {
		const { loading, data } = this.props
		return (
			<div
				className={
					loading || data.length === 0
						? 'flex-1 flex items-center justify-center'
						: 'flex-1 items-center justify-center'
				}
			>
				{loading ? (
					<div className="w-full text-11 xl:text-16 text-center">Loading Chart</div>
				) : data.length === 0 ? (
					<div className="w-full text-11 xl:text-16 text-center">No chart available right now</div>
				) : (
					<ReactFC {...this.state.timeseriesDs} />
				)}
			</div>
		);
	}
}
