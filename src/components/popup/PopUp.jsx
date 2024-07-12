import React, { useState } from 'react'
import "./popup.css"
import { useDispatch, useSelector } from 'react-redux'
import { createChatQuestion } from '../../store/reducers/chatReducer'
import { showModalAction } from '../../store/reducers/modalReducer'




const PopUp = () => {
    const [chat, setChat]=useState("")
const dispatch =useDispatch()





    const handleSubmit = async (e)=>{
        e.preventDefault()
   
        
       const res =   await dispatch(createChatQuestion(chat))
 
       if(res){
      
        dispatch(showModalAction(true))
       }
    }
  return (
    <div className='popup'>
        <form onSubmit={handleSubmit} className='popup-form'>
            <label htmlFor="">
            <textarea required placeholder='how can I help you?' id="chat" value={chat} onChange={(e)=>setChat(e.target.value)}></textarea>
           
            </label>
      
            <button className='popup-button' type='submit'>Ask</button>
           
        </form>
    </div>
  )
}

export default PopUp