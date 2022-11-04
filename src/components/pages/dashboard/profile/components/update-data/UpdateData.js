import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { updateUser } from "../../../../../common/axios-service/AxiosService";

function UpdateData({
	userLogged,
	setSuccessToast,
	setFailToast,
	updateUserInfo,
}) {
	const { id, name, lastName, corp, mail, products } = userLogged;
	const initialForm = {
		name: name,
		lastName: lastName,
		mail: mail,
		corp: corp,
	};
	const [form, setForm] = useState(initialForm);
	const [isDisabled, setIsDisabled] = useState(true);
	const [cancelDisabled, setCancelDisabled] = useState(true);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.id]: e.target.value });
		setCancelDisabled(false);
	};

	const updateInfo = async () => {
		const userUpdated = form;
		userUpdated.id = id;
		userUpdated.products = products;
		await updateUser(userUpdated)
			.then((res) => {
				setSuccessToast(true);
				setIsDisabled(true);
			})
			.catch((err) => {
				setFailToast(true);
			});
		updateUserInfo();
	};

	const handleCancel = () => {
		setForm(initialForm);
		setIsDisabled(true);
		setCancelDisabled(true);
	};

	useEffect(() => {
		if (
			form !== initialForm &&
			form.name &&
			form.lastName &&
			form.corp &&
			form.mail
		) {
			setIsDisabled(false);
		} else {
			setIsDisabled(true);
		}
	}, [form]);

	return (
		<Box
			component="div"
			style={{
				flex: "1 1",
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				gap: "2rem",
			}}
			noValidate
			autoComplete="off"
		>
			<Box
				style={{
					display: "flex",
					flexDirection: "row",
					width: "100%",
					justifyContent: "left",
					gap: ".5rem",
					alignItems: "center",
				}}
			>
				<Typography
					variant="h5"
					component="h3"
					style={{
						fontWeight: "bold",
						color: "#444",
						fontSize: "1.6rem",
						transform: "translateY(12px)",
					}}
				>
					Modificar Mis Datos
				</Typography>

				<EditIcon color="primary" style={{ transform: "translateY(12px)" }} />

				{isDisabled &&
				(!form.name || !form.corp || !form.lastName || !form.mail) ? (
					<Typography
						variant="h3"
						style={{
							transform: "translateY(12px)",
							color: "#D32F2F",
							fontWeight: "bold",
							fontSize: "1rem",
						}}
					>
						Todos los campos son obligatorios.
					</Typography>
				) : null}
			</Box>

			<Box
				component="div"
				style={{
					display: "flex",
					flexDirection: "row",
					width: "100%",
					justifyContent: "center",
					gap: "1rem",
				}}
			>
				<TextField
					style={{ flex: "1 1" }}
					id="name"
					label="Nombre"
					variant="outlined"
					name="name"
					value={form.name}
					error={!form.name}
					required
					onChange={handleChange}
				/>
				<TextField
					style={{ flex: "1 1" }}
					id="lastName"
					label="Apellido"
					variant="outlined"
					value={form.lastName}
					error={!form.lastName}
					required
					onChange={handleChange}
				/>
			</Box>
			<TextField
				id="corp"
				label="Empresa"
				required
				value={form.corp}
				error={!form.corp}
				onChange={handleChange}
				variant="outlined"
			/>
			<TextField
				id="mail"
				label="Email"
				value={form.mail}
				required
				error={!form.mail}
				onChange={handleChange}
				variant="outlined"
			/>

			<Box
				component="div"
				style={{
					display: "flex",
					flexDirection: "row",
					width: "100%",
					justifyContent: "flex-start",
					gap: "1rem",
				}}
			>
				<Button
					variant="contained"
					style={{ flex: "1 1", padding: ".8rem ", fontFamily: "fredoka" }}
					onClick={updateInfo}
					disabled={isDisabled}
				>
					Guardar cambios
				</Button>
				<Button
					variant="outlined"
					style={{ flex: "1 1", padding: ".8rem ", fontFamily: "fredoka" }}
					onClick={handleCancel}
					disabled={cancelDisabled}
				>
					cancelar
				</Button>
			</Box>
		</Box>
	);
}

export default UpdateData;
