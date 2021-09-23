import axios from "axios";

const BASE_URL = "https://hagnapi.herokuapp.com";

export const HagnashApi = {
    getImage: (imagePath) => `${BASE_URL}/${imagePath}`,
    getPlace: (placeId) => axios.get(`${BASE_URL}/places/getPlace/${placeId}`),
    getPlaceScore: (placeId) => axios.get(`${BASE_URL}/rateAverage/${placeId}`),
    searchPlaces: (searchText) => axios.get(`${BASE_URL}/places/${searchText}`),
    getComments: (placeId) => axios.get(`${BASE_URL}/comments/${placeId}`),
    addComment: (comment) => axios.post(`${BASE_URL}/comments`, {...comment})
}