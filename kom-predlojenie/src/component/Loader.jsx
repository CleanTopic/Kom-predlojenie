import { useEffect, useMemo, useState } from "react";
import "./FunnyLoader.css";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = useMemo(
    () => [
      "Протираем линзы виртуального уровня",
      "Считаем шурупы в смете",
      "Греем чайник для PDF",
      "Дуем на пиксели, чтобы остыли",
      "Выравниваем поля по линейке",
      "Рисуем кота, чтобы было уютно",
    ],
    [],
  );

  const particles = useMemo(
    () =>
      Array.from({ length: 40 }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: 6 + Math.random() * 10,
        duration: 5 + Math.random() * 6,
        delay: Math.random() * 3,
        opacity: 0.15 + Math.random() * 0.25,
      })),
    [],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((value) => {
        if (value >= 99) return 100;
        const increment = 3 + Math.random() * 6;
        return Math.min(value + increment, 100);
      });
    }, 180);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const messageTimer = setInterval(() => {
      setMessageIndex((index) => (index + 1) % messages.length);
    }, 1700);

    return () => clearInterval(messageTimer);
  }, [messages.length]);

  return (
    <div className="loader-overlay">
      <div className="particle-layer" aria-hidden="true">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="particle"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`,
              opacity: particle.opacity,
              "--particle-opacity": particle.opacity,
            }}
          />
        ))}
      </div>

      <div className="loader-card">
        <div className="loader-title">Готовим предложение</div>
        <div className="loader-subtitle" key={messageIndex}>
          {messages[messageIndex]}
        </div>

        <div
          className="progress-shell"
          role="progressbar"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={Math.round(progress)}
        >
          <div className="progress-fill" style={{ width: `${progress}%` }}>
            <div className="progress-glow" />
          </div>
        </div>
        <div className="progress-label">{Math.round(progress)}%</div>
      </div>
    </div>
  );
}
