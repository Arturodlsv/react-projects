import { type usersData } from './users'

interface TableProps {
  users: usersData[]
  colors: boolean
  setUsers: React.Dispatch<React.SetStateAction<usersData[]>>
}

export type { TableProps }
