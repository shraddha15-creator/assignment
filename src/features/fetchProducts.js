import axios from "axios";

export const fetchProducts = async (skipProds) => {
	try {
		const response = await axios.get(
			`https://dummyjson.com/products?skip=${skipProds}&limit=10`
		);
		return response.data.products;
	} catch (error) {
		console.error(error);
	}
};
