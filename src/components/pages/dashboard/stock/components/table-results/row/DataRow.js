import { TableCell, TableRow } from "@mui/material";
import React from "react";
import COLORS from "../../../../../../common/theme/colors";

function DataRow({
	product,
	productSelected,
	setProductSelected,
	setEditVisible,
}) {
	const selectedStyle = {
		padding: "1rem 1rem",
		color: COLORS.purple,
		borderLeft: "1px solid #eee",
		fontWeight: "bold",
	};

	const unselectedStyle = {
		padding: "1rem 1rem ",
		borderLeft: "1px solid #eee",
		fontWeight: "bold",
		color: " #666",
	};
	return (
		<TableRow
			key={product.id}
			sx={{
				"&:last-child td, &:last-child th": {
					borderBottom: "1px solid #eee",
				},
			}}
			style={
				productSelected === product
					? { backgroundColor: "#f2f2ff" }
					: { backgroundColor: "#fff" }
			}
			onClick={() => setProductSelected(product)}
			onDoubleClick={() => {
				setEditVisible(true);
			}}
		>
			<TableCell
				align="left"
				style={product === productSelected ? selectedStyle : unselectedStyle}
			>
				{product.code}
			</TableCell>
			<TableCell
				style={product === productSelected ? selectedStyle : unselectedStyle}
				component="th"
				scope="row"
			>
				{product.name}
			</TableCell>
			<TableCell
				style={product === productSelected ? selectedStyle : unselectedStyle}
				align="left"
			>
				{product.model}
			</TableCell>
			<TableCell
				style={product === productSelected ? selectedStyle : unselectedStyle}
				align="left"
			>
				{product.brand}
			</TableCell>
			<TableCell
				style={product === productSelected ? selectedStyle : unselectedStyle}
				align="left"
			>
				{product.quantity}
			</TableCell>
		</TableRow>
	);
}

export default DataRow;
