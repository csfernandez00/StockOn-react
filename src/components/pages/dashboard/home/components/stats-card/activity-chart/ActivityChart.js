import React from "react";
import { Bar } from "react-chartjs-2";
import COLORS from "../../../../../../common/theme/colors";

export default function ActivityChart() {
	const data = {
		labels: ["Red", "Blue", "Yellow"],
		datasets: [
			{
				label: "My First Dataset",
				data: [14, 8, 10],
				backgroundColor: [COLORS.purple, COLORS.pink, COLORS.yellow],
				hoverOffset: 4,
			},
		],
	};
	return <Bar data={data} width={150} />;
}
