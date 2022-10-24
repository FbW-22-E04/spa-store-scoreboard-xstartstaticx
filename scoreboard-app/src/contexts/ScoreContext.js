import { useState, createContext } from "react";

export const ScoreContext = createContext();
console.log(ScoreContext);

export function ScoreContextProvider({ children }) {
  const [score, setScore] = useState(0);

  const plusScore = () => {
    setScore((prevState) => prevState + 10);
  };
  const minusScore = () => {
    setScore((prevState) => prevState - 10);
  };

  return (
    <ScoreContext.Provider value={{ score, plusScore, minusScore }}>
      {children}
    </ScoreContext.Provider>
  );
}
