//types

const SHOW_MODAL = "SHOW_MODAL";

//actions

export const showModalAction = (data) => ({
  type: SHOW_MODAL,
  payload: data,
});

//fethes

// initial state

const initialState = {
  isModalOpen: false,
};

//reducer

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, isModalOpen: action.payload };
    default:
      return { ...state };
  }
};


export default modalReducer