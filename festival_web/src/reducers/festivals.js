const festivals = (state = [], action) => {
    switch(action.type){
        case "FETCH_FESTIVALS":
            return [...action.data];
        case "FETCH_FESTIVAL_BY_ID":
            console.log('[...action.data]', [...action.data]);
            return [...action.data];
        default: 
            return state;
    }
}

export default festivals;