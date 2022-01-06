import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000'
});


const rejectPromise = (resError) => {
    let error = {};
  
    if (resError && resError.response && resError.response.data) {
      error = resError.response.data;
    } else {
      error = resError;
    }
  
    return Promise.reject(error);
}


const client = ({ ...options }) => {
    axiosInstance.defaults.headers.common.Authorization = `Bearer token`

    const onSuccess = response => response
    return axiosInstance(options).then(onSuccess).catch(rejectPromise)
}



export {client}

