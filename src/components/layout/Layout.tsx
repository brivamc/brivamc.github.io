import { createTheme, CssBaseline, PaletteMode, ThemeProvider } from "@mui/material";
import _ from "lodash";
import React, { createContext, useMemo, useState } from "react";

import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { getDesignTokens, getThemedComponents } from "./theme";

interface LayoutProps {
  isMobile?: boolean;
  children: React.ReactNode;
}

const ColorModeContext = createContext({ handleColorMode: () => {} });

export const Layout: React.FC<LayoutProps> = ({ isMobile = false, children }) => {
  const [mode, setMode] = useState<PaletteMode>("dark");

  const colorMode = React.useMemo(
    () => ({
      handleColorMode: () => {
        setMode(prevMode => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    [],
  );

  const layoutTheme = useMemo(() => createTheme(_.merge(getThemedComponents(mode), getDesignTokens(mode))), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={layoutTheme}>
        <CssBaseline />
        <Navbar isMobile={isMobile} mode={mode} onModeClick={colorMode.handleColorMode} />
        <main>
          {children}
        </main>
        <Footer />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
