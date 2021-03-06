import { astronautAPI } from '../api/astronautAPI';
import { ASTRONAUT, ASTRONAUT_BY_ID } from './types';

export const getAstronauts = (limit = 6, offset = 0) => {
    return async (dispatch) => {
        const res = await astronautAPI.get(`/?limit=${limit}&offset=${offset}&ordering=name`);
        dispatch({
            type: ASTRONAUT,
            payload: {
                count: res.data.count, data: res.data.results
            }
        });
    };
};

export const getAstronautById = (id) => {
    return async (dispatch) => {
        const res = await astronautAPI.get(`/${id}`);
        dispatch({
            type: ASTRONAUT_BY_ID,
            payload: res.data
        });
    };
};