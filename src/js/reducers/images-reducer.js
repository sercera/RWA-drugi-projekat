import {GET_IMAGES_OK} from "../actions/index";


const imagesReducer = function(state=null, action){
    switch (action.type){
        case GET_IMAGES_OK:
            return [...action.payload.map(el=>{return {img:el.img,id:el.id}})];
        default: 
            return state;    
    }
};

export default imagesReducer;