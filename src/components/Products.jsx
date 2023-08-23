import React, { useMemo } from "react";
import Product from "./Product";
import houses from '../api/api.json'
import { useSelector } from "react-redux";
import Search from "./Search";

const AppRoutes = () => {
  const saleRentType = useSelector(state => state.saleRent);
  const maxMinPrice = useSelector(state => state.price);
  const bedBath = useSelector(state => state.bedBath);
  const houseType = useSelector(state => state.type);

  const filteredHouses = useMemo(() => {
  const newHouses = [...houses];

    return newHouses.filter(property => {
      if (saleRentType === "rent" && !property.rent) {
        return false;
      }
      if (saleRentType === "sale" && !property.sale) {
        return false;
      }

      const price = () => {
        switch (saleRentType) {
          case 'rent':
            return +property.rentPrice;
          case 'sale':
            return +property.salePrice;

          default:
            return;
        }
      }

      const { max, min } = maxMinPrice;
      if (+max && price() > +max) {
        return false;
      }
      if (+min && price() < +min) {
        return false;
      }

      const { bed, bath } = bedBath;
      if (+bed && property.details.bedroom !== +bed) {
        return false;
      }
      if (+bath && property.details.bathroom !== +bath) {
        return false;
      }

      if (houseType === "house" && property.details.type !== "House") {
        return false;
      }
      if (houseType === "apt" && property.details.type !== "Apartament") {
        return false;
      }

      return true;
    });
  }, [saleRentType, maxMinPrice, bedBath, houseType]);

  return (
    <>
      <Search />

      <div className="content">
        <div className="cards">
          {filteredHouses.length === 0 && (
            <h1>No available houses</h1>
          )}
          {filteredHouses.map(house => (
            <Product house={house} />
          ))}
        </div>
      </div>
    </>
  )
}

export default AppRoutes;