export type Theme = {
    [details: string]: string;
};

export interface Themes {
    [details: string]: Theme;
}

export const themes: Themes = {
    camp: {
        dark: '#13220F',
        second: '#3E7967',
        third: '#94AF84',
        backup: '#F49140',
        next: '#FEB455',
    },
    paris: {
        dark: '#4B3B52',
        second: '#895C69',
        third: '#D29570',
        backup: '#F5C487',
        next: '#FCDAA5',
    },
    blue: {
        dark: '#030027',
        second: '#151e3f',
        third: '#547AA5',
        backup: '#c16e70',
        next: '#dc9e82',
    },
    green: {
        dark: '#161811',
        second: '#3b4834',
        third: '#6c7355',
        backup: '#989e8f',
        next: '#c1c9cd',
    },
};

// burntOrange: {
//     dark: '#321311',
//     second: '#8b2f23',
//     third: '#bd5946',
//     backup: '#f7896b',
//     next: '#cea299',
// },
// mushroom: {
//     dark: '#340101',
//     second: '#612601',
//     third: '#ad6423',
//     backup: '#c8986c',
//     next: '#f6e3d6',
// },
// monument: {
//     dark: '#1A1B1C',
//     second: '#574759',
//     third: '#87586C',
//     backup: '#BF6370',
//     next: '#ED6464',
// },
// holidays: {
//     dark: '#1d2216',
//     second: '#656a5d',
//     third: '#a62d1d',
//     backup: '#c8756a',
//     next: '#fff9e6',
// },