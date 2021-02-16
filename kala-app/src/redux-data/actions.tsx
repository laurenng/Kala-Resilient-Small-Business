// Actions and their types
import { pages, Post} from "./types";
// import PostPage from "../components/postPage";

export enum actionIdentifier {
  UPDATEPOST,
  GETPOST,
  SETCURRENTPAGE
}

export interface setCurrentPageAction {
  type: actionIdentifier,
  payload: pages
};

export interface updatePostObjectAction {
  type: actionIdentifier,
  payload: Post 
};

// Action creators
export function setCurrentPage(page: pages) : setCurrentPageAction {
  return {
    type: actionIdentifier.SETCURRENTPAGE,
    payload: page
  }
};
export function updatePost(post: Post) : updatePostObjectAction {
  console.log("UPDATING POST ");
  return {
    type: actionIdentifier.UPDATEPOST,
    payload: post
  }
};

export type actions = setCurrentPageAction | updatePostObjectAction 

