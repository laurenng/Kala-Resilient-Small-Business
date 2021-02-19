// Actions and their types
<<<<<<< HEAD
import { pages, changedFilter } from "./types";
// import PostPage from "../components/postPage";

export enum actionIdentifier {
  SETCURRENTPAGE,
  UPDATEFILTERS
=======
import { pages, Fund, TA} from "./types";
// import PostPage from "../components/postPage";

export enum actionIdentifier {
  UPDATEFUND,
  GETFUND,
  UPDATETA,
  GETTA,
  SETCURRENTPAGE
>>>>>>> c781d5c78ea655b1c7c53554fb1f79861b5fbef7
}

export interface setCurrentPageAction {
  type: actionIdentifier,
  payload: pages
};

<<<<<<< HEAD
export interface updateFiltersAction {
  type: actionIdentifier,
  payload: changedFilter
=======
export interface updateFundObjectAction {
  type: actionIdentifier,
  payload: Fund 
};

export interface updateTAObjectAction {
  type: actionIdentifier,
  payload: TA 
>>>>>>> c781d5c78ea655b1c7c53554fb1f79861b5fbef7
};

// Action creators
export function setCurrentPage(page: pages) : setCurrentPageAction {
  return {
    type: actionIdentifier.SETCURRENTPAGE,
    payload: page
  }
};
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

<<<<<<< HEAD
export function updateFilters(filter: changedFilter) : updateFiltersAction {
  return {
    type: actionIdentifier.UPDATEFILTERS,
    payload: filter
  }
};


export type actions = setCurrentPageAction | updateFiltersAction;
=======
export type actions = setCurrentPageAction | updateFundObjectAction | updateTAObjectAction
>>>>>>> c781d5c78ea655b1c7c53554fb1f79861b5fbef7

