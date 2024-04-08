import { useState } from 'react'


export function Pagination({ filterBy, onSetFilter, totalItems }) {
  const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })
  const pageSize = 10
  const numOfButtons = Math.ceil(totalItems / pageSize)
  function handlePageChange(page) {
    const newPagination = {
      ...filterBy,
      pageIdx: page
    }
    setFilterByToEdit((prevFilter) => ({ ...prevFilter, pageIdx: page }))
    onSetFilter(newPagination)
  }

  function renderPaginationButtons() {
    const buttons = []
    for (let i = 0; i < numOfButtons; i++) {
      buttons.push(
        <button key={i} onClick={() => handlePageChange(i)} className={`btn  ml-4 ${filterBy.pageIdx === i && 'btn-primary'}`}>{i + 1}</button>
      )
    }
    return buttons
  }

  return (
    <div className='align-elemets mt-6 flex justify-end '>
      {renderPaginationButtons()}
    </div>
  )
}