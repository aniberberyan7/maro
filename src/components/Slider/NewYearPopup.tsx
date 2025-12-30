"use client";

import { useEffect, useState } from "react";

const SNOW_COUNT = 50;
const CONFETTI_COUNT = 40;

export default function NewYearPopup() {
  const [show, setShow] = useState(false);
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    const d = new Date();
    const m = d.getMonth();
    const day = d.getDate();

    if ((m === 11 && day >= 27) || (m === 0 && day <= 1)) {
      setShow(true);
      setConfetti(true);
      setTimeout(() => setConfetti(false), 3500);
    }
  }, []);

  if (!show) return null;

  return (
    <>
      {/* ❄️ Snow */}
      <div className="snow">
        {Array.from({ length: SNOW_COUNT }).map((_, i) => (
          <span
            key={i}
            className="snowflake"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${10 + Math.random() * 20}px`,
              animationDuration: `${6 + Math.random() * 6}s, ${
                3 + Math.random() * 3
              }s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            ❄
          </span>
        ))}
      </div>

      {/* 🎆 Confetti */}
      {confetti && (
        <div className="confetti">
          {Array.from({ length: CONFETTI_COUNT }).map((_, i) => (
            <span
              key={i}
              className="confetti-piece"
              style={{
                backgroundColor: `hsl(${Math.random() * 360},80%,60%)`,
                "--x": `${-200 + Math.random() * 400}px`,
                "--y": `${-200 + Math.random() * 400}px`,
                animationDelay: `${Math.random() * 0.3}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* 🎉 Popup */}
      <div className="overlay">
        <div className="popup">
          <h2>🎉 Happy New Year! 🎉</h2>
          <p>Wishing you a joyful and successful year ahead!</p>
          <button onClick={() => setShow(false)}>Close</button>
        </div>
      </div>

      <style jsx>{`
        /* Snow */
        .snow {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 999;
          overflow: hidden;
        }

        .snowflake {
          position: absolute;
          top: -20px;
          color: white;
          opacity: 0.9;
          animation:
            snow-fall linear infinite,
            snow-sway ease-in-out infinite;
        }

        @keyframes snow-fall {
          to {
            transform: translateY(110vh);
          }
        }

        @keyframes snow-sway {
          0%,
          100% {
            margin-left: 0;
          }
          50% {
            margin-left: 20px;
          }
        }

        /* Confetti */
        .confetti {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 1001;
        }

        .confetti-piece {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 8px;
          height: 14px;
          animation: confetti 3s ease-out forwards;
        }

        @keyframes confetti {
          from {
            transform: translate(0, 0) rotate(0);
            opacity: 1;
          }
          to {
            transform: translate(var(--x), var(--y)) rotate(720deg);
            opacity: 0;
          }
        }

        /* Popup */
        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .popup {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
          max-width: 400px;
          width: 90%;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        button {
          margin-top: 1rem;
          padding: 0.6rem 1.2rem;
          border-radius: 6px;
          border: none;
          background: #0070f3;
          color: white;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
