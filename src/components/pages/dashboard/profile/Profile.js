import { Box, Grid, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import CreatorCard from "./components/creator-info/CreatorCard";
import DeleteAccountCard from "./components/delete-account/DeleteAccountCard";
import FailToast from "../stock/components/toasts/FailToast";
import SuccesToast from "../stock/components/toasts/SuccesToast";
import ChangePass from "./components/change-pass/ChangePass";
import UpdateData from "./components/update-data/UpdateData";
import UserInfo from "./components/user-info/UserInfo";

function Profile({
	setSectionActive,
	userLogged,
	updateUserInfo,
	setUserLogged,
}) {
	const [successToast, setSuccessToast] = useState(false);
	const [failToast, setFailToast] = useState(false);
	const [message, setMessage] = useState("");

	useEffect(() => {
		setSectionActive("profile");
	}, []);

	const handleCloseToast = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setSuccessToast(false);
		setFailToast(false);
	};

	const paperStyle = {
		height: "100%",
	};

	const cardStyle = {
		padding: "2rem",
		height: "88%",
		background: "#fff",
		borderRadius: ".3rem",
		boxShadow: "0 3px 5px #55555580",
	};

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				gap: "1rem",
				height: "100%",
			}}
		>
			{successToast ? (
				<SuccesToast
					mensaje={message ? message : "Datos Actualizados Exitosamente!"}
					successToast={successToast}
					handleCloseToast={handleCloseToast}
				/>
			) : null}
			{failToast ? (
				<FailToast
					mensaje={
						message ? message : "Error! No se pudo completar el proceso."
					}
					failToast={failToast}
					handleCloseToast={handleCloseToast}
				/>
			) : null}
			<Paper
				style={{
					flex: "1 1",
					display: " flex",
					flexDirection: "column",
					padding: "2rem 3rem",
					gap: "1rem",
				}}
				elevation={4}
			>
				<UserInfo userLogged={userLogged} />
				<UpdateData
					userLogged={userLogged}
					setSuccessToast={setSuccessToast}
					setFailToast={setFailToast}
					updateUserInfo={updateUserInfo}
				/>
			</Paper>
			<Grid
				container
				spacing={2}
				style={{
					flex: "1 1",
					display: "flex",
					flexDirection: "column",
					flexWrap: "nowrap",
					height: "100%",
					gap: "1rem",
				}}
			>
				<Grid item xs={12} style={{ flex: "1 1" }}>
					<Paper
						style={{
							display: " flex",
							height: "100%",
							padding: "0rem 3rem",
							gap: "1rem",
						}}
						elevation={4}
					>
						<ChangePass
							userLogged={userLogged}
							setSuccessToast={setSuccessToast}
							setFailToast={setFailToast}
							setMessage={setMessage}
							updateUserInfo={updateUserInfo}
						/>
					</Paper>
				</Grid>

				<Box
					component="div"
					style={{
						flex: "1 1",
						display: "flex",
						flexDirection: "row",
						flexWrap: "nowrap",
						gap: "1rem",
						padding: " 0 1rem",
						width: "98%",
					}}
				>
					<Grid item xs={6}>
						<Paper style={paperStyle} elevation={4}>
							<div style={cardStyle}>
								<CreatorCard />
							</div>
						</Paper>
					</Grid>
					<Grid item xs={6}>
						<Paper style={paperStyle} elevation={4}>
							<div style={cardStyle}>
								<DeleteAccountCard
									userLogged={userLogged}
									setUserLogged={setUserLogged}
								/>
							</div>
						</Paper>
					</Grid>
				</Box>
			</Grid>
		</div>
	);
}

export default Profile;
