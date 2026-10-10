import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const user = {
    name: "Suraj",
    course: "BTech CSE - AIML",
    year: "3rd Year",
    skills: ["React", "JavaScript", "Tailwind CSS"],
  };

  const toggleTheme = () => {  //   it switches theme
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AppContext.Provider   //"Give me whatever components are placed inside AppContextProvider."
      value={{             // "Any component inside this Provider can access these six things."
        theme,
        toggleTheme,
        user,
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>    
  );
};

export default AppContextProvider;