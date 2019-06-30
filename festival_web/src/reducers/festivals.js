const festivals = (state = [], action) => {
    switch(action.type){
        case "FETCH_FESTIVALS":
            return [...action.data];
        default: 
            return state;
    }
}

export default festivals;