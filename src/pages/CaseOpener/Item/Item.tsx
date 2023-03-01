import React, {FC} from 'react';
import classes from './Item.module.scss';
import {NFTData} from '../CaseOpener';

interface ItemProps {
    item: NFTData;
}

const Item: FC<ItemProps> = ({item}) => {
    return (
        <div className={classes.item}>
            <div className={classes.item}>
                <div style={{backgroundImage: `url(${item.img})`}} className={classes.img} />
            </div>
        </div>
    );
};

export default Item;
