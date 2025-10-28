"use client";

import { useEffect, useState } from "react";

function useSystemTheme() {
   const [theme, setTheme] = useState("light"); // значение по умолчанию

   useEffect(() => {
      if (typeof window !== "undefined" && window.matchMedia) {
         const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

         setTheme(mediaQuery.matches ? "dark" : "light");

         const handleChange = (event) => {
            setTheme(event.matches ? "dark" : "light");
         };

         mediaQuery.addEventListener("change", handleChange);

         return () => mediaQuery.removeEventListener("change", handleChange);
      }
   }, []);

   return theme; // "light" or "dark"
}

export default useSystemTheme;