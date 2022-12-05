import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

export default function BrandsChart() {
	const data = {
		labels: ["Red", "Blue", "Yellow"],
		datasets: [
			{
				label: "My First Dataset",
				data: [300, 50, 100],
				backgroundColor: [
					"rgb(255, 99, 132)",
					"rgb(54, 162, 235)",
					"rgb(255, 205, 86)",
				],
				hoverOffset: 4,
			},
		],
	};
	return (
		<div style={{ width: "50%" }}>
			<Doughnut data={data} />
		</div>
	);
}
