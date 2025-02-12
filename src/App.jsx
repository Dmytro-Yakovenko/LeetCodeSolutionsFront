import {useDispatch} from "react-redux";
import {useEffect} from "react"

import './App.css'
import './reset.css'
import { getAllProblems } from "./store/reducers/problemReducer";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import Header from "./components/header";
import Banner from "./components/banner";
import ProblemDataisPage from "./pages/ProblemDetailsPage/ProblemDataisPage";
import Footer from "./components/footer/Footer";


function App() {

  const dispatch = useDispatch()
 useEffect(()=>{
  dispatch(getAllProblems())
 },[])
  return (
    <div className="wrapper">
    <Header/>
    <Banner/>
     <Routes>
     <Route path="/" element={<HomePage/>}/>
     <Route path="/:id" element={<ProblemDataisPage/>}/>
     </Routes>
    <Footer/>
    </div>
  )
}

export default App
