let findMeBtn = document.getElementById("findMe");
let searchInput=document.getElementById("search");
let myrow=document.getElementById("myrow");
let date =new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


findMeBtn.addEventListener('click', ()=>{
     let myCity= searchInput.value;
     getData(myCity)
})


async function getData(myCity){
    let myresult= await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e9674339b1ac47a0b88152031240701&q=${myCity}&days=3`);
    let finamResult= await myresult.json();
    display(finamResult)
}

// display data 
function display(myobj){

   let  result =`
   <div class="col-md-4">
   <div
     id="dayOne"
     class="text-white overflow-auto rounded-4 my-3 days h-100"
   >
     <div>
       <div class="head d-flex justify-content-between text-white p-3">
         <h6 class="day">${days[date.getDay()]}</h6>
         <h6 >${date.getDate()} ${months[date.getMonth()]}</h6>
       </div>

       <h4 class="p-4 city">${myobj?.location?.name??"cairo"}</h4>
       <div
         class="degre d-flex justify-content-around align-items-center py-2"
       >
         <h3>${myobj?.current?.temp_c}°C</h3>
         
       </div>
       <span class="ps-5 pt-2">${myobj?.current?.condition?.text}</span>
       <div
         class="d-flex justify-content-evenly align-items-center py-5"
       >
         <div>
           <img src="images/icon-umberella.png" alt="umberella" />
           <span>${myobj?.current?.gust_kph}%</span>
         </div>
         <div>
           <img src="images\icon-wind.png" alt="wind" />
           <span>${myobj?.current?.wind_kph}km</span>
         </div>
         <div>
           <img src="images\icon-compass.png" alt="compass" />
           <span>${myobj?.current?.wind_dir}</span>
         </div>
       </div>
     </div>
   </div>
 </div>
   



 <div class="col-md-4">
 <div
   id="dayTow"
   class="text-white overflow-auto rounded-4 my-3 days h-100"
 >
   <div>
     <div class="head d-flex justify-content-between text-white p-3">
       <h6>${days[date.getDay()+1]}</h6>
       <h6>${date.getDate()+1} ${months[date.getMonth()]}</h6>
     </div>

     <div
       class="degre d-flex flex-column justify-content-between align-items-center"
     >
       <h3 class="mt-3">${myobj?.forecast.forecastday[1].day.maxtemp_c} °C</h3>
       <h5 class="pt-4">${myobj?.forecast.forecastday[1].day.mintemp_c} °C</h5>
       <span class="py-4">${myobj?.forecast.forecastday[1].day.condition.text}</span>
     </div>
   </div>
 </div>
</div>
   





<div class="col-md-4">
            <div
              id="dayThree"
              class="text-white overflow-auto rounded-4 my-3 days h-100"
            >
              <div>
                <div class="head d-flex justify-content-between text-white p-3">
                  <h6>${days[date.getDay()+2]}</h6>
                  <h6>${date.getDate()+2} ${months[date.getMonth()]}</h6>
                </div>

                <div
                  class="degre d-flex flex-column justify-content-between align-items-center"
                >
                <h3 class="mt-3">${myobj?.forecast.forecastday[2].day.maxtemp_c} °C</h3>
                <h5 class="pt-4">${myobj?.forecast.forecastday[2].day.mintemp_c} °C</h5>
                <span class="py-4">${myobj?.forecast.forecastday[2].day.condition.text}</span>
                </div>
              </div>
            </div>
          </div>

   `
myrow.innerHTML=result

}

getData("cairo")