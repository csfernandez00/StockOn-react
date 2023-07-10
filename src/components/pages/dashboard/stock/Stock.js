import { Box, Skeleton, CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchForm from "./components/search-form/SearchForm";
import { Container, Row } from "./styles";

import {
	deleteProduct,
	getProducts,
} from "../../../common/axios-service/AxiosService";
import TableResult from "./components/table-results/TableResult";
import CreateModal from "./components/create/CreateModal";
import EditModal from "./components/edit/EditModal";
import COLORS from "../../../common/theme/colors";
import FailToast from "./components/toasts/FailToast";
import SuccesToast from "./components/toasts/SuccesToast";
import ConfirmDialog from "./components/toasts/ConfirmDialog";
import ToolBar from "./components/toolbar/ToolBar";

function Stock({ setSectionActive, updateUserInfo }) {
	const rowsPerPage = 11;
	const [productSelected, setProductSelected] = useState(null);
	const [data, setData] = useState(null);
	const [editVisible, setEditVisible] = useState(false);
	const [createVisible, setCreateVisible] = useState(false);
	const [successToast, setSuccessToast] = useState(false);
	const [failToast, setFailToast] = useState(false);
	const [confirmOpen, setConfirmOpen] = useState(false);
	const [searchValue, setSearchValue] = useState(null);
	const [toastMessage, setToastMessage] = useState("");

	const handleDelete = async () => {
		await deleteProduct(productSelected)
			.then((res) => {
				updateProducts();
				setProductSelected(null);
				setToastMessage("Producto eliminado exitosamente!");
				setSuccessToast(true);
				updateUserInfo();
			})
			.catch((err) => {
				setToastMessage("Error al eliminar el producto!");
				setFailToast(true);
			});
	};
	const handleCloseToast = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setSuccessToast(false);
		setFailToast(false);
	};

	const updateProducts = async () => {
		updateUserInfo();
		const data = await getProducts();
		setData(data);
		setProductSelected(null);
	};

	const handleConfirmClose = (res) => {
		if (res) {
			handleDelete();
			setConfirmOpen(false);
		} else {
			setConfirmOpen(false);
		}
	};

	useEffect(() => {
		updateProducts();
		setSectionActive("stock");
	}, []);

	return (
		<Container>
			{editVisible ? (
				<EditModal
					editVisible={editVisible}
					setEditVisible={setEditVisible}
					updateProducts={updateProducts}
					setSuccessToast={setSuccessToast}
					setFailToast={setFailToast}
					productSelected={productSelected}
					setToastMessage={setToastMessage}
				/>
			) : null}
			{createVisible ? (
				<CreateModal
					createVisible={createVisible}
					setCreateVisible={setCreateVisible}
					updateProducts={updateProducts}
					setSuccessToast={setSuccessToast}
					setFailToast={setFailToast}
					setToastMessage={setToastMessage}
				/>
			) : null}
			{successToast ? (
				<SuccesToast
					mensaje={toastMessage}
					successToast={successToast}
					handleCloseToast={handleCloseToast}
				/>
			) : null}
			{failToast ? (
				<FailToast
					mensaje={toastMessage}
					failToast={failToast}
					handleCloseToast={handleCloseToast}
				/>
			) : null}

			{confirmOpen ? (
				<ConfirmDialog
					confirmOpen={confirmOpen}
					handleConfirmClose={handleConfirmClose}
					title={"Estas por eliminar uno de tus productos, deseas continuar?"}
					message={"El producto desaparecera de tu stock de forma permanente."}
				/>
			) : null}

			<SearchForm setSearchValue={setSearchValue} />
			{data ? (
				<TableResult
					data={data}
					setData={setData}
					productSelected={productSelected}
					setProductSelected={setProductSelected}
					rowsPerPage={rowsPerPage}
					setEditVisible={setEditVisible}
					setCreateVisible={setCreateVisible}
					searchValue={searchValue}
				/>
			) : (
				<Box
					style={{
						width: "100%",
						height: "100%",
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Skeleton
						height={"165%"}
						width={"100%"}
						style={{ marginBottom: "4rem" }}
					/>
					<CircularProgress
						style={{
							position: "absolute",
							color: COLORS.purple,
							scale: "1.5",
						}}
					/>
				</Box>
			)}
			<Row>
				<ToolBar
					productSelected={productSelected}
					setCreateVisible={setCreateVisible}
					setProductSelected={setProductSelected}
					setEditVisible={setEditVisible}
					setConfirmOpen={setConfirmOpen}
				/>
			</Row>
		</Container>
	);
}

export default Stock;
