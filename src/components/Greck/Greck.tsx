import React, {useEffect, useState} from 'react';
import img from './греческий алфавит.png';
import img2 from './GreckforSite.jpg';
import classes from './Greck.module.scss';

const data = [
    {x: -10, y: -100, text: 'Альфа'},
    {x: -180, y: -100, text: 'Бета'},
    {x: -360, y: -100, text: 'Гамма'},
    {x: -540, y: -100, text: 'Дельта'},
    {x: -715, y: -100, text: 'Эпсилон'},
    {x: -885, y: -100, text: 'Дзета'},
    {x: -10, y: -260, text: 'Эта'},
    {x: -180, y: -260, text: 'Тета'},
    {x: -360, y: -260, text: 'Йота'},
    {x: -540, y: -260, text: 'Каппа'},
    {x: -715, y: -260, text: 'Лямбда'},
    {x: -885, y: -260, text: 'Мю'},
    {x: -10, y: -410, text: 'Ню'},
    {x: -180, y: -410, text: 'Кси'},
    {x: -360, y: -410, text: 'Омикрон'},
    {x: -540, y: -410, text: 'Пи'},
    {x: -715, y: -410, text: 'Ро'},
    {x: -885, y: -410, text: 'Сигма'},
    {x: -10, y: -575, text: 'Тау'},
    {x: -180, y: -575, text: 'Ипсилон'},
    {x: -360, y: -575, text: 'Фи'},
    {x: -540, y: -575, text: 'Хи'},
    {x: -715, y: -575, text: 'Пси'},
    {x: -885, y: -575, text: 'Омега'},
];

const dataV2 = [
    {x: 0, y: 0, text: 'Альфа'},
    {x: -125, y: 0, text: 'Бета (Вита)'},
    {x: -250, y: 0, text: 'Гамма'},
    {x: -375, y: 0, text: 'Дельта'},
    {x: -500, y: 0, text: 'Эпсилон'},
    {x: -625, y: 0, text: 'Дзета (Зита)'},
    {x: 0, y: -75, text: 'Эта (Ита)'},
    {x: -125, y: -75, text: 'Тета (Фита)'},
    {x: -250, y: -75, text: 'Йота'},
    {x: -375, y: -75, text: 'Каппа'},
    {x: -500, y: -75, text: 'Лямбда (Лямда)'},
    {x: -625, y: -75, text: 'Мю (Ми)'},
    {x: 0, y: -150, text: 'Ню (Ни)'},
    {x: -125, y: -150, text: 'Кси'},
    {x: -250, y: -150, text: 'Омикрон'},
    {x: -375, y: -150, text: 'Пи'},
    {x: -500, y: -150, text: 'Ро'},
    {x: -625, y: -150, text: 'Сигма'},
    {x: 0, y: -225, text: 'Тау (Тав)'},
    {x: -125, y: -225, text: 'Ипсилон'},
    {x: -250, y: -225, text: 'Фи'},
    {x: -375, y: -225, text: 'Хи'},
    {x: -500, y: -225, text: 'Пси'},
    {x: -625, y: -225, text: 'Омега'},
];

function shuffle(array: any) {
    const temp = [...array];
    for (let i = temp.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
        [temp[i], temp[j]] = [temp[j], temp[i]];
    }
    return temp;
}

const Greck = () => {
    const [tempArray, setTempArray] = useState(shuffle(dataV2));
    const [item, setItem] = useState(tempArray[0]);
    const [index, setIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    useEffect(() => {
        setItem(tempArray[index]);
    }, [index]);

    const getNewArray = () => {
        const temp = shuffle(dataV2);
        setTempArray(temp);
        setItem(temp[0]);
        setIndex(0);
    };

    return (
        <div
            style={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <div
                style={{
                    cursor: 'pointer',
                }}
                onClick={getNewArray}
            >
                New
            </div>
            <div>
                <span>
                    {index + 1}/{tempArray.length}
                </span>
            </div>
            <div style={{width: 125, height: 75, overflow: 'hidden'}}>
                <img
                    src={img2}
                    alt=''
                    className={classes.img}
                    style={{
                        transition: 'all 2s easy',
                        transform: `translate(${item.x}px, ${item.y}px)`,
                    }}
                />
            </div>
            <div
                style={{
                    cursor: 'pointer',
                }}
                onClick={() => {
                    if (index >= tempArray.length - 1) {
                        getNewArray();
                    } else {
                        setIndex((prev) => (prev >= tempArray.length - 1 ? 0 : prev + 1));
                    }
                    setShowAnswer(false);
                }}
            >
                Next
            </div>
            <div
                style={{
                    cursor: 'pointer',
                }}
                onClick={() => {
                    setShowAnswer((prev) => !prev);
                }}
            >
                Show answer
            </div>
            <div>{showAnswer ? item.text : ''}</div>
        </div>
    );
};

export default Greck;
