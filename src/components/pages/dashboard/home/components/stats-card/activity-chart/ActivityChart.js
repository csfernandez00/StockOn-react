import React from "react";
import { Bar } from "react-chartjs-2";

export default function ActivityChart() {
	const data = {
		labels: ["Red", "Blue", "Yellow"],
		datasets: [
			{
				label: "My First Dataset",
				data: [14, 8, 10],
				backgroundColor: [
					"rgb(255, 99, 132)",
					"rgb(54, 162, 235)",
					"rgb(255, 205, 86)",
				],
				hoverOffset: 4,
			},
		],
	};
	return <Bar data={data} width={150} />;
}
