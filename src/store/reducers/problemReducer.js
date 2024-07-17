//types

const GET_ALL_PROBLEMS="GET_ALL_PROBLEMS"

const GET_ONE_PROBLEM= "GET_ONE_PROBLEM"



// actions 
 const getAllProblemsAction =(data)=>({
    type:GET_ALL_PROBLEMS,
    payload:data,
 })

 const getOneproblemAction =(data)=>({
    type:GET_ONE_PROBLEM,
    payload:data
 })


 //fetches

 export const getAllProblems =()=> async (dispatch)=>{
    // const response = await fetch ("http://localhost:5000/problems",{
        const response = await fetch ("https://leetcodesolutions.adaptable.app/problems",{
        method:"GET"
    })
    const data = await response.json()
 
    dispatch(getAllProblemsAction(data))
 }

 export const getOneProblem =(id)=>async(dispatch)=>{
    // const response = await fetch(`http://localhost:5000/problems/${id}`,{
         const response = await fetch(`https://leetcodesolutions.adaptable.app/problems/${id}`,{
        method: "GET"
    })
   const data = await response.json()
  
   dispatch(getOneproblemAction(data))
 }


 // initial states


 const initialState={
    
    problems:{},
    problem:{}
    
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
        case GET_ONE_PROBLEM:
            return {...state, problem:action.payload}
        default:
            return {...state}
    }
    
}


export default problemReducer