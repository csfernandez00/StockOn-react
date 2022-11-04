import { DeleteForever } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import React, { useState } from "react";
import ConfirmDialog from "../../../stock/components/toasts/ConfirmDialog";
import { deleteUser } from "../../../../../common/axios-service/AxiosService";

function DeleteAccountCard({ userLogged, setUserLogged }) {
	const [deleteAccount, setDeleteAccount] = useState(false);

	const handleDeleteAccount = async () => {
		await deleteUser(userLogged)
			.then(() => {
				setUserLogged(null);
			})
			.catch(() => {
				alert("no se pudo!");
			});
	};
	const handleConfirmClose = async (res) => {
		if (res) {
			await handleDeleteAccount();
			setDeleteAccount(false);
		} else {
			setDeleteAccount(false);
		}
	};

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
			<ErrorOutlineIcon
				color="error"
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
				Eliminar cuenta
			</Typography>

			<Typography variant="p" align="center" style={{ padding: "0 .5rem" }}>
				Si decides eliminar tu cuenta, debes saber que esto tendrá efectos
				permanentes y no podrás recuperarla.
			</Typography>
			<Button
				variant="contained"
				color="error"
				onClick={() => setDeleteAccount(true)}
				style={{
					fontWeight: "bold",
					fontFamily: "fredoka",
					width: "100%",
					marginTop: "1rem",
				}}
				endIcon={<DeleteForever style={{ transform: "translateY(-1px)" }} />}
			>
				Eliminar cuenta
			</Button>
			{deleteAccount ? (
				<ConfirmDialog
					confirmOpen={deleteAccount}
					handleConfirmClose={handleConfirmClose}
					title={"Cuidado, estas por eliminar tu cuenta!"}
					message={
						"Esta accion eliminara tu cuenta y tus datos para siempre, desea continuar?"
					}
				/>
			) : null}
		</Box>
	);
}

export default DeleteAccountCard;
