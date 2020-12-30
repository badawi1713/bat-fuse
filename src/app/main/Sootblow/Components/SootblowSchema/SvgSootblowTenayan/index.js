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
					'.sootblow-tenayan_svg__st1,.sootblow-tenayan_svg__st2{stroke-linecap:round;stroke-linejoin:round}.sootblow-tenayan_svg__st1{fill:#fff;stroke:none;stroke-width:.75}.sootblow-tenayan_svg__st2{fill:url(#sootblow-tenayan_svg__grad0-6)}.sootblow-tenayan_svg__st2,.sootblow-tenayan_svg__st3,.sootblow-tenayan_svg__st4{stroke:none;stroke-width:.24}.sootblow-tenayan_svg__st3{fill:url(#sootblow-tenayan_svg__grad0-10);stroke-linecap:round;stroke-linejoin:round}.sootblow-tenayan_svg__st4{fill:url(#sootblow-tenayan_svg__grad0-14)}.sootblow-tenayan_svg__st4,.sootblow-tenayan_svg__st5,.sootblow-tenayan_svg__st6,.sootblow-tenayan_svg__st7,.sootblow-tenayan_svg__st8{stroke-linecap:round;stroke-linejoin:round}.sootblow-tenayan_svg__st5{fill:url(#sootblow-tenayan_svg__grad0-18);stroke:none;stroke-width:.24}.sootblow-tenayan_svg__st6,.sootblow-tenayan_svg__st7,.sootblow-tenayan_svg__st8{stroke:#000;stroke-width:.75}.sootblow-tenayan_svg__st7,.sootblow-tenayan_svg__st8{fill:#fff}.sootblow-tenayan_svg__st8{fill:none;stroke:none}.sootblow-tenayan_svg__st9{fill:#000;font-family:Calibri;font-size:.666664em;font-weight:700}.sootblow-tenayan_svg__st11,.sootblow-tenayan_svg__st12{stroke-linecap:round;stroke-linejoin:round;stroke-width:.75}.sootblow-tenayan_svg__st11{fill:url(#sootblow-tenayan_svg__grad0-73);stroke:none}.sootblow-tenayan_svg__st12{marker-end:url(#sootblow-tenayan_svg__mrkr2-96);stroke:#000}.sootblow-tenayan_svg__st14,.sootblow-tenayan_svg__st16{fill:#000;font-family:Calibri;font-size:1.00001em}.sootblow-tenayan_svg__st16{font-size:.833336em}.sootblow-tenayan_svg__st19{fill:#ff0;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:1}.sootblow-tenayan_svg__st20{fill:#000;font-family:Calibri;font-size:.499992em;font-weight:700}'
				}
			</style>
			<defs id="sootblow-tenayan_svg__Patterns_And_Gradients">
				<linearGradient
					id="sootblow-tenayan_svg__grad0-6"
					x1={0}
					y1={0}
					x2={1}
					y2={0}
					gradientTransform="rotate(270 .5 .5)"
				>
					<stop offset={0} stopColor="red" />
					<stop offset={1} stopColor="#f59d56" />
				</linearGradient>
				<linearGradient id="sootblow-tenayan_svg__grad0-10" x1={0} y1={0} x2={1} y2={0}>
					<stop offset={0} stopColor="#ffc000" />
					<stop offset={0.48} stopColor="#f60" />
					<stop offset={1} stopColor="red" />
				</linearGradient>
				<linearGradient
					id="sootblow-tenayan_svg__grad0-14"
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
					id="sootblow-tenayan_svg__grad0-18"
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
					id="sootblow-tenayan_svg__grad0-73"
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
			<defs id="sootblow-tenayan_svg__Markers">
				<marker
					id="sootblow-tenayan_svg__mrkr2-96"
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
					<use xlinkHref="#sootblow-tenayan_svg__lend2" transform="scale(-2.92)" />
				</marker>
				<path d="M1 1L0 0l1-1v2" id="sootblow-tenayan_svg__lend2" />
			</defs>
			<g id="sootblow-tenayan_svg__shape1-1">
				<path className="sootblow-tenayan_svg__st1" d="M0 0h680.315v340.157H0z" />
			</g>
			<g>
				<g id="sootblow-tenayan_svg__shape1-3" transform="rotate(180 237.086 297.2)">
					<path d="M0 340.16h117.14l-19.03-68.35H19.04L0 340.16z" className="sootblow-tenayan_svg__st2" />
				</g>
				<g id="sootblow-tenayan_svg__shape2-7" transform="rotate(90 330.132 367.054)">
					<path className="sootblow-tenayan_svg__st3" d="M0 223.013h217.323v117.145H0z" />
				</g>
				<g id="sootblow-tenayan_svg__shape3-11" transform="translate(569.35 -97.767)">
					<path className="sootblow-tenayan_svg__st4" d="M0 101.417h83.104v238.741H0z" />
				</g>
				<g id="sootblow-tenayan_svg__shape4-15" transform="translate(652.282 -97.767)">
					<path className="sootblow-tenayan_svg__st5" d="M0 311.956h19.741v28.202H0z" />
				</g>
				<g id="sootblow-tenayan_svg__shape7-19" transform="rotate(90 316.032 381.154)">
					<path d="M0 340.16h189.12" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape8-22" transform="rotate(90 330.132 367.054)">
					<path d="M0 340.16h28.2" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape9-25" transform="rotate(74.438 235.068 532.222)">
					<path d="M0 340.16h70.95" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape10-28" transform="rotate(105.482 269.762 477.544)">
					<path d="M0 340.16h71.31" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape11-31" transform="rotate(.268 3937.353 80620.034)">
					<path d="M0 340.16h79.07" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape12-34" transform="rotate(180 237.087 188.54)">
					<path d="M0 340.16h117.14" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape13-37" transform="rotate(90 293.27 521.06)">
					<path d="M0 340.16h26.45" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape14-40" transform="translate(569.35 -97.767)">
					<path d="M0 340.16h85.81" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape15-43" transform="translate(626.456 -97.767)">
					<path d="M0 340.16h45.57" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape16-46" transform="translate(652.282 -125.969)">
					<path d="M0 340.16h19.74" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape17-49" transform="translate(652.282 -125.969)">
					<path d="M0 340.16h9.87" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape20-52" transform="translate(575.234 -306.165)">
					<path className="sootblow-tenayan_svg__st7" d="M0 329.953h68.251v10.205H0z" />
				</g>
				<g id="sootblow-tenayan_svg__shape23-54" transform="translate(586.253 -308.458)">
					<path className="sootblow-tenayan_svg__st8" d="M0 334.539h47.793v5.618H0z" />
					<text x={8.93} y={339.75} className="sootblow-tenayan_svg__st9">
						{'FINAL SH'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__group141-57" transform="translate(318.691 -293.822)">
					<g id="sootblow-tenayan_svg__shape142-58" transform="translate(1.962)">
						<path
							d="M0 320.53a19.625 19.625 0 0139.25 0 19.625 19.625 0 01-39.25 0z"
							className="sootblow-tenayan_svg__st7"
						/>
					</g>
					<g id="sootblow-tenayan_svg__shape143-60" transform="translate(0 -10.205)">
						<path className="sootblow-tenayan_svg__st8" d="M0 321.318h43.174v18.84H0z" />
						<text x={14.97} y={334.34} fill="#000" fontFamily="Calibri" fontSize="1em" fontWeight={700}>
							{'SD'}
						</text>
					</g>
				</g>
				<g id="sootblow-tenayan_svg__group206-63" transform="translate(509.919 -178.494)">
					<g id="sootblow-tenayan_svg__shape207-64">
						<path
							d="M0 327.17a18.321 12.985-180 0036.64 0V223.3H0v103.87z"
							className="sootblow-tenayan_svg__st7"
						/>
					</g>
					<ellipse
						cx={18.321}
						cy={223.296}
						rx={18.321}
						ry={12.985}
						className="sootblow-tenayan_svg__st7"
						id="sootblow-tenayan_svg__shape206-66"
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape208-68" transform="rotate(180 273.281 243.843)">
					<path d="M0 340.16h36.64l-11.05-40.77H11.06L0 340.16z" className="sootblow-tenayan_svg__st7" />
				</g>
				<g id="sootblow-tenayan_svg__shape209-70" transform="translate(474.154 -275.151)">
					<path className="sootblow-tenayan_svg__st11" d="M0 311.956h32.986v28.202H0z" />
				</g>
				<g id="sootblow-tenayan_svg__shape210-74" transform="translate(516.959 -308.306)">
					<path className="sootblow-tenayan_svg__st11" d="M0 311.956h22.158v28.202H0z" />
				</g>
				<g id="sootblow-tenayan_svg__shape211-77" transform="translate(538.731 -322.407)">
					<path className="sootblow-tenayan_svg__st11" d="M0 326.057h32.71v14.101H0z" />
				</g>
				<g id="sootblow-tenayan_svg__shape223-80" transform="translate(495.112 -123.208)">
					<path className="sootblow-tenayan_svg__st1" d="M0 311.956h32.71v28.202H0z" />
				</g>
				<g id="sootblow-tenayan_svg__shape224-82" transform="rotate(90 339.616 528.364)">
					<path d="M0 340.16h28.2" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape225-85" transform="translate(495.112 -123.208)">
					<path d="M0 340.16h32.71" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape226-88" transform="rotate(90 316.211 519.059)">
					<path d="M0 340.16h14.1" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape227-91" transform="rotate(135 275.994 374.044)">
					<path d="M0 340.16h25.54" className="sootblow-tenayan_svg__st12" />
				</g>
				<g id="sootblow-tenayan_svg__shape228-97" transform="rotate(90.098 374.557 439.394)">
					<path d="M0 340.16h151.17" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape229-100" transform="translate(474.431 -275.151)">
					<path d="M0 340.16h32.71" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape230-103" transform="rotate(.128 135767.445 211134.666)">
					<path d="M0 340.16h35.17" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__group231-106" transform="translate(507.141 -272.484)">
					<g id="sootblow-tenayan_svg__shape232-107">
						<path
							d="M0 336.57a21.587 3.586-180 1043.17 0v-28.68H0v28.68z"
							className="sootblow-tenayan_svg__st7"
						/>
					</g>
					<ellipse
						cx={21.587}
						cy={307.887}
						rx={21.587}
						ry={3.586}
						className="sootblow-tenayan_svg__st7"
						id="sootblow-tenayan_svg__shape231-109"
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape233-111" transform="translate(539.117 -322.407)">
					<path d="M0 340.16h30.23" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape234-114" transform="rotate(90 426.733 430.383)">
					<path d="M0 340.16h28.2" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape235-117" transform="rotate(90 430.762 448.513)">
					<path d="M0 340.16h14.51" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape236-120" transform="rotate(90.005 494.39 498.027)">
					<path d="M0 340.16h210.54" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape237-123" transform="translate(516.959 -336.508)">
					<path d="M0 340.16h135.34" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape238-126" transform="rotate(90 445.65 463.857)">
					<path d="M0 340.16h224.18" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape239-129" transform="rotate(-90 214.632 121.876)">
					<path
						d="M0 336.99a6.77 3.165 0 1113.54 0 6.77 3.165 0 11-13.54 0z"
						className="sootblow-tenayan_svg__st7"
					/>
				</g>
				<g id="sootblow-tenayan_svg__group240-131" transform="translate(426.585 -3.65)">
					<g id="sootblow-tenayan_svg__shape241-132">
						<path
							d="M0 339.37a3.165.785-180 106.329 0l.001-6.28H0v6.28z"
							className="sootblow-tenayan_svg__st7"
						/>
					</g>
					<ellipse
						cx={3.165}
						cy={333.09}
						rx={3.165}
						ry={0.785}
						className="sootblow-tenayan_svg__st7"
						id="sootblow-tenayan_svg__shape240-134"
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape242-136" transform="rotate(-90 198.774 137.734)">
					<path
						d="M0 336.99a6.77 3.165 0 1113.54 0 6.77 3.165 0 11-13.54 0z"
						className="sootblow-tenayan_svg__st7"
					/>
				</g>
				<g id="sootblow-tenayan_svg__group243-138" transform="translate(394.867 -3.65)">
					<g id="sootblow-tenayan_svg__shape244-139">
						<path
							d="M0 339.37a3.165.785-180 106.329 0l.001-6.28H0v6.28z"
							className="sootblow-tenayan_svg__st7"
						/>
					</g>
					<ellipse
						cx={3.165}
						cy={333.09}
						rx={3.165}
						ry={0.785}
						className="sootblow-tenayan_svg__st7"
						id="sootblow-tenayan_svg__shape243-141"
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape250-143" transform="rotate(90 395.317 463.21)">
					<path className="sootblow-tenayan_svg__st8" d="M0 320.416h79.634v19.741H0z" />
					<text x={17.2} y={333.89} className="sootblow-tenayan_svg__st14">
						{'CYCLONE'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape257-146" transform="translate(6.75 -39.633)">
					<path
						d="M0 333.44a6.713 6.713 0 0113.43 0 6.713 6.713 0 01-13.43 0z"
						fill="red"
						stroke="#000"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape258-148" transform="translate(13.463 -40.986)">
					<path className="sootblow-tenayan_svg__st8" d="M0 331.299h65.906v8.858H0z" />
					<text x={14.65} y={338.73} className="sootblow-tenayan_svg__st16">
						{'RUNNING'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape259-151" transform="translate(6.75 -18)">
					<path
						d="M0 333.44a6.713 6.713 0 0113.43 0 6.713 6.713 0 01-13.43 0z"
						fill="#00b050"
						stroke="#000"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape260-153" transform="translate(15.943 -19.726)">
					<path className="sootblow-tenayan_svg__st8" d="M0 331.299h65.906v8.858H0z" />
					<text x={12.92} y={338.73} className="sootblow-tenayan_svg__st16">
						{'STOP'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape261-156" transform="translate(77.615 -39.633)">
					<path
						d="M0 333.44a6.713 6.713 0 0113.43 0 6.713 6.713 0 01-13.43 0z"
						fill="#bfbfbf"
						stroke="#000"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape262-158" transform="translate(82.061 -42.383)">
					<path className="sootblow-tenayan_svg__st8" d="M0 331.299h80.221v8.858H0z" />
					<text x={17.65} y={338.73} className="sootblow-tenayan_svg__st16">
						{'START FAIL'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape263-161" transform="translate(77.989 -18)">
					<path
						d="M0 333.44a6.713 6.713 0 0113.43 0 6.713 6.713 0 01-13.43 0z"
						className="sootblow-tenayan_svg__st19"
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape264-163" transform="translate(93.825 -20.567)">
					<path className="sootblow-tenayan_svg__st8" d="M0 331.299h80.221v8.858H0z" />
					<text x={5.53} y={338.73} className="sootblow-tenayan_svg__st16">
						{'READY/STANDBY'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape265-166" transform="translate(625.561 -318.761)">
					<path
						d="M0 335.06a5.102 5.102 0 0110.2 0 5.102 5.102 0 11-10.2 0z"
						stroke={'#000'}
						fill={indicatorC02}
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape266-168" transform="translate(620.889 -329.329)">
					<path className="sootblow-tenayan_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={5.24} y={339.4} className="sootblow-tenayan_svg__st20">
						{'C02'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape269-171" transform="translate(575.647 -277.079)">
					<path className="sootblow-tenayan_svg__st7" d="M0 329.953h68.251v10.205H0z" />
				</g>
				<g id="sootblow-tenayan_svg__shape270-173" transform="translate(586.665 -279.372)">
					<path className="sootblow-tenayan_svg__st8" d="M0 334.539h47.793v5.618H0z" />
					<text x={14.98} y={339.75} className="sootblow-tenayan_svg__st9">
						{'HTSH'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape271-176" transform="translate(625.973 -289.675)">
					<path
						d="M0 335.06a5.102 5.102 0 1110.2 0 5.102 5.102 0 01-10.2 0z"
						stroke={'#000'}
						fill={indicatorC04}
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape272-178" transform="translate(620.889 -300.243)">
					<path className="sootblow-tenayan_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={5.24} y={339.4} className="sootblow-tenayan_svg__st20">
						{'C04'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape273-181" transform="translate(576.201 -248.12)">
					<path className="sootblow-tenayan_svg__st7" d="M0 329.953h68.251v10.205H0z" />
				</g>
				<g id="sootblow-tenayan_svg__shape274-183" transform="translate(587.22 -250.413)">
					<path className="sootblow-tenayan_svg__st8" d="M0 334.539h47.793v5.618H0z" />
					<text x={15.81} y={339.75} className="sootblow-tenayan_svg__st9">
						{'LTSH'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape275-186" transform="translate(626.528 -260.382)">
					<path
						d="M0 335.06a5.102 5.102 0 1110.2 0 5.102 5.102 0 01-10.2 0z"
						stroke={'#000'}
						fill={indicatorEL02}
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape276-188" transform="translate(621.922 -270.95)">
					<path className="sootblow-tenayan_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={4.1} y={339.4} className="sootblow-tenayan_svg__st20">
						{'EL02'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape279-191" transform="translate(626.528 -231.638)">
					<path
						d="M0 335.06a5.102 5.102 0 0110.2 0 5.102 5.102 0 11-10.2 0z"
						stroke={'#000'}
						fill={indicatorEL04}
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape280-193" transform="translate(621.722 -242.205)">
					<path className="sootblow-tenayan_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={4.1} y={339.4} className="sootblow-tenayan_svg__st20">
						{'EL04'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape281-196" transform="translate(577.161 -191.362)">
					<path className="sootblow-tenayan_svg__st7" d="M0 329.953h68.251v10.205H0z" />
				</g>
				<g id="sootblow-tenayan_svg__shape282-198" transform="translate(588.179 -193.655)">
					<path className="sootblow-tenayan_svg__st8" d="M0 334.539h47.793v5.618H0z" />
					<text x={17.12} y={339.75} className="sootblow-tenayan_svg__st9">
						{'ECO'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape283-201" transform="translate(628.474 -204.945)">
					<path
						d="M0 335.55a4.609 4.609 0 019.22 0 4.609 4.609 0 11-9.22 0z"
						stroke={'#000'}
						fill={indicatorEL08}
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape284-203" transform="translate(623.174 -214.525)">
					<path className="sootblow-tenayan_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={4.1} y={339.4} className="sootblow-tenayan_svg__st20">
						{'EL08'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape285-206" transform="translate(578.12 -163.015)">
					<path className="sootblow-tenayan_svg__st7" d="M0 329.953h68.251v10.205H0z" />
				</g>
				<g id="sootblow-tenayan_svg__shape286-208" transform="translate(589.138 -165.309)">
					<path className="sootblow-tenayan_svg__st8" d="M0 334.539h47.793v5.618H0z" />
					<text x={5.8} y={339.75} className="sootblow-tenayan_svg__st9">
						{'AH FOR PA'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape287-211" transform="translate(629.433 -175.931)">
					<path
						d="M0 335.55a4.609 4.609 0 119.22 0 4.609 4.609 0 01-9.22 0z"
						stroke={'#000'}
						fill={indicatorEL12}
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape288-213" transform="translate(624.216 -185.512)">
					<path className="sootblow-tenayan_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={4.1} y={339.4} className="sootblow-tenayan_svg__st20">
						{'EL12'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape289-216" transform="translate(578.12 -134.669)">
					<path className="sootblow-tenayan_svg__st7" d="M0 329.953h68.251v10.205H0z" />
				</g>
				<g id="sootblow-tenayan_svg__shape290-218" transform="translate(589.138 -136.962)">
					<path className="sootblow-tenayan_svg__st8" d="M0 334.539h47.793v5.618H0z" />
					<text x={6.03} y={339.75} className="sootblow-tenayan_svg__st9">
						{'AH FOR SA'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape291-221" transform="translate(629.433 -147.585)">
					<path
						d="M0 335.55a4.609 4.609 0 119.22 0 4.609 4.609 0 01-9.22 0z"
						stroke={'#000'}
						fill={indicatorEL16}
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape292-223" transform="translate(624.3 -157.166)">
					<path className="sootblow-tenayan_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={4.1} y={339.4} className="sootblow-tenayan_svg__st20">
						{'EL16'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape293-226" transform="translate(586.061 -204.945)">
					<path
						d="M0 335.55a4.609 4.609 0 019.22 0 4.609 4.609 0 11-9.22 0z"
						stroke={'#000'}
						fill={indicatorEL06}
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape294-228" transform="translate(580.838 -214.525)">
					<path className="sootblow-tenayan_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={4.1} y={339.4} className="sootblow-tenayan_svg__st20">
						{'EL06'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape295-231" transform="translate(586.061 -175.931)">
					<path
						d="M0 335.55a4.609 4.609 0 019.22 0 4.609 4.609 0 11-9.22 0z"
						stroke={'#000'}
						fill={indicatorEL10}
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape296-233" transform="translate(580.754 -185.512)">
					<path className="sootblow-tenayan_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={4.1} y={339.4} className="sootblow-tenayan_svg__st20">
						{'EL10'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape297-236" transform="translate(586.061 -147.585)">
					<path
						d="M0 335.55a4.609 4.609 0 019.22 0 4.609 4.609 0 11-9.22 0z"
						stroke={'#000'}
						fill={indicatorEL14}
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape298-238" transform="translate(580.754 -157.166)">
					<path className="sootblow-tenayan_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={4.1} y={339.4} className="sootblow-tenayan_svg__st20">
						{'EL14'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape299-241" transform="translate(629.433 -119.239)">
					<path
						d="M0 335.55a4.609 4.609 0 119.22 0 4.609 4.609 0 01-9.22 0z"
						stroke={'#000'}
						fill={indicatorEL20}
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape300-243" transform="translate(624.216 -128.819)">
					<path className="sootblow-tenayan_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={4.1} y={339.4} className="sootblow-tenayan_svg__st20">
						{'EL20'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape301-246" transform="translate(586.061 -119.239)">
					<path
						d="M0 335.55a4.609 4.609 0 019.22 0 4.609 4.609 0 11-9.22 0z"
						stroke={'#000'}
						fill={indicatorEL18}
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape302-248" transform="translate(580.754 -128.819)">
					<path className="sootblow-tenayan_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={4.1} y={339.4} className="sootblow-tenayan_svg__st20">
						{'EL18'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape303-251" transform="matrix(1 0 0 -1 206.142 594.401)">
					<path d="M0 340.16h117.14l-19.03-68.35H19.04L0 340.16z" className="sootblow-tenayan_svg__st2" />
				</g>
				<g id="sootblow-tenayan_svg__shape304-254" transform="matrix(0 1 1 0 -16.871 36.921)">
					<path className="sootblow-tenayan_svg__st3" d="M0 223.013h217.323v117.145H0z" />
				</g>
				<g id="sootblow-tenayan_svg__shape305-257" transform="matrix(-1 0 0 1 110.965 -97.767)">
					<path className="sootblow-tenayan_svg__st4" d="M0 101.417h83.104v238.741H0z" />
				</g>
				<g id="sootblow-tenayan_svg__shape306-260" transform="matrix(-1 0 0 1 28.032 -97.767)">
					<path className="sootblow-tenayan_svg__st5" d="M0 311.956h19.741v28.202H0z" />
				</g>
				<g id="sootblow-tenayan_svg__shape307-263" transform="matrix(0 1 1 0 -16.871 65.123)">
					<path d="M0 340.16h189.12" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape308-266" transform="matrix(0 1 1 0 -16.871 36.921)">
					<path d="M0 340.16h28.2" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape309-269" transform="scale(-1 1) rotate(74.438 -105.089 84.39)">
					<path d="M0 340.16h70.95" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape310-272" transform="scale(1 -1) rotate(-74.518 -287.64 -92.544)">
					<path d="M0 340.16h71.31" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape311-275" transform="scale(-1 1) rotate(.268 3597.195 -64625.495)">
					<path d="M0 340.16h79.07" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape312-278" transform="matrix(1 0 0 -1 206.142 377.079)">
					<path d="M0 340.16h117.14" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape313-281" transform="matrix(0 1 1 0 -134.016 227.79)">
					<path d="M0 340.16h26.45" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape314-284" transform="matrix(-1 0 0 1 110.965 -97.767)">
					<path d="M0 340.16h85.81" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape315-287" transform="matrix(-1 0 0 1 53.86 -97.767)">
					<path d="M0 340.16h45.57" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape316-290" transform="matrix(-1 0 0 1 28.032 -125.969)">
					<path d="M0 340.16h19.74" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape317-293" transform="matrix(-1 0 0 1 28.032 -125.969)">
					<path d="M0 340.16h9.87" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape318-296" transform="matrix(-1 0 0 1 105.081 -306.165)">
					<path className="sootblow-tenayan_svg__st7" d="M0 329.953h68.251v10.205H0z" />
				</g>
				<g id="sootblow-tenayan_svg__shape319-298" transform="matrix(-1 0 0 1 94.062 -308.458)">
					<path className="sootblow-tenayan_svg__st8" d="M0 334.539h47.793v5.618H0z" />
					<text x={-38.87} y={339.75} transform="scale(-1 1)" className="sootblow-tenayan_svg__st9">
						{'FINAL SH'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__group323-301" transform="matrix(-1 0 0 1 170.396 -178.494)">
					<g id="sootblow-tenayan_svg__shape324-302">
						<path
							d="M0 327.17a18.321 12.985-180 0036.64 0V223.3H0v103.87z"
							className="sootblow-tenayan_svg__st7"
						/>
					</g>
					<ellipse
						cx={18.321}
						cy={223.296}
						rx={18.321}
						ry={12.985}
						className="sootblow-tenayan_svg__st7"
						id="sootblow-tenayan_svg__shape323-304"
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape325-306" transform="matrix(1 0 0 -1 133.753 487.685)">
					<path d="M0 340.16h36.64l-11.05-40.77H11.06L0 340.16z" className="sootblow-tenayan_svg__st7" />
				</g>
				<g id="sootblow-tenayan_svg__shape326-308" transform="matrix(-1 0 0 1 206.929 -275.151)">
					<path className="sootblow-tenayan_svg__st11" d="M0 311.956h33.755v28.202H0z" />
				</g>
				<g id="sootblow-tenayan_svg__shape327-311" transform="matrix(-1 0 0 1 163.356 -308.306)">
					<path className="sootblow-tenayan_svg__st11" d="M0 311.956h22.158v28.202H0z" />
				</g>
				<g id="sootblow-tenayan_svg__shape328-314" transform="matrix(-1 0 0 1 141.584 -322.407)">
					<path className="sootblow-tenayan_svg__st11" d="M0 326.057h32.71v14.101H0z" />
				</g>
				<g id="sootblow-tenayan_svg__shape329-317" transform="matrix(-1 0 0 1 185.203 -123.208)">
					<path className="sootblow-tenayan_svg__st1" d="M0 311.956h32.71v28.202H0z" />
				</g>
				<g id="sootblow-tenayan_svg__shape330-319" transform="matrix(0 1 1 0 -187.664 188.748)">
					<path d="M0 340.16h28.2" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape331-322" transform="matrix(-1 0 0 1 185.203 -123.208)">
					<path d="M0 340.16h32.71" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape332-325" transform="matrix(0 1 1 0 -154.955 202.848)">
					<path d="M0 340.16h14.1" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape333-328" transform="scale(1 -1) rotate(-45 -562.865 -154.905)">
					<path d="M0 340.16h25.54" className="sootblow-tenayan_svg__st12" />
				</g>
				<g id="sootblow-tenayan_svg__shape334-333" transform="matrix(.0017 1 1 -.0017 -134.273 65.586)">
					<path d="M0 340.16h151.17" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape335-336" transform="matrix(-1 0 0 1 205.884 -275.151)">
					<path d="M0 340.16h32.71" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape336-339" transform="matrix(-1 .00224 .00224 1 207.585 -303.236)">
					<path d="M0 340.16h35.17" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__group337-342" transform="matrix(-1 0 0 1 173.174 -272.484)">
					<g id="sootblow-tenayan_svg__shape338-343">
						<path
							d="M0 336.57a21.587 3.586-180 1043.17 0v-28.68H0v28.68z"
							className="sootblow-tenayan_svg__st7"
						/>
					</g>
					<ellipse
						cx={21.587}
						cy={307.887}
						rx={21.587}
						ry={3.586}
						className="sootblow-tenayan_svg__st7"
						id="sootblow-tenayan_svg__shape337-345"
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape339-347" transform="matrix(-1 0 0 1 141.198 -322.407)">
					<path d="M0 340.16h30.23" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape340-350" transform="matrix(0 1 1 0 -176.801 3.65)">
					<path d="M0 340.16h28.2" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape341-353" transform="matrix(0 1 1 0 -198.96 17.75)">
					<path d="M0 340.16h14.51" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape342-356" transform="matrix(.00008 1 1 -.00008 -312.142 3.677)">
					<path d="M0 340.16h210.54" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape343-359" transform="matrix(-1 0 0 1 163.356 -336.508)">
					<path d="M0 340.16h135.34" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape344-362" transform="matrix(0 1 1 0 -229.192 18.206)">
					<path d="M0 340.16h224.18" className="sootblow-tenayan_svg__st6" />
				</g>
				<g id="sootblow-tenayan_svg__shape345-365" transform="matrix(0 -1 -1 0 587.558 336.508)">
					<path
						d="M0 336.99a6.77 3.165 0 1113.54 0 6.77 3.165 0 11-13.54 0z"
						className="sootblow-tenayan_svg__st7"
					/>
				</g>
				<g id="sootblow-tenayan_svg__group346-367" transform="matrix(-1 0 0 1 253.73 -3.65)">
					<g id="sootblow-tenayan_svg__shape347-368">
						<path
							d="M0 339.37a3.165.785-180 106.329 0l.001-6.28H0v6.28z"
							className="sootblow-tenayan_svg__st7"
						/>
					</g>
					<ellipse
						cx={3.165}
						cy={333.09}
						rx={3.165}
						ry={0.785}
						className="sootblow-tenayan_svg__st7"
						id="sootblow-tenayan_svg__shape346-370"
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape348-372" transform="matrix(0 -1 -1 0 619.276 336.508)">
					<path
						d="M0 336.99a6.77 3.165 0 1113.54 0 6.77 3.165 0 11-13.54 0z"
						className="sootblow-tenayan_svg__st7"
					/>
				</g>
				<g id="sootblow-tenayan_svg__group349-374" transform="matrix(-1 0 0 1 285.447 -3.65)">
					<g id="sootblow-tenayan_svg__shape350-375">
						<path
							d="M0 339.37a3.165.785-180 106.329 0l.001-6.28H0v6.28z"
							className="sootblow-tenayan_svg__st7"
						/>
					</g>
					<ellipse
						cx={3.165}
						cy={333.09}
						rx={3.165}
						ry={0.785}
						className="sootblow-tenayan_svg__st7"
						id="sootblow-tenayan_svg__shape349-377"
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape351-379" transform="matrix(0 1 1 0 -178.213 67.893)">
					<path className="sootblow-tenayan_svg__st8" d="M0 320.416h79.634v19.741H0z" />
					<text x={-62.44} y={333.89} transform="scale(-1 1)" className="sootblow-tenayan_svg__st14">
						{'CYCLONE'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape352-382" transform="matrix(-1 0 0 1 53.562 -319.953)">
					<path
						d="M0 335.65a4.506 4.506 0 119.01 0 4.506 4.506 0 01-9.01 0z"
						stroke={'#000'}
						fill={indicatorC01}
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape353-384" transform="matrix(-1 0 0 1 58.984 -329.329)">
					<path className="sootblow-tenayan_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={-14.5} y={339.4} transform="scale(-1 1)" className="sootblow-tenayan_svg__st20">
						{'C01'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape354-387" transform="matrix(-1 0 0 1 104.668 -277.079)">
					<path className="sootblow-tenayan_svg__st7" d="M0 329.953h68.251v10.205H0z" />
				</g>
				<g id="sootblow-tenayan_svg__shape355-389" transform="matrix(-1 0 0 1 93.65 -279.372)">
					<path className="sootblow-tenayan_svg__st8" d="M0 334.539h47.793v5.618H0z" />
					<text x={-32.81} y={339.75} transform="scale(-1 1)" className="sootblow-tenayan_svg__st9">
						{'HTSH'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape356-392" transform="matrix(-1 0 0 1 53.15 -290.868)">
					<path
						d="M0 335.65a4.506 4.506 0 019.01 0 4.506 4.506 0 11-9.01 0z"
						stroke={'#000'}
						fill={indicatorC03}
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape357-394" transform="matrix(-1 0 0 1 58.655 -300.243)">
					<path className="sootblow-tenayan_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={-14.5} y={339.4} transform="scale(-1 1)" className="sootblow-tenayan_svg__st20">
						{'C03'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape358-397" transform="matrix(-1 0 0 1 104.114 -248.12)">
					<path className="sootblow-tenayan_svg__st7" d="M0 329.953h68.251v10.205H0z" />
				</g>
				<g id="sootblow-tenayan_svg__shape359-399" transform="matrix(-1 0 0 1 93.095 -250.413)">
					<path className="sootblow-tenayan_svg__st8" d="M0 334.539h47.793v5.618H0z" />
					<text x={-31.98} y={339.75} transform="scale(-1 1)" className="sootblow-tenayan_svg__st9">
						{'LTSH'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape360-402" transform="matrix(-1 0 0 1 52.55 -261.62)">
					<path
						d="M0 335.67a4.484 4.484 0 118.97 0 4.484 4.484 0 01-8.97 0z"
						stroke={'#000'}
						fill={indicatorEL01}
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape361-404" transform="matrix(-1 0 0 1 58.1 -270.95)">
					<path className="sootblow-tenayan_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={-15.64} y={339.4} transform="scale(-1 1)" className="sootblow-tenayan_svg__st20">
						{'EL01'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape362-407" transform="matrix(-1 0 0 1 52.55 -232.875)">
					<path
						d="M0 335.67a4.484 4.484 0 118.97 0 4.484 4.484 0 01-8.97 0z"
						stroke={'#000'}
						fill={indicatorEL03}
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape363-409" transform="matrix(-1 0 0 1 58.017 -242.205)">
					<path className="sootblow-tenayan_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={-15.64} y={339.4} transform="scale(-1 1)" className="sootblow-tenayan_svg__st20">
						{'EL03'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape364-412" transform="matrix(-1 0 0 1 103.154 -191.362)">
					<path className="sootblow-tenayan_svg__st7" d="M0 329.953h68.251v10.205H0z" />
				</g>
				<g id="sootblow-tenayan_svg__shape365-414" transform="matrix(-1 0 0 1 92.136 -193.655)">
					<path className="sootblow-tenayan_svg__st8" d="M0 334.539h47.793v5.618H0z" />
					<text x={-30.67} y={339.75} transform="scale(-1 1)" className="sootblow-tenayan_svg__st9">
						{'ECO'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape366-417" transform="matrix(-1 0 0 1 51.59 -205.196)">
					<path
						d="M0 335.67a4.484 4.484 0 118.97 0 4.484 4.484 0 01-8.97 0z"
						stroke={'#000'}
						fill={indicatorEL05}
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape367-419" transform="matrix(-1 0 0 1 57.058 -214.525)">
					<path className="sootblow-tenayan_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={-15.64} y={339.4} transform="scale(-1 1)" className="sootblow-tenayan_svg__st20">
						{'EL05'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape368-422" transform="matrix(-1 0 0 1 102.195 -163.015)">
					<path className="sootblow-tenayan_svg__st7" d="M0 329.953h68.251v10.205H0z" />
				</g>
				<g id="sootblow-tenayan_svg__shape369-424" transform="matrix(-1 0 0 1 91.177 -165.309)">
					<path className="sootblow-tenayan_svg__st8" d="M0 334.539h47.793v5.618H0z" />
					<text x={-42} y={339.75} transform="scale(-1 1)" className="sootblow-tenayan_svg__st9">
						{'AH FOR PA'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape370-427" transform="matrix(-1 0 0 1 51.59 -175.223)">
					<path
						d="M0 335.19a4.963 4.963 0 119.93 0 4.963 4.963 0 01-9.93 0z"
						stroke={'#000'}
						fill={indicatorEL09}
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape371-429" transform="matrix(-1 0 0 1 56.599 -185.512)">
					<path className="sootblow-tenayan_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={-15.64} y={339.4} transform="scale(-1 1)" className="sootblow-tenayan_svg__st20">
						{'EL09'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape372-432" transform="matrix(-1 0 0 1 102.195 -134.669)">
					<path className="sootblow-tenayan_svg__st7" d="M0 329.953h68.251v10.205H0z" />
				</g>
				<g id="sootblow-tenayan_svg__shape373-434" transform="matrix(-1 0 0 1 91.177 -136.962)">
					<path className="sootblow-tenayan_svg__st8" d="M0 334.539h47.793v5.618H0z" />
					<text x={-41.76} y={339.75} transform="scale(-1 1)" className="sootblow-tenayan_svg__st9">
						{'AH FOR SA'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape374-437" transform="matrix(-1 0 0 1 51.024 -147.443)">
					<path
						d="M0 335.48a4.68 4.68 0 019.36 0 4.68 4.68 0 11-9.36 0z"
						stroke={'#000'}
						fill={indicatorEL13}
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape375-439" transform="matrix(-1 0 0 1 56.265 -157.166)">
					<path className="sootblow-tenayan_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={-15.64} y={339.4} transform="scale(-1 1)" className="sootblow-tenayan_svg__st20">
						{'EL13'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape376-442" transform="matrix(-1 0 0 1 94.254 -204.948)">
					<path
						d="M0 335.55a4.607 4.607 0 119.21 0 4.607 4.607 0 11-9.21 0z"
						stroke={'#000'}
						fill={indicatorEL07}
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape377-444" transform="matrix(-1 0 0 1 99.728 -214.525)">
					<path className="sootblow-tenayan_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={-15.64} y={339.4} transform="scale(-1 1)" className="sootblow-tenayan_svg__st20">
						{'EL07'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape378-447" transform="matrix(-1 0 0 1 94.254 -175.935)">
					<path
						d="M0 335.55a4.607 4.607 0 119.21 0 4.607 4.607 0 01-9.21 0z"
						stroke={'#000'}
						fill={indicatorEL11}
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape379-449" transform="matrix(-1 0 0 1 99.56 -185.512)">
					<path className="sootblow-tenayan_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={-15.64} y={339.4} transform="scale(-1 1)" className="sootblow-tenayan_svg__st20">
						{'EL11'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape380-452" transform="matrix(-1 0 0 1 94.254 -147.585)">
					<path
						d="M0 335.55a4.609 4.609 0 119.22 0 4.609 4.609 0 01-9.22 0z"
						stroke={'#000'}
						fill={indicatorEL15}
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape381-454" transform="matrix(-1 0 0 1 99.728 -157.166)">
					<path className="sootblow-tenayan_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={-15.64} y={339.4} transform="scale(-1 1)" className="sootblow-tenayan_svg__st20">
						{'EL15'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape382-457" transform="matrix(-1 0 0 1 51.024 -119.097)">
					<path
						d="M0 335.48a4.68 4.68 0 019.36 0 4.68 4.68 0 11-9.36 0z"
						stroke={'#000'}
						fill={indicatorEL17}
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape383-459" transform="matrix(-1 0 0 1 56.349 -128.819)">
					<path className="sootblow-tenayan_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={-15.64} y={339.4} transform="scale(-1 1)" className="sootblow-tenayan_svg__st20">
						{'EL17'}
					</text>
				</g>
				<g id="sootblow-tenayan_svg__shape384-462" transform="matrix(-1 0 0 1 94.254 -119.239)">
					<path
						d="M0 335.55a4.609 4.609 0 019.22 0 4.609 4.609 0 11-9.22 0z"
						stroke={'#000'}
						fill={indicatorEL19}
					/>
				</g>
				<g id="sootblow-tenayan_svg__shape385-464" transform="matrix(-1 0 0 1 99.56 -128.819)">
					<path className="sootblow-tenayan_svg__st8" d="M0 335.039h19.741v5.118H0z" />
					<text x={-15.64} y={339.4} transform="scale(-1 1)" className="sootblow-tenayan_svg__st20">
						{'EL19'}
					</text>
				</g>
			</g>
		</svg>
	);
};

export default SvgSootblowTenayan;
