import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../features/page/pageSlice';
import classnames from 'classnames';
const Pagination = ({ totalPosts, postsPerPage }) => {
  let pages = [];
  const currentPage = useSelector(state => state.page);
  const dispatch = useDispatch();
  const handleCurrentPage = (currentPage) => {
    dispatch(setPage(currentPage));
  }

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className='pagination'>
      {
        pages.map((page, index) => {
          return <button
          className={`${classnames('pagination__button', {
            'pagination__button-active': page == currentPage
          })}`}
            key={index}
            value={page}
            onClick={(event) => {
              console.log(event.target.value);
              handleCurrentPage(event.target.value);
            }}
          >{page}</button>
        })
      }
    </div>
  )
}

export default Pagination
