import axios, {AxiosInstance} from "axios";
import {ThemeNameType} from "../models/ThemeNameType";

const backendURL = 'https://frontappapi.dock7.66bit.ru/api/'

const instance: AxiosInstance = axios.create({
    withCredentials: true,
    baseURL: backendURL
})

export const newsAPI = {
    getNews(page: number = 1, count: number = 10){
        return instance.get(`news/get?page=${page}&count=${count}`)
    }
}

export const themeAPI = {
    getTheme(name: ThemeNameType = "dark"){
        return instance.get(`theme/get?name=${name}`)
    }
}