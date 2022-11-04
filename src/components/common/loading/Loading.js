import { Box, CircularProgress } from "@mui/material";
import React from "react";
import TimelineIcon from "@mui/icons-material/Timeline";
import COLORS from "../theme/colors";
import { H2, Logo, Span } from "../header/styles";

function Loading() {
	return (
		<Box
			style={{
				width: "100vw",
				height: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				gap: "2rem",
			}}
		>
			<CircularProgress
				style={{
					position: "absolute",
					color: COLORS.purple,
					scale: "1.5",
				}}
			/>
			<Logo style={{ marginRight: "3rem", marginTop: "8rem" }}>
				<H2
					style={{
						fontSize: "1.8rem",
					}}
				>
					<Span>
						<TimelineIcon
							style={{
								fontSize: "1.8rem",
								transform: "translateY(5px)",
								fontWeight: "bold",
							}}
						/>
						Stock
					</Span>
					On
				</H2>
			</Logo>
		</Box>
	);
}

export default Loading;
