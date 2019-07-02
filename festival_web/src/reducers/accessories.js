const accessories = (state = [], action) => {
    switch(action.type){
        case "FETCH_ACCESSORIES":
            return [...action.data];
        default: 
            return state;
    }
}

export default accessories;