import React from "react";
import { Button, Divider, Paper, TextField } from "@mui/material";
import COLORS from "../../../common/theme/colors";
import { Title } from "../../dashboard/home/styles";
import { Question } from "../styles";

export default function LogInCard({ setComponent }) {
	return (
		<Paper
			elevation={15}
			style={{
				position: "absolute",
				top: "25%",
				left: "37.5%",
				width: "25%",
				height: "50%",
				background: "#ffffff",
				zIndex: "1000",
			}}
		>
			<div
				style={{
					padding: "2rem 3rem",
					display: "flex",
					flexDirection: "column",
					gap: "1.8rem",
				}}
			>
				<Title
					style={{
						paddingLeft: "0",
						marginBottom: "0",
						marginTop: "1.5rem",
						fontSize: "1.8rem",
						textAlign: "center",
					}}
				>
					Iniciar Sesion
				</Title>
				<TextField required label="Email" />
				<TextField
					required
					label="Contraseña"
					helperText={
						<span
							style={{
								color: COLORS.purple,
								marginLeft: "-0.5rem",
								fontSize: ".9rem",
								fontWeight: "lighter",
								cursor: "pointer",
							}}
						>
							¿Olvidó su contraseña?
						</span>
					}
				/>

				<Button
					variant="contained"
					style={{
						backgroundColor: COLORS.purple,
						color: "#fff",
						padding: ".6rem",
					}}
				>
					Ingresar
				</Button>
				<Divider style={{ marginTop: "0rem" }} />
				<Question>
					¿No tienes cuenta todavia?
					<span
						style={{
							color: COLORS.purple,
							padding: ".6rem",
							fontSize: ".9rem",
							fontWeight: "lighter",
							cursor: "pointer",
						}}
						onClick={() => setComponent("REGISTER")}
					>
						Crear una
					</span>
				</Question>
			</div>
		</Paper>
	);
}
