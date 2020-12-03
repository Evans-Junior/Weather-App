import React, {useState } from "react";
import "./weather.css";
import axios from "axios"
import image from "../img/cloud.svg"


//usestate
//temp
//settemp
// is still not working oo+
// to be able to pull the data to the mai surface. si if I inspect it, I am able to see it from ther
function Weather(props) { 

  const [city, setCity]=useState("");
  const [temp_one, setTemp_one]=useState("");
  const [temp, setTemp]=useState("");
  const[Pressure,setPressure]=useState("");
  const[cloud,setCloud]=useState("");
  const[wind,setWind]=useState("");

  function showweather(city){

let one = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=105ce953cde35584a8658700b5a46803`
let two = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=105ce953cde35584a8658700b5a46803`

 const requestTwo = axios.get(one);
 const requestOne = axios.get(two);


    
  axios
  .all([requestOne,requestTwo])
  .then(
    axios.spread((...responses)=>{
      const responseOne = responses[0];
      const responseTwo = responses[1];

//Control Response
console.log(responseOne,responseTwo);
setTemp(responseOne.data.main.temp);
console.log(temp);
setTemp_one(responseTwo.data.main.temp);
console.log(temp);
setPressure(responseOne.data.main.pressure);
console.log(Pressure)
setCloud(responseOne.data.clouds.all);
console.log(cloud)
setWind(responseOne.data.wind.speed);
console.log(wind)
    }) 
  )
  .catch((error) => {
    console.log(error);
  });
    }


  function formweather(event) {
    event.preventDefault()

    showweather(city)
  }
   
  function handleSearch(event) {
    setCity(event.target.value)
  }

  return (
    <div className="pic">
      <div className="back">
        <div className="container__Weather">
          <div className="widget">
            <div className="left">
            {/*<h5><button>Subscribe</button></h5>*/} 
              <img src={image} className="icon" alt="" />
              <h5 className="weather-status">Partly Cloud</h5>
            </div>
            <div className="right">
              <div>
              <form className=""  onSubmit={formweather} >
          <div className="">
            <input  type="text" className="input" value={city} onChange={handleSearch}  placeholder="City Name" />
            <h5 className="city">
              <button type="submit" >Search</button>
            </h5>
            <h5 className="city__Cancel">
                <button>Cancel</button>
              </h5>
          </div>
          </form>
              </div>
              <h1 className="name">{city}</h1>
              <h6 className="degree">{temp}&deg;C</h6>
              <h6 className="degree_one">{temp_one}&deg;F</h6>
            </div>
            <div className="bottom">
              <div>
                Wind Speed <span>{wind} kmph</span>
              </div>
              <div>
                Cloud Cover <span className="">{cloud}%</span>
              </div>
              <div>
                Pressure <span>{Pressure} mb</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
