import { Box, Button, Typography } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import COLORS from "../../../../../common/theme/colors";

function CreatorCard() {
	return (
		<Box
			component="div"
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				gap: "1rem",
				width: "100%",
				height: "100%",
			}}
		>
			<FavoriteBorderIcon
				color="disabled"
				style={{ fontSize: "7rem", marginBottom: "0 rem" }}
			/>
			<Typography
				variant="h5"
				component="h3"
				style={{
					fontWeight: "bold",
					color: "#444",
					fontSize: "1.6rem",
				}}
			>
				Apoyar al creador
			</Typography>

			<Typography variant="p" align="center" style={{ padding: "0 .5rem" }}>
				Si te ha servido mi app, no dudes en hechar un vistazo a mi perfil, para
				darme la posibilidad de seguir creciendo!
			</Typography>
			<a
				href="https://www.linkedin.com/in/carlos-sebastian-fernandez-65056322b/"
				style={{
					width: "100%",
					marginTop: "1rem",
					textDecoration: "none",
				}}
				target="_blank"
				rel="noreferrer"
			>
				<Button
					variant="contained"
					style={{
						background: `linear-gradient(to right bottom, ${COLORS.purple}, ${COLORS.pink})`,
						fontWeight: "bold",
						fontFamily: "fredoka",
						width: "100%",
					}}
					endIcon={<LinkedInIcon style={{ transform: "translateY(-1px)" }} />}
				>
					LinkedIN
				</Button>
			</a>
		</Box>
	);
}

export default CreatorCard;
