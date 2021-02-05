// Actions and their types
import { pages } from "./types";
// import PostPage from "../components/postPage";

export enum actionIdentifier {
  SETCURRENTPAGE
}

export interface setCurrentPageAction {
  type: actionIdentifier,
  payload: pages
};

// Action creators
export function setCurrentPage(page: pages) : setCurrentPageAction {
  return {
    type: actionIdentifier.SETCURRENTPAGE,
    payload: page
  }
};

export type actions = setCurrentPageAction 

