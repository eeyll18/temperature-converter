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
        message: "Su donma noktasında! Dışarısı çok soğuk.",
        bgColor: "bg-blue-200",
        emoji: "🥶",
      };
    }
    if (temp > 0 && temp < 15) {
      return {
        message: "Hava serin. Bir ceket giymek iyi olabilir.",
        bgColor: "bg-cyan-200",
        emoji: "🧥",
      };
    }
    if (temp >= 15 && temp < 25) {
      return {
        message: "Harika bir hava! Günün tadını çıkarın.",
        bgColor: "bg-green-200",
        emoji: "😊",
      };
    }
    if (temp >= 25 && temp < 35) {
      return {
        message: "Hava sıcak. Tişört ve şort zamanı!",
        bgColor: "bg-yellow-200",
        emoji: "☀️",
      };
    }
    if (temp >= 35 && temp < 100) {
      return {
        message: "Çok sıcak! Bol su içmeyi ve gölgede kalmayı unutmayın.",
        bgColor: "bg-orange-200",
        emoji: "🥵",
      };
    }
    return {
      message: "Su kaynama noktasında! Dikkatli olun.",
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
