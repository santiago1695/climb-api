import axios from "axios"
import { useState } from "react"
import {kelvinToCelsius, KelvinToFahrerheis, handleChangeUnitTemp} from "../utils/logic.js"

const Search = ({city, setCity}) => {
const [isCelsius, setIsCelsius] = useState(true)
 
const resultTempConversion = isCelsius ? kelvinToCelsius(city?.main.temp)  : KelvinToFahrerheis(city?.main.temp)
const handleCity = (e) => {
    e.preventDefault();
    const cityName = e.target.cityName.value;

   const API_KEY = "4269178ef8264b14815aa7197c3ebb35"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`

    axios
        .get(url)
        .then(({data}) => setCity(data))
        .catch((err) => console.log(err));
        
}
console.log(city)
    return (
    <section className="pt-10">
        <form onSubmit={handleCity} className="flex rounded-md overflow-hidden max-w-max mx-auto">
            <input id="cityName" placeholder="Buenos Aires" className="p-2" type="text"/>
            <button className="bg-indigo-500/50 px-5">Search</button>
        </form>
       
        <section className="text-center">
      <h2 className="text-4xl m-10 text-white ">{city?.name}</h2>

      <section className="grid gap-4 sm:grid-cols-[auto_auto]">
        {/* Seccion superior */}
        <section className="bg-white/60 p-2 rounded-2xl grid grid-cols-2 items-center">
          <h4 className="col-span-2">{city?.weather[0].description}</h4>
          <span className="text-4xl"> {resultTempConversion}°{isCelsius ? "C" : "F"} </span>
          <div>
            <img src={`https://openweathermap.org/img/wn/${city?.weather[0].icon}@4x.png`} alt="" />
          </div>
        </section>
        {/* Seccion Inferio */}
        <section className="bg-white/60 p-2 py-4 rounded-2xl grid grid-cols-3 items-center sm:grid-cols-1">
          <article className="flex gap-2 items-center">
            <div className="w-[18px]">
                <img src={"/public/images/speed.png"} alt="" />
            </div>
            <span>{city?.wind.speed}m/s</span> 
          </article>
          <article className="flex gap-2 items-center ">
            <div className="w-[18px]">
                <img src={"/public/images/humedity.png"} alt="" />
            </div>
            <span>{city?.main.humidity}%</span>
          </article>
          <article className="flex gap-2 items-center">
            <div className="w-[18px]">
                <img src={"/public/images/pressure.png"} alt="" />
            </div>
            <span>{city?.main.pressure}hPa</span>
          </article>
        </section>
      </section>

        <button onClick={handleChangeUnitTemp} className="mt-4 bg-white text-black rounded-full p-4 "> {isCelsius ? "Cambiar a °F" : "Cambiar a °C"} </button>

    </section>


    </section>
  )
}
export default Search