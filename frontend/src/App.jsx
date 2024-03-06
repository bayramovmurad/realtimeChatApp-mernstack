import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./screen/home/Home"
import SignUp from './screen/signup/SignUp'
import Login from './screen/login/Login'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useAuthGlobalContext } from "./context/AuthContext"

const App = () => {
  const {authUser} = useAuthGlobalContext();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to={'/login'}/>} />
        <Route path="/signup" element={authUser ? <Navigate to='/'/> : <SignUp/>} />
        <Route path="/login" element={authUser ? <Navigate to='/' /> : <Login />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}
export default App