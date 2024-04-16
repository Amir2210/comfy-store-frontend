import { useRef, useState } from 'react'
import { productsService } from '../services/products.service'
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";


export function FilterProduct({ filterBy, onSetFilter, sortBy, onSetSort }) {
  const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })
  const [sortByToEdit, setSortByToEdit] = useState({ ...sortBy })
  const [isfilterModalOpen, setIsfilterModalOpen] = useState(false)
  const filterModalRef = useRef(null)
  function handleChange({ target }) {
    let { value, name: field, type } = target
    value = type === 'number' ? +value : value
    if (type === 'checkbox') value = target.checked
    if (type === 'select-multiple') value = Array.from(target.selectedOptions, (option) => option.value)
    setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
  }

  function handleSortChange({ target }) {
    let { value, name: field, type } = target
    value = type === 'number' ? +value : value
    if (type === 'checkbox') value = target.checked
    if (type === 'select-multiple') value = Array.from(target.selectedOptions, (option) => option.value)
    setSortByToEdit((prevSort) => ({ ...prevSort, [field]: value }))
  }

  function handleSubmit(ev) {
    ev.preventDefault()
    onSetFilter(filterByToEdit)
    onSetSort(sortByToEdit)
    setIsfilterModalOpen(false)
    if (filterModalRef.current) {
      filterModalRef.current.checked = false
      setIsfilterModalOpen(false)
    }
  }

  function resetFilter(ev) {
    ev.preventDefault()
    setFilterByToEdit(prevFilter => ({
      ...prevFilter,
      txt: '',
      category: '',
      company: '',
      maxPrice: 10000,
      freeShipping: false,
      pageIdx: 0
    }))
    setSortByToEdit(prevSort => ({
      ...prevSort,
      by: ''
    }))
    onSetSort(productsService.getDefaultSort())
    onSetFilter(productsService.getDefaultFilterBy())
  }

  return (
    <section className='align-elemets md:mt-6 bg-base-200 w-full px-8 py-4'>
      <div className="collapse bg-base-200">
        <input type="checkbox" onChange={() => setIsfilterModalOpen(!isfilterModalOpen)} ref={filterModalRef} />
        <div className="collapse-title text-xl font-medium flex items-center justify-between capitalize">
          filter our products
          {isfilterModalOpen ? <IoIosArrowDropupCircle className='text-xl' /> : <IoIosArrowDropdownCircle className='text-xl' />}
        </div>
        <div className="collapse-content">
          <form className='flex flex-col' >
            <div className='grid sm:grid-cols-2  lg:grid-cols-4 gap-5'>
              <div className='flex flex-col'>
                <label className='capitalize cursor-pointer mb-2' htmlFor="name">search product</label>
                <input id='name' name='txt' value={filterByToEdit.txt} onChange={handleChange} type="text" className="input input-bordered input-secondary w-full max-w-xs" />
              </div>
              <div className='flex flex-col'>
                <label className='capitalize cursor-pointer mb-2' htmlFor="category">select category</label>
                <select id='category' name='category' value={filterByToEdit.category} className="select select-secondary w-full max-w-xs" defaultChecked={1} onChange={handleChange}>
                  <option value={''}>all</option>
                  <option>Tables</option>
                  <option>Chairs</option>
                  <option>Kids</option>
                  <option>Sofas</option>
                  <option>Beds</option>
                </select>
              </div>
              <div className='flex flex-col'>
                <label className='capitalize cursor-pointer mb-2' htmlFor="company">select company</label>
                <select id='company' name='company' value={filterByToEdit.company} className="select select-secondary w-full max-w-xs" defaultChecked={1} onChange={handleChange}>
                  <option value={''}>all</option>
                  <option>Modenza</option>
                  <option>Luxora</option>
                  <option>Homestead</option>
                  <option>Comfora</option>
                </select>
              </div>
              <div className='flex flex-col'>
                <label className='capitalize cursor-pointer mb-2' htmlFor="sortBy">sort by</label>
                <select id='sortBy' name='by' value={sortByToEdit.by} className="select select-secondary w-full max-w-xs" defaultChecked={1} onChange={handleSortChange}>
                  <option value={'title'}>a-z</option>
                  <option value={'-title'}>z-a</option>
                  <option value={'price'}>high</option>
                  <option value={'-price'}>low</option>
                </select>
              </div>
            </div>
            <div className='grid sm:grid-cols-2  lg:grid-cols-4 gap-5 items-center mt-3'>
              <div className='flex flex-col'>
                <label className='capitalize cursor-pointer mb-2' htmlFor="maxPrice">max price <span>${(parseFloat(filterByToEdit.maxPrice).toString()).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span></label>
                <input type="range" name='maxPrice' min={0} max="10000" value={filterByToEdit.maxPrice} className="range range-accent" onChange={handleChange} />
              </div>
              <div className="form-control">
                <label className="cursor-pointer label">
                  <span className="label-text">Free Shipping</span>
                  <input type="checkbox" name='freeShipping' checked={filterByToEdit.freeShipping} value={filterByToEdit.freeShipping} onChange={handleChange} className="checkbox checkbox-accent" />
                </label>
              </div>
              <button onClick={handleSubmit} className='btn btn-primary capitalize'>search</button>
              <button onClick={resetFilter} className='btn btn-accent capitalize'>reset</button>
            </div>
          </form>
        </div>
      </div>

    </section>
  )
}