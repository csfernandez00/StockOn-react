import { LoadingButton } from "@mui/lab";
import { Button, Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import COLORS from "../../../../../common/theme/colors";

import { Buttons } from "../../styles";
import { editProduct } from "../../../../../common/axios-service/AxiosService";
import SaveIcon from "@mui/icons-material/Save";

function EditModal({
	editVisible,
	setEditVisible,
	updateProducts,
	setSuccessToast,
	setFailToast,
	productSelected,
	setToastMessage,
}) {
	const initialForm = {
		name: productSelected.name,
		model: productSelected.model,
		brand: productSelected.brand,
		quantity: productSelected.quantity,
		code: productSelected.code,
	};
	const [isDisabled, setIsDisabled] = useState(true);
	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState(initialForm);
	const [nameError, setNameError] = useState(false);
	const [quantityError, setQuantityError] = useState(false);

	const handleClose = () => {
		setEditVisible(false);
	};

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleEdit = async () => {
		setLoading(true);
		form.id = productSelected.id;
		form.quantity = parseInt(form.quantity);
		await editProduct(form)
			.then((res) => {
				setToastMessage("Producto editado exitosamente!");
				setSuccessToast(true);
				setEditVisible(false);
				updateProducts();
			})
			.catch((err) => {
				setToastMessage("Error al editar el producto!");
				setFailToast(true);
			});
	};

	useEffect(() => {
		if (form.name && form.quantity && form !== initialForm) {
			setIsDisabled(false);
		} else {
			setIsDisabled(true);
		}

		if ((form.model || form.brand || form.code) && !form.name) {
			setNameError(true);
		} else {
			setNameError(false);
		}

		if ((form.model || form.brand || form.code) && !form.quantity) {
			setQuantityError(true);
		} else {
			setQuantityError(false);
		}
	}, [form]);

	const style = {
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		width: 550,
		bgcolor: "#fff",
		borderRadius: ".3rem",
		boxShadow: 24,
		padding: "2.5rem 3rem",
		display: "flex",
		flexDirection: "column",
		gap: "2.2rem",
	};

	return (
		<Modal
			open={editVisible}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<h2
					style={{
						margin: "0 0",
						color: COLORS.black,
						fontSize: "2rem",
						textAlign: "center",
					}}
				>
					Edita tu Producto
				</h2>

				<Box
					component="form"
					style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}
				>
					<TextField
						id="name"
						name="name"
						required
						label="Producto"
						variant="outlined"
						value={form.name}
						onChange={handleChange}
						error={nameError}
					/>
					<TextField
						id="model"
						name="model"
						label="Modelo"
						variant="outlined"
						value={form.model}
						onChange={handleChange}
					/>
					<TextField
						id="brand"
						name="brand"
						label="Marca"
						variant="outlined"
						value={form.brand}
						onChange={handleChange}
					/>
					<Buttons style={{ width: "100%" }}>
						<TextField
							id="quantity"
							name="quantity"
							required
							type="number"
							label="Cantidad"
							variant="outlined"
							value={form.quantity}
							style={{ width: "100%" }}
							onChange={handleChange}
							error={quantityError}
						/>
						<TextField
							id="code"
							name="code"
							label="Codigo"
							variant="outlined"
							value={form.code}
							style={{ width: "100%" }}
							onChange={handleChange}
						/>
					</Buttons>
					{quantityError || nameError ? (
						<Typography
							style={{
								position: "absolute",
								bottom: "17%",
								color: "#D32F2F",
							}}
						>
							Los campos con * son obligatorios
						</Typography>
					) : null}
				</Box>

				<Buttons style={{ paddingTop: "0rem" }}>
					<LoadingButton
						variant="contained"
						color="primary"
						style={
							isDisabled
								? {
										backgroundColor: "#ddd",
										fontFamily: "Fredoka",
										padding: ".7rem 1.4rem",
								  }
								: {
										fontFamily: "Fredoka",
										padding: ".7rem 1.4rem",
								  }
						}
						onClick={handleEdit}
						disabled={isDisabled}
						loading={loading}
						loadingPosition="start"
						startIcon={<SaveIcon />}
					>
						Confirmar
					</LoadingButton>
					<Button onClick={handleClose} style={{ fontFamily: "Fredoka" }}>
						Cancelar
					</Button>
				</Buttons>
			</Box>
		</Modal>
	);
}

export default EditModal;
