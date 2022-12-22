import { createTheme, CssBaseline, PaletteMode, ThemeProvider } from "@mui/material";
import React, { createContext, useContext, useMemo, useState } from "react";
import { Navbar } from "./Navbar";
import { theme } from "./theme";

interface LayoutProps {
  children: React.ReactNode;
}

/*
const useStyles = makeStyles(theme => ({
  content: {
    height: "100%",
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));
*/

const ColorModeContext = createContext({ toggleColorMode: () => {} });

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light" ? {
      primary: {
        main: theme.palette.pink[500]
      },
      secondary: {
        main: theme.palette.green[300]
      },
      divider: theme.palette.pink[500],
      background: {
        default: theme.palette.gray[100],
        paper: theme.palette.gray[100]
      },
      text: {
        primary: theme.palette.gray[900],
        secondary: theme.palette.gray[700],
      }
    } : {
      primary: {
        main: theme.palette.primary[500]
      },
      secondary: {
        main: theme.palette.green[500]
      },
      divider: theme.palette.primary[500],
      background: {
        default: theme.palette.gray[800],
        paper: theme.palette.gray[800]
      },
      text: {
        primary: theme.palette.gray[100],
        secondary: theme.palette.gray[300],
      }
    })
  }
});

/*
TODO: 
mode not necessary to have as a layout prop here. mode switch will be on nav bar most likely and in this layout component
- add navbar
- add sidebar
*/

export const Layout: React.FC<LayoutProps & {
  mode?: "light" | "dark"
}> = ({ mode = "dark", children }) => {
  // const classes = useStyles();
  // const [mode, setMode] = useState<PaletteMode>(layoutMode);

  const colorMode = useContext(ColorModeContext);

  /*
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );
  */

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <main>
          {children}
        </main>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
