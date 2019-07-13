export const postAPI = function(url, data){
    return fetch(url,{
        method: "POST",
        mode: 'no-cors',
        body: data
    });
}