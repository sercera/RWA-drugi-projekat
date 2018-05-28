export const GET_IMAGES_OK="GET_IMAGES_OK";
export const GET_IMAGES="GET_IMAGES";
export const GET_HERO="GET_HERO";
export const GET_HERO_OK="GET_HERO_OK";


export const getImages = () => ({type:GET_IMAGES});
export const getImagesSuccessfully = (images) => ({type:GET_IMAGES_OK, payload:images});
export const getHero = (id) => ({type:GET_HERO, payload:id});
export const getHeroSuccessfully = (hero) => ({type:GET_HERO_OK, payload: hero});