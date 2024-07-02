import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTabAction } from '../../store/reducers/tabReducer'
import "./tab.css"

 const Tab = () => {
    const dispatch = useDispatch()
    const tab =useSelector(state=>state.tab.tab)
  
    const config = [
        {
            title:"Code",
            link:"code"

        },
        {
            title:"Solution",
            link:"solution"
        },
        {
            title:"Test",
            link:"test"
        }
    ]
  return (
    <div className='container'> 
 <nav className='tab-nav'>
        <ul className='tab-list'>
            {
                config.map(item=>(
                    <li key={item.title} className={`tab ${(tab===item.link)?"active":""}`} onClick={()=>
                        dispatch(setTabAction(item.link))}>{item.title}</li>
                    
                ))
            }
        </ul>

    
    </nav>

    </div>
   
  )
}

export default Tab