import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchProducts, getProducts } from "./features";
import { ProductCard } from "./components/ProductCard/ProductCard";
import { Loader } from "./components/Loader/Loader";
import "./App.css";

function App() {
	const [products, setProducts] = useState([]);
	const [skipProds, setSkipProd] = useState(10);

	const fetchData = async () => {
		const productsFromServer = await fetchProducts(skipProds);
		setProducts([...products, ...productsFromServer]);

		setSkipProd((skipProds) => skipProds + 20);
	};

	useEffect(() => {
		getProducts(setProducts);
	}, []);

	return (
		<>
			<div className="main-container">
				<InfiniteScroll
					dataLength={products?.length}
					next={fetchData}
					hasMore={true}
					loader={<Loader />}
					endMessage={
						<p style={{ textAlign: "center" }}>
							<b>Yay! You have seen it all</b>
						</p>
					}
				>
					<div className="products-container">
						{products?.map((product) => {
							return <ProductCard product={product} key={product?.id} />;
						})}
					</div>
				</InfiniteScroll>
			</div>
		</>
	);
}

export default App;
