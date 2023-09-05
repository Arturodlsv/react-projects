import React from 'react'
import './Filters.css'

interface FiltersProps {
  setColors: React.Dispatch<React.SetStateAction<boolean>>
}
const Filters: React.FC<FiltersProps> = ({ setColors }) => {
  const useColors = () => {
    setColors((prev) => !prev)
  }
  return (
    <div>
        <button className='btn' onClick={useColors}>
            <span>Colors</span>
        </button>
    </div>
  )
}

export default Filters
