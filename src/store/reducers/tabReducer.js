const SET_TAB="SET_TAB"


export const setTabAction =(data)=>({
    type:SET_TAB,
    payload:data,
})

const initialState={
    
   tab:"code"
    
}

const tabReducer = (state=initialState, action)=>{
    switch(action.type){
        case SET_TAB:
            return {...state, tab:action.payload}
         default:
                return {...state}
    }
}

export default tabReducer