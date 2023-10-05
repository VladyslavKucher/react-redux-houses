import React, { useMemo, useState } from "react";
import Product from "./Product";
import houses from '../api/api.json'
import { useSelector } from "react-redux";
import Search from "./Search";
import Pagination from "./Pagination";

const AppRoutes = () => {
  const saleRentType = useSelector(state => state.saleRent);
  const maxMinPrice = useSelector(state => state.price);
  const bedBath = useSelector(state => state.bedBath);
  const houseType = useSelector(state => state.type);
  const currentPage = useSelector(state => state.page);
  const [postsPerPage, setPostsPerPage] = useState(6);

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

  const paginatedHouses = useMemo(() => {
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const newPaginatedHouses = [...filteredHouses];

    return newPaginatedHouses.slice(firstPostIndex, lastPostIndex);
  }, [filteredHouses, currentPage]);

  return (
    <>
      <Search />

      <div className="content">
        <div className="cards">
          {filteredHouses.length === 0 && (
            <h1>No available houses</h1>
          )}
          {paginatedHouses.map(house => (
            <Product house={house} />
          ))}
        </div>
      </div>

      <Pagination totalPosts={filteredHouses.length} postsPerPage={postsPerPage} />
    </>
  )
}

export default AppRoutes;