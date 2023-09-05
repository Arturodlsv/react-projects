import React from 'react'
import './Filters.css'
import { type FiltersProps } from '../../types/filter'

const Filters: React.FC<FiltersProps> = ({ setColors, originalUsers, setUsers, users }) => {
  // const [filterValue, setFilterValue] = useState<FilterValues>()
  const FilteringByName = () => {
    const sortUsers = () => {
      const sortedUsers = [...users].sort((a, b) => a.name.first.localeCompare(b.name.first))
      setUsers(sortedUsers)
    }
    sortUsers()
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
          FilteringByName()
        }}> Filter by Name </button>
        <button className='btn' onClick={() => {
          setUsers(originalUsers.current)
        }}> Reset State </button>
    </div>
  )
}

export default Filters
