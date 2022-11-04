import { Button } from "@mui/material";
import React from "react";
import { Buttons } from "../../styles";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import UnpublishedIcon from "@mui/icons-material/Unpublished";
import EditIcon from "@mui/icons-material/Edit";

function ToolBar({
	productSelected,
	setCreateVisible,
	setProductSelected,
	setEditVisible,
	setConfirmOpen,
}) {
	return (
		<Buttons>
			<Button
				variant="contained"
				style={{
					backgroundColor: "#9961F5",
					fontFamily: "Fredoka",
				}}
				startIcon={<AddCircleIcon />}
				onClick={() => setCreateVisible(true)}
			>
				Nuevo Producto
			</Button>
			{productSelected ? (
				<>
					<Button
						variant="contained"
						style={{
							color: "#444",
							backgroundColor: "#fff",
							borderColor: "#aaa",
							fontFamily: "Fredoka",
						}}
						onClick={() => {
							setProductSelected(null);
						}}
						startIcon={<UnpublishedIcon />}
					>
						Deseleccionar
					</Button>
					<Button
						variant="contained"
						startIcon={<EditIcon />}
						onClick={() => setEditVisible(true)}
						style={{ fontFamily: "Fredoka" }}
					>
						Editar
					</Button>
					<Button
						variant="contained"
						color="error"
						startIcon={<DeleteIcon />}
						onClick={() => setConfirmOpen(true)}
						style={{ fontFamily: "Fredoka" }}
					>
						Eliminar
					</Button>
				</>
			) : null}
		</Buttons>
	);
}

export default ToolBar;
