import * as React from 'react';
import { shallowEqual, useSelector } from 'react-redux';

const SvgSootblowTenayan = props => {
	const { sootblowData } = useSelector(
		({ sootblowReducer: { sootblowData } }) => ({
			sootblowData
		}),
		shallowEqual
	);

	const indicatorC01 = (sootblowData && sootblowData.indicator && sootblowData.indicator.C01) || '#00B050';
	const indicatorC02 = (sootblowData && sootblowData.indicator && sootblowData.indicator.C02) || '#00B050';
	const indicatorC03 = (sootblowData && sootblowData.indicator && sootblowData.indicator.C03) || '#00B050';
	const indicatorC04 = (sootblowData && sootblowData.indicator && sootblowData.indicator.C04) || '#00B050';

	const indicatorEL01 = (sootblowData && sootblowData.indicator && sootblowData.indicator.EL01) || '#00B050';
	const indicatorEL02 = (sootblowData && sootblowData.indicator && sootblowData.indicator.EL02) || '#00B050';
	const indicatorEL03 = (sootblowData && sootblowData.indicator && sootblowData.indicator.EL03) || '#00B050';
	const indicatorEL04 = (sootblowData && sootblowData.indicator && sootblowData.indicator.EL04) || '#00B050';
	const indicatorEL05 = (sootblowData && sootblowData.indicator && sootblowData.indicator.EL05) || '#00B050';

	const indicatorEL06 = (sootblowData && sootblowData.indicator && sootblowData.indicator.EL06) || '#00B050';
	const indicatorEL07 = (sootblowData && sootblowData.indicator && sootblowData.indicator.EL07) || '#00B050';
	const indicatorEL08 = (sootblowData && sootblowData.indicator && sootblowData.indicator.EL08) || '#00B050';
	const indicatorEL09 = (sootblowData && sootblowData.indicator && sootblowData.indicator.EL09) || '#00B050';
	const indicatorEL10 = (sootblowData && sootblowData.indicator && sootblowData.indicator.EL10) || '#00B050';

	const indicatorEL11 = (sootblowData && sootblowData.indicator && sootblowData.indicator.EL11) || '#00B050';
	const indicatorEL12 = (sootblowData && sootblowData.indicator && sootblowData.indicator.EL12) || '#00B050';
	const indicatorEL13 = (sootblowData && sootblowData.indicator && sootblowData.indicator.EL13) || '#00B050';
	const indicatorEL14 = (sootblowData && sootblowData.indicator && sootblowData.indicator.EL14) || '#00B050';
	const indicatorEL15 = (sootblowData && sootblowData.indicator && sootblowData.indicator.EL15) || '#00B050';

	const indicatorEL16 = (sootblowData && sootblowData.indicator && sootblowData.indicator.EL16) || '#00B050';
	const indicatorEL17 = (sootblowData && sootblowData.indicator && sootblowData.indicator.EL17) || '#00B050';
	const indicatorEL18 = (sootblowData && sootblowData.indicator && sootblowData.indicator.EL18) || '#00B050';
	const indicatorEL19 = (sootblowData && sootblowData.indicator && sootblowData.indicator.EL19) || '#00B050';
	const indicatorEL20 = (sootblowData && sootblowData.indicator && sootblowData.indicator.EL20) || '#00B050';

	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
			width={props.width || 907.087}
			height={props.height || 453.543}
			viewBox="0 0 680.315 340.157"
			colorInterpolationFilters="sRGB"
			fill="none"
			fillRule="evenodd"
			fontSize={12}
			overflow="visible"
			strokeLinecap="square"
			strokeMiterlimit={3}
			{...props}
		>
			<style>
				{
					'.sootblow_svg__st1,.sootblow_svg__st2{stroke-linecap:round;stroke-linejoin:round}.sootblow_svg__st1{fill:#fff;stroke:none;stroke-width:.75}.sootblow_svg__st2{fill:url(#sootblow_svg__grad0-6)}.sootblow_svg__st2,.sootblow_svg__st3,.sootblow_svg__st4{stroke:none;stroke-width:.24}.sootblow_svg__st3{fill:url(#sootblow_svg__grad0-10);stroke-linecap:round;stroke-linejoin:round}.sootblow_svg__st4{fill:url(#sootblow_svg__grad0-14)}.sootblow_svg__st4,.sootblow_svg__st5,.sootblow_svg__st6,.sootblow_svg__st7,.sootblow_svg__st8{stroke-linecap:round;stroke-linejoin:round}.sootblow_svg__st5{fill:url(#sootblow_svg__grad0-18);stroke:none;stroke-width:.24}.sootblow_svg__st6,.sootblow_svg__st7,.sootblow_svg__st8{stroke:#000;stroke-width:.75}.sootblow_svg__st7,.sootblow_svg__st8{fill:#fff}.sootblow_svg__st8{fill:none;stroke:none}.sootblow_svg__st9{fill:#000;font-family:Calibri;font-size:.666664em;font-weight:700}.sootblow_svg__st11,.sootblow_svg__st12{stroke-linecap:round;stroke-linejoin:round;stroke-width:.75}.sootblow_svg__st11{fill:url(#sootblow_svg__grad0-70);stroke:none}.sootblow_svg__st12{marker-end:url(#sootblow_svg__mrkr2-93);stroke:#000}.sootblow_svg__st14,.sootblow_svg__st16{fill:#000;font-family:Calibri;font-size:1.00001em}.sootblow_svg__st16{font-size:.833336em}.sootblow_svg__st19{fill:#ff0;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:1}.sootblow_svg__st20{fill:#000;font-family:Calibri;font-size:.499992em;font-weight:700}'
				}
			</style>
			<defs id="sootblow_svg__Patterns_And_Gradients">
				<linearGradient
					id="sootblow_svg__grad0-6"
					x1={0}
					y1={0}
					x2={1}
					y2={0}
					gradientTransform="rotate(270 .5 .5)"
				>
					<stop offset={0} stopColor="red" />
					<stop offset={1} stopColor="#f59d56" />
				</linearGradient>
				<linearGradient id="sootblow_svg__grad0-10" x1={0} y1={0} x2={1} y2={0}>
					<stop offset={0} stopColor="#ffc000" />
					<stop offset={0.48} stopColor="#f60" />
					<stop offset={1} stopColor="red" />
				</linearGradient>
				<linearGradient
					id="sootblow_svg__grad0-14"
					x1={0}
					y1={0}
					x2={1}
					y2={0}
					gradientTransform="rotate(90 .5 .5)"
				>
					<stop offset={0} stopColor="#ffc000" />
					<stop offset={0.71} stopColor="#ffc000" />
					<stop offset={1} stopColor="#fee599" />
				</linearGradient>
				<linearGradient
					id="sootblow_svg__grad0-18"
					x1={0}
					y1={0}
					x2={1}
					y2={0}
					gradientTransform="rotate(90 .5 .5)"
				>
					<stop offset={0} stopColor="#ffc000" />
					<stop offset={0.41} stopColor="#ffd965" />
					<stop offset={1} stopColor="#fee599" />
				</linearGradient>
				<linearGradient
					id="sootblow_svg__grad0-70"
					x1={0}
					y1={0}
					x2={1}
					y2={0}
					gradientTransform="rotate(90 .5 .5)"
				>
					<stop offset={0} stopColor="#ffc000" />
					<stop offset={1} stopColor="#ffc000" />
				</linearGradient>
			</defs>
			<defs id="sootblow_svg__Markers">
				<marker
					id="sootblow_svg__mrkr2-93"
					refX={-2.92}
					orient="auto"
					markerUnits="strokeWidth"
					overflow="visible"
					fill="#000"
					fillOpacity={1}
					stroke="#000"
					strokeOpacity={1}
					strokeWidth={0.342}
				>
					<use xlinkHref="#sootblow_svg__lend2" transform="scale(-2.92)" />
				</marker>
				<path d="M1 1L0 0l1-1v2" id="sootblow_svg__lend2" />
			</defs>
			<g id="sootblow_svg__shape1-1">
				<path className="sootblow_svg__st1" d="M0 0h680.315v340.157H0z" />
			</g>
			<g>
				<g id="sootblow_svg__shape1-3" transform="rotate(180 237.086 297.2)">
					<path d="M0 340.16h117.14l-19.03-68.35H19.04L0 340.16z" className="sootblow_svg__st2" />
				</g>
				<g id="sootblow_svg__shape2-7" transform="rotate(90 330.132 367.054)">
					<path className="sootblow_svg__st3" d="M0 223.013h217.323v117.145H0z" />
				</g>
				<g id="sootblow_svg__shape3-11" transform="translate(569.35 -56.693)">
					<path className="sootblow_svg__st4" d="M0 60.343h83.104v279.815H0z" />
				</g>
				<g id="sootblow_svg__shape4-15" transform="translate(652.282 -56.838)">
					<path className="sootblow_svg__st5" d="M0 311.956h19.741v28.202H0z" />
				</g>
				<g id="sootblow_svg__shape7-19" transform="rotate(90 316.032 381.154)">
					<path d="M0 340.16h189.12" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape8-22" transform="rotate(90 330.132 367.054)">
					<path d="M0 340.16h28.2" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape9-25" transform="rotate(74.438 235.068 532.222)">
					<path d="M0 340.16h70.95" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape10-28" transform="rotate(105.482 269.762 477.544)">
					<path d="M0 340.16h71.31" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape11-31" transform="rotate(.268 3937.353 80620.034)">
					<path d="M0 340.16h79.07" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape12-34" transform="rotate(180 237.017 188.54)">
					<path d="M0 340.16h117.01" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape13-37" transform="rotate(90 293.27 521.06)">
					<path d="M0 340.16h26.45" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape14-40" transform="translate(569.35 -56.838)">
					<path d="M0 340.16h85.81" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape15-43" transform="translate(626.456 -56.838)">
					<path d="M0 340.16h45.57" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape16-46" transform="translate(652.282 -85.04)">
					<path d="M0 340.16h19.74" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape20-49" transform="translate(575.234 -306.165)">
					<path className="sootblow_svg__st7" d="M0 329.953h68.251v10.205H0z" />
				</g>
				<g id="sootblow_svg__shape23-51" transform="translate(586.253 -308.458)">
					<path className="sootblow_svg__st8" d="M0 334.539h47.793v5.618H0z" />
					<text x={8.93} y={339.75} className="sootblow_svg__st9">
						{'FINAL SH'}
					</text>
				</g>
				<g id="sootblow_svg__group141-54" transform="translate(318.691 -293.822)">
					<g id="sootblow_svg__shape142-55" transform="translate(1.962)">
						<path
							d="M0 320.53a19.625 19.625 0 0139.25 0 19.625 19.625 0 01-39.25 0z"
							className="sootblow_svg__st7"
						/>
					</g>
					<g id="sootblow_svg__shape143-57" transform="translate(0 -10.205)">
						<path className="sootblow_svg__st8" d="M0 321.318h43.174v18.84H0z" />
						<text x={14.97} y={334.34} fill="#000" fontFamily="Calibri" fontSize="1em" fontWeight={700}>
							{'SD'}
						</text>
					</g>
				</g>
				<g id="sootblow_svg__group206-60" transform="translate(509.919 -178.494)">
					<g id="sootblow_svg__shape207-61">
						<path d="M0 327.17a18.321 12.985-180 0036.64 0V223.3H0v103.87z" className="sootblow_svg__st7" />
					</g>
					<ellipse
						cx={18.321}
						cy={223.296}
						rx={18.321}
						ry={12.985}
						className="sootblow_svg__st7"
						id="sootblow_svg__shape206-63"
					/>
				</g>
				<g id="sootblow_svg__shape208-65" transform="rotate(180 273.281 243.843)">
					<path d="M0 340.16h36.64l-11.05-40.77H11.06L0 340.16z" className="sootblow_svg__st7" />
				</g>
				<g id="sootblow_svg__shape209-67" transform="translate(474.154 -275.151)">
					<path className="sootblow_svg__st11" d="M0 311.956h32.986v28.202H0z" />
				</g>
				<g id="sootblow_svg__shape210-71" transform="translate(516.959 -308.306)">
					<path className="sootblow_svg__st11" d="M0 311.956h22.158v28.202H0z" />
				</g>
				<g id="sootblow_svg__shape211-74" transform="translate(538.731 -322.407)">
					<path className="sootblow_svg__st11" d="M0 326.057h32.71v14.101H0z" />
				</g>
				<g id="sootblow_svg__shape223-77" transform="translate(495.112 -123.208)">
					<path className="sootblow_svg__st1" d="M0 311.956h32.71v28.202H0z" />
				</g>
				<g id="sootblow_svg__shape224-79" transform="rotate(90 339.616 528.364)">
					<path d="M0 340.16h28.2" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape225-82" transform="translate(495.112 -123.208)">
					<path d="M0 340.16h32.71" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape226-85" transform="rotate(90 316.211 519.059)">
					<path d="M0 340.16h14.1" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape227-88" transform="rotate(135 275.994 374.044)">
					<path d="M0 340.16h25.54" className="sootblow_svg__st12" />
				</g>
				<g id="sootblow_svg__shape228-94" transform="rotate(90.098 374.557 439.394)">
					<path d="M0 340.16h151.17" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape229-97" transform="translate(474.431 -275.151)">
					<path d="M0 340.16h32.71" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape230-100" transform="rotate(.128 135767.445 211134.666)">
					<path d="M0 340.16h35.17" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__group231-103" transform="translate(507.141 -272.484)">
					<g id="sootblow_svg__shape232-104">
						<path d="M0 336.57a21.587 3.586-180 1043.17 0v-28.68H0v28.68z" className="sootblow_svg__st7" />
					</g>
					<ellipse
						cx={21.587}
						cy={307.887}
						rx={21.587}
						ry={3.586}
						className="sootblow_svg__st7"
						id="sootblow_svg__shape231-106"
					/>
				</g>
				<g id="sootblow_svg__shape233-108" transform="translate(539.117 -322.407)">
					<path d="M0 340.16h30.23" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape234-111" transform="rotate(90 426.733 430.383)">
					<path d="M0 340.16h28.2" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape235-114" transform="rotate(90 430.762 448.513)">
					<path d="M0 340.16h14.51" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape236-117" transform="rotate(90.004 494.392 498.03)">
					<path d="M0 340.16h251.47" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape237-120" transform="translate(516.959 -336.508)">
					<path d="M0 340.16h135.34" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape238-123" transform="rotate(90 445.65 463.857)">
					<path d="M0 340.16h265.11" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape239-126" transform="rotate(-90 214.632 121.876)">
					<path d="M0 336.99a6.77 3.165 0 1113.54 0 6.77 3.165 0 11-13.54 0z" className="sootblow_svg__st7" />
				</g>
				<g id="sootblow_svg__group240-128" transform="translate(426.585 -3.65)">
					<g id="sootblow_svg__shape241-129">
						<path d="M0 339.37a3.165.785-180 106.329 0l.001-6.28H0v6.28z" className="sootblow_svg__st7" />
					</g>
					<ellipse
						cx={3.165}
						cy={333.09}
						rx={3.165}
						ry={0.785}
						className="sootblow_svg__st7"
						id="sootblow_svg__shape240-131"
					/>
				</g>
				<g id="sootblow_svg__shape242-133" transform="rotate(-90 198.774 137.734)">
					<path d="M0 336.99a6.77 3.165 0 1113.54 0 6.77 3.165 0 11-13.54 0z" className="sootblow_svg__st7" />
				</g>
				<g id="sootblow_svg__group243-135" transform="translate(394.867 -3.65)">
					<g id="sootblow_svg__shape244-136">
						<path d="M0 339.37a3.165.785-180 106.329 0l.001-6.28H0v6.28z" className="sootblow_svg__st7" />
					</g>
					<ellipse
						cx={3.165}
						cy={333.09}
						rx={3.165}
						ry={0.785}
						className="sootblow_svg__st7"
						id="sootblow_svg__shape243-138"
					/>
				</g>
				<g id="sootblow_svg__shape250-140" transform="rotate(90 395.317 463.21)">
					<path className="sootblow_svg__st8" d="M0 320.416h79.634v19.741H0z" />
					<text x={17.2} y={333.89} className="sootblow_svg__st14">
						{'CYCLONE'}
					</text>
				</g>
				<g id="sootblow_svg__shape257-143" transform="translate(6.75 -25.363)">
					<path
						d="M0 333.44a6.713 6.713 0 0113.43 0 6.713 6.713 0 01-13.43 0z"
						fill="red"
						stroke="#000"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</g>
				<g id="sootblow_svg__shape258-145" transform="translate(13.463 -26.716)">
					<path className="sootblow_svg__st8" d="M0 331.299h65.906v8.858H0z" />
					<text x={14.65} y={338.73} className="sootblow_svg__st16">
						{'RETRACT'}
					</text>
				</g>
				<g id="sootblow_svg__shape259-148" transform="translate(6.75 -3.73)">
					<path
						d="M0 333.44a6.713 6.713 0 0113.43 0 6.713 6.713 0 01-13.43 0z"
						fill="#00b050"
						stroke="#000"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</g>
				<g id="sootblow_svg__shape260-150" transform="translate(15.943 -5.456)">
					<path className="sootblow_svg__st8" d="M0 331.299h65.906v8.858H0z" />
					<text x={12.92} y={338.73} className="sootblow_svg__st16">
						{'INSERT'}
					</text>
				</g>
				<g id="sootblow_svg__shape261-153" transform="translate(77.615 -25.363)">
					<path
						d="M0 333.44a6.713 6.713 0 0113.43 0 6.713 6.713 0 01-13.43 0z"
						fill="#bfbfbf"
						stroke="#000"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</g>
				<g id="sootblow_svg__shape262-155" transform="translate(82.061 -28.113)">
					<path className="sootblow_svg__st8" d="M0 331.299h80.221v8.858H0z" />
					<text x={17.65} y={338.73} className="sootblow_svg__st16">
						{'START FAIL'}
					</text>
				</g>
				<g id="sootblow_svg__shape263-158" transform="translate(77.989 -3.73)">
					<path
						d="M0 333.44a6.713 6.713 0 0113.43 0 6.713 6.713 0 01-13.43 0z"
						className="sootblow_svg__st19"
					/>
				</g>
				<g id="sootblow_svg__shape264-160" transform="translate(93.825 -6.297)">
					<path className="sootblow_svg__st8" d="M0 331.299h80.221v8.858H0z" />
					<text x={5.53} y={338.73} className="sootblow_svg__st16">
						{'READY/STANDBY'}
					</text>
				</g>
				<g id="sootblow_svg__shape265-163" transform="translate(606.568 -318.761)">
					<path
						d="M0 335.06a5.102 5.102 0 0110.2 0 5.102 5.102 0 11-10.2 0z"
						stroke={'#000'}
						fill={indicatorC02}
					/>
				</g>
				<g id="sootblow_svg__shape266-165" transform="translate(601.896 -329.329)">
					<path className="sootblow_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={5.24} y={339.4} className="sootblow_svg__st20">
						{'C02'}
					</text>
				</g>
				<g id="sootblow_svg__shape269-168" transform="translate(575.647 -277.079)">
					<path className="sootblow_svg__st7" d="M0 329.953h68.251v10.205H0z" />
				</g>
				<g id="sootblow_svg__shape270-170" transform="translate(586.665 -279.372)">
					<path className="sootblow_svg__st8" d="M0 334.539h47.793v5.618H0z" />
					<text x={15.81} y={339.75} className="sootblow_svg__st9">
						{'LTSH'}
					</text>
				</g>
				<g id="sootblow_svg__shape271-173" transform="translate(606.981 -289.675)">
					<path
						d="M0 335.06a5.102 5.102 0 1110.2 0 5.102 5.102 0 01-10.2 0z"
						stroke={'#000'}
						fill={indicatorC04}
					/>
				</g>
				<g id="sootblow_svg__shape272-175" transform="translate(601.896 -300.243)">
					<path className="sootblow_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={5.24} y={339.4} className="sootblow_svg__st20">
						{'C04'}
					</text>
				</g>
				<g id="sootblow_svg__shape273-178" transform="translate(576.201 -248.12)">
					<path className="sootblow_svg__st7" d="M0 329.953h68.251v10.205H0z" />
				</g>
				<g id="sootblow_svg__shape274-180" transform="translate(587.22 -250.413)">
					<path className="sootblow_svg__st8" d="M0 334.539h47.793v5.618H0z" />
					<text x={14.19} y={339.75} className="sootblow_svg__st9">
						{'ECO 1'}
					</text>
				</g>
				<g id="sootblow_svg__shape275-183" transform="translate(607.535 -260.382)">
					<path
						d="M0 335.06a5.102 5.102 0 1110.2 0 5.102 5.102 0 01-10.2 0z"
						stroke={'#000'}
						fill={indicatorEL02}
					/>
				</g>
				<g id="sootblow_svg__shape276-185" transform="translate(602.929 -270.95)">
					<path className="sootblow_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={4.1} y={339.4} className="sootblow_svg__st20">
						{'EL02'}
					</text>
				</g>
				<g id="sootblow_svg__shape279-188" transform="translate(607.535 -231.638)">
					<path
						d="M0 335.06a5.102 5.102 0 0110.2 0 5.102 5.102 0 11-10.2 0z"
						stroke={'#000'}
						fill={indicatorEL04}
					/>
				</g>
				<g id="sootblow_svg__shape280-190" transform="translate(602.73 -242.205)">
					<path className="sootblow_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={4.1} y={339.4} className="sootblow_svg__st20">
						{'EL04'}
					</text>
				</g>
				<g id="sootblow_svg__shape281-193" transform="translate(577.161 -175.813)">
					<path className="sootblow_svg__st7" d="M0 329.953h68.251v10.205H0z" />
				</g>
				<g id="sootblow_svg__shape282-195" transform="translate(588.179 -178.106)">
					<path className="sootblow_svg__st8" d="M0 334.539h47.793v5.618H0z" />
					<text x={13.89} y={339.75} className="sootblow_svg__st9">
						{'APH 1'}
					</text>
				</g>
				<g id="sootblow_svg__shape283-198" transform="translate(628.474 -189.396)">
					<path
						d="M0 335.55a4.609 4.609 0 019.22 0 4.609 4.609 0 11-9.22 0z"
						stroke={'#000'}
						fill={indicatorEL08}
					/>
				</g>
				<g id="sootblow_svg__shape284-200" transform="translate(623.174 -198.976)">
					<path className="sootblow_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={4.1} y={339.4} className="sootblow_svg__st20">
						{'EL08'}
					</text>
				</g>
				<g id="sootblow_svg__shape285-203" transform="translate(578.12 -147.466)">
					<path className="sootblow_svg__st7" d="M0 329.953h68.251v10.205H0z" />
				</g>
				<g id="sootblow_svg__shape286-205" transform="translate(589.138 -149.76)">
					<path className="sootblow_svg__st8" d="M0 334.539h47.793v5.618H0z" />
					<text x={13.89} y={339.75} className="sootblow_svg__st9">
						{'APH 2'}
					</text>
				</g>
				<g id="sootblow_svg__shape287-208" transform="translate(629.433 -160.382)">
					<path
						d="M0 335.55a4.609 4.609 0 119.22 0 4.609 4.609 0 01-9.22 0z"
						stroke={'#000'}
						fill={indicatorEL12}
					/>
				</g>
				<g id="sootblow_svg__shape288-210" transform="translate(624.216 -169.963)">
					<path className="sootblow_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={4.1} y={339.4} className="sootblow_svg__st20">
						{'EL12'}
					</text>
				</g>
				<g id="sootblow_svg__shape289-213" transform="translate(578.12 -119.12)">
					<path className="sootblow_svg__st7" d="M0 329.953h68.251v10.205H0z" />
				</g>
				<g id="sootblow_svg__shape290-215" transform="translate(589.138 -121.413)">
					<path className="sootblow_svg__st8" d="M0 334.539h47.793v5.618H0z" />
					<text x={13.89} y={339.75} className="sootblow_svg__st9">
						{'APH 3'}
					</text>
				</g>
				<g id="sootblow_svg__shape291-218" transform="translate(629.433 -132.036)">
					<path
						d="M0 335.55a4.609 4.609 0 119.22 0 4.609 4.609 0 01-9.22 0z"
						stroke={'#000'}
						fill={indicatorEL16}
					/>
				</g>
				<g id="sootblow_svg__shape292-220" transform="translate(624.3 -141.616)">
					<path className="sootblow_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={4.1} y={339.4} className="sootblow_svg__st20">
						{'EL16'}
					</text>
				</g>
				<g id="sootblow_svg__shape293-223" transform="translate(586.061 -189.396)">
					<path
						d="M0 335.55a4.609 4.609 0 019.22 0 4.609 4.609 0 11-9.22 0z"
						stroke={'#000'}
						fill={indicatorEL06}
					/>
				</g>
				<g id="sootblow_svg__shape294-225" transform="translate(580.838 -198.976)">
					<path className="sootblow_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={4.1} y={339.4} className="sootblow_svg__st20">
						{'EL06'}
					</text>
				</g>
				<g id="sootblow_svg__shape295-228" transform="translate(586.061 -160.382)">
					<path
						d="M0 335.55a4.609 4.609 0 019.22 0 4.609 4.609 0 11-9.22 0z"
						stroke={'#000'}
						fill={indicatorEL10}
					/>
				</g>
				<g id="sootblow_svg__shape296-230" transform="translate(580.754 -169.963)">
					<path className="sootblow_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={4.1} y={339.4} className="sootblow_svg__st20">
						{'EL10'}
					</text>
				</g>
				<g id="sootblow_svg__shape297-233" transform="translate(586.061 -132.036)">
					<path
						d="M0 335.55a4.609 4.609 0 019.22 0 4.609 4.609 0 11-9.22 0z"
						stroke={'#000'}
						fill={indicatorEL14}
					/>
				</g>
				<g id="sootblow_svg__shape298-235" transform="translate(580.754 -141.616)">
					<path className="sootblow_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={4.1} y={339.4} className="sootblow_svg__st20">
						{'EL14'}
					</text>
				</g>
				<g id="sootblow_svg__shape299-238" transform="translate(629.433 -103.689)">
					<path
						d="M0 335.55a4.609 4.609 0 119.22 0 4.609 4.609 0 01-9.22 0z"
						stroke={'#000'}
						fill={indicatorEL20}
					/>
				</g>
				<g id="sootblow_svg__shape300-240" transform="translate(624.216 -113.27)">
					<path className="sootblow_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={4.1} y={339.4} className="sootblow_svg__st20">
						{'EL20'}
					</text>
				</g>
				<g id="sootblow_svg__shape301-243" transform="translate(586.061 -103.689)">
					<path
						d="M0 335.55a4.609 4.609 0 019.22 0 4.609 4.609 0 11-9.22 0z"
						stroke={'#000'}
						fill={indicatorEL18}
					/>
				</g>
				<g id="sootblow_svg__shape302-245" transform="translate(580.754 -113.27)">
					<path className="sootblow_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={4.1} y={339.4} className="sootblow_svg__st20">
						{'EL18'}
					</text>
				</g>
				<g id="sootblow_svg__shape312-248" transform="matrix(1 0 0 -1 206.142 377.079)">
					<path d="M0 340.16h117.14" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape467-251" transform="translate(578.158 -90.467)">
					<path className="sootblow_svg__st7" d="M0 329.953h68.251v10.205H0z" />
				</g>
				<g id="sootblow_svg__shape468-253" transform="translate(589.176 -92.76)">
					<path className="sootblow_svg__st8" d="M0 334.539h47.793v5.618H0z" />
					<text x={13.89} y={339.75} className="sootblow_svg__st9">
						{'APH 4'}
					</text>
				</g>
				<g id="sootblow_svg__shape469-256" transform="translate(576.174 -218.835)">
					<path className="sootblow_svg__st7" d="M0 329.953h68.251v10.205H0z" />
				</g>
				<g id="sootblow_svg__shape470-258" transform="translate(587.192 -221.128)">
					<path className="sootblow_svg__st8" d="M0 334.539h47.793v5.618H0z" />
					<text x={14.19} y={339.75} className="sootblow_svg__st9">
						{'ECO 2'}
					</text>
				</g>
				<g id="sootblow_svg__shape471-261" transform="matrix(1 0 0 -1 206.005 594.401)">
					<path d="M0 340.16h117.14l-19.03-68.35H19.04L0 340.16z" className="sootblow_svg__st2" />
				</g>
				<g id="sootblow_svg__shape472-264" transform="matrix(0 1 1 0 -17.008 36.921)">
					<path className="sootblow_svg__st3" d="M0 223.013h217.323v117.145H0z" />
				</g>
				<g id="sootblow_svg__shape473-267" transform="matrix(-1 0 0 1 110.828 -56.693)">
					<path className="sootblow_svg__st4" d="M0 60.343h83.104v279.815H0z" />
				</g>
				<g id="sootblow_svg__shape474-270" transform="matrix(-1 0 0 1 27.896 -56.838)">
					<path className="sootblow_svg__st5" d="M0 311.956h19.741v28.202H0z" />
				</g>
				<g id="sootblow_svg__shape475-273" transform="matrix(0 1 1 0 -17.008 65.123)">
					<path d="M0 340.16h189.12" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape476-276" transform="matrix(0 1 1 0 -17.008 36.921)">
					<path d="M0 340.16h28.2" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape477-279" transform="scale(-1 1) rotate(74.438 -105.02 84.48)">
					<path d="M0 340.16h70.95" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape478-282" transform="scale(1 -1) rotate(-74.518 -287.71 -92.454)">
					<path d="M0 340.16h71.31" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape479-285" transform="scale(-1 1) rotate(.268 3597.264 -64596.246)">
					<path d="M0 340.16h79.07" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape480-288" transform="matrix(1 0 0 -1 206.144 377.079)">
					<path d="M0 340.16h117.01" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape481-291" transform="matrix(0 1 1 0 -134.153 227.79)">
					<path d="M0 340.16h26.45" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape482-294" transform="matrix(-1 0 0 1 110.828 -56.838)">
					<path d="M0 340.16h85.81" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape483-297" transform="matrix(-1 0 0 1 53.722 -56.838)">
					<path d="M0 340.16h45.57" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape484-300" transform="matrix(-1 0 0 1 27.896 -85.04)">
					<path d="M0 340.16h19.74" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape485-303" transform="matrix(-1 0 0 1 104.944 -306.165)">
					<path className="sootblow_svg__st7" d="M0 329.953h68.251v10.205H0z" />
				</g>
				<g id="sootblow_svg__shape486-305" transform="matrix(-1 0 0 1 93.925 -308.458)">
					<path className="sootblow_svg__st8" d="M0 334.539h47.793v5.618H0z" />
					<text x={-38.87} y={339.75} transform="scale(-1 1)" className="sootblow_svg__st9">
						{'FINAL SH'}
					</text>
				</g>
				<g id="sootblow_svg__group487-308" transform="matrix(-1 0 0 1 170.259 -178.494)">
					<g id="sootblow_svg__shape488-309">
						<path d="M0 327.17a18.321 12.985-180 0036.64 0V223.3H0v103.87z" className="sootblow_svg__st7" />
					</g>
					<ellipse
						cx={18.321}
						cy={223.296}
						rx={18.321}
						ry={12.985}
						className="sootblow_svg__st7"
						id="sootblow_svg__shape487-311"
					/>
				</g>
				<g id="sootblow_svg__shape489-313" transform="matrix(1 0 0 -1 133.616 487.685)">
					<path d="M0 340.16h36.64l-11.05-40.77H11.06L0 340.16z" className="sootblow_svg__st7" />
				</g>
				<g id="sootblow_svg__shape490-315" transform="matrix(-1 0 0 1 206.024 -275.151)">
					<path className="sootblow_svg__st11" d="M0 311.956h32.986v28.202H0z" />
				</g>
				<g id="sootblow_svg__shape491-318" transform="matrix(-1 0 0 1 163.219 -308.306)">
					<path className="sootblow_svg__st11" d="M0 311.956h22.158v28.202H0z" />
				</g>
				<g id="sootblow_svg__shape492-321" transform="matrix(-1 0 0 1 141.447 -322.407)">
					<path className="sootblow_svg__st11" d="M0 326.057h32.71v14.101H0z" />
				</g>
				<g id="sootblow_svg__shape493-324" transform="matrix(-1 0 0 1 185.066 -123.208)">
					<path className="sootblow_svg__st1" d="M0 311.956h32.71v28.202H0z" />
				</g>
				<g id="sootblow_svg__shape494-326" transform="matrix(0 1 1 0 -187.801 188.748)">
					<path d="M0 340.16h28.2" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape495-329" transform="matrix(-1 0 0 1 185.066 -123.208)">
					<path d="M0 340.16h32.71" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape496-332" transform="matrix(0 1 1 0 -155.091 202.848)">
					<path d="M0 340.16h14.1" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape497-335" transform="scale(1 -1) rotate(-45 -562.933 -154.74)">
					<path d="M0 340.16h25.54" className="sootblow_svg__st12" />
				</g>
				<g id="sootblow_svg__shape498-340" transform="matrix(.0017 1 1 -.0017 -134.41 65.586)">
					<path d="M0 340.16h151.17" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape499-343" transform="matrix(-1 0 0 1 205.747 -275.151)">
					<path d="M0 340.16h32.71" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape500-346" transform="matrix(-1 .00224 .00224 1 207.449 -303.236)">
					<path d="M0 340.16h35.17" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__group501-349" transform="matrix(-1 0 0 1 173.037 -272.484)">
					<g id="sootblow_svg__shape502-350">
						<path d="M0 336.57a21.587 3.586-180 1043.17 0v-28.68H0v28.68z" className="sootblow_svg__st7" />
					</g>
					<ellipse
						cx={21.587}
						cy={307.887}
						rx={21.587}
						ry={3.586}
						className="sootblow_svg__st7"
						id="sootblow_svg__shape501-352"
					/>
				</g>
				<g id="sootblow_svg__shape503-354" transform="matrix(-1 0 0 1 141.061 -322.407)">
					<path d="M0 340.16h30.23" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape504-357" transform="matrix(0 1 1 0 -176.938 3.65)">
					<path d="M0 340.16h28.2" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape505-360" transform="matrix(0 1 1 0 -199.097 17.75)">
					<path d="M0 340.16h14.51" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape506-363" transform="matrix(.00007 1 1 -.00007 -312.279 3.672)">
					<path d="M0 340.16h251.47" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape507-366" transform="matrix(-1 0 0 1 163.219 -336.508)">
					<path d="M0 340.16h135.34" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape508-369" transform="matrix(0 1 1 0 -229.329 18.206)">
					<path d="M0 340.16h265.11" className="sootblow_svg__st6" />
				</g>
				<g id="sootblow_svg__shape509-372" transform="matrix(0 -1 -1 0 587.422 336.508)">
					<path d="M0 336.99a6.77 3.165 0 1113.54 0 6.77 3.165 0 11-13.54 0z" className="sootblow_svg__st7" />
				</g>
				<g id="sootblow_svg__group510-374" transform="matrix(-1 0 0 1 253.593 -3.65)">
					<g id="sootblow_svg__shape511-375">
						<path d="M0 339.37a3.165.785-180 106.329 0l.001-6.28H0v6.28z" className="sootblow_svg__st7" />
					</g>
					<ellipse
						cx={3.165}
						cy={333.09}
						rx={3.165}
						ry={0.785}
						className="sootblow_svg__st7"
						id="sootblow_svg__shape510-377"
					/>
				</g>
				<g id="sootblow_svg__shape512-379" transform="matrix(0 -1 -1 0 619.139 336.508)">
					<path d="M0 336.99a6.77 3.165 0 1113.54 0 6.77 3.165 0 11-13.54 0z" className="sootblow_svg__st7" />
				</g>
				<g id="sootblow_svg__group513-381" transform="matrix(-1 0 0 1 285.311 -3.65)">
					<g id="sootblow_svg__shape514-382">
						<path d="M0 339.37a3.165.785-180 106.329 0l.001-6.28H0v6.28z" className="sootblow_svg__st7" />
					</g>
					<ellipse
						cx={3.165}
						cy={333.09}
						rx={3.165}
						ry={0.785}
						className="sootblow_svg__st7"
						id="sootblow_svg__shape513-384"
					/>
				</g>
				<g id="sootblow_svg__shape515-386" transform="matrix(0 1 1 0 -178.349 67.893)">
					<path className="sootblow_svg__st8" d="M0 320.416h79.634v19.741H0z" />
					<text x={-62.44} y={333.89} transform="scale(-1 1)" className="sootblow_svg__st14">
						{'CYCLONE'}
					</text>
				</g>
				<g id="sootblow_svg__shape516-389" transform="matrix(-1 0 0 1 73.61 -318.761)">
					<path
						d="M0 335.06a5.102 5.102 0 0110.2 0 5.102 5.102 0 11-10.2 0z"
						stroke={'#000'}
						fill={indicatorC01}
					/>
				</g>
				<g id="sootblow_svg__shape517-391" transform="matrix(-1 0 0 1 78.282 -329.329)">
					<path className="sootblow_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={-14.5} y={339.4} transform="scale(-1 1)" className="sootblow_svg__st20">
						{'C01'}
					</text>
				</g>
				<g id="sootblow_svg__shape518-394" transform="matrix(-1 0 0 1 104.531 -277.079)">
					<path className="sootblow_svg__st7" d="M0 329.953h68.251v10.205H0z" />
				</g>
				<g id="sootblow_svg__shape519-396" transform="matrix(-1 0 0 1 93.513 -279.372)">
					<path className="sootblow_svg__st8" d="M0 334.539h47.793v5.618H0z" />
					<text x={-31.98} y={339.75} transform="scale(-1 1)" className="sootblow_svg__st9">
						{'LTSH'}
					</text>
				</g>
				<g id="sootblow_svg__shape520-399" transform="matrix(-1 0 0 1 73.197 -289.675)">
					<path
						d="M0 335.06a5.102 5.102 0 1110.2 0 5.102 5.102 0 01-10.2 0z"
						stroke={'#000'}
						fill={indicatorC03}
					/>
				</g>
				<g id="sootblow_svg__shape521-401" transform="matrix(-1 0 0 1 78.282 -300.243)">
					<path className="sootblow_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={-14.5} y={339.4} transform="scale(-1 1)" className="sootblow_svg__st20">
						{'C03'}
					</text>
				</g>
				<g id="sootblow_svg__shape522-404" transform="matrix(-1 0 0 1 103.977 -248.12)">
					<path className="sootblow_svg__st7" d="M0 329.953h68.251v10.205H0z" />
				</g>
				<g id="sootblow_svg__shape523-406" transform="matrix(-1 0 0 1 92.958 -250.413)">
					<path className="sootblow_svg__st8" d="M0 334.539h47.793v5.618H0z" />
					<text x={-33.6} y={339.75} transform="scale(-1 1)" className="sootblow_svg__st9">
						{'ECO 1'}
					</text>
				</g>
				<g id="sootblow_svg__shape524-409" transform="matrix(-1 0 0 1 72.643 -260.382)">
					<path
						d="M0 335.06a5.102 5.102 0 1110.2 0 5.102 5.102 0 01-10.2 0z"
						stroke={'#000'}
						fill={indicatorEL01}
					/>
				</g>
				<g id="sootblow_svg__shape525-411" transform="matrix(-1 0 0 1 77.249 -270.95)">
					<path className="sootblow_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={-15.64} y={339.4} transform="scale(-1 1)" className="sootblow_svg__st20">
						{'EL01'}
					</text>
				</g>
				<g id="sootblow_svg__shape526-414" transform="matrix(-1 0 0 1 72.643 -231.638)">
					<path
						d="M0 335.06a5.102 5.102 0 0110.2 0 5.102 5.102 0 11-10.2 0z"
						stroke={'#000'}
						fill={indicatorEL03}
					/>
				</g>
				<g id="sootblow_svg__shape527-416" transform="matrix(-1 0 0 1 77.448 -242.205)">
					<path className="sootblow_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={-15.64} y={339.4} transform="scale(-1 1)" className="sootblow_svg__st20">
						{'EL03'}
					</text>
				</g>
				<g id="sootblow_svg__shape528-419" transform="matrix(-1 0 0 1 103.018 -175.813)">
					<path className="sootblow_svg__st7" d="M0 329.953h68.251v10.205H0z" />
				</g>
				<g id="sootblow_svg__shape529-421" transform="matrix(-1 0 0 1 92 -178.106)">
					<path className="sootblow_svg__st8" d="M0 334.539h47.793v5.618H0z" />
					<text x={-33.9} y={339.75} transform="scale(-1 1)" className="sootblow_svg__st9">
						{'APH 1'}
					</text>
				</g>
				<g id="sootblow_svg__shape530-424" transform="matrix(-1 0 0 1 51.704 -189.396)">
					<path
						d="M0 335.55a4.609 4.609 0 019.22 0 4.609 4.609 0 11-9.22 0z"
						stroke={'#000'}
						fill={indicatorEL05}
					/>
				</g>
				<g id="sootblow_svg__shape531-426" transform="matrix(-1 0 0 1 57.004 -198.976)">
					<path className="sootblow_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={-15.64} y={339.4} transform="scale(-1 1)" className="sootblow_svg__st20">
						{'EL05'}
					</text>
				</g>
				<g id="sootblow_svg__shape532-429" transform="matrix(-1 0 0 1 102.058 -147.466)">
					<path className="sootblow_svg__st7" d="M0 329.953h68.251v10.205H0z" />
				</g>
				<g id="sootblow_svg__shape533-431" transform="matrix(-1 0 0 1 91.04 -149.76)">
					<path className="sootblow_svg__st8" d="M0 334.539h47.793v5.618H0z" />
					<text x={-33.9} y={339.75} transform="scale(-1 1)" className="sootblow_svg__st9">
						{'APH 2'}
					</text>
				</g>
				<g id="sootblow_svg__shape534-434" transform="matrix(-1 0 0 1 50.745 -160.382)">
					<path
						d="M0 335.55a4.609 4.609 0 119.22 0 4.609 4.609 0 01-9.22 0z"
						stroke={'#000'}
						fill={indicatorEL09}
					/>
				</g>
				<g id="sootblow_svg__shape535-436" transform="matrix(-1 0 0 1 55.962 -169.963)">
					<path className="sootblow_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={-15.64} y={339.4} transform="scale(-1 1)" className="sootblow_svg__st20">
						{'EL09'}
					</text>
				</g>
				<g id="sootblow_svg__shape536-439" transform="matrix(-1 0 0 1 102.058 -119.12)">
					<path className="sootblow_svg__st7" d="M0 329.953h68.251v10.205H0z" />
				</g>
				<g id="sootblow_svg__shape537-441" transform="matrix(-1 0 0 1 91.04 -121.413)">
					<path className="sootblow_svg__st8" d="M0 334.539h47.793v5.618H0z" />
					<text x={-33.9} y={339.75} transform="scale(-1 1)" className="sootblow_svg__st9">
						{'APH 3'}
					</text>
				</g>
				<g id="sootblow_svg__shape538-444" transform="matrix(-1 0 0 1 50.745 -132.036)">
					<path
						d="M0 335.55a4.609 4.609 0 119.22 0 4.609 4.609 0 01-9.22 0z"
						stroke={'#000'}
						fill={indicatorEL13}
					/>
				</g>
				<g id="sootblow_svg__shape539-446" transform="matrix(-1 0 0 1 55.878 -141.616)">
					<path className="sootblow_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={-15.64} y={339.4} transform="scale(-1 1)" className="sootblow_svg__st20">
						{'EL13'}
					</text>
				</g>
				<g id="sootblow_svg__shape540-449" transform="matrix(-1 0 0 1 94.117 -189.396)">
					<path
						d="M0 335.55a4.609 4.609 0 019.22 0 4.609 4.609 0 11-9.22 0z"
						stroke={'#000'}
						fill={indicatorEL07}
					/>
				</g>
				<g id="sootblow_svg__shape541-451" transform="matrix(-1 0 0 1 99.34 -198.976)">
					<path className="sootblow_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={-15.64} y={339.4} transform="scale(-1 1)" className="sootblow_svg__st20">
						{'EL07'}
					</text>
				</g>
				<g id="sootblow_svg__shape542-454" transform="matrix(-1 0 0 1 94.117 -160.382)">
					<path
						d="M0 335.55a4.609 4.609 0 019.22 0 4.609 4.609 0 11-9.22 0z"
						stroke={'#000'}
						fill={indicatorEL11}
					/>
				</g>
				<g id="sootblow_svg__shape543-456" transform="matrix(-1 0 0 1 99.424 -169.963)">
					<path className="sootblow_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={-15.64} y={339.4} transform="scale(-1 1)" className="sootblow_svg__st20">
						{'EL11'}
					</text>
				</g>
				<g id="sootblow_svg__shape544-459" transform="matrix(-1 0 0 1 94.117 -132.036)">
					<path
						d="M0 335.55a4.609 4.609 0 019.22 0 4.609 4.609 0 11-9.22 0z"
						stroke={'#000'}
						fill={indicatorEL15}
					/>
				</g>
				<g id="sootblow_svg__shape545-461" transform="matrix(-1 0 0 1 99.424 -141.616)">
					<path className="sootblow_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={-15.64} y={339.4} transform="scale(-1 1)" className="sootblow_svg__st20">
						{'EL15'}
					</text>
				</g>
				<g id="sootblow_svg__shape546-464" transform="matrix(-1 0 0 1 50.745 -103.689)">
					<path
						d="M0 335.55a4.609 4.609 0 119.22 0 4.609 4.609 0 01-9.22 0z"
						stroke={'#000'}
						fill={indicatorEL17}
					/>
				</g>
				<g id="sootblow_svg__shape547-466" transform="matrix(-1 0 0 1 55.962 -113.27)">
					<path className="sootblow_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={-15.64} y={339.4} transform="scale(-1 1)" className="sootblow_svg__st20">
						{'EL17'}
					</text>
				</g>
				<g id="sootblow_svg__shape548-469" transform="matrix(-1 0 0 1 94.117 -103.689)">
					<path
						d="M0 335.55a4.609 4.609 0 019.22 0 4.609 4.609 0 11-9.22 0z"
						stroke={'#000'}
						fill={indicatorEL19}
					/>
				</g>
				<g id="sootblow_svg__shape549-471" transform="matrix(-1 0 0 1 99.424 -113.27)">
					<path className="sootblow_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={-15.64} y={339.4} transform="scale(-1 1)" className="sootblow_svg__st20">
						{'EL19'}
					</text>
				</g>
				<g id="sootblow_svg__shape550-474" transform="matrix(-1 0 0 1 102.02 -90.467)">
					<path className="sootblow_svg__st7" d="M0 329.953h68.251v10.205H0z" />
				</g>
				<g id="sootblow_svg__shape551-476" transform="matrix(-1 0 0 1 91.002 -92.76)">
					<path className="sootblow_svg__st8" d="M0 334.539h47.793v5.618H0z" />
					<text x={-33.9} y={339.75} transform="scale(-1 1)" className="sootblow_svg__st9">
						{'APH 4'}
					</text>
				</g>
				<g id="sootblow_svg__shape552-479" transform="matrix(-1 0 0 1 104.004 -218.835)">
					<path className="sootblow_svg__st7" d="M0 329.953h68.251v10.205H0z" />
				</g>
				<g id="sootblow_svg__shape553-481" transform="matrix(-1 0 0 1 92.986 -221.128)">
					<path className="sootblow_svg__st8" d="M0 334.539h47.793v5.618H0z" />
					<text x={-33.6} y={339.75} transform="scale(-1 1)" className="sootblow_svg__st9">
						{'ECO 2'}
					</text>
				</g>
			</g>
		</svg>
	);
};

export default SvgSootblowTenayan;
