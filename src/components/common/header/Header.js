import React, { useState } from "react";
import { H2, HeaderCont, Logo, Span } from "./styles";
import TimelineIcon from "@mui/icons-material/Timeline";
import { Avatar, Divider, Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

function Header({ userLogged }) {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<HeaderCont>
			<Logo>
				<H2>
					<Span>
						<TimelineIcon
							style={{
								fontSize: "1.8rem",
								transform: "translateY(5px)",
								fontWeight: "bold",
							}}
						/>
						Stock
					</Span>
					On
				</H2>
			</Logo>
			<div
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
					gap: "1rem",
					marginRight: "2rem",
					cursor: "pointer",
				}}
			>
				<span>Hola, {userLogged.name}!</span>
				<Avatar style={{ backgroundColor: "#9961F5" }}>
					{userLogged.name[0]}
				</Avatar>
			</div>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}
			>
				<Link
					to="/dashboard/home"
					style={{ textDecoration: "none", color: "#444" }}
				>
					<MenuItem onClick={handleClose}>Inicio</MenuItem>
				</Link>

				<Link
					to="/dashboard/stock"
					style={{ textDecoration: "none", color: "#444" }}
				>
					<MenuItem onClick={handleClose}>Stock</MenuItem>
				</Link>

				<Link
					to="/dashboard/profile"
					style={{ textDecoration: "none", color: "#444" }}
				>
					<MenuItem onClick={handleClose}>Mi perfil</MenuItem>
				</Link>

				<Divider />
				<MenuItem onClick={handleClose}>Cerrar Sesion</MenuItem>
			</Menu>
		</HeaderCont>
	);
}

export default Header;
