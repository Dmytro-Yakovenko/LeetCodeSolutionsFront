import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const HomePage = () => {

const allProblems = useSelector(state=>Object.values(state.problems.problems))


  return (
    <div>
        <ul>
            {allProblems.map(item=>(
                <li key={item.id}>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <Link to={item.id}>Show Solution</Link>

                </li>
               
            ))}
        </ul>
    </div>
  )
}

export default HomePage