"use client";

import { useState } from "react";
import classNames from "classnames";
import "./CopyBtn.scss";
import AnimatedTxt from "../AnimatedTxt/AnimatedTxt";

type CopyBtnProps = {
	value: string;
	label?: string;
};

export default function CopyBtn({ value, label = "Zkopirovat" }: CopyBtnProps) {
	const [btnValueCopied, setBtnValueCopied] = useState(false);

	// navigator.clipboard.writeText() is async
	const handleCopy = async (value: string) => {
		try {
			await navigator.clipboard.writeText(value);
			setBtnValueCopied(true);
			setTimeout(() => setBtnValueCopied(false), 2000);
		} catch (err) {
			console.error("Copy failed:", err);
		}
	};

	return (
		<button
			type="button"
			onClick={() => handleCopy(value)}
			title="click_to_copy"
			className={classNames("copy-btn", {
				"copy-btn--copied": btnValueCopied,
			})}
			disabled={btnValueCopied}
		>
			<AnimatedTxt text={btnValueCopied ? "Zkopirovano" : label} />
		</button>
	);
}
