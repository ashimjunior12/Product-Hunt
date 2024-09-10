import { GENERATE,SET_BUTTON_CLICKED,GET_SELECTED_ITEM,HANDLE_SUBMIT, } from "../utils/actions";

const generateReducer = (state,action) => {

 if(action.type===GENERATE){
  return {...state, text: action.payload}
 }
 if(action.type===SET_BUTTON_CLICKED){
  return { ...state, isButtonClicked: true };
 }
 
 if(action.type===GET_SELECTED_ITEM){
    return {...state, selected_item:action.payload}
 }

 if(action.type===HANDLE_SUBMIT){
   return {...state, isSubmitted:true, finalText: state.text}

 }
    throw new Error(`No matching "${action.type}" found`)
  
}
export default generateReducer;

