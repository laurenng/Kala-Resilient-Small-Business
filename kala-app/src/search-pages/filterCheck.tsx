// Needs to be case insensitive since the back end has capitalization but
// types don't, might want to standardize this, temp fix

// @dSet - Set<String> - set of strings corresponding to back end data values
// @filter - String[] - array of strings corresponding to the values the user
// selected on the onboarding form
// returns boolean representing whether or not the back-end data object had
// and matching values with the filter
export default function booleanCheck(dSet: Set<String>, filter: String[]) {
    // console.log(dSet);
    // console.log(filter);
    for (let i = 0; i < filter.length; i++) {
        if (dSet.has(filter[i].toLowerCase())) {
            return true;
        }
    }
    return false;
} 