import { actionIdentifier, actions, updateFundObjectAction, updateFiltersAction} from './actions';
import { AppState, filters, initialFund, initialTA } from './types';

// Reducer
// The reducer is a function that takes the previous 
// state and an action as parameters, and returns the next state. 
// Here the state of the app is defined by a count variable
// 2 actions are present : increase and decrease
// the actions update count

// State of the app
// It is defined by count

// https://redux.js.org/advanced/usage-with-react-router

const intialState: AppState = { currentFund: initialFund, currentTA: initialTA, currentFilter: filters}


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
            newState.currentFilters[addAction.payload.group].value[addAction.payload.filter].value = addAction.payload.value;
            return newState;
        }
        default:
            return state;
    }
}

export default reducer;