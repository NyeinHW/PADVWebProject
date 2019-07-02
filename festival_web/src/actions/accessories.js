import baseUrl from "../utilities/baseUrl";

export const fetchAccessories = () => dispatch => {
    let url = `${baseUrl}/api/accessories`;
    fetch(url, {
        method: "GET",
    })
    .then(res => res.json())
    .then(response => {
        console.log("accessories", response);
        dispatch({
            type: 'FETCH_ACCESSORIES',
            data: response.data
        });
    });
}
