/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import {useDispatch} from 'react-redux'
import authService from './appWrite/auth'
import {login, logout} from './store/authSlice'
import { Footer } from "./components"
import { Header } from "./components"


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout(userData))
      }
    })
    .finally(() => setLoading(false))
  },[])


return !loading ? (
  <div className="bg-gray-500 min-h-screen flex flex-wrap content-between">
    <div className="w-full block">
      <Header/>
      <main>
        {/*TODO: Outlet */}
      </main>
      <Footer/>
    </div>
  </div>
) : null

}

export default App
