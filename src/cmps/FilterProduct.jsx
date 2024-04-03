import { useState } from 'react'
import { productsService } from '../services/products.service'
export function FilterProduct({ filterBy, onSetFilter, sort, onSetSort }) {
  const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })

  function handleChange({ target }) {
    let { value, name: field, type } = target
    value = type === 'number' ? +value : value
    if (type === 'checkbox') value = target.checked
    if (type === 'select-multiple') value = Array.from(target.selectedOptions, (option) => option.value)
    setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
  }

  function handleSubmit(ev) {
    ev.preventDefault()
    onSetFilter(filterByToEdit)
  }

  function resetFilter() {
    setFilterByToEdit(prevFilter => ({
      ...prevFilter,
      txt: ''  // Resetting the txt property to an empty string
    }))
    onSetFilter(productsService.getDefaultFilterBy())
  }
  return (
    <section className='align-elemets mt-6 bg-base-200 w-full px-4 py-2'>
      <form className='' onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <label className='capitalize cursor-pointer mb-2' htmlFor="name">search product</label>
          <input id='name' name='txt' value={filterByToEdit.txt} onChange={handleChange} type="text" className="input input-bordered input-secondary w-full max-w-xs" />
        </div>
        <button className='btn'>search</button>
      </form>
      <button onClick={resetFilter}>reset</button>
    </section>
  )
}