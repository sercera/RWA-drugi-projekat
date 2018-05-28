import { takeEvery, call, put} from "redux-saga/effects";

import{
    getImagesSuccessfully,
    GET_IMAGES,
    getHeroSuccessfully,
    GET_HERO
} from "../actions/index";

import {
    fetchImages
} from "../../api/index";

//HERO FETCH
export function* watcherImagesLoadSaga() {
    yield takeEvery(GET_IMAGES, imagesFetchSaga);
}
export function* watcherHeroLoadSaga(){
    yield takeEvery(GET_HERO, heroFetchSaga);
}


function* imagesFetchSaga()
{
    const response = yield call (fetchImages);
    if(response){ 
        yield put(getImagesSuccessfully(response));
    }
}

function* heroFetchSaga(action)
{
    
    const response = yield call (fetchImages)
    if(response){
        console.log(response[0].id);
        const data=response.filter(x=>x.id.toString()===action.payload.toString());
        console.log(data);
        yield put(getHeroSuccessfully(data[0]));
    }
}