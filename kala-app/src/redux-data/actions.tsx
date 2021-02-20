// Actions and their types
import { pages, Fund, TA} from "./types";
// import PostPage from "../components/postPage";

export enum actionIdentifier {
  UPDATEFUND,
  GETFUND,
  UPDATETA,
  GETTA,
  SETCURRENTPAGE
}

export interface setCurrentPageAction {
  type: actionIdentifier,
  payload: pages
};

export interface updateFundObjectAction {
  type: actionIdentifier,
  payload: Fund 
};

export interface updateTAObjectAction {
  type: actionIdentifier,
  payload: TA 
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

export type actions = setCurrentPageAction | updateFundObjectAction | updateTAObjectAction

