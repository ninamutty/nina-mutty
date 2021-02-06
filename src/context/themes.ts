export type Theme = {
    900: string;
    800: string;
    300: string;
    200: string;
};

export interface Themes {
    [details: string]: Theme;
}

export const themes: Themes = {
    blueGray: {
        900: '#0F172A',
        800: '#1E293B',
        300: '#CBD5E1',
        200: '#E2E8F0',
    },
    warmGray: {
        900: '#1C1917',
        800: '#292524',
        300: '#D6D3D1',
        200: '#E7E5E4',
    },
    armyGreen: {
        900: '#5B6057',
        800: '#989E94',
        300: '#a5a58d',
        200: '#b7b7a4',
    },
    camel: {
        900: '#A7998B',
        800: '#C2B8AE',
        300: '#A7998B',
        200: '#C2B8AE'
    },
    cran: {
        900: '#5B6057',
        800: '#989E94',
        300: '#a5a58d',
        200: '#b7b7a4'
    },
};
