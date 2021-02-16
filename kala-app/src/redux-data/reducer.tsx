import { actionIdentifier, actions, updatePostObjectAction} from './actions';
import { AppState, pages, initialPost  } from './types';

// Reducer
// The reducer is a function that takes the previous 
// state and an action as parameters, and returns the next state. 
// Here the state of the app is defined by a count variable
// 2 actions are present : increase and decrease
// the actions update count

// State of the app
// It is defined by count

// https://redux.js.org/advanced/usage-with-react-router

const intialState: AppState = { currentPage: pages.HomePage, currentPost: initialPost }


function reducer(state: AppState | undefined, action: actions) : AppState {
    if (state === undefined) {
        return intialState;
    }

    switch (action.type) {
        case actionIdentifier.UPDATEPOST: {
            let addAction = action as updatePostObjectAction; 
            const newState = JSON.parse(JSON.stringify(state));
            newState.currentPost = addAction.payload;
            return newState;
        }
        default:
            return state;
    }
}

export default reducer;