function loadingWeather(city) {                 //Function for city change alert
    alert("Loading weather report in " + city);
}
function hideCookiesMessage() {                 //Function to hide cookie message
    document.querySelector(".cookies").style.visibility = "hidden";
}

let grados = document.querySelectorAll(".degrees"); //Read and store all the degrees values (8)       
var celcius = [];                   //var for the celcius array 
var farenheit = [];                 //var for the farenheit array 



for (i = 0; i < grados.length; i++) {   //Writes all the celcius values into the celcius array
    celcius.push(grados[i].innerText);  
}

for (i = 0; i < grados.length; i++) {   //Writes all the faranheit values into the celcius array
    temp = (celcius[i]*9/5)+32;
    farenheit.push(Math.round(temp));
    
}
let tempChange = false;         //Variable to know if the selecion is C or F

for (i = 0; i < grados.length; i++) {       //This one is just a trick to add the degree(°)
    grados[i].innerText = celcius[i] + "°"; //symbol to the end of the numbers
}

function changeTemperature() {
    if (tempChange == false) {      //Checks if the selection changed to F

        for (i = 0; i < grados.length; i++) {   //Writes all the values into the grados array (linked to HTML)
            grados[i].innerText = farenheit[i] + "°";
        }
        tempChange = true;          //Checks if the selection changed to C
    } else {
        for (i = 0; i < grados.length; i++) {   //Writes all the values into the grados array (linked to HTML)
            grados[i].innerText = celcius[i] + "°";
        }
        tempChange = false;
    }
}