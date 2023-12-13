import React from 'react';

const ProductCard = ({ image, title, rating }) => {
  return (
    <div className="product-card">
      <img src={image} alt="Product" className="product-img" />
      <div className="product-title">{title}</div>
      <div className="product-rating">{generateStars(rating)}</div>
      <button className="add-to-cart">Add to Cart</button>
    </div>
  );
};

const generateStars = (rating) => {
  const filledStars = '★'.repeat(rating);
  const emptyStars = '☆'.repeat(5 - rating);
  return filledStars + emptyStars;
};

export default ProductCard;
