/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';
// import API_KEY from './ApiKey';
const API_KEY = '20764916-f72ac860731c159c811384133';
const BASE_URL = 'http://pixabay.com/api/?';

const fetchImg = ({ searchQuery = '', currentPage = 1 }) => {
    return axios
        .get(
            `${BASE_URL}=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
        )
        .then(({ data }) => data.hits);
};
export default { fetchImg };
