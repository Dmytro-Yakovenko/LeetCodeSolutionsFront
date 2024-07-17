//types

const CREATE_CHAT_QUESTION= "CREATE_CHAT_QUESTION"


//actions

const createChatQuestionAction=(data)=>({
    type:CREATE_CHAT_QUESTION,
    payload:data
})


//fetches 

export const createChatQuestion=(formData)=> async(dispatch)=>{
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer sk-proj-6l4Rvi8oXQS0tYps6lrPT3BlbkFJNTM5xWVgkwHq4YU7uvFG`
        },
        body: JSON.stringify({
            model: "gpt-4-turbo-preview",
            messages: [{ role: "user", content: formData }],
        })
    });
 
    const data = await response.json();

   
    dispatch(createChatQuestionAction({question:formData, answer:data.choices}))
    return data
}


//initial state


const initialState = {
    answer:[]
}

//reducer


const chatReducer =(state=initialState, action)=>{
    switch(action.type){
        case CREATE_CHAT_QUESTION:
           
            return {...state, answer:[...state.answer,action.payload]}
        default:
            return {...state}
    }
}

export default chatReducer