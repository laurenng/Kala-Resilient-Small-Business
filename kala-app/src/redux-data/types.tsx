// State of the app
export enum pages {
    HomePage,
    OtherPage
}

export interface AppState {
    currentPage: pages;
    currentFund: Fund;
    currentTA: TA;
}

export const initialFund : Fund = {
    id: 1,
    name: "Economic Injury Disaster Loans (EIDL)",
    type: "loan",
    provider: "SBA",
    url: "https://www.sba.gov/funding-programs/loans/coronavirus-relief-options/covid-19-economic-injury-disaster-loans",
    startDate: "2020-12-27",
    endDate: "2020-12-27",
    uses: ["Working capital","Normal operating expenses"],
    description: "In response to the Coronavirus (COVID-19) pandemic, small business owners, including agricultural businesses, and nonprofit organizations in all U.S. states, Washington D.C., and territories can apply for an Economic Injury Disaster Loan. The EIDL program is designed to provide economic relief to businesses that are currently experiencing a temporary loss of revenue due to COVID-19.",
    terms: ["3.75% for businesses (fixed)", "2.75% for nonprofits (fixed)", "30 years", "No pre-payment penalty or fees"],
    qualifications: {
        NAICS: [11],
        maxEmployees: 1,
        isCollateralReq: false,
        establishedBy: "2019-01-01"
    }
}

export interface Fund {
    id: number,
    name: string,
    type: string,
    provider: string,
    url: string,
    startDate: string,
    endDate: string,
    uses: string[],
    description: string,
    terms: string[],
    qualifications: {
        NAICS: number[],
        maxEmployees: number,
        isCollateralReq: boolean,
        establishedBy: string
    }
}

export const initialTA : TA = {
    id: 0,
    name: "none",
    description: "Empty",
    website: "none",
    phone: "none",
    email: "none",
    pocName: "Duane Fladland",
    languages: ["Spanish", "Mandarin", "French", "Swahili", "Laotian", "Thai"],
    demographics: ["Black, Latnix"],
    locations: ["State-wide"]
}

export interface TA {
    id: number,
    name: string,
    description: string,
    website: string,
    phone: string,
    email: string,
    pocName: string,
    languages: string[],
    demographics: string[],
    locations: string[]
}

export default AppState;
