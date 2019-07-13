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

export const fetchOrderDetail = (orderId) => dispatch => {
    console.log(orderId);
    let url = `${baseUrl}/api/order/getOrderById/${orderId}`;
    fetch(url, {
        method: "GET",
    })
    .then(res => res.json())
    .then(response => {
        console.log("order response" , response);
        dispatch({
            type: 'FETCH_ORDER_DETAIL',
            data: response.data
        });
    });
}

export const fetchOrderByAccessoryId = (accessoryId) => dispatch => {
    let url = `${baseUrl}/api/orderItem/getOrderItemById/${accessoryId}`;
    fetch(url, {
        method: "GET",
    })
    .then(res => res.json())
    .then(response => {
        console.log('order by accessory id', response.data);
        dispatch({
            type: 'FETCH_ORDERS_BY_ACCESSORY_ID',
            data: response.data
        });
    });
}