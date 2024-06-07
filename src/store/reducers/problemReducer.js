//types

const GET_ALL_PROBLEMS="GET_ALL_PROBLEMS"



// actions 
 const getAllProblemsAction =(data)=>({
    type:GET_ALL_PROBLEMS,
    payload:data,
 })


 //fetches

 export const getAllProblems =()=> async (dispatch)=>{
    const response = await fetch ("http://localhost:3000/problems",{
        method:"GET"
    })
    const data = await response.json()
 
    dispatch(getAllProblemsAction(data))
 }


 // initial states


 const initialState={
    
    problems:{},
    
}


//reducer 

const problemReducer = (state=initialState, action)=>{
    switch(action.type){
        case GET_ALL_PROBLEMS:
            const allProblems= action.payload.reduce((acc,curr)=>{
                acc[curr.id]=curr
                return acc
            },{})
            return { ...state, problems: allProblems };
        default:
            return {...state}
    }
    
}


export default problemReducer