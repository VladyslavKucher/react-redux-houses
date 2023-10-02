import React, { useMemo } from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { setSaleRent } from '../features/saleRent/saleRentSlice';
import { setMaxPrice, setMinPrice } from '../features/price/priceSlice';
import { setBath, setBed } from '../features/bedBath/bedbathSlice'
import { setType } from '../features/type/typeSlice'

const Search = () => {
  const currentFilter = useSelector(state => state.saleRent);

  const dispatch = useDispatch();

  const handleSaleRentChange = (saleRent) => {
    dispatch(setSaleRent(saleRent));
  }

  const handleType = (type) => {
    dispatch(setType(type));
  }

  const handleMinPrice = (number) => {
    dispatch(setMinPrice(number));
  }
  const handleMaxPrice = (number) => {
    dispatch(setMaxPrice(number));
  }

  const handleBed = (number) => {
    dispatch(setBed(number));
  }
  const handleBath = (number) => {
    dispatch(setBath(number));
  }

  const priceStep = useMemo(() => {
    switch (currentFilter) {
      case null || 'rent':
        return 100;
      case 'sale':
        return 10000;

      default:
        return 100;
    }
  }, [currentFilter]);

  const pricePlaceholder = useMemo(() => {
    switch (currentFilter) {
      case 'rent':
        return 'Rent-Price';
      case 'sale':
        return 'Sale-Price';
      case '':
        return 'Choose type'

      default:
        return '';
    }
  }, [currentFilter]);

  return (
    <div className='search'>
      <img
        src='https://www.camlincustomhomes.com/content/img/1264_banner-british-west-indies.jpg'
        alt="SearchHouse"
        className='search__img'
      />
      <div className="search__gradient"></div>
      <div className="search__bar">
        <div className="search__saleRent">
          <span>Sale/Rent</span>

          <select
            className='search__select'
            onChange={(event) => {
              handleSaleRentChange(event.target.value);
            }}>
            <option value="">All</option>
            <option value="rent">Rent</option>
            <option value="sale">Sale</option>
          </select>
        </div>

        <div className="search__type">
          <span>Choose a type</span>

          <select
            className='search__select search__select-width-8vw'
            onChange={(event) => {
              handleType(event.target.value);
            }}>
            <option value={null}>All</option>
            <option value="house">House</option>
            <option value="apt">Apartament</option>
          </select>
        </div>

        <div className="search__price">
          <span>Price:</span>
          <form className='search__form'>
            <div className="flex">
              <p>Min: </p>
              <label htmlFor="min-price">
                <input
                  type="number"
                  step={priceStep}
                  placeholder={pricePlaceholder}
                  id="min-price"
                  className='search__input'
                  onChange={(e) => {
                    handleMinPrice(e.target.value)
                    console.log(e.target.value)
                  }}
                  disabled={currentFilter === ''}
                />
              </label>
            </div>

            <div className='flex'>
              <p>Max: </p>
              <label htmlFor="max-price">
                <input
                  type="number"
                  step={priceStep}
                  placeholder={pricePlaceholder}
                  id="max-price"
                  className='search__input'
                  onChange={(e) => {
                    handleMaxPrice(e.target.value)
                  }}
                  disabled={currentFilter === ''}
                />
              </label>
            </div>
          </form>
        </div>

        <div className="search__bedBath">
          <div className="search__bed">
            <span>Bedroom</span>

            <select
              className='search__select search__select-width-3vw'
              onChange={(event) => {
                handleBed(event.target.value);
              }}>
              <option value='0'>All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </div>

          <div className="search__bath">
            <span>Bathroom</span>

            <select
              className='search__select search__select-width-3vw'
              onChange={(event) => {
                handleBath(event.target.value);
              }}>
              <option value='0'>All</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
