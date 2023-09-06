import React from 'react'
import { type TableProps } from '../../types/table'
import './UsersTable.css'
import DeleteIcon from './icons/DeleteIcon'
const UsersTable: React.FC<TableProps> = ({ users, colors, setUsers }) => {
  const FilteringByName = () => {
    const sortUsers = () => {
      const sortedUsers = [...users].sort((a, b) => a.name.first.localeCompare(b.name.first))
      setUsers(sortedUsers)
    }
    sortUsers()
  }

  const FilteringByLast = () => {
    const sortUsers = () => {
      const sortedUsers = [...users].sort((a, b) => a.name.last.localeCompare(b.name.last))
      setUsers(sortedUsers)
    }
    sortUsers()
  }

  const FilteringByCountry = () => {
    const sortUsers = () => {
      const sortedUsers = [...users].sort((a, b) => a.location.country.localeCompare(b.location.country))
      setUsers(sortedUsers)
    }
    sortUsers()
  }

  const deleteUser = (cell: string) => {
    setUsers(users.filter((user) => user.cell !== cell))
  }
  return (
    <div className='table-container'>
        <table className={'table'}>
            <thead className='table-head'>
                <tr>
                    <th>Photo</th>
                    <th onClick={FilteringByName}>Name</th>
                    <th onClick={FilteringByLast}>Last Name</th>
                    <th onClick={FilteringByCountry}>Country</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody className={colors ? 'table-colored' : 'table-body'}>
            {users.map((user) => (
                <tr key={user.cell}>
                    <td className='img-td'>
                        <img width={60} src={user.picture.large} alt={user.name.first} />
                    </td>
                    <td>{user.name.first}</td>
                    <td>{user.name.last}</td>
                    <td>{user.location.country}</td>
                    <td> <span className='delete-btn' onClick={() => { deleteUser(user.cell) }}> <DeleteIcon /> </span> </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}

export default UsersTable
