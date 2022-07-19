import axios from "axios";

export const getProducts = async (setProducts) => {
	try {
		const response = await axios.get(
			"https://dummyjson.com/products?skip=0&limit=10"
		);
		setProducts(response.data.products);
	} catch (error) {
		console.error(error);
	}
};
