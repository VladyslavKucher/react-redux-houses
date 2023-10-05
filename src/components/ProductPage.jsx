import React from 'react'
import data from '../api/api.json';
import ImgCarousel from './ImgCarousel';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { slug } = useParams();
  const house = data[slug];
  const {
    id,
    title,
    img,
    salePrice,
    rentPrice,
    details,
    description,
    location,
  } = house;
  const {
    type,
    bedroom,
    bathroom,
    size,
    built,
    heating,
    parking,
    pool,
    phone,
    email
  } = details;
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
    <div className='product__container' key={id}>
      <ImgCarousel data={img} full={true} />
      <div className='product__info'>
        <div className="product__main">
          <h1 className='product__title'>{title}</h1>
          <div className='product__short-info' >
            <h2 className='product__finalSaleRent'>{finalRent()}</h2>
            <h2 className='product__finalSaleRent'>{finalSale()}</h2>
            <div className='product__bed-bath'>
              <p>Type: {type},</p>
              <p>{size} sqft,</p>
              <p> {bedroom} bed,</p>
              <p> {bathroom} bath</p>
            </div>
            <p className='product__location'>{location}, FL</p>
            <div className="product__details">
              <h3 className='product__details-h3'>Details:</h3>
              <p>Built: {built},</p>
              <p>Heating: {heating},</p>
              <p>Parking: {parking},</p>
              <p>Pool: {pool ? 'yes' : 'no'}</p>
            </div>
            <p className='product__description'>
              <strong>About: </strong><br />{description}
            </p>
          </div>
        </div>
        <div className="product__contact">
          <p>Email: <a className='product__contact-info' href={`mailto:${email}`}>{email}</a></p>
          <p>Phone: <a className='product__contact-info' href={`tel:${phone}`}>{phone}</a></p>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
