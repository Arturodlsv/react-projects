import { type usersData } from './users'

interface FiltersProps {
  setColors: React.Dispatch<React.SetStateAction<boolean>>
  originalUsers: React.MutableRefObject<usersData[]>
  setUsers: React.Dispatch<React.SetStateAction<usersData[]>>
  users: usersData[]
  setIsCountry: React.Dispatch<React.SetStateAction<number>>
  isCountry: number
  setSearchCountry: React.Dispatch<React.SetStateAction<string>>
}

type isCountry = boolean

export type { FiltersProps, isCountry }
