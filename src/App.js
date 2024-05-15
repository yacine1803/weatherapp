import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
const [city, setCity] = useState('');
const [temp, setTemp] = useState('');
const [main, setMain] = useState('');
const [desc, setDesc] = useState('');
const [icon, setIcon] = useState('');
const [sunrise, setSunrise] = useState('');
const [sunset, setSunset] = useState('');
const [isReady, setReady] = useState(false);

useEffect(() => {
  fetch('https://api.openweathermap.org/data/2.5/weather?lat=12.5563&lon=-16.2718&appid=1556be0493b85b4d716ddc1a05130651&units=metric')
    .then(result => result.json())
    .then(jsonresult => {
      setCity(jsonresult.name);
      setTemp(jsonresult.main.temp);
      setMain(jsonresult.weather[0].main);
      setDesc(jsonresult.weather[0].main);
      setIcon(jsonresult.weather[0].icon);
      setSunset(jsonresult.sys.sunset);
      setReady(true);
    })
    .catch(err => console.error(err))
}, []);



if (isReady) {
  return (
    <div className="App" >
       <h2 className="weather-heading">My weather app </h2>

       <div style={{backgroundColor: 'lightblue', padding: '10px', borderRadius: '5px'}}>
      <p>Température : {temp} °C</p>
      <p>Temps principal : {main}</p>
      <p>Description : {desc}</p>
      <p>Illustration : {icon}</p>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Icône météo" />
      <p>Lever du soleil : {new Date(sunrise * 1000).toLocaleTimeString()}</p>
          <p>Coucher du soleil : {new Date(sunset * 1000).toLocaleTimeString()}</p>
          </div>
    </div>
    
  );
} else {
  return <div>Loading...</div>;
}




  
}

export default App;
