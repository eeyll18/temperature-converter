import React from "react";

interface TemperatureInfoProps {
  celcius: number | null;
}

interface TemperatureState {
  message: string;
  bgColor: string;
  emoji: string;
}

const TemperatureInfo: React.FC<TemperatureInfoProps> = ({ celcius }) => {
  if (celcius === null) return null;

  const getTemperatureState = (temp: number): TemperatureState => {
    if (temp <= 0) {
      return {
        message: "Water is freezing! It's very cold outside.",
        bgColor: "bg-blue-200",
        emoji: "🥶",
      };
    }
    if (temp > 0 && temp < 15) {
      return {
        message: "It's chilly. A jacket might be a good idea.",
        bgColor: "bg-cyan-200",
        emoji: "🧥",
      };
    }
    if (temp >= 15 && temp < 25) {
      return {
        message: "Perfect weather! Enjoy your day.",
        bgColor: "bg-green-200",
        emoji: "😊",
      };
    }
    if (temp >= 25 && temp < 35) {
      return {
        message: "It's warm. Time for a t-shirt and shorts!",
        bgColor: "bg-yellow-200",
        emoji: "☀️",
      };
    }
    if (temp >= 35 && temp < 100) {
      return {
        message: "Very hot! Remember to drink plenty of water and stay in the shade.",
        bgColor: "bg-orange-200",
        emoji: "🥵",
      };
    }
    return {
      message: "Water is boiling! Be careful.",
      bgColor: "bg-red-300",
      emoji: "🔥",
    };
  };

  const { message, bgColor, emoji } = getTemperatureState(celcius);

  return (
    <div
      className={`mt-6 p-4 rounded-lg text-center transition-all duration-300 ${bgColor}`}
    >
      <p className="text-2xl font-semibold">{emoji}</p>
      <p className="text-gray-800 font-medium">{message}</p>
    </div>
  );
};

export default TemperatureInfo;
