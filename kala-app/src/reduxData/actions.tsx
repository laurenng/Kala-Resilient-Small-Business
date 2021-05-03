// Actions and their types
import { Fund, TA, Filters, UserInfo} from "./types";
// import PostPage from "../components/postPage";

export enum actionIdentifier {
  UPDATEFUND,
  GETFUND,
  UPDATETA,
  GETTA,
  UPDATEFILTERS,
  UPDATEUSER,
  UPDATESIGNIN,
  LOG_OUT_USER
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

export interface updateUserAction {
  type: actionIdentifier,
  payload: UserInfo 
};

export interface updateSignInAction {
  type: actionIdentifier,
  payload: Boolean 
};

// Action creators
export function updateFund(fund: Fund) : updateFundObjectAction {
  console.log("UPDATING Fund ");
  return {
    type: actionIdentifier.UPDATEFUND,
    payload: fund
  }
};

export function updateSignIn(statement: Boolean) : updateSignInAction {
  return {
    type: actionIdentifier.UPDATESIGNIN,
    payload: statement
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

export function updateUser(info: UserInfo) : updateUserAction {
  return {
    type: actionIdentifier.UPDATEUSER,
    payload: info
  }
};

export function clearData() {
  console.log("dsfhjadsfls")
  return {
    type: actionIdentifier.LOG_OUT_USER
  }
};

export type actions = updateFundObjectAction | updateTAObjectAction | updateFiltersAction | updateUserAction | updateSignInAction; 

