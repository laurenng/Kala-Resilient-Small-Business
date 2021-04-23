// describes the types used in redux 
export interface AppState {
    currentFund: Fund;
    currentTA: TA;
    currentFilter: Filters;
    currentUser: UserInfo;
}

export default AppState;

export interface Filters {
    [key: string]: {value: any, label: string}
}

export const reasonFilter  = {
    property: false, 
    insurance: false, 
    improveBuild: false, 
    marketing: false, 
    covid: false, 
    employees: false, 
    equipment: false, 
    inventory: false, 
    refinance: false, 
    rent: false
}

export const languageFilter  = {
    Spanish: false,
    Mandarin: false,
    Vietnamese: false,
    Russian: false,
    Swahili: false,
    French: false,
    ASL: false,
    Laotian: false,
    Thai: false,
    English: false,
    Korean: false
}

export const demoFilter  = {
    native: false,
    women: false,
    men: false,
    hispanic: false,
    asian: false,
    black: false,
    islander: false,
    mixed: false,
    mideast: false,
    veteran: false,
    lgbtq: false,
    white: false
}

export const whenFilter = {
    choice: "none"
}

export const bizTypeFilter = {
    choice: "none"
}

export const establishedDate = {
    choice: "none"
}

export const industryFilter = {
    choice: "none"
}

export const filters : Filters = {
    language: {value: languageFilter, label: "language"},
    reason: {value: reasonFilter, label: "reason"},
    when: {value: whenFilter, label: "when"},
    bizType: {value: bizTypeFilter, label: "bizType"},
    established: {value: establishedDate, label: "established"},
    industryType: {value: industryFilter, label: "industryType"},
    demographic: {value: demoFilter, label: "demographic"},
    tribalAff: {value: "", label: "tribalAff"},
    bizName: {value: "", label: "bizName"},
    employeeNum: {value: "", label: "employeeNum"}
}

export interface Fund {
    id: number,
    fundingName: string,
    fundingType: string,
    provider: string,
    website: string,
    startDate: string,
    endDate: string,
    uses: string[],
    description: string,
    terms: string[],
    qualifications: {
        NAICS: number[],
        maxEmployees: number,
        isCollateralReq: boolean,
        establishedBy: string,
        useCases: string[],
        demographics: string[]
    }
}

export interface TA {
    id: number,
    orgName: string,
    description: string,
    website: string,
    phone: string,
    email: string,
    pocName: string,
    languages: string[],
    demographics: string[],
    locations: string[]
}

export interface UserInfo {
    user: string,
    password: string
}

// initializing data 
export const initialUser : UserInfo = {
    user: "",
    password: ""
}

export const initialFund : Fund = {
    id: 1,
    fundingName: "Economic Injury Disaster Loans (EIDL)",
    fundingType: "loan",
    provider: "SBA",
    website: "https://www.sba.gov/funding-programs/loans/coronavirus-relief-options/covid-19-economic-injury-disaster-loans",
    startDate: "2020-12-27",
    endDate: "2020-12-27",
    uses: ["Working capital","insurance"],
    description: "In response to the Coronavirus (COVID-19) pandemic, small business owners, including agricultural businesses, and nonprofit organizations in all U.S. states, Washington D.C., and territories can apply for an Economic Injury Disaster Loan. The EIDL program is designed to provide economic relief to businesses that are currently experiencing a temporary loss of revenue due to COVID-19.",
    terms: ["3.75% for businesses (fixed)", "2.75% for nonprofits (fixed)", "30 years", "No pre-payment penalty or fees"],
    qualifications: {
        NAICS: [11],
        maxEmployees: 1,
        isCollateralReq: false,
        establishedBy: "2019-01-01",
        useCases: ["none", "none"],
        demographics: ["none"]
    }
}

export const initialTA : TA = {
    id: 0,
    orgName: "none",
    description: "Empty",
    website: "none",
    phone: "none",
    email: "none",
    pocName: "Duane Fladland",
    languages: ["Spanish", "Mandarin", "French", "Swahili", "Laotian", "Thai"],
    demographics: ["Black, Latnix"],
    locations: ["State-wide"]
}

