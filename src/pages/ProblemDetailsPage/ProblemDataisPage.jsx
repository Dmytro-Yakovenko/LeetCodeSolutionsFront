import React, { useEffect } from 'react'
import Problem from '../../components/problem'
import { useNavigate, useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { getOneProblem } from '../../store/reducers/problemReducer'
import Tab from '../../components/tab'
import Solution from '../../components/solution'

const ProblemDataisPage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const tab = useSelector(state=>state.tab.tab)
   
    
    useEffect(()=>{
        dispatch(getOneProblem(id))
    },[id])
  return (
    <>
    <Tab/>
   {tab==="code" && <Problem/>}
   {tab==="solution" && <Solution/>}
    </>
   
  )
}

export default ProblemDataisPage