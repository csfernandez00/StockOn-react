import React from "react";
import { Row, Title } from "../../styles";
import ShortcutItem from "./components/shortcut-item/ShortcutItem";

export default function ShortcutCard({ productsData }) {
	const modules = [
		{
			id: 1,
			title: "Stock",
			bg: "https://static.vecteezy.com/system/resources/thumbnails/002/276/716/small/abstract-geometric-background-in-flat-design-free-vector.jpg",
			link: "/dashboard/stock",
		},
		{
			id: 2,
			title: "Facturación",
			bg: "https://static.vecteezy.com/system/resources/thumbnails/002/380/063/small/abstract-geometric-flat-design-background-free-vector.jpg",
			link: "/dashboard/billing",
		},
		{
			id: 3,
			title: "Clientes",
			bg: "https://freevector-images.s3.amazonaws.com/uploads/vector/preview/40545/Geometric_Bg_generated.jpg",
			link: "/dashboard/clients",
		},
	];
	return (
		<div style={{ padding: "1rem 3rem", height: "100%" }}>
			<Title style={{ marginBottom: ".5rem" }}>Accesos Directos</Title>
			<Row style={{ width: "100%", height: "78%", gap: "1rem" }}>
				{modules.map((module) => {
					return <ShortcutItem key={module.id} module={module} />;
				})}
			</Row>
		</div>
	);
}
