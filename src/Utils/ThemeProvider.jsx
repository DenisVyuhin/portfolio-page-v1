"use client";

import { ThemeProvider } from "next-themes";

function Provider({ children }) {
   return (
      <ThemeProvider
         attribute="data-theme"
         defaultTheme="dark"
         enableSystem={false}
      >
         {children}
      </ThemeProvider>
   );
};

export default Provider;