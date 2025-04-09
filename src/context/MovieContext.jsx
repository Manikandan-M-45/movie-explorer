/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";

const movieCon = createContext();

export const MovieContext = ({ children }) => {
  const [val, setVal] = useState("Movie name!!!");

  return (
    <movieCon.Provider value={{ val, setVal }}>{children}</movieCon.Provider>
  );
};

export default movieCon;