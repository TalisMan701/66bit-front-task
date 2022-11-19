import React, {FC, RefObject, useCallback, useEffect, useRef} from 'react';
import classes from './News.module.scss';
import {getNews} from '../../store/reducers/NewsReducer/NewsActionCreators';
import {useAppDispatch, useAppSelector} from '../../hooks/reduxHooks';
import NewsItem from '../../components/NewsItem/NewsItem';
import debounce from 'lodash.debounce';
import {newsSlice} from '../../store/reducers/NewsReducer/NewsSlice';
import PullToRefresh from 'react-simple-pull-to-refresh';
import {newsAPI} from '../../api/api';

const News: FC = () => {
    const {currentTheme} = useAppSelector((state) => state.themesReducer);
    const dispatch = useAppDispatch();
    const {muchNews, fetchGetNews, errorGetNews, page, count} = useAppSelector(
        (state) => state.newsReducer,
    );

    const refWrapper = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        dispatch(getNews(1, count));
    }, []);

    const debouncedHandlerScroll = debounce((e: React.UIEvent<HTMLDivElement>) => {
        const scrollTop = (e.target as HTMLDivElement).scrollTop;
        const offsetHeight = (e.target as HTMLDivElement).offsetHeight;
        const scrollHeight = (e.target as HTMLDivElement).scrollHeight;
        if (scrollTop + offsetHeight >= scrollHeight - 10) {
            dispatch(getNews(page + 1, count));
            dispatch(newsSlice.actions.updatePage(page + 1));
        }
    }, 100);

    const onRefresh = async () => {
        dispatch(newsSlice.actions.getNewsFetching());
        try {
            const response = await newsAPI.getNews(1, count);
            dispatch(newsSlice.actions.getNewsFetchingSuccess(response.data));
        } catch (e) {
            dispatch(newsSlice.actions.getNewsFetchingError('Refresh error'));
        }
    };

    return (
        <>
            <PullToRefresh onRefresh={onRefresh}>
                <div
                    className={classes.wrapper}
                    style={{backgroundColor: currentTheme?.mainColor}}
                    ref={refWrapper}
                    onScroll={debouncedHandlerScroll}
                >
                    <div
                        className={classes.refreshBtn}
                        style={{color: currentTheme?.textColor}}
                        onClick={onRefresh}
                    >
                        Обновить
                    </div>
                    {muchNews.map((news) => (
                        <NewsItem key={news.id} item={news} />
                    ))}
                </div>
            </PullToRefresh>
        </>
    );
};

export default News;
