import baseUrl from '../utilities/baseUrl';

export const fetchOrders = () => dispatch => {
    let url = `${baseUrl}/api/order/getAllOrder`;
    // postAPI(url, data)
    fetch(url, {
        method: "GET",
    })
    .then(res => res.json())
    .then(response => {
        dispatch({
            type: 'FETCH_ORDERS',
            data: response.data
        });
    });
}