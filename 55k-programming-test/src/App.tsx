import { useEffect, useRef, useState } from 'react'
import './App.css'
import { usersFetch } from './services/fetching'
import { type usersData } from './types/users'
import UsersTable from './components/table/UsersTable'
import Filters from './components/filter/Filters'

function App () {
  const [users, setUsers] = useState<usersData[]>([])
  const [colors, setColors] = useState<boolean>(false)
  const originalUsers = useRef<usersData[]>([])
  const fetchUsers = async () => {
    const response = await usersFetch()
    return response
  }
  useEffect(() => {
    fetchUsers().then((res) => {
      setUsers(res.results)
      console.log(res.results)
      originalUsers.current = res.results
    }).catch((err) => { console.log(err) })
  }, [])
  return (
    <div className="App">
      <h1 className='page-title'>Prueba Técnica</h1>
      <nav>
        <Filters setColors={setColors} />
      </nav>
      <main className='table-call'>
      <UsersTable users={users} colors={colors} />
      </main>
    </div>
  )
}

export default App
