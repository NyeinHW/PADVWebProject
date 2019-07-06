export const status = function(statusId) {
    switch(statusId){
        case 1:
            return "Pending";
        case 2:
            return "Cancel";
        case 3:
            return "Confirmed";
        case 4:
            return "Delivered";
        default:
            return "Pending.";
    }
}