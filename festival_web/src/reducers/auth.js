const token = (state = null, action) => {
    switch(action.type){
        case "ADD_TOKEN":
            return action.token;
        default:
            return state;
    }
}
export default token;