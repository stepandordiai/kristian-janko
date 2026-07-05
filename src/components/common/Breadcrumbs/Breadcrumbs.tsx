import ChevronRightIcon from "@/components/icons/ChevronRightIcon";
import Link from "next/link";
import AnimatedTxt from "@/components/AnimatedTxt/AnimatedTxt";
import "./styles.scss";

export default function Breadcrumbs() {
	return (
		<nav className="breadcrumbs">
			<ol className="breadcrumbs-list">
				<li>
					<Link href="/">
						<AnimatedTxt text="Úvod" />
					</Link>
					<ChevronRightIcon size={14} />
				</li>
				<li>
					<span>Filosofie</span>
				</li>
			</ol>
		</nav>
	);
}
