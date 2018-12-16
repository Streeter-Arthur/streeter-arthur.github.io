var ulHouston = document.getElementById('houston');
var ulDallas = document.getElementById('dallas');
var ulSalvador = document.getElementById('sansalvador');
var ulMonticello = document.getElementById('monticello');
var requestURL = 'https://raw.githubusercontent.com/streeter-arthur/streeter-arthur.github.io/master/assignments/hotelsite/script/temples.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var temples = request.response;
    showClosureSchedule(temples);
}


function displayImage(){
    var imagesArray = ["./images/image01.jpg", "./images/image02.jpg", "./images/image03.jpg", "./images/image04.jpg", "./images/image05.jpg", "./images/image06.jpg"];
    var num = Math.floor(Math.random() * (imagesArray.length)); 
    return imagesArray[num];
}

function showClosureSchedule(jsonObj) {
    var temple = jsonObj['temples'];
        
    for (var i = 0; i < temple.length; i++) {
        if(temple[i].name == "Houston Texas Temple"){
            for (var f = 0; f < temple[i].templeClosureSchedule.length; f++){
                var listItem = document.createElement('li');
                
                listItem.textContent = temple[i].templeClosureSchedule[f];
                
                ulHouston.appendChild(listItem);
            }
        }
        if(temple[i].name == "Dallas Texas Temple"){
            for (var f = 0; f < temple[i].templeClosureSchedule.length; f++){
                var listItem = document.createElement('li');

                listItem.textContent = temple[i].templeClosureSchedule[f];
                
                ulDallas.appendChild(listItem);
            }
        }
        if(temple[i].name == "San Salvador El Salvador Temple"){
            for (var f = 0; f < temple[i].templeClosureSchedule.length; f++){
                var listItem = document.createElement('li');

                listItem.textContent = temple[i].templeClosureSchedule[f];
                
                ulSalvador.appendChild(listItem);
            }
        }
        if(temple[i].name == "Monticello Utah Temple"){
            for (var f = 0; f < temple[i].templeClosureSchedule.length; f++){
                var listItem = document.createElement('li');

                listItem.textContent = temple[i].templeClosureSchedule[f];
                
                ulMonticello.appendChild(listItem);
            }
        }

    }
}
    
  

