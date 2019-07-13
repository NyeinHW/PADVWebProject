export const postAPI = function(url, data){
    return fetch(url,{
        method: "POST",
        body: data
    });
}