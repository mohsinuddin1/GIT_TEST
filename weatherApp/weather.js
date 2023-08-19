function weatherApp(){
    const input=document.querySelector('.input');
    const btn=document.querySelector('.btn');
    const card=document.querySelector('.card');
    
    btn.addEventListener('click',async()=>{
        if(input.value==="")return;
        console.log(`${input.value}`);
        const weatherData=await weather.getData(input.value);
        view.setWeather(weatherData);
       
        card.classList.add("active");
    });
}

const weather=(()=>{
    function convertData(data){
        const{
            name:cityName,
            main:{ temp:temperature ,feels_like:feelsLike,humidity},
            wind:{ speed:windSpeed},
        }=data;
        return{cityName,temperature,feelsLike,humidity,windSpeed};
    }


async function getData(cityName){
    const endpoint=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=28fe7b5f9a78838c639143fc517e4343`;
    try{
        const response= await fetch(endpoint,{mode:"cors"});
        if(!response.ok) throw new Error(`City ${cityName} not found`);
        const data=convertData(await response.json());
        return data;
    }
    catch(error){
        alert(error);
        card.classList.remove("active");
        return null;
    }
    
}
return {getData};
})();

const view=(()=>{
    function setWeather(weatherData){
        if(!weatherData)return;
      
      

        const cityName=document.getElementById("cityName");
        const temperature=document.getElementById("temperature");
        const feelsLike = document.getElementById("feelsLike");
        const humidity = document.getElementById("humidity");
        const wind = document.getElementById("wind");

        cityName.textContent=`${weatherData.cityName}`;
        temperature.textContent=`${weatherData.temperature}°C`;
        feelsLike.textContent = `Fells like: ${weatherData.feelsLike} °C`;
        humidity.textContent = `Humidity: ${weatherData.humidity} %`;
        wind.textContent = `Wind: ${weatherData.windSpeed} km/h`;

        const card=document.querySelector('.card');
        const img=document.querySelector('.img');
        if (card.contains(img)) 
        card.removeChild(img);
        giphyFetcher(weatherData.feelsLike);
    }
    async function giphyFetcher(temp) {
        const text=wordDetector(temp);
        const img = document.createElement('img');
        img.classList.add("img");
        const response=await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=JcVXXtzrt0SX0sbibRZKQJ21zvJPUEsr&s=${text}`, { mode: 'cors' });
        const fetchdata=await response.json();
        img.src = fetchdata.data.images.original.url;  
        const card=document.querySelector('.card');
        
        
        card.appendChild(img);
       
    }
    function wordDetector(temp) {
        if (temp <= 10)
            return "winter";
        else if (temp > 10 && temp <= 20)
            return "cold";
        else if (temp > 20 && temp <= 25)
            return "cool";
        else if (temp > 25 && temp <= 30)
            return "sunny";
        else if (temp > 30 && temp <= 40)
            return "hot";
        else if (temp > 40)
            return "boiling";
    }
    return {setWeather};
})();
weatherApp();


