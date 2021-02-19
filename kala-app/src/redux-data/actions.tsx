// Actions and their types
import { pages, changedFilter } from "./types";
// import PostPage from "../components/postPage";

export enum actionIdentifier {
  SETCURRENTPAGE,
  UPDATEFILTERS
}

export interface setCurrentPageAction {
  type: actionIdentifier,
  payload: pages
};

export interface updateFiltersAction {
  type: actionIdentifier,
  payload: changedFilter
};

// Action creators
export function setCurrentPage(page: pages) : setCurrentPageAction {
  return {
    type: actionIdentifier.SETCURRENTPAGE,
    payload: page
  }
};

export function updateFilters(filter: changedFilter) : updateFiltersAction {
  return {
    type: actionIdentifier.UPDATEFILTERS,
    payload: filter
  }
};


export type actions = setCurrentPageAction | updateFiltersAction;

