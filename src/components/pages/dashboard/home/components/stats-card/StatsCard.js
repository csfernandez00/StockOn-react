import React from "react";
import { Row, Title } from "../../styles";
import ActivityChart from "./activity-chart/ActivityChart";
import BrandsChart from "./brands-chart/BrandsChart";

export default function StatsCard({ productsData }) {
	return (
		<div style={{ padding: "1rem 3rem", height: "100%" }}>
			<Title style={{ marginBottom: ".5rem" }}>Estadisticas</Title>
			<Row style={{ width: "100%", height: "78%" }}>
				<BrandsChart productsData={productsData} />
				<ActivityChart productsData={productsData} />
			</Row>
		</div>
	);
}
