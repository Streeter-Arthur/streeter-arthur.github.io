var houstonRequestURL = 'https://api.openweathermap.org/data/2.5/forecast?id=4736476&APPID=cbbcc87459d74ae8dcbb6a58e397d939&units=imperial';
var houstonRequest = new XMLHttpRequest();

houstonRequest.open('GET', houstonRequestURL);
houstonRequest.send();

houstonRequest.onload =  function () {
    let weatherDataH = JSON.parse(houstonRequest.responseText);
    console.log(weatherDataH);
    getWeatherH(weatherDataH);
};
var dallasRequestURL = 'https://api.openweathermap.org/data/2.5/forecast?id=4684888&APPID=cbbcc87459d74ae8dcbb6a58e397d939&units=imperial';
var dallasRequest = new XMLHttpRequest();

dallasRequest.open('GET', dallasRequestURL);
dallasRequest.send();

dallasRequest.onload =  function () {
    let weatherDataD = JSON.parse(dallasRequest.responseText);
    console.log(weatherDataD);
    getWeatherD(weatherDataD);
};
var salvadorRequestURL = 'https://api.openweathermap.org/data/2.5/forecast?id=3583361&APPID=cbbcc87459d74ae8dcbb6a58e397d939&units=imperial';
var salvadorRequest = new XMLHttpRequest();

salvadorRequest.open('GET', salvadorRequestURL);
salvadorRequest.send();

salvadorRequest.onload =  function () {
    let weatherDataS = JSON.parse(salvadorRequest.responseText);
    console.log(weatherDataS);
    getWeatherS(weatherDataS);
};
var monticelloRequestURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5543377&APPID=cbbcc87459d74ae8dcbb6a58e397d939&units=imperial';
var monticelloRequest = new XMLHttpRequest();

monticelloRequest.open('GET', monticelloRequestURL);
monticelloRequest.send();

monticelloRequest.onload =  function () {
    let weatherDataM = JSON.parse(monticelloRequest.responseText);
    console.log(weatherDataM);
    getWeatherM(weatherDataM);
};

function getWeatherH(jsonObj){
    var forecast = jsonObj['list'];

    var condition = forecast[0].weather[0].description;
    var temperature = parseInt(forecast[0].main.temp);



    document.getElementById('conditionH').innerHTML = condition;
    document.getElementById('tempH').innerHTML = temperature;

};
function getWeatherD(jsonObj){
    var forecast = jsonObj['list'];

    var condition = forecast[0].weather[0].description;
    var temperature = parseInt(forecast[0].main.temp);



    document.getElementById('conditionD').innerHTML = condition;
    document.getElementById('tempD').innerHTML = temperature;

};
function getWeatherS(jsonObj){
    var forecast = jsonObj['list'];

    var condition = forecast[0].weather[0].description;
    var temperature = parseInt(forecast[0].main.temp);



    document.getElementById('conditionS').innerHTML = condition;
    document.getElementById('tempS').innerHTML = temperature;

};
function getWeatherM(jsonObj){
    var forecast = jsonObj['list'];

    var condition = forecast[0].weather[0].description;
    var temperature = parseInt(forecast[0].main.temp);



    document.getElementById('conditionM').innerHTML = condition;
    document.getElementById('tempM').innerHTML = temperature;

};