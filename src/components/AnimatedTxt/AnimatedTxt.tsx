import "./styles.scss";

// TODO: learn this
type AnimatedTextProps = {
	text: string;
	as?: React.ElementType; // allows button, a, span, etc.
	className?: string;
};

export default function AnimatedTxt({
	text,
	as: Component = "span",
	className = "",
}: AnimatedTextProps) {
	const letters = text.split("");

	return (
		<Component className={`animated-text ${className}`}>
			<span className="layer top">
				{letters.map((char, i) => (
					<span key={`top-${i}`} style={{ transitionDelay: `${i * 10}ms` }}>
						{char === " " ? "\u00A0" : char}
					</span>
				))}
			</span>

			<span className="layer bottom">
				{letters.map((char, i) => (
					<span key={`bottom-${i}`} style={{ transitionDelay: `${i * 10}ms` }}>
						{char === " " ? "\u00A0" : char}
					</span>
				))}
			</span>
		</Component>
	);
}
