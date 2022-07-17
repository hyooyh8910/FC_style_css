import './App.css'
import { Route, Routes } from 'react-router-dom'

// ***pages*** //
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Main from './pages/Main'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
      <div>"Hello World"</div>
    </>
  )
}

export default App
