import React from "react";
import { Row, Title } from "../../styles";
import ActivityChart from "./activity-chart/ActivityChart";
import BrandsChart from "./brands-chart/BrandsChart";

export default function StatsCard() {
	return (
		<div style={{ padding: "1rem 3rem", height: "100%" }}>
			<Title>Estadisticas</Title>
			<Row style={{ width: "100%", height: "75%" }}>
				<BrandsChart />
				<ActivityChart />
			</Row>
		</div>
	);
}
