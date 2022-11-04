import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
	Box,
	Button,
	Divider,
	IconButton,
	Paper,
	TextField,
	Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Border } from "../user-info/styles";
import { updateUser } from "../../../../../common/axios-service/AxiosService";

const initialForm = {
	oldPassword: "",
	newPassword: "",
	confirmPass: "",
};

function ChangePass({
	userLogged,
	setSuccessToast,
	setFailToast,
	setMessage,
	updateUserInfo,
}) {
	const [form, setForm] = useState(initialForm);
	const [showPassword, setShowPassword] = useState(false);
	const [isAvailable, setIsAvailable] = useState(false);
	const [wrongPass, setWrongPass] = useState(false);
	const [correctPass, setCorrectPass] = useState(false);
	const [noMatching, setNoMatching] = useState(false);

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.id]: e.target.value,
		});
	};

	const handleShowPass = () => {
		setShowPassword(!showPassword);
	};

	const handleSubmit = async () => {
		const userUpdated = userLogged;
		if (userLogged.password === form.oldPassword) {
			setIsAvailable(true);
			setWrongPass(false);
			setCorrectPass(true);
		} else {
			setMessage("Contraseña Incorrecta!");
			setWrongPass(true);
			setFailToast(true);
			setCorrectPass(false);
		}

		if (form.confirmPass && form.newPassword && !noMatching) {
			userUpdated.password = form.newPassword;
			await updateUser(userUpdated);
			setForm(initialForm);
			setIsAvailable(false);
			setWrongPass(false);
			setCorrectPass(false);
			setMessage("Contraseña actualizada con exito!");
			setSuccessToast(true);
			updateUserInfo();
		}
	};

	const handleCancel = () => {
		setForm(initialForm);
		setIsAvailable(false);
		setWrongPass(false);
		setCorrectPass(false);
	};

	useEffect(() => {
		if (
			form.newPassword !== form.confirmPass &&
			form.confirmPass &&
			form.newPassword
		) {
			setNoMatching(true);
		} else {
			setNoMatching(false);
		}
	}, [form]);

	return (
		<Box
			component="div"
			style={{
				display: "flex",
				flexDirection: "column",
				height: "100%",
				flex: "1 1",
				width: "100%",
				justifyContent: "center",
			}}
		>
			<Typography
				variant="h5"
				component="h3"
				style={{
					fontWeight: "bold",
					color: "#444",
					fontSize: "1.6rem",
					transform: "translateY(16px)",
					paddingTop: "1.6rem",
					paddingBottom: "1.7rem",
				}}
			>
				Modificar Contraseña
			</Typography>
			<Divider />

			<Box
				component="div"
				style={{
					display: "flex",
					flexDirection: "row",
					gap: "0rem",
					justifyContent: "center",
					alignItems: "center",
					height: "100%",
					width: "100%",
				}}
			>
				<Box
					component="form"
					onSubmit={handleSubmit}
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "1.5rem",
						height: "100%",
						flex: "1 1",
						justifyContent: "flex-start",
						alignItems: "center",
						width: "100%",
						paddingTop: "3rem",
					}}
				>
					<TextField
						id="oldPassword"
						variant={correctPass ? "filled" : "outlined"}
						value={form.oldPassword}
						label="Contraseña Actual"
						error={wrongPass}
						onChange={handleChange}
						disabled={correctPass}
						style={{ width: "100%" }}
						type={showPassword ? "text" : "password"}
					/>
					<TextField
						id="newPassword"
						variant={!isAvailable ? "filled" : "outlined"}
						value={form.newPassword}
						label="Nueva Contraseña"
						onChange={handleChange}
						style={{ width: "100%" }}
						type={showPassword ? "text" : "password"}
						disabled={!isAvailable}
						error={noMatching}
					/>
					<TextField
						id="confirmPass"
						variant={!isAvailable ? "filled" : "outlined"}
						value={form.confirmPass}
						label="Confirmar Contraseña"
						onChange={handleChange}
						style={{ width: "100%" }}
						type={showPassword ? "text" : "password"}
						disabled={!isAvailable}
						error={noMatching}
					/>

					<Box
						style={{
							display: "flex",
							flexDirection: "row",
							alignSelf: "start",
						}}
					>
						<Button
							variant="outlined"
							style={{ fontFamily: "fredoka" }}
							onClick={handleSubmit}
							disabled={noMatching}
						>
							Guardar
						</Button>
						<Button style={{ fontFamily: "fredoka" }} onClick={handleCancel}>
							cancelar
						</Button>
						{noMatching ? (
							<Typography
								style={{
									color: "#D32F2F",
									transform: "translateY(6px)",
									paddingLeft: "1rem",
								}}
							>
								Las contraseñas deben coincidir
							</Typography>
						) : null}
					</Box>
				</Box>
				<Box
					component="div"
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "start",
						alignItems: "center",
						flex: "0.5 1",
						height: "100%",
						paddingTop: "5rem",
					}}
				>
					<Border
						style={{
							width: "150px",
							height: "150px",
							marginTop: " 2rem",
							borderRadius: "50%",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							boxShadow: "0 0 10px #777",
						}}
					>
						<Paper
							style={{
								backgroundColor: "#fff",
								width: "93%",
								height: "93%",
								borderRadius: "50%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<IconButton
								size="large"
								style={{ padding: "3rem" }}
								onClick={handleShowPass}
							>
								{showPassword ? (
									<Visibility
										style={{
											fontSize: "3rem",
										}}
									/>
								) : (
									<VisibilityOff
										style={{
											fontSize: "3rem",
										}}
									/>
								)}
							</IconButton>
						</Paper>
					</Border>
				</Box>
			</Box>
		</Box>
	);
}

export default ChangePass;
