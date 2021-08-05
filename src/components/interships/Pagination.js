import React from 'react';
import './Pagination.css'
const Pagination = ({ dataPerPage, totalData, paginate, currentPage}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="paginationNav">
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className={currentPage===number? 'page-item active' : 'page-item'}>
            <a onClick={(e) => {
            e.preventDefault();
            console.log("Button Clicked");
            paginate(number);
            }} href="#!"className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;