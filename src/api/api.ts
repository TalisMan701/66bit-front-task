import axios, {AxiosInstance} from 'axios';
import {ThemeNameType} from '../models/ThemeNameType';
import {INews} from '../models/INews';
import {ITheme} from '../models/ITheme';

const backendURL = 'https://frontappapi.dock7.66bit.ru/api/';

const instance: AxiosInstance = axios.create({
    baseURL: backendURL,
});

export const newsAPI = {
    getNews(page: number, count: number) {
        return instance.get<INews[]>(`news/get?page=${page}&count=${count}`);
    },
};

export const themeAPI = {
    getTheme(name: ThemeNameType = 'dark') {
        return instance.get<ITheme>(`theme/get?name=${name}`);
    },
};
