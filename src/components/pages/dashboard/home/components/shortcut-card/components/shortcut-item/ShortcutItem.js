import { Link } from "react-router-dom";
import React from "react";
import { ShortcutBox } from "../../../../styles";

function ShortcutItem({ module }) {
	return (
		<Link
			to={module.link}
			style={{ textDecoration: "none", width: "33%", height: "35%" }}
		>
			<ShortcutBox
				style={{
					backgroundImage: `url(${module.bg})`,
				}}
			>
				<h3
					style={{
						textAlign: "center",
						color: "#666",
					}}
				>
					{module.title}
				</h3>
			</ShortcutBox>
		</Link>
	);
}

export default ShortcutItem;
