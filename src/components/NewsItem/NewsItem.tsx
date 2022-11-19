import React, {FC} from 'react';
import classes from './NewsItem.module.scss';
import {INews} from '../../models/INews';
import {useAppSelector} from '../../hooks/reduxHooks';

interface NewsItemProps {
    item: INews;
}

const NewsItem: FC<NewsItemProps> = ({item}) => {
    const {currentTheme} = useAppSelector((state) => state.themesReducer);
    return (
        <div className={classes.wrapper} style={{backgroundColor: currentTheme?.secondColor}}>
            <div className={classes.title} style={{color: currentTheme?.textColor}}>
                {item.title}
            </div>
            <div className={classes.content} style={{color: currentTheme?.textColor}}>
                {item.content}
            </div>
        </div>
    );
};

export default NewsItem;
