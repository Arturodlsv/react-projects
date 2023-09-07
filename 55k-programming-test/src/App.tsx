import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import { usersFetch } from './services/fetching'
import { type usersData } from './types/users'
import UsersTable from './components/table/UsersTable'
import Filters from './components/filter/Filters'

function App () {
  const [users, setUsers] = useState<usersData[]>([])
  const [colors, setColors] = useState<boolean>(false)
  const [isCountry, setIsCountry] = useState<number>(1)
  const originalUsers = useRef<usersData[]>([])

  const fetchUsers = async () => {
    const response = await usersFetch()
    setUsers(response.results)
    originalUsers.current = response.results
  }
  useEffect(() => {
    fetchUsers().then(() => { console.log(users) }).catch((e) => { console.log(e) })
  }, [])
  const sortedUsers = useMemo(() => {
    return isCountry === 2 ? [...users].sort((a, b) => { return a.location.country.localeCompare(b.location.country) }) : users
  }, [isCountry, users])
  return (
    <div className="App">
      <h1 className='page-title'>Prueba Técnica</h1>
      <nav>
        <Filters setColors={setColors} originalUsers={originalUsers} setUsers={setUsers} users={sortedUsers} setIsCountry={setIsCountry} isCountry={isCountry} />
      </nav>
      <main className='table-call'>
      <UsersTable users={sortedUsers} colors={colors} setUsers={setUsers} setIsCountry={setIsCountry}/>
      </main>
    </div>
  )
}

export default App
