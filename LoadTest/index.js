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
for(let i = 0; i < 1000; i++)
{
  axios(config)
  .then(function (response) {
    // console.log(JSON.stringify(response.config.timeData.endTime - response.config.timeData.startTime));
    requestTime += response.config.timeData.endTime - response.config.timeData.startTime 
    if(i == 999) {
      console.log(requestTime/1000)
    }
  })
  .catch(function (error) {
    console.log(error);
  });
}



