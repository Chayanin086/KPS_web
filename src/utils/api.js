import axios from 'axios';
 // eslint-disable-next-line no-undef

 axios.interceptors.request.use(
    (config) => {
      const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMWMyZDgwODcxN2YxMDAxMmQ4OTk4MSIsInVzZXJuYW1lIjoiYWRtaW4iLCJleHAiOjE2NTQwODE2NjcsImlhdCI6MTY0NjMwNTY2N30.v6F8YGY-oRPOcLtHdYCWjqyTjiuDH5qfdFxxdpzPhGI"
 // eslint-disable-next-line no-param-reassign
      config.headers.common.Authorization = `Bearer ${authToken}`;
      return config;
    },
    (error) => Promise.reject(error),
 
);

export default axios;