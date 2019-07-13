import baseUrl from "../utilities/baseUrl";
import {postAPI} from "../components/apis/postAPI";

export const retrieveToken = (email, password, cb) => dispatch => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    const url = baseUrl+"api/login";

    // postAPI(url, formData)
    // .then(res => (res.json()))
    // .then(response => {
    //     dispatch({
    //         type: "ADD_TOKEN",
    //         token: response.token
    //     })
    //     cb();
    // })
    // .catch(err => {
    //     console.log(err);
    // });
    dispatch({
        type: "ADD_TOKEN",
        token: "dkfjkadsjf234234ksjsfs"
    })
    cb();
}