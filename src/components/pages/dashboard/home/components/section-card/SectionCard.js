import React, { useEffect, useState } from "react";
import { Col } from "../../styles";
import { BsFillPersonFill } from "react-icons/bs";
import { RiFileSearchFill } from "react-icons/ri";
import { IoHelpCircle } from "react-icons/io5";
import { Button, Typography } from "@mui/material";
import { AiOutlineArrowRight } from "react-icons/ai";
import COLORS from "../../../../../common/theme/colors";
import { Link } from "react-router-dom";

export default function SectionCard({ sectionTitle, btn, path, text, icon }) {
	const [iconComponent, setIconComponent] = useState();
	useEffect(() => {
		switch (icon) {
			case "DOCS":
				setIconComponent(<RiFileSearchFill style={iconStyle} />);
				break;
			case "HELP":
				setIconComponent(<IoHelpCircle style={iconStyle} />);
				break;
			default:
				setIconComponent(<BsFillPersonFill style={iconStyle} />);
				break;
		}
	}, []);

	const iconStyle = {
		height: "50%",
		fontSize: "7rem",

		color: COLORS.purple,
	};
	return (
		<div
			style={
				text
					? { padding: "4rem 3rem 1rem", height: "100%" }
					: { padding: "6rem 3rem 1rem", height: "100%" }
			}
		>
			<Col
				style={
					text
						? { justifyContent: "center", alignItems: "center", gap: "1rem" }
						: { justifyContent: "center", alignItems: "center", gap: "4rem" }
				}
			>
				{iconComponent}
				<Col
					style={{
						height: "100%",
						justifyContent: "flex-start",
						alignItems: "center",
						gap: ".5rem",
					}}
				>
					<Typography
						style={{ fontSize: "20px", color: "#555", fontWeight: "bold" }}
					>
						{sectionTitle}
					</Typography>
					{text ? (
						<Typography
							style={{
								fontSize: "16px",
								color: "#aaa",
								textAlign: "center",
								padding: "0 .5rem",
							}}
						>
							{text}
						</Typography>
					) : null}
					<Link
						to={path}
						style={{
							fontFamily: "fredoka",
							color: COLORS.purple,
							fontSize: "18px",
							textDecoration: "none",
						}}
					>
						{btn}
						<AiOutlineArrowRight
							style={{
								transform: "translateY(4px)",
								paddingLeft: ".5rem",
							}}
						/>
					</Link>
				</Col>
			</Col>
		</div>
	);
}
