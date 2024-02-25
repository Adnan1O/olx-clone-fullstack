import { createContext, useContext, useReducer } from "react";
// this is the datalayer the global object
export const StateContext = createContext();

//this is the state procider 
export const StateProvider = ({reducer, initialState, children})=>(
<StateContext.Provider value={useReducer(reducer, initialState)}>
{children}
</StateContext.Provider>
);

// this is how to export to import in other components
export const useStateValue = ()=> useContext(StateContext)