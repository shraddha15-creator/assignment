import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [products, setProducts] = useState([]);

	const getProducts = async () => {
		try {
			const response = await axios.get(
				"https://dummyjson.com/products?skip=5&limit=10"
			);
			console.log(response);
			setProducts(response.data.products);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getProducts();
	});
	return (
		<>
			<div className="main-container">
				<div className="products-container">
					{products?.map((product) => {
						return (
							<div className="product-card">
								<img
									src={product.thumbnail}
									alt={product?.name}
									className="product-img"
								/>
								<p>{product.title}</p>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default App;
