import { useSearchParams } from 'react-router-dom'
import TruckPnG from '../assets/truck.png'
import { useMemo, useState } from 'react'
import { getItems } from '../api/fetching'

const SearchView = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [items, setItems] = useState([])
  const searchTerm = searchParams.get('search')
  useMemo(() => {
    getItems(searchTerm ?? '').then((data) => {
      setItems(data)
    }).catch((err) => {
      console.log(err)
    })
  }, [searchTerm])
  return (
    <div>
      <header>
        <img src={TruckPnG} width={150} className="overflow-hidden" alt="" />
        <nav>
          <input
            type="text"
            className="border-2 border-black w-3/5 pl-2 text-base italic"
            value={searchTerm ?? ''}
            onChange={(e) => {
              setSearchParams({ search: e.target.value })
            }}
          />
        </nav>
      </header>
      <h1>{searchTerm}</h1>
    </div>
  )
}

export default SearchView
