import React from 'react'
import './Filters.css'
import { type FiltersProps } from '../../types/filter'

const Filters: React.FC<FiltersProps> = ({ setColors, originalUsers, setUsers, setIsCountry, isCountry, setSearchCountry }) => {
  const FilteringByCountry = () => {
    isCountry === 2
      ? setIsCountry(1)
      : setIsCountry(2)
  }
  const useColors = () => {
    setColors((prev) => !prev)
  }
  return (
    <div className='filters-container'>
        <button className='btn' onClick={useColors}>
            <span>Colors</span>
        </button>
        <button className='btn' onClick={() => {
          FilteringByCountry()
        }}> {isCountry === 2 ? 'Unsort' : ' Filter by Country'} </button>
        <button className='btn' onClick={() => {
          setUsers(originalUsers.current)
        }}> Reset State </button>
        <input type="text" className='input-search' onChange={(e) => {
          setSearchCountry(e.target.value)
        }} />
    </div>
  )
}

export default Filters
