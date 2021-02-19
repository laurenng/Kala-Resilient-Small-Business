// State of the app
export enum pages {
    HomePage,
    OtherPage
}

export const ageFilters : Filters = {
    underTwelve: {value: false, label: "<12"},
    twelveToSeventeen: {value: false, label: "12 - 17"},
    eighteenToTwentyfour: {value: false, label: "18 - 24"},
    twentyfiveToThirtyfour: {value: false, label: "25 - 34"},
    thirtyfiveToFortyfour: {value: false, label: "35 - 44"},
    fortyfiveToFiftyfour: {value: false, label: "45 - 54"},
    fiftyfiveToSixtyfour: {value: false, label: "55 - 64"},
    sixtyfiveToSeventyfour: {value: false, label: "65 - 74"},
    seventyfiveOrOlder: {value: false, label: "75+"}
}

export const genderFilter : Filters = {
    male: {value: false, label: "male"},
    female: {value: false, label: "female"},
    nb: {value: false, label: "nonbinary"},
}

export interface changedFilter {
    group: keyof typeof filters;
    filter: keyof typeof ageFilters;
    value: boolean;
}

export interface Filters {
    [key: string]: {value: any, label: string}
}

export const filters : Filters = {
    age: {value: ageFilters, label: "age"},
    gender: {value: genderFilter, label: "gender"}
}

export interface AppState {
    currentPage: pages;
}



export default AppState;
