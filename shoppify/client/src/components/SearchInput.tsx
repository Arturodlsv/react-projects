/* eslint-disable react/prop-types */
import { type SearchTermProps } from '../types/search.types'

const SearchInput: React.FC<SearchTermProps> = ({
  searchTerm,
  setSearchTerm
}) => {
  return (
    <div>
      <form className='flex justify-center items-center'>
        <input
        className='border-2 border-black w-3/5 pl-2 text-base italic'
          type="text"
          onChange={(e) => { setSearchTerm(e.target.value) }}
          value={searchTerm}
        />
      </form>
    </div>
  )
}

export default SearchInput
