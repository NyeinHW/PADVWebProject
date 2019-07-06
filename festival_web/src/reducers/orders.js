const orders = (state = [], action) => {
    switch(action.type){
        case "FETCH_ORDERS":
            return [...action.data];
        case "FETCH_ORDER_DETAIL":
            return [...action.data];
        case "FETCH_ORDERS_BY_ACCESSORY_ID":
            return [action.data];
        default:
            return state;
    }
}

export default orders;