import { createTheme, CssBaseline, PaletteMode, ThemeProvider } from "@mui/material";
import _ from "lodash";
import React, { createContext, useMemo, useState } from "react";
import { Navbar } from "./Navbar";
import { getDesignTokens, getThemedComponents } from "./theme";

interface LayoutProps {
  children: React.ReactNode;
}

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>("dark");

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [],
  );

  const layoutTheme = useMemo(() => createTheme(_.merge(getThemedComponents(mode), getDesignTokens(mode))), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={layoutTheme}>
        <CssBaseline />
        <Navbar mode={mode} onModeClick={colorMode.toggleColorMode} />
        <main>
          {children}
        </main>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
