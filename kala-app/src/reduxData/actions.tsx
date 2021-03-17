// Actions and their types
import { Fund, TA, Filters} from "./types";
// import PostPage from "../components/postPage";

export enum actionIdentifier {
  UPDATEFUND,
  GETFUND,
  UPDATETA,
  GETTA,
  UPDATEFILTERS
}


export interface updateFiltersAction {
  type: actionIdentifier,
  payload: Filters
}

  export interface updateFundObjectAction {
  type: actionIdentifier,
  payload: Fund 
};

export interface updateTAObjectAction {
  type: actionIdentifier,
  payload: TA 
};

// Action creators
export function updateFund(fund: Fund) : updateFundObjectAction {
  console.log("UPDATING Fund ");
  return {
    type: actionIdentifier.UPDATEFUND,
    payload: fund
  }
};

export function updateTA(TA: TA) : updateTAObjectAction {
  console.log("UPDATING TA");
  return {
    type: actionIdentifier.UPDATETA,
    payload: TA
  }
};

export function updateFilters(filter: Filters) : updateFiltersAction {
  return {
    type: actionIdentifier.UPDATEFILTERS,
    payload: filter
  }
};

export type actions = updateFundObjectAction | updateTAObjectAction | updateFiltersAction; 

