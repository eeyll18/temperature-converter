import React, { useState } from "react";
import TemperatureInfo from "./TemperatureInfo";

const TemperatureConverter: React.FC = () => {
  const [celcius, setCelcius] = useState<string>("");
  const [fahrenheit, setFahrenheit] = useState<string>("");

  const handleCelciusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCelcius(value);

    if (value === "" || value === "-") {
      setFahrenheit("");
      return;
    }

    const numCelcius = parseFloat(value);
    if (!isNaN(numCelcius)) {
      const fahrenheitValue = (numCelcius * 9 / 5) + 32;
      setFahrenheit(fahrenheitValue.toFixed(2));
    }
  };

  const handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFahrenheit(value);

    if (value === "" || value === "-") {
      setFahrenheit("");
      return;
    }

    const numFahrenheit = parseFloat(value);
    if (!isNaN(numFahrenheit)) {
      const celsiusValue = (numFahrenheit - 32) * 5 / 9;
      setCelcius(celsiusValue.toFixed(2));
    }
  };

  const numericCelsius =
    celcius === "" || isNaN(parseFloat(celcius)) ? null : parseFloat(celcius);

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Temperature Converter
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div className="flex flex-col">
          <label htmlFor="celcius" className="mb-2 font-semibold text-gray-600">
            Celcius(°C)
          </label>
          <input
            id="celcius"
            type="number"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={celcius}
            onChange={handleCelciusChange}
            placeholder="Örn: 25"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="fahrenheit"
            className="mb-2 font-semibold text-gray-600"
          >
            Fahrenheit (°F)
          </label>
          <input
            id="fahrenheit"
            type="number"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            placeholder="Örn: 77"
          />
        </div>
      </div>

      <TemperatureInfo celcius={numericCelsius} />
    </div>
  );
};

export default TemperatureConverter;
