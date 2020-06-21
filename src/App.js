import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.scss'

const apiKey = '2c815d4bc0051e28ff6612963c9d96a8'
const city = 'man'
function App() {
  const [resultsShowcase, changeResultsShowcase] = useState(false)
  const [result, changeResults] = useState(null)
  const [citySearchTerm, changeCitySearchTerm] = useState('')

  useEffect(() => {
    if (citySearchTerm.length) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${citySearchTerm}&appid=${apiKey}`
        )
        .then((res) => {
          console.log(res.data)
          changeResults(res.data)
          changeResultsShowcase(true)
        })
        .catch((err) => {
          changeResults('zero')
          changeResultsShowcase(true)
        })
    } else {
      changeResultsShowcase(false)
      changeResults(null)
    }
  }, [citySearchTerm])

  const onSearchbarFocus = () => {
    if (citySearchTerm.length) {
      changeResultsShowcase(true)
    } else {
      changeResultsShowcase(false)
    }
  }

  return (
    <div className="app">
      <div className="container">
        <div
          onFocus={() => onSearchbarFocus()}
          onBlur={() => changeResultsShowcase(false)}
          className="search-cont"
        >
          <div className="main-search">
            <span className="icon-cont loc-icon-cont">
              <img
                src="https://img.icons8.com/material-rounded/24/000000/taxi-location.png"
                alt="location-icon"
              />
            </span>
            <input
              type="text"
              onChange={(e) => changeCitySearchTerm(e.target.value)}
            />
            <span className="icon-cont search-icon-cont">
              <img
                src="https://img.icons8.com/android/24/000000/search.png"
                alt="search-icon"
              />
            </span>
          </div>
          {resultsShowcase ? (
            <div className="results-cont">
              <div className="result">
                {result === 'zero' ? (
                  <span className="location-name">No Results Found...!</span>
                ) : (
                  <span className="location-name">
                    {result.city.name}, {result.city.country}
                  </span>
                )}
              </div>
              {/* <div className="result">
                <span className="location-name">Kanpur, Uttarpradesh</span>
              </div> */}
            </div>
          ) : null}
        </div>
        <div className="days">
          <div className="day">
            <span className="day-name">Fri</span>
            <span className="temp-detail">
              <span className="degree">29</span>
              <span className="celcius">19</span>
            </span>
            <span className="weather-icon-cont">
              <img
                src="https://img.icons8.com/cute-clipart/64/000000/partly-cloudy-night.png"
                alt="weather"
              />
            </span>
            <span className="name">Sunny</span>
          </div>
          <div className="day active">
            <span className="day-name">Fri</span>
            <span className="temp-detail">
              <span className="degree">29</span>
              <span className="celcius">19</span>
            </span>
            <span className="weather-icon-cont">
              <img
                src="https://img.icons8.com/cute-clipart/64/000000/partly-cloudy-night.png"
                alt="weather"
              />
            </span>
            <span className="name">Sunny</span>
          </div>
          <div className="day">
            <span className="day-name">Fri</span>
            <span className="temp-detail">
              <span className="degree">29</span>
              <span className="celcius">19</span>
            </span>
            <span className="weather-icon-cont">
              <img
                src="https://img.icons8.com/cute-clipart/64/000000/partly-cloudy-night.png"
                alt="weather"
              />
            </span>
            <span className="name">Sunny</span>
          </div>

          <div className="day">
            <span className="day-name">Fri</span>
            <span className="temp-detail">
              <span className="degree">29</span>
              <span className="celcius">19</span>
            </span>
            <span className="weather-icon-cont">
              <img
                src="https://img.icons8.com/cute-clipart/64/000000/partly-cloudy-night.png"
                alt="weather"
              />
            </span>
            <span className="name">Sunny</span>
          </div>
          <div className="day">
            <span className="day-name">Fri</span>
            <span className="temp-detail">
              <span className="degree">29</span>
              <span className="celcius">19</span>
            </span>
            <span className="weather-icon-cont">
              <img
                src="https://img.icons8.com/cute-clipart/64/000000/partly-cloudy-night.png"
                alt="weather"
              />
            </span>
            <span className="name">Sunny</span>
          </div>
          <div className="day">
            <span className="day-name">Fri</span>
            <span className="temp-detail">
              <span className="degree">29</span>
              <span className="celcius">19</span>
            </span>
            <span className="weather-icon-cont">
              <img
                src="https://img.icons8.com/cute-clipart/64/000000/partly-cloudy-night.png"
                alt="weather"
              />
            </span>
            <span className="name">Sunny</span>
          </div>
          <div className="day">
            <span className="day-name">Fri</span>
            <span className="temp-detail">
              <span className="degree">29</span>
              <span className="celcius">19</span>
            </span>
            <span className="weather-icon-cont">
              <img
                src="https://img.icons8.com/cute-clipart/64/000000/partly-cloudy-night.png"
                alt="weather"
              />
            </span>
            <span className="name">Sunny</span>
          </div>
        </div>
        <div className="highlights">
          <div className="main-highlights">
            <span className="temp-info">26*C</span>
            <span className="weather-condn-icon">
              <img
                src="https://img.icons8.com/cute-clipart/64/000000/partly-cloudy-night.png"
                alt="weather"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
