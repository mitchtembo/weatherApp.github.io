const form = document.querySelector('form');
const details = document.querySelector('.details');
const cardIMG = document.querySelector('.time');
const icon = document.querySelector('.icon img')
const card = document.querySelector('.card')


const updateCity = async (city) => {
 // call getcity then call get citycondition
 const cityDetails = await getCity(city);
 const weather = await cityCondition(cityDetails.Key);


 // gather their data in an obj
 return {cityDetails,weather}
 

}


const updateUI = async (data) => {

 const {cityDetails,weather} = data
 details.innerHTML = `<h5 class="my-3">${cityDetails.EnglishName}</h5>
 <div class="my-3">${weather.WeatherText}</div>
 <div class="display-4 my-4">
  <span>${weather.Temperature.Metric.Value}</span>
  <span>&deg;C</span>
 </div>`;

 // DAY OR NIGHT IMG
 const setImgSrc = weather.IsDayTime ? day.svg : night.svg;
 cardIMG.setAttribute('src',setImgSrc);


 // UPDATE icon IMAGE
   
 icon.setAttribute('src',`/icons/${weather.WeatherIcon}.svg`)
 // show UI
 if(card.classList.contains('d-none')) {
  card.classList.remove('d-none');
 }
}

form.addEventListener('submit',(e)=>{
 e.preventDefault();
 const city = form.city.value.trim()

 form.reset()

 //update the ui 
 updateCity(city)
 .then(data => updateUI(data))

})

