import React from 'react'
import "./problem.css"
import { useSelector } from 'react-redux'
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-javascript"; // Импорт режима JavaScript
import "ace-builds/src-noconflict/theme-monokai"; // Импорт темы оформления
const Problem = () => {
    const problem = useSelector(state=>state.problems.problem)
  return (
   <div className='container'>
   <h4>{problem.title}</h4>
    <p>{problem.level}</p>
   <p>{problem.description}</p>
   
    <div className='ace-editor'>

    <AceEditor
        placeholder="Placeholder Text"
        mode="javascript"
        theme="monokai"
        name="blah2"
        style={{width:"900px"}}
        
        fontSize={16}
        lineHeight={28}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
      value={problem.code}
      editorProps={{ $blockScrolling: true }}
    />
    </div>
    


{/* <img src="https://res.cloudinary.com/dr1ekjmf4/image/upload/v1718726342/Screen_Shot_2024-06-18_at_8.58.38_AM_ru71nm.png" alt={problem.title} /> */}
   </div>
  )
}

export default Problem