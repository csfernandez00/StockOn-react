import axios from "axios";

const id = 0;
const URL = `http://localhost:5000/users/${id}`;

export const getProducts = async () => {
	const resProducts = await axios.get(URL);
	const data = resProducts.data.products;
	return data;
};

export const createProduct = async (newProduct) => {
	const user = await getUser();
	user?.products.push(newProduct);
	return axios.patch(URL, user);
};

export const deleteProduct = async (productToDelete) => {
	const user = await getUser();
	const id = productToDelete.id;
	const updatedArr = user?.products.filter((product) => product.id !== id);
	user.products = updatedArr;
	return axios.patch(URL, user);
};

export const editProduct = async (productToEdit) => {
	const user = await getUser();
	const id = productToEdit.id;
	const productIndex = user.products.findIndex((el) => el.id === id);
	let newArr = [...user.products];
	newArr[productIndex] = {
		...newArr[productIndex],
		name: productToEdit.name,
		model: productToEdit.model,
		brand: productToEdit.brand,
		quantity: productToEdit.quantity,
		code: productToEdit.code,
	};
	user.products = newArr;
	return axios.patch(URL, user);
};

export const getUser = async () => {
	const resUser = await axios.get(URL);
	const data = resUser?.data;
	return data;
};

export const deleteUser = async (userLogged) => {
	// const id = userLogged.id;
	return axios.delete(`${URL}`);
};

export const updateUser = async (userUpdated) => {
	return axios.patch(URL, userUpdated);
};
