import { Link } from 'react-router-dom';

function HeroBanner() {
  return (
    <div className="hero-banner">
      <div className="hero-content">
        <h1 className="hero-title">Premium Tech Accessories</h1>
        <p className="hero-subtitle">
          Elevate your workspace with our curated collection of high-quality tech products
        </p>
        <Link to="/products" className="hero-button">
          Shop Now
        </Link>
      </div>
    </div>
  );
}

export default HeroBanner;
