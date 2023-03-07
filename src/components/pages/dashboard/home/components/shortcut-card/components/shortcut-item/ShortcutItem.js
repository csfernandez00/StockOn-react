import React from "react";
import { ShortcutBox } from "../../../../styles";

function ShortcutItem({ module }) {
	return (
		<ShortcutBox
			style={{
				backgroundImage: `url(${module.bg})`,
			}}
		>
			<h3
				style={{
					textAlign: "center",
					color: "#555",
				}}
			>
				{module.title}
			</h3>
		</ShortcutBox>
	);
}

export default ShortcutItem;
