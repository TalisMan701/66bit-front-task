import React, {useEffect, useState} from 'react';
import classes from './CaseOpener.module.scss';
import lodash from 'lodash';
import Item from './Item/Item';
import Lenis from '@studio-freight/lenis';

type Rarity = 'common' | 'rare' | 'ultraRare';

export interface NFTData {
    index: number;
    img: string;
    cid: string;
    rarity: Rarity;
}

const nfts: NFTData[] = [
    {
        index: 0,
        img: 'https://bafybeie562kbomuteitcznj6dqxdud4xe2tmwbymysfh3tfw2ozyiq6s3m.ipfs.nftstorage.link/',
        cid: 'bafkreibipqzz7rvyl4a5kqzwezqthriqc4silzt7isnjog6ugbzlslq4bi',
        rarity: 'ultraRare',
    },
    {
        index: 1,
        img: 'https://bafybeieiqsuu2hovs2zvfdjmluu53vvthzdthznqvch3oo4lxwnp5y4x2y.ipfs.nftstorage.link/',
        cid: 'bafkreih5wyo6m6lxqnyikp3vka3dtrlwkoflbwq6fxvvjne4xivmpbacoi',
        rarity: 'ultraRare',
    },
    {
        index: 2,
        img: 'https://cdnn21.img.ria.ru/images/07e4/0a/1e/1582334353_954:0:3002:2048_1280x0_80_0_0_bd09f0e5ee7fc1204e58be001f544708.jpg',
        cid: 'bafkreih5wyo6m6lxqnyikp3vka3dtrlwkoflbwq6fxvvjne4xivmpbacoi',
        rarity: 'rare',
    },
    {
        index: 3,
        img: 'https://images.prismic.io/doge/38345885-e17f-45b7-b68f-53b366e1218a_velsh-korgi_pembrok_4.jpg?auto=compress,format&rect=0,0,766,766&w=456&h=456',
        cid: 'bafkreih5wyo6m6lxqnyikp3vka3dtrlwkoflbwq6fxvvjne4xivmpbacoi',
        rarity: 'rare',
    },
    {
        index: 4,
        img: 'https://artemonsalon.ru/wp-content/uploads/2020/11/95_oooo.plus_.png',
        cid: 'bafkreih5wyo6m6lxqnyikp3vka3dtrlwkoflbwq6fxvvjne4xivmpbacoi',
        rarity: 'rare',
    },
    {
        index: 5,
        img: 'https://zoo-galereya.ru/img/work/article/a_430_509.jfif',
        cid: 'bafkreih5wyo6m6lxqnyikp3vka3dtrlwkoflbwq6fxvvjne4xivmpbacoi',
        rarity: 'rare',
    },
    {
        index: 6,
        img: 'https://cdn.7days.ru/pic/816/979964/1432700/86.jpg',
        cid: 'bafkreih5wyo6m6lxqnyikp3vka3dtrlwkoflbwq6fxvvjne4xivmpbacoi',
        rarity: 'rare',
    },
    {
        index: 7,
        img: 'https://phonoteka.org/uploads/posts/2022-07/thumbs/1658232026_3-phonoteka-org-p-korgi-oboi-na-rabochii-stol-3.jpg',
        cid: 'bafkreih5wyo6m6lxqnyikp3vka3dtrlwkoflbwq6fxvvjne4xivmpbacoi',
        rarity: 'common',
    },
    {
        index: 8,
        img: 'https://img.aboutanimal.ru/images/2017/12/20/velsh-korgi-pembrok-1513763209.jpg',
        cid: 'bafkreih5wyo6m6lxqnyikp3vka3dtrlwkoflbwq6fxvvjne4xivmpbacoi',
        rarity: 'common',
    },
    {
        index: 9,
        img: 'https://zooclub.ru/attach/12000/12336.jpg',
        cid: 'bafkreih5wyo6m6lxqnyikp3vka3dtrlwkoflbwq6fxvvjne4xivmpbacoi',
        rarity: 'common',
    },
];

type Chances = {[key: string]: number};

const playChances = {
    common: 80,
    rare: 15,
    ultraRare: 5,
};

const fakeChances = {
    common: 70,
    rare: 20,
    ultraRare: 10,
};

const mapChances = (chances: Chances) => {
    return Object.fromEntries(
        Object.entries(chances).map(([name], i) => [
            name,
            Object.values(chances)
                .slice(0, i + 1)
                .reduce((prev, cur) => prev + cur),
        ]),
    );
};

const chancedRandom = (chances: Chances) => {
    const random = Math.random();
    const [name] = Object.entries(mapChances(chances)).find(
        ([, chance]) => random * 100 < chance,
    ) as [Rarity, number];
    return name;
};

const CaseOpener = () => {
    const [properties, setProperties] = useState<{
        result: NFTData;
        items: NFTData[];
        offset: number;
    } | null>(null);
    const [margin, setMargin] = useState<number>(0);

    useEffect(() => {
        const getRandomItem = (chances: Chances) => {
            const rolledRarity = chancedRandom(chances);
            const rolledItems = nfts.filter(({rarity}) => rarity === rolledRarity);
            return lodash.sample(rolledItems) as NFTData;
        };

        const result = getRandomItem(playChances);
        const itemWidth = 150 + 10;
        const resultIndex = lodash.random(40, 60);
        const innerOffset = lodash.random(0, 0.99);

        setProperties({
            result: result,
            items: [
                ...new Array(resultIndex).fill().map(() => getRandomItem(fakeChances)),
                result,
                ...new Array(4).fill().map(() => getRandomItem(fakeChances)),
            ],
            offset: itemWidth * (resultIndex + 0.5) - 255,
        });

        // setTimeout(() => props.onDrop(result), 10000);
    }, []);

    useEffect(() => setMargin(properties ? -properties.offset : 0), [properties?.offset]);

    return (
        <div className={classes.container}>
            <div className={classes.display}>
                <div className={classes.screen} />
                <div className={classes.divider} />
                <div className={classes.roller} style={{marginLeft: margin}}>
                    {properties?.items?.map((item, i) => (
                        <Item item={item} key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CaseOpener;
