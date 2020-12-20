export type Theme = {
    [details: string]: string;
};

export interface Themes {
    [details: string]: Theme;
}

export const themes: Themes = {
    camp: {
        dark: '#3F3727',
        darkCompliment: '#594E36',
        lightCompliment: '#EEF0F2',
        light: '#DADDD8',
    },
    blue: {
        dark: '#17283A',
        darkCompliment: '#233D58',
        lightCompliment: '#415a77',
        light: '#778da9',
    },
    green: {
        dark: '#5B6057',
        darkCompliment: '#989E94',
        lightCompliment: '#a5a58d',
        light: '#b7b7a4',
    },
    camel: {
        dark: '#A7998B',
        darkCompliment: '#C2B8AE',
        lightCompliment: '#A7998B',
        light: '#C2B8AE',
    },
    red: {
        dark: '#3B0D11',
        darkCompliment: '#64161D',
        lightCompliment: '#c9867f',
        light: '#e9cac3',
    },
};
