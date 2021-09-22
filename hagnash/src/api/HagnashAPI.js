import axios from "axios";

const BASE_URL = "https://hagnapi.herokuapp.com";

export const HagnashApi = {
    getImage: (imagePath) => `${BASE_URL}/${imagePath}`,
    getPlace: (placeId) => axios.get(`${BASE_URL}/places/getPlace/${placeId}`),
    getComments: (placeId) => axios.get(`${BASE_URL}`),
    addComment: (placeId, comment) => axios.post(`${BASE_URL}/addComment`, {...comment})
}