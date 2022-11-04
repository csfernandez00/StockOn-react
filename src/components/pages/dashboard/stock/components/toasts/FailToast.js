import { Alert, Snackbar } from "@mui/material";
import React from "react";

function FailToast({ mensaje, failToast, handleCloseToast }) {
	return (
		<Snackbar
			open={failToast}
			autoHideDuration={6000}
			onClose={handleCloseToast}
			anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
		>
			<Alert
				onClose={handleCloseToast}
				severity="error"
				sx={{ width: "100%" }}
				variant="filled"
			>
				{mensaje}
			</Alert>
		</Snackbar>
	);
}

export default FailToast;
