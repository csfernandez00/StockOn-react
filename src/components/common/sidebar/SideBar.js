import React from "react";
import { ButtonCont, Buttons, Nav, SideNav } from "./styles";
import HomeIcon from "@mui/icons-material/Home";
import InventoryIcon from "@mui/icons-material/Inventory";
import PersonIcon from "@mui/icons-material/Person";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

function SideBar({ sectionActive }) {
	return sectionActive ? (
		<SideNav>
			<Nav>
				<Buttons>
					<ButtonCont>
						<Link to="/dashboard/home">
							<IconButton
								title="Inicio"
								size="large"
								style={
									sectionActive === "home"
										? {
												color: "#9961F5",
												backgroundColor: "#ffffff",
										  }
										: { color: "#fff", backgroundColor: "#ffffff20" }
								}
							>
								<HomeIcon style={{ fontSize: "1.8rem" }} />
							</IconButton>
						</Link>
					</ButtonCont>
					<ButtonCont>
						<Link to="/dashboard/stock">
							<IconButton
								title="Stock"
								size="large"
								style={
									sectionActive === "stock"
										? {
												color: "#9961F5",
												backgroundColor: "#ffffff",
										  }
										: { color: "#fff", backgroundColor: "#ffffff20" }
								}
							>
								<InventoryIcon style={{ fontSize: "1.8rem" }} />
							</IconButton>
						</Link>
					</ButtonCont>

					<ButtonCont>
						<IconButton
							title="Ayuda"
							size="large"
							style={{
								color: "#fff",
								backgroundColor: "#ffffff20",
							}}
						>
							<HelpOutlineIcon style={{ fontSize: "1.8rem" }} />
						</IconButton>
					</ButtonCont>
				</Buttons>
				<Buttons>
					<ButtonCont>
						<Link to="/dashboard/profile">
							<IconButton
								title="Perfil"
								size="large"
								style={
									sectionActive === "profile"
										? {
												color: "#9961F5",
												backgroundColor: "#ffffff",
										  }
										: { color: "#fff", backgroundColor: "#ffffff20" }
								}
							>
								<PersonIcon style={{ fontSize: "1.8rem" }} />
							</IconButton>
						</Link>
					</ButtonCont>
				</Buttons>
			</Nav>
		</SideNav>
	) : null;
}

export default SideBar;
