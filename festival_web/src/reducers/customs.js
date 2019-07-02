const customs = (state = [], action) => {
    switch(action.type){
        case "FETCH_CUSTOMS":
            return [...action.data];
        default:
            return state;
    }
}

export default customs;