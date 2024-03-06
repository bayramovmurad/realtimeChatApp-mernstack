import { Route, Routes } from "react-router-dom"
import Home from "./screen/home/Home"
import SignUp from './screen/signup/SignUp'
import Login from './screen/login/Login'
const App = () => {
  return (
      <div className="p-4 h-screen flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Home/>} /> 
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/login" element={<Login />} /> 
        </Routes>
      </div>
  )
}
export default App