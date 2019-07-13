const token = (state = [], action) => {
    switch(action.type){
        case "ADD_TOKEN":
            console.log("token", action.token);
            return action.token;
        default:
            return state;
    }
}