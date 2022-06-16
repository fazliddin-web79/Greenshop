import React from "react";
import { useLocation } from "react-router-dom";

export const Generic = () => {
  const location = useLocation();
  return (
    <div>
      <h1>coming soon {location.pathname}</h1>
    </div>
  );
};

export default Generic;
