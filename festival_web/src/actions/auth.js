import baseUrl from "../utilities/baseUrl";
import {postAPI} from "../components/apis/postAPI";

export const retrieveToken = (email, password, cb) => dispatch => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    const url = baseUrl+"api/auth/adminSignIn";

    postAPI(url, formData)
    .then(res => {
        return res.json();
    })
    .then(response => {
        dispatch({
            type: "ADD_TOKEN",
            token: response.data.token
        });
        cb();
    })
    .catch(err => {
        console.log(err);
    });
}