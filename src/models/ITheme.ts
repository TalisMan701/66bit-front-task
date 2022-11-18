import {ThemeNameType} from './ThemeNameType';

export interface ITheme {
    id: number;
    name: ThemeNameType;
    mainColor: string;
    secondColor: string;
    title: string;
    textColor: string;
}
