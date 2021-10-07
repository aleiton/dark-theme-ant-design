import React from "react";
import { useThemeSwitcher  } from 'react-css-theme-switcher';

const Switcher = () => {
    const { switcher, themes, currentTheme, status  } = useThemeSwitcher();
    const [isDarkMode, setIsDarkMode] = React.useState(false);

  if (status === 'loading') {
        return <div>Loading styles...</div>;
      
  }

  const toggleDarkMode = () => {
    setIsDarkMode(previous => {
      switcher({ theme: previous ? themes.light : themes.dark  });
      return !previous;
    });
  };

  return (
    <div>
      <h2>Current theme: {currentTheme}</h2>
      <button style={{ cursor: "pointer" }} onClick={toggleDarkMode}>Toggle theme!</button>
    </div>
  );
};

export default Switcher;

