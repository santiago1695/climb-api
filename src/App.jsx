import axios from "axios";
import { useEffect, useState }
 from "react"
import Weather from "./components/Weather";
import Search from "./components/Search";

function App() {

  const [city, setCity] = useState(null)
  const [weatherInfo, setWeatherInfo] = useState(null)
  
  const success = (pos) => {
    const lat = pos.coords.latitude;
    const lon = pos.coords.longitude;
    
    
    const API_KEY = "4269178ef8264b14815aa7197c3ebb35"
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`


    
    axios.get(url)
        .then(({data}) => setWeatherInfo(data))
        .catch((err)=> console.log(err));
  }

 

  
  useEffect(()=> {
    navigator.geolocation.getCurrentPosition(success)
  }, [])


  const imagesWeather = {
    "01n" : "bg-[url('/public/images/background/night.jpg')]",
    "01d" : "bg-[url('/public/images/background/sunny.jpg')]",
    "02d" : "bg-[url('/public/images/background/cloundy.jpg')]",
    "02n" : "bg-[url('/public/images/background/cloundy.jpg')]",
    "03d" : "bg-[url('/public/images/background/scattered_clouds.jpg')]",
    "03n" : "bg-[url('/public/images/background/scattered_clouds.jpg')]",
    "04d" : "bg-[url('/public/images/background/broken_clouds.jpg')]",
    "04n" : "bg-[url('/public/images/background/broken_clouds.jpg')]",
    "09d" : "bg-[url('/public/images/background/rainy.jpg')]",
    "09n" : "bg-[url('/public/images/background/rainy.jpg')]",
    "10d" : "bg-[url('/public/images/background/rainy.jpg')]",
    "10n" :"bg-[url('/public/images/background/rainy.jpg')]",
    "11d" : "bg-[url('/public/images/background/electric-storm.jpg')]",
    "11n" : "bg-[url('/public/images/background//electric-storm.jpg')]",
    "13d" : "bg-[url('/public/images/background/snowy.jpg')]",
    "13n" : "bg-[url('/public/images/background/snowy.jpg')]",
    "50n" : "bg-[url('/public/images/background/mist.jpg')]" ,
    "50d" : "bg-[url('/public/images/background/mist.jpg')]" 

  }

  return (
    <main className={`${imagesWeather[weatherInfo?.weather[0].icon]} bg-center flex-col relative  min-h-screen text-black font-lato  bg-cover flex justify-center items-center px-4`}>
    {city===null ? <Weather weatherInfo={weatherInfo } setWeatherInfo={setWeatherInfo}/> : <Search city={city} setCity={setCity}/>}
      
      
    </main>
  )
}

export default App
