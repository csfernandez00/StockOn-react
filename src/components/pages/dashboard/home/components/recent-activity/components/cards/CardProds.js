import { Paper } from "@mui/material";
import React from "react";
import { Col, Row } from "../../../../styles";
import { HiOutlineInboxArrowDown } from "react-icons/hi2";
import COLORS from "../../../../../../../common/theme/colors";

export default function CardProds({ productsData }) {
	const iconStyle = { flex: "1 1", fontSize: "4.5rem", color: "#ddd" };

	return (
		<Paper
			style={{ padding: ".5rem", height: "76%", borderRadius: ".6rem" }}
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
					<HiOutlineInboxArrowDown style={iconStyle} />
					<Col style={{ flex: "1 1" }}>
						<span
							style={{
								fontSize: "2rem",
								lineHeight: "2rem",
								marginTop: ".6rem",
								color: `${COLORS.black}`,
							}}
						>
							+5
						</span>
						<p
							style={{
								margin: "0rem",
								marginTop: ".2rem",
								fontSize: ".9 rem",
								backgroundImage: `linear-gradient(to right, ${COLORS.purple}, ${COLORS.pink})`,
								backgroundClip: "text",
								WebkitBackgroundClip: "text",
								color: "transparent",
							}}
						>
							Recien Agregados
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
								{productsData?.length}
							</span>
							<p style={{ margin: "0rem", color: `${COLORS.black}` }}>
								Productos Totales
							</p>
						</div>
					</Col>
				</Row>
			</Col>
		</Paper>
	);
}
