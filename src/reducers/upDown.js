const initialState=10;

const changeTheNumber=(state=initialState,action)=>{
    switch(action.type){
        case "INCREAMENT":return state + action.payload;
        case "DECREMENT":return state - 1;
        default:return state;
    }
}

export default changeTheNumber;