const orders = (state = [], action) => {
    switch(action.type){
        case "FETCH_ORDERS":
            return [...action.data]
        default:
            return state;
    }
}

export default orders;