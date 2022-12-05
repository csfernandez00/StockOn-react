import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import React from "react";

import DataRow from "./row/DataRow";
import NoData from "./no-data/NoData";

function TableResult({
	data,
	setData,
	productSelected,
	setProductSelected,
	setEditVisible,
	setCreateVisible,
	searchValue,
}) {
	const columns = ["Código", "Producto", "Modelo", "Marca", "Cantidad"];

	const pickStyle = (title) => {
		switch (title) {
			case "Producto":
				return {
					width: "20%",
					padding: "1rem 1rem ",
					backgroundColor: "#f7f7f7",
					fontWeight: "bold",
				};
			case "Código":
				return {
					width: "4%",
					padding: "1rem 1rem ",
					backgroundColor: "#f7f7f7",
					fontWeight: "bold",
				};
			default:
				return {
					width: "5%",
					padding: "1rem 1rem ",
					backgroundColor: "#f7f7f7",
					fontWeight: "bold",
				};
		}
	};

	return (
		<TableContainer style={{ border: "1px solid #eee" }}>
			<Table stickyHeader sx={{ minWidth: 650 }}>
				<TableHead>
					<TableRow>
						{columns.map((columnTitle, index) => {
							return (
								<TableCell key={index} style={pickStyle(columnTitle)}>
									{columnTitle}
								</TableCell>
							);
						})}
					</TableRow>
				</TableHead>
				<TableBody>
					{data.length > 0 ? (
						searchValue ? (
							data
								.filter((product) => {
									return (
										product.code.toLowerCase().includes(searchValue.trim()) ||
										product.name.toLowerCase().includes(searchValue.trim()) ||
										product.model.toLowerCase().includes(searchValue.trim()) ||
										product.brand.toLowerCase().includes(searchValue.trim()) ||
										product.quantity.toString().includes(searchValue.trim())
									);
								})
								.map((product) => (
									<DataRow
										key={product.id}
										product={product}
										productSelected={productSelected}
										setProductSelected={setProductSelected}
										setEditVisible={setEditVisible}
									/>
								))
						) : (
							data.map((product) => (
								<DataRow
									key={product.id}
									product={product}
									productSelected={productSelected}
									setProductSelected={setProductSelected}
									setEditVisible={setEditVisible}
								/>
							))
						)
					) : (
						<NoData setCreateVisible={setCreateVisible} />
					)}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default TableResult;
