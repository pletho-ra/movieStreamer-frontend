import { createContext, useState } from "react";

const HoverContext = createContext();

const HoverProvider = ({ children }) => {
  const [hoverMovie, setHoverMovie] = useState({});

  return (
    <HoverContext.Provider value={{ hoverMovie, setHoverMovie }}>
      {children}
    </HoverContext.Provider>
  );
};

export { HoverContext, HoverProvider };
