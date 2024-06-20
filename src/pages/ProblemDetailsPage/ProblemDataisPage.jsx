import React, { useEffect } from 'react'
import Problem from '../../components/problem'
import { useNavigate, useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import { getOneProblem } from '../../store/reducers/problemReducer'

const ProblemDataisPage = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getOneProblem(id))
    },[id])
  return (
   <Problem/>
  )
}

export default ProblemDataisPage