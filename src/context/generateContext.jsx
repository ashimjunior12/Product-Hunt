import React, {useEffect,useContext, useReducer} from "react";
import { GENERATE,SET_BUTTON_CLICKED,GET_SELECTED_ITEM, HANDLE_SUBMIT, } from "../utils/actions";
import reducer from "../reducers/generateReducer";


 const GenerateContext = React.createContext();


 const initialState = {
  text:'',
  isButtonClicked: false,
  selected_item:'',
  isSubmitted: false,
  finalText: ''
 }


export const GenerateProvider = ({children}) =>{

 const [state, dispatch]= useReducer(reducer,initialState);

 const handleInput = (e) =>{
  dispatch({type:GENERATE, payload: e.target.value})
 }

 const getSelectedItem = (e) =>{
   dispatch({type: GET_SELECTED_ITEM,payload:e.target.value})
 }

 
 const handleButtonClick = ()=>{
  dispatch({type:SET_BUTTON_CLICKED})
 }
 
 const handleSubmit = () => {
   dispatch({ type: HANDLE_SUBMIT, payload:{...state} });
 };

 


 return (
  <GenerateContext.Provider value={{...state,handleInput,handleButtonClick,getSelectedItem,handleSubmit}}>
   {children}
  </GenerateContext.Provider>
 )
}

export const useGenerateContext = ()=>{
 return useContext(GenerateContext);
}
