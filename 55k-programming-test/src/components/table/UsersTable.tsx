import React from 'react'
import { type TableProps } from '../../types/table'
import './UsersTable.css'
const UsersTable: React.FC<TableProps> = ({ users, colors }) => {
  return (
    <div className='table-container'>
        <table className={'table'}>
            <thead className='table-head'>
                <tr>
                    <th>Photo</th>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Country</th>
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
                    <td></td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}

export default UsersTable
