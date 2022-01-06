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


//how to use??

/**
 * 
 * import the client post the data
 
 const addPreRegData = data => {
  return client({ url: '/preregdata', method: 'post', data })
} 
 **/


/**
fetching the data
get PregReg Data

const fetchPreRegData = () => {
  return client({ url: '/prereg' })
}

*/
  
