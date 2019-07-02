const locations = (state = [], action) => {
    switch(action.type){
        case "FETCH_LOCATIONS":
            return [...action.data];
        default:
            return state;
    }
}

export default locations;