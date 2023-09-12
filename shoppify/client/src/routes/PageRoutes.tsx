import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../view/Home'

const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default PageRoutes
