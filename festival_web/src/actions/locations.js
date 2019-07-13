import baseUrl from "../utilities/baseUrl";

export const fetchLocations = () => dispatch => {
    let url = `${baseUrl}/api/festival/getAllLocations`;
    fetch(url, {
        method: "GET",
    })
    .then(res => res.json())
    .then(response => {
        console.log("locations", response);
        dispatch({
            type: 'FETCH_LOCATIONS',
            data: response.data
        });
    });
}
