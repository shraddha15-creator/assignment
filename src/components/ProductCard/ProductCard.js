import "./productCard.css";

export const ProductCard = ({ product }) => {
	const { id, title, thumbnail, name } = product;
	return (
		<div className="product-card">
			<img src={thumbnail} alt={name} className="product-img" />
			<div className="product-details">
				<p>{id}.</p>
				<p>{title}</p>
			</div>
		</div>
	);
};
