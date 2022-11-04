import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@mui/material";
import React from "react";

function ConfirmDialog({ confirmOpen, handleConfirmClose, title, message }) {
	return (
		<Dialog
			open={confirmOpen}
			onClose={handleConfirmClose}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description"
		>
			<DialogTitle id="alert-dialog-title" style={{ fontWeight: "bold" }}>
				{title}
			</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-description">
					{message}
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button
					style={{ color: "#444", fontFamily: "Fredoka" }}
					onClick={() => handleConfirmClose(false)}
				>
					Cancelar
				</Button>
				<Button
					color="error"
					variant="contained"
					onClick={() => handleConfirmClose(true)}
					style={{ fontFamily: "Fredoka" }}
					autoFocus
				>
					Aceptar
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default ConfirmDialog;
