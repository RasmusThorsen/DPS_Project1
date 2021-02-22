var axios = require('axios');

var config = {
  method: 'get',
  url: 'http://localhost:8080/cookies',
  headers: { }
};

axios.interceptors.request.use(function (config) {
  config.timeData = { startTime: Date.now()}
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  response.config.timeData.endTime = Date.now()
  return response;
}, function (error) {
  return Promise.reject(error);
});


let requestTime = 0
let numberOfRequests = 1000
for(let i = 0; i < numberOfRequests; i++)
{
  axios(config)
  .then(function (response) {
    requestTime += response.config.timeData.endTime - response.config.timeData.startTime 

    if(i === numberOfRequests -1) {
      console.log(requestTime/numberOfRequests)
    }
  })
  .catch(function (error) {
    console.log(error);
  });
}


