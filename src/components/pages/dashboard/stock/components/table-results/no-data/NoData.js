import { Button, Paper, Typography } from "@mui/material";
import React from "react";
import COLORS from "../../../../../../common/theme/colors";

function NoData({ setCreateVisible }) {
	return (
		<Paper
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				width: "96%",
				height: "70%",
				gap: "1rem",
				background: "#fafafa",
				position: "absolute",
			}}
		>
			<Typography
				variant="h4"
				component="h3"
				style={{
					color: "#555",
					fontWeight: "bold",
				}}
			>
				¡Todavia no tienes productos creados!
			</Typography>
			<Button
				variant="contained"
				style={{
					background: "#fff",
					padding: ".6rem 1rem",
					borderRadius: ".4rem",
				}}
				onClick={() => setCreateVisible(true)}
			>
				<Typography
					variant="button"
					style={{
						background: `linear-gradient(to right bottom, ${COLORS.purple}, ${COLORS.pink})`,
						backgroundClip: "text",
						WebkitBackgroundClip: "text",
						color: "transparent",
						fontWeight: "bold",
					}}
				>
					comenzar
				</Typography>
			</Button>
		</Paper>
	);
}

export default NoData;
