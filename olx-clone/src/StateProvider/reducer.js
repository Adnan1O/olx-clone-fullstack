export const initialState={
    user: JSON.parse(localStorage.getItem("user")) || null
   
}

// REDUCER and initialstate that we provided in indexjs
function reducer(state, action){
   switch(action.type){
    case "SET_USER":
       return{
        ...state,
        user: action.user
        
       }
      
    case "REMOVE_USER":
        return {
            ...state,
            user: null
          };
        default:
            return state;
   } 
}
export default reducer;