import { type usersData } from './users'

interface FiltersProps {
  setColors: React.Dispatch<React.SetStateAction<boolean>>
  originalUsers: React.MutableRefObject<usersData[]>
  setUsers: React.Dispatch<React.SetStateAction<usersData[]>>
  users: usersData[]
}

type isCountry = boolean

export type { FiltersProps, isCountry }
