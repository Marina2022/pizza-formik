import s from './Pagination.module.scss'

import ReactPaginate from "react-paginate";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "../../redux/store/filterSlice";

const Pagination = () => {

  const currentPage = useSelector(state=>state.filters.currentPage)
  const dispatch = useDispatch()
  const itemsNumber = 53;
  const pageCount = Math.ceil(  itemsNumber / 8)
  const itemsPerPage = 8

  const handlePageClick = (event) => {
    dispatch(setCurrentPage(event.selected))
  };

  return (
    <>
      <ReactPaginate
        containerClassName={s.pagination}
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< "
        renderOnZeroPageCount={null}
        activeClassName={s.pageActive}
        pageClassName={s.pageItem}
        forcePage={currentPage}
        initialPage={0}
      />
    </>
  )
};




export default Pagination;


