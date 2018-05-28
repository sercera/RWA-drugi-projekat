import { GET_HERO_OK } from "../actions";

const heroReducer = function (state=null,action){
    switch (action.type){
        case GET_HERO_OK:
            return action.payload;
        default:
            return state;
    }
}
export default heroReducer;