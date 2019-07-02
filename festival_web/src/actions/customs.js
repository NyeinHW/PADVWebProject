import baseUrl from "../utilities/baseUrl";

export const fetchCustoms = () => dispatch => {
    let url = `${baseUrl}/api/customs`;
    fetch(url, {
        method: "GET",
    })
    .then(res => res.json())
    .then(response => {
        console.log('response: ', response.data);
        dispatch({
            type: 'FETCH_CUSTOMS',
            data: response.data
        });
    });
}