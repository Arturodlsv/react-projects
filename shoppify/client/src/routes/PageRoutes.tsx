import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../view/Home'
import SearchView from '../view/SearchView'

const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/items' element={<SearchView />} />
      </Routes>
    </Router>
  )
}

export default PageRoutes
