import React, { useRef, useState } from 'react'
import './Filters.css'
import { type FiltersProps } from '../../types/filter'
import { type usersData } from '../../types/users'

const Filters: React.FC<FiltersProps> = ({ setColors, originalUsers, setUsers, users }) => {
  const [isCountry, setIsCountry] = useState<number>(1)
  const sortedValues = useRef<usersData[]>(users)

  const FilteringByCountry = () => {
    const sortUsers = () => {
      if (isCountry === 2) {
        setIsCountry(1)
        setUsers(sortedValues.current)
      } else {
        sortedValues.current = users
        setIsCountry(isCountry => isCountry + 1)
        const sortedUsers = [...users].sort((a, b) => a.location.country.localeCompare(b.location.country))
        setUsers(sortedUsers)
      }
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
          FilteringByCountry()
        }}> Filter by Country </button>
        <button className='btn' onClick={() => {
          setUsers(originalUsers.current)
        }}> Reset State </button>
    </div>
  )
}

export default Filters
