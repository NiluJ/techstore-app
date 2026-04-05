import { useNavigate } from 'react-router-dom';

function Categories() {
  const navigate = useNavigate();

  const categories = [
    {
      name: 'Audio',
      image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Premium sound experience'
    },
    {
      name: 'Wearables',
      image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Stay connected on the go'
    },
    {
      name: 'Accessories',
      image: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Essential tech gear'
    }
  ];

  const handleCategoryClick = (category) => {
    navigate(`/products?category=${category}`);
  };

  return (
    <section className="categories-section">
      <h2 className="section-title">Shop by Category</h2>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-card"
            onClick={() => handleCategoryClick(category.name)}
          >
            <img src={category.image} alt={category.name} className="category-image" />
            <div className="category-overlay">
              <h3 className="category-name">{category.name}</h3>
              <p className="category-description">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
