import React, { useState } from 'react'
import "./popup.css"
import { useDispatch, useSelector } from 'react-redux'
import { createChatQuestion } from '../../store/reducers/chatReducer'




const PopUp = () => {
    const [chat, setChat]=useState("")
const dispatch =useDispatch()

const choises = useSelector(state=>state.answer.answer)

console.log(choises)

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
            <div>
            {choises.map(item=>(
                <p>{item.message.content}</p>
            )) }

            </div>
           
            <button className='popup-button' type='submit'>Ask</button>
           
        </form>
    </div>
  )
}

export default PopUp