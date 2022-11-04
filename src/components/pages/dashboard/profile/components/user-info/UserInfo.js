import { Avatar, Typography } from "@mui/material";
import React from "react";
import { Border, Container, Card } from "./styles";

function UserInfo({ userLogged }) {
	return (
		<Container>
			<Border>
				<Card>
					<Avatar sx={{ width: 100, height: 100 }}>
						<Typography variant="h2" component="h3">
							{userLogged.name[0]}
						</Typography>
					</Avatar>
					<Typography variant="h4" component="h3">
						{`${userLogged.name} ${userLogged.lastName}`}
					</Typography>
					<Typography variant="h5" component="h3">
						{`${userLogged.corp}, ${userLogged.country}`}
					</Typography>
				</Card>
			</Border>
		</Container>
	);
}

export default UserInfo;
