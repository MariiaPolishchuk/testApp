import React from 'react';

interface PaginationItemProps {
  page: number;
  isActive: boolean;
  onClick: () => void;
}

const PaginationItem: React.FC<PaginationItemProps> = ({ page, isActive, onClick }) => {
  return (
    <li className={`pagination-item ${isActive ? 'active' : ''}`} onClick={onClick}>
      <a href='!#' className='page-link'>
        {page}
      </a>
    </li>
  );
};

export default PaginationItem;
