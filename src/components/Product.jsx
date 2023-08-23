import React from 'react'
import ImgCarousel from './ImgCarousel';
import { Link } from 'react-router-dom';

const Product = ({ house }) => {
  const { id, title, img, salePrice, rentPrice, details } = house;
  const { type, bedroom, bathroom, size } = details;
  const finalRent = () => {
    if (rentPrice) {
      return `Rent: ${rentPrice}$`;
    }
    return '';
  }
  const finalSale = () => {
    if (salePrice) {
      return `Sale: ${salePrice}$`;
    }
    return '';
  }

  return (
    <div className="card" key={id}>
      <ImgCarousel data={img} full={false} />
      <div className="card__info">
        <Link to={`product/${id}`} className="card__title">{title}</Link>
        <div className="card__price">{`${finalSale()} ${finalRent()}`}</div>
        <div className="card__sizes">
          <div>{bedroom} Bedroom</div>
          <div>{bathroom} Bath</div>
          <div>{size} sqft</div>
        </div>
        <div className="card__type">{type}</div>
      </div>
    </div>
  )
}

export default Product
