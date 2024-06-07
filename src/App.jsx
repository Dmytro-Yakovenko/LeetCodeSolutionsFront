import {useDispatch} from "react-redux";
import {useEffect} from "react"

import './App.css'
import { getAllProblems } from "./store/reducers/problemReducer";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";


function App() {

  const dispatch = useDispatch()
 useEffect(()=>{
  dispatch(getAllProblems())
 },[])
  return (
    <div className="wrapper">
     <header>

     </header>
     <Routes>
     <Route path="/" element={<HomePage/>}/>
     </Routes>
       
    </div>
  )
}

export default App
