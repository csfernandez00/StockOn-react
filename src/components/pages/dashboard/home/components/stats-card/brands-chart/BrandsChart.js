import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import COLORS from "../../../../../../common/theme/colors";

export default function BrandsChart({ productsData }) {
	const [brands, setBrands] = useState([]);
	const [quantity, setQuantity] = useState([]);

	useEffect(() => {
		const productsFiltered = productsData?.reduce((acc, value) => {
			const doesExist = acc?.find((elemento) => elemento.brand === value.brand);
			if (doesExist) {
				return acc.map((elemento) => {
					if (elemento.brand === value.brand) {
						return {
							...elemento,
							quantity: elemento.quantity + value.quantity,
						};
					}
					return elemento;
				});
			}
			return [...acc, value];
		}, []);
		let arr = [];
		let arr2 = [];
		productsFiltered?.forEach((product) => {
			arr.push(product.quantity);
			arr2.push(product.brand);
		});
		setBrands(arr2);
		setQuantity(arr);
	}, [productsData]);

	const options = {
		plugins: {
			legend: {
				align: "top",
			},
		},
	};

	const data = {
		labels: brands,
		datasets: [
			{
				data: quantity,
				backgroundColor: [COLORS.purple, COLORS.pink, COLORS.yellow],
				hoverOffset: 4,
			},
		],
	};

	return (
		<div style={{ width: "50%" }}>
			<Doughnut data={data} options={options} />
		</div>
	);
}
