import baseUrl from '../utilities/baseUrl';

export const fetchFestivals = () => dispatch => {
    let url = `${baseUrl}/api/festival/getAllFestivals`;
    // postAPI(url, data)
    fetch(url, {
        method: "GET",
    })
    .then(res => res.json())
    .then(response => {
        dispatch({
            type: 'FETCH_FESTIVALS',
            data: response.data
        });
    });
}