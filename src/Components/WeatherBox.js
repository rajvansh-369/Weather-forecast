import React, { useEffect, useState } from "react";

const WeatherBox = () => {
  const [data, setData] = useState({
    location: {},
    current: {},
    forecast: { forecastday: [] }
  });

  const getWeatherData = async () => {
    try {
      const res = await fetch("https://api.weatherapi.com/v1/forecast.json?key=3bb2fbef30eb4c618d294135231704&q=Chandigarh&days=5");
      const data = await res.json();
      console.log((data));
      setData(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <>
      <div className="container mt-5">
        <div className="d-flex flex-row justify-content-center align-items-center">
          <div className="weather__card">
            <div className="d-flex flex-row justify-content-center align-items-center">
              <div className="p-3">
                <h2>{data.current.temp_c}&deg;</h2>
              </div>
              <div className="p-3">
                <img src="https://svgur.com/i/oKG.svg" />
              </div>
              <div className="p-3">
                <h5>Tuesday, 10 AM</h5>
                <h3>{data.location.name}</h3>
                <span className="weather__description">
                  {/* {data.current.condition.text} */}
                </span>
              </div>
            </div>
            <div className="weather__status d-flex flex-row justify-content-center align-items-center mt-3">
              <div className="p-4 d-flex justify-content-center align-items-center">
                <img src="https://svgur.com/i/oHw.svg" />
                <span>{data.current.humidity}%</span>
              </div>
              <div className="p-4 d-flex justify-content-center align-items-center">
                <img src="https://svgur.com/i/oH_.svg" />
                <span>{data.current.pressure_mb} mB</span>
              </div>
              <div className="p-4 d-flex justify-content-center align-items-center">
                <img src="https://svgur.com/i/oKS.svg" />
                <span>{data.current.wind_kph} km/h</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="weather__forecast d-flex flex-row justify-content-center align-items-center mt-3">
        {data.forecast.forecastday.map((result, index) => {
          return (
            <div key={index}>
              <div className="p-4 d-flex flex-column justify-content-center align-items-center">
                <span>{result.date}</span>
                <img src="https://svgur.com/i/oJe.svg" />
                <span>{result.day.avgtemp_c}&deg;</span>
              </div>
            </div>
          );
        })}


      </div>
    </>
  );
};

export default WeatherBox;
