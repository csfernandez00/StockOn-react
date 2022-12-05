import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import React from "react";

export default function TableLastProds({ lastProds }) {
	const columns = ["Código", "Producto", "Modelo", "Marca", "Cantidad"];
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				height: "80%",
			}}
		>
			<Paper
				elevation={15}
				style={{
					borderRadius: ".8rem",
				}}
			>
				<TableContainer
					style={{
						border: "1px solid #eee",
						overflow: "hidden",
						borderRadius: ".8rem",
					}}
				>
					<Table stickyHeader sx={{ minWidth: 0 }}>
						<TableHead>
							<TableRow style={{ width: "100%" }}>
								{columns.map((columnTitle, index) => {
									return (
										<TableCell style={{ backgroundColor: "#eee" }} key={index}>
											{columnTitle}
										</TableCell>
									);
								})}
							</TableRow>
						</TableHead>
						<TableBody>
							{lastProds?.length > 0 ? (
								lastProds.map((product) => {
									return (
										<TableRow
											key={product.id}
											sx={{
												"&:last-child td, &:last-child th": {
													borderBottom: "1px solid #eee",
												},
											}}
										>
											<TableCell
												style={{ width: "15%", borderLeft: "1px solid #eee" }}
												align="left"
											>
												{product.code}
											</TableCell>
											<TableCell
												style={{ width: "15%", borderLeft: "1px solid #eee" }}
												component="th"
												scope="row"
											>
												{product.name}
											</TableCell>
											<TableCell
												style={{ width: "15%", borderLeft: "1px solid #eee" }}
												align="left"
											>
												{product.model}
											</TableCell>
											<TableCell
												style={{ width: "15%", borderLeft: "1px solid #eee" }}
												align="left"
											>
												{product.brand}
											</TableCell>
											<TableCell
												style={{ width: "15%", borderLeft: "1px solid #eee" }}
												align="left"
											>
												{product.quantity}
											</TableCell>
										</TableRow>
									);
								})
							) : (
								<TableRow
									sx={{
										"&:last-child td, &:last-child th": {
											borderBottom: "1px solid #eee",
										},
									}}
								>
									<TableCell
										style={{ width: "15%", borderLeft: "1px solid #eee" }}
										align="left"
									>
										-
									</TableCell>
									<TableCell
										style={{ width: "15%", borderLeft: "1px solid #eee" }}
										component="th"
										scope="row"
									>
										-
									</TableCell>
									<TableCell
										style={{ width: "15%", borderLeft: "1px solid #eee" }}
										align="left"
									>
										-
									</TableCell>
									<TableCell
										style={{ width: "15%", borderLeft: "1px solid #eee" }}
										align="left"
									>
										-
									</TableCell>
									<TableCell
										style={{ width: "15%", borderLeft: "1px solid #eee" }}
										align="left"
									>
										-
									</TableCell>
								</TableRow>
							)}
						</TableBody>
					</Table>
				</TableContainer>
			</Paper>
			{lastProds?.length > 0 ? (
				<Typography style={{ color: "#aaa", textAlign: "center" }}>
					Ultimos añadidos
				</Typography>
			) : (
				<Typography style={{ color: "#aaa", textAlign: "center" }}>
					Aun no existen productos creados
				</Typography>
			)}
		</div>
	);
}
