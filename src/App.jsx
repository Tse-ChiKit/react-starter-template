import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import useThemeStore from "./store/useThemeStore";
import { router } from "./router/router.jsx";

const App = () => {
  const { setTheme } = useThemeStore();

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const defaultTheme = prefersDark ? "dark" : "light";
      setTheme(defaultTheme);
    }
  }, [setTheme]);

  return <RouterProvider router={router} />;
};

export default App;
