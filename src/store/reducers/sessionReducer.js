//types

const SIGN_UP = "SIGN_UP"
const SIGN_IN = "SIGN_IN"
const SIGN_OUT = "SIGN_OUT"

//actions 
 
const signUpAction = (data)=>({
    type:SIGN_UP,
    payload:data
})
const signInAction = (data)=>({
    type:SIGN_IN,
    payload:data
})
const signOutAction = ()=>({
    type:SIGN_OUT,
    
})

//fetches

export const signUp =(data)=>async(dispatch)=>{
    // const response =await fetch("http://localhost:3000/users",{
        const response =await fetch("https://leetcodesolutions.adaptable.app/users",{
        method:"POST",
        body:JSON.stringify(data)
    })
    const data = await response.json()
    dispatch(signUpAction(data))
}



 // initial states

 const initialState={
    
    user:null,
    
}


//reducer 

const sessionReducer = (state=initialState, action)=>{
    switch(action.type){
        case SIGN_UP:
            return {...state, user:action.payload}

        case SIGN_IN:
            return {...state, user:action.payload}
        case SIGN_OUT:
            return {user:null}
         default:
                return {...state}   
    }
}


export default sessionReducer;