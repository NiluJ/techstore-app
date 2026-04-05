import { ShoppingCart } from 'lucide-react';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.name} className="product-image" />
        <span className="product-category-badge">{product.category}</span>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">${product.price}</p>
        <button
          className="add-to-cart-btn"
          onClick={() => onAddToCart(product.id)}
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
