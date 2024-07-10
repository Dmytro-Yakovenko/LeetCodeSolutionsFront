import React, { useState } from 'react'
import "./popup.css"
import { useDispatch } from 'react-redux'
import { createChatQuestion } from '../../store/reducers/chatReducer'




const PopUp = () => {
    const [chat, setChat]=useState("")
const dispatch =useDispatch()

    const handleSubmit =(e)=>{
        e.preventDefault()
   
        
        dispatch(createChatQuestion(chat))
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