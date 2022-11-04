import { Alert, Snackbar } from "@mui/material";
import React from "react";

function SuccesToast({ mensaje, successToast, handleCloseToast }) {
	return (
		<Snackbar
			open={successToast}
			autoHideDuration={6000}
			onClose={handleCloseToast}
			anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
		>
			<Alert
				onClose={handleCloseToast}
				severity="success"
				sx={{ width: "100%" }}
				variant="filled"
			>
				{mensaje}
			</Alert>
		</Snackbar>
	);
}

export default SuccesToast;
