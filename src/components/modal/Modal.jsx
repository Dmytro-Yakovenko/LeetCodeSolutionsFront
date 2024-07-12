import React, { useEffect, useState } from 'react'
import "./modal.css"
import { useDispatch, useSelector } from 'react-redux'
import { showModalAction } from '../../store/reducers/modalReducer'

import AceEditor from "react-ace";
const Modal = () => {
    const dispatch = useDispatch()
    const choises = useSelector(state=>state.answer.answer)
    // const [answer, setAnswer]= useState("")
    // useEffect(()=>{
    //     const answer= choises.reduce((acc, curr)=>{
    //         acc+=`Question: $`
    //     },"")
    // },[choises])
    
  return (
    <div id="myModal" className="modal">

  
    <div className="modal-content">
      <span onClick={()=>dispatch(showModalAction(false))} className="close">&times;</span>
      <div>
            {choises.map(item=>(
                    <AceEditor
                    placeholder="Placeholder Text"
                    mode="javascript"
                    theme="monokai"
                    name="blah2"
                    style={{ maxWidth: "500px", zIndex: 1 }}
                    fontSize={16}
                    lineHeight={28}
                    showPrintMargin={true}
                    showGutter={true}
                    highlightActiveLine={true}
                    value={item.message.content}
                    editorProps={{ $blockScrolling: true }}
                  />
            )) }

            </div>
           
    </div>
  
  </div>
  )
}

export default Modal