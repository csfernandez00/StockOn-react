import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Col, Row } from "../../../../styles";
import { FiLayers } from "react-icons/fi";
import COLORS from "../../../../../../../common/theme/colors";

export default function CardUnits({ lastProds, productsData }) {
	const [recentUnits, setRecentUnits] = useState();
	const [totalUnits, setTotalUnits] = useState();
	const iconStyle = { flex: "1 1", fontSize: "4.5rem", color: "#ddd" };

	useEffect(() => {
		let acc = 0;
		lastProds?.forEach((product) => {
			acc += product.quantity;
		});
		setRecentUnits(acc);
		let accTotal = 0;
		productsData?.forEach((product) => {
			accTotal += product.quantity;
		});

		setTotalUnits(accTotal);
	}, [lastProds, productsData]);
	return (
		<Paper
			style={{ padding: ".5rem", height: "76%", borderRadius: ".6rem  " }}
			elevation={15}
		>
			<Col style={{ gap: "1rem" }}>
				<Row
					style={{
						alignItems: "center",
						justifyContent: "center",
						padding: "2rem 0",
					}}
				>
					<FiLayers style={iconStyle} />
					<Col style={{ flex: "1 1" }}>
						<span
							style={{
								fontSize: "2rem",
								lineHeight: "2rem",
								marginTop: ".6rem",
								color: `${COLORS.black}`,
							}}
						>
							+{recentUnits ? recentUnits : 0}
						</span>
						<p
							style={{
								margin: "0rem",
								marginTop: ".2rem",
								fontSize: ".9rem",
								backgroundImage: `linear-gradient(to right, ${COLORS.purple}, ${COLORS.pink})`,
								backgroundClip: "text",
								WebkitBackgroundClip: "text",
								color: "transparent",
							}}
						>
							Nuevas Unidades
						</p>
					</Col>
				</Row>
				<Row
					style={{
						alignItems: "center",
						justifyContent: "center",
						backgroundColor: "#eee",
						padding: "1rem 0",
						borderRadius: ".3rem  ",
					}}
				>
					<Col
						style={{
							flex: "1 1",
							justifyContent: "center",
							alignItems: "center",
							textAlign: "center",
						}}
					>
						<div>
							<span
								style={{
									fontSize: " 2rem",
									backgroundImage: `linear-gradient(to right, ${COLORS.purple}, ${COLORS.pink})`,
									backgroundClip: "text",
									WebkitBackgroundClip: "text",
									color: "transparent",
								}}
							>
								+{totalUnits ? totalUnits : 0}
							</span>
							<p style={{ margin: "0rem", color: `${COLORS.black}` }}>
								Unidades Totales
							</p>
						</div>
					</Col>
				</Row>
			</Col>
		</Paper>
	);
}
