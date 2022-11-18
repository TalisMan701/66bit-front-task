import {INews} from '../../../models/INews';
import {createSlice} from '@reduxjs/toolkit';

interface NewsState {
    muchNews: Array<INews>;
}

const initialState: NewsState = {
    muchNews: [],
};

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
});

export default newsSlice.reducer;
