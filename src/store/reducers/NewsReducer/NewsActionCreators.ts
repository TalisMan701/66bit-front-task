import {AppDispatch} from '../../redux-store';
import {newsSlice} from './NewsSlice';
import {newsAPI} from '../../../api/api';

export const getNews = (page: number, count: number) => (dispatch: AppDispatch) => {
    dispatch(newsSlice.actions.getNewsFetching());
    newsAPI
        .getNews(page, count)
        .then((response) => {
            if (page > 1) {
                dispatch(newsSlice.actions.getMoreNewsFetchingSuccess(response.data));
            } else {
                dispatch(newsSlice.actions.getNewsFetchingSuccess(response.data));
            }
        })
        .catch((error) => {
            dispatch(newsSlice.actions.getNewsFetchingError(error.message));
        });
};
