import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../view/HomeView'
import SearchView from '../view/SearchView'
import ItemsDetails from '../view/ItemsDetails'

const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/items' element={<SearchView />} />
        <Route path='*' element={<Home />} />
        <Route path='/items/:id' element={<ItemsDetails />} />
      </Routes>
    </Router>
  )
}

export default PageRoutes
