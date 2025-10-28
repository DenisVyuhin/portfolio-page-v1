"use client";

import { useEffect } from "react";
import useSystemTheme from "./GetSystemTheme.jsx";

function ThemeProvider({ children }) {
   const theme = useSystemTheme();

   useEffect(() => {
      if (typeof document != "undefined") {
         document.documentElement.setAttribute("theme", theme);
      }
   }, [theme]);

   return children;
}

export default ThemeProvider;