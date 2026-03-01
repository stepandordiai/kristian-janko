const LogoAnimated = ({
	size = 260,
	color = "currentColor",
}: {
	size?: number;
	color?: string;
}) => {
	// TODO: learn this
	// const ringOuter = document.querySelector(
	// 	".logo-ring-outer",
	// ) as SVGGeometryElement | null;
	// console.log(ringOuter?.getTotalLength());

	return (
		<svg
			viewBox="0 0 260 260"
			fill="none"
			width={size}
			height={size}
			xmlns="http://www.w3.org/2000/svg"
		>
			<style>{`
			@keyframes drawOuter {
    0%   { stroke-dashoffset: 801; }
    50%  { stroke-dashoffset: 0; }
}
@keyframes drawInnerReverse {
    0%   { stroke-dasharray: 0 731; transform: rotate(180deg); }
    50%  { stroke-dasharray: 731 0; transform: rotate(180deg); }
	100% {transform: rotate(180deg); }
}
@keyframes drawK {
    0%   { stroke-dashoffset: 400; }
    100% { stroke-dashoffset: 0; }
}
@keyframes drawJ {
    0%, 25% { stroke-dashoffset: 400; }
    100%    { stroke-dashoffset: 0; }
}

.logo-k {
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
    animation: drawK 2.5s ease-in-out 0s forwards;
}
.logo-j {
    stroke-dasharray: 400;
    stroke-dashoffset: 400;
    animation: drawJ 2.5s ease-in-out 0.4s forwards;
}
/* letters finish at ~2.2s, rings start after */
.logo-ring-outer {
    stroke-dasharray: 801;
    stroke-dashoffset: 801;
    animation: drawOuter 4s ease-in-out 2s infinite;
}
.logo-ring-inner {
    stroke-dasharray: 0 731;
    stroke-dashoffset: 0;
	  transform-origin: center;
	  transform-box: fill-box;
    animation: drawInnerReverse 4s ease-in-out 2s infinite;
}
			`}</style>

			<circle
				className="logo-ring-outer"
				cx="130"
				cy="130"
				r="127.5"
				stroke={color}
				strokeWidth="5"
			/>
			<circle
				className="logo-ring-inner"
				cx="129.998"
				cy="129.998"
				r="116.26"
				stroke={color}
				strokeWidth="5"
			/>

			{/* K */}
			<path
				className="logo-k"
				d="M51.1367 80.4258H107.748V163.025M64.0481 93.5026H94.009V180.075C76.6525 181.047 51.1367 178.519 51.1367 147.796M67.3287 155.519C67.6911 158.297 74.292 166.314 82.3064 167.316M65.3699 147.796V147.579"
				stroke={color}
				strokeWidth="5"
				strokeLinecap="round"
			/>

			{/* J */}
			<path
				className="logo-j"
				d="M139.137 123.96V80.4258M152.379 93.5026V107.904M139.137 171.798V144.982L190.616 80.4258M152.379 180.075V152.928L161.152 142.003L191.279 180.075M209.983 180.075L170.587 129.919L209.983 80.4258M139.137 180.075V180.289"
				stroke={color}
				strokeWidth="5"
				strokeLinecap="round"
			/>
		</svg>
	);
};

export default LogoAnimated;
