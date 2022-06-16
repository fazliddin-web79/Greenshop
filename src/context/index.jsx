import React, { createContext, useState } from "react";
import { plants } from "../mock/flovers";
import { categories } from "../mock/category";

export const FlowersContext = createContext();

export const Context = ({ children }) => {
  const [flowers, setFlowers] = useState(plants);
  const [category, setcategory] = useState(categories);

  return (
    <FlowersContext.Provider
      value={{ flowers, setFlowers, category, setcategory }}
    >
      {children}
    </FlowersContext.Provider>
  );
};

export default Context;
