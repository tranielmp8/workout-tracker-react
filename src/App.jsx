
import './App.css'
import Create from './components/Create'
import DeleteWorkout from './components/DeleteWorkout'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className='app'>
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/workouts/:id' element={<DeleteWorkout />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
