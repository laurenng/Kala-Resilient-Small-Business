// State of the app
export enum pages {
    HomePage,
    OtherPage
}

export interface AppState {
    currentPage: pages;
}

export default AppState;
