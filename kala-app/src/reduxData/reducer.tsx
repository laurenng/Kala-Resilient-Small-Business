import { actionIdentifier, actions, updateFundObjectAction, updateFiltersAction, updateUserAction, updatePOCAction, updateSignInAction} from './actions';
import { AppState, filters, initialFund, initialTA, initialUser, initialPOC } from './types';

// Reducer
// The reducer is a function that takes the previous 
// state and an action as parameters, and returns the next state. 
// Here the state of the app is defined by a count variable
// 2 actions are present : increase and decrease
// the actions update count

// State of the app
// It is defined by count

// https://redux.js.org/advanced/usage-with-react-router

const intialState: AppState = { 
    currentFund: initialFund, 
    currentTA: initialTA, 
    currentFilter: filters, 
    currentUser: initialUser,
    currentPOC: initialPOC,
    currentBiz: "",
    signedIn: false }


function reducer(state: AppState | undefined, action: actions) : AppState {
    if (state === undefined) {
        return intialState;
    }

    switch (action.type) {
        case actionIdentifier.UPDATEFUND: {
            let addAction = action as updateFundObjectAction; 
            const newState = JSON.parse(JSON.stringify(state));
            newState.currentFund = addAction.payload;
            return newState;
        }
        case actionIdentifier.UPDATETA: {
            let addAction = action as updateFundObjectAction; 
            const newState = JSON.parse(JSON.stringify(state));
            newState.currentTA = addAction.payload;
            return newState;
        }
        case actionIdentifier.UPDATEFILTERS: {
            let addAction = action as updateFiltersAction; //  treat the `action` object as a JoinObject

            const newState = JSON.parse(JSON.stringify(state));
            newState.currentFilters = addAction.payload;
            return newState;
        }
        case actionIdentifier.UPDATEUSER: {
            let addAction = action as updateUserAction; //  treat the `action` object as a JoinObject

            const newState = JSON.parse(JSON.stringify(state));
            newState.currentUser = addAction.payload;
            return newState;
        }
        case actionIdentifier.UPDATESIGNIN: {
            let addAction = action as updateSignInAction; //  treat the `action` object as a JoinObject

            const newState = JSON.parse(JSON.stringify(state));
            newState.signedIn = addAction.payload;
            return newState;
        }
        case actionIdentifier.UPDATEPOC: {
            let addAction = action as updatePOCAction; //  treat the `action` object as a JoinObject

            const newState = JSON.parse(JSON.stringify(state));
            newState.currentPOC = addAction.payload;
            return newState;
        }
        case actionIdentifier.LOG_OUT_USER: {
            console.log("EMPTY U BUTT")
            const newState = JSON.parse(JSON.stringify(state));
            newState.currentUser = undefined
            newState.currentFilter = undefined
            return newState;
        };
        default:
            return state;
    }
}

export default reducer;