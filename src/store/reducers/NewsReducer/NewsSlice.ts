import {INews} from '../../../models/INews';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface NewsState {
    muchNews: Array<INews>;
    fetchGetNews: boolean;
    errorGetNews: string;
    page: number;
    count: number;
}

const initialState: NewsState = {
    muchNews: [],
    fetchGetNews: false,
    errorGetNews: '',
    page: 1,
    count: 10,
};

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        getNewsFetching(state) {
            state.fetchGetNews = true;
        },
        getNewsFetchingSuccess(state, action: PayloadAction<INews[]>) {
            state.fetchGetNews = false;
            state.errorGetNews = '';
            state.muchNews = action.payload;
            state.page = 1;
        },
        getMoreNewsFetchingSuccess(state, action: PayloadAction<INews[]>) {
            state.fetchGetNews = false;
            state.errorGetNews = '';
            state.muchNews = [...state.muchNews, ...action.payload];
        },
        getNewsFetchingError(state, action: PayloadAction<string>) {
            state.fetchGetNews = false;
            state.errorGetNews = action.payload;
        },
        updatePage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
    },
});

export default newsSlice.reducer;
