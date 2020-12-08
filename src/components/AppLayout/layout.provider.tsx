// *** Controls header and left side bar menus 

import React, { useState, createContext } from "react";

export const LayoutContext = createContext({
  menuActive: false,
  toggleMenuActive: () => {},
});

const LayoutProvider = ({ children }: any) => {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenuActive = () => setMenuActive(!menuActive);

  return (
    <LayoutContext.Provider value={{ menuActive, toggleMenuActive }}>
      {children}
    </LayoutContext.Provider>
  );
};
export default LayoutProvider;
