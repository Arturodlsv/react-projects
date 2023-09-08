import { type usersData } from './users'

interface TableProps {
  users: usersData[]
  colors: boolean
  setUsers: React.Dispatch<React.SetStateAction<usersData[]>>
  setIsCountry: React.Dispatch<React.SetStateAction<number>>
  handleDelete: (cell: string) => void
}

export type { TableProps }
