import React from "react";
import { Grid } from "@mui/material";
import { GridContainer, Title } from "../../styles";

import CardProds from "./components/cards/CardProds";
import CardUnits from "./components/cards/CardUnits";
import TableLastProds from "./components/TableLastProds";

function RecentActivity({ lastProds, productsData }) {
	return (
		<div style={{ padding: "1rem 3rem", height: "100%" }}>
			<Title>Actividad Reciente</Title>
			<GridContainer>
				<Grid container spacing={4} height="100%">
					<Grid item xs={3}>
						<CardProds productsData={productsData} />
					</Grid>
					<Grid item xs={3}>
						<CardUnits lastProds={lastProds} productsData={productsData} />
					</Grid>
					<Grid item xs={6}>
						<TableLastProds lastProds={lastProds} />
					</Grid>
				</Grid>
			</GridContainer>
		</div>
	);
}

export default RecentActivity;
