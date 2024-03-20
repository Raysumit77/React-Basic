import { useState, useEffect } from "react";

export const Weather = () => {
  const [location, setLocation] = useState({
    lat: 27.7,
    long: 85.32,
  });
  const [result, setResult] = useState({});
  useEffect(() => {
    const getWeather = async () => {
      const controller = new AbortController();
      const signal = controller.signal();
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${location?.lat}&longitude=${location?.long}&hourly=temperature_2m&daily=sunrise,sunset&forecast_day=1&timezone=auto`
      );
      const result = await response.json();
      setResult(result);
      return () => {
        controller.abort();
      };
    };
    getWeather();
  }, [location?.lat, location?.long]);
  return (
    <div>
      Weather
      <form>
        <input
          placeholder="lat"
          onChange={(e) => {
            setLocation((prev) => {
              return { ...prev, lat: Number(e.target.value) };
            });
          }}
        />
        <input
          placeholder="long"
          onChange={(e) => {
            setLocation((prev) => {
              return { ...prev, long: Number(e.target.value) };
            });
          }}
        />
      </form>
      {JSON.stringify(result)}
    </div>
  );
};
