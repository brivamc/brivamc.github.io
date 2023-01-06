import { PaletteMode } from "@mui/material";

export const themePalette = {
  green: {
    100: "#D0DDD9", // gainsboro
    200: "#C4D4CE", // ash gray
    300: "#B8CCC5", // opal ** love **
    400: "#89A99D", // morning blue
    500: "#71988A", // polished pine
    600: "#5E8275", // wintergreen dream
    700: "#56766D", // hooker's dream
    800: "#455F56", // feldgrau
    900: "#334741"  // dark slate gray
  },
  gray: {
    100: "#E9EDED", // cultured
    200: "#DCE5E2", // platinum
    300: "#CCCCCC", // light gray
    400: "#C2C2C2", // silver
    500: "#7A7A7A", // sonic silver
    600: "#666666", // granite gray
    700: "#3D3D3D", // onyx
    800: "#333333", // jet ** love **
    900: "#1F1F1F", // eerie black
  },
  primary: {
    100: "#E7E2F3", // lavender web
    200: "#D0C5E8", // languid lavender
    300: "#B9A7DC", // wisteria
    400: "AD99D6",  // blue bell
    500: "#A18AD0", // lavender floral ** love **
    600: "#8C6DC5",  // middle blue purple
    700: "#6B46AF", // plump purple
    800: "#472F75", // spanish violet
    900: "#342358"  // russian violet
  },
  pink: {
    100: "#F9F0F7", // lavender blush
    200: "#F3E2F0", // pale purple pantone
    300: "#EED2E8", // pink lace
    400: "#E9C4E1", // thistle
    500: "#E3B5D9", // pink lavender ** love **
    600: "#C97EBB", // sky magenta
    700: "#BD61AC", // pearly purple
    800: "#652A5B", // palatinate purple
    900: "#481E40"  // dark purple
  }
};

export const lightThemePalette = {
  primary: {
    main: themePalette.pink[600]
  },
  secondary: {
    main: themePalette.gray[500]
  },
  divider: themePalette.pink[500],
  background: {
    default: themePalette.gray[100],
    paper: themePalette.gray[100]
  },
  text: {
    primary: themePalette.gray[700],
    secondary: themePalette.gray[900],
  }
};

export const darkThemePalette = {
  primary: {
    main: themePalette.primary[500]
  },
  secondary: {
    main: themePalette.primary[200]
  },
  divider: themePalette.primary[500],
  background: {
    default: themePalette.gray[900],
    paper: themePalette.gray[900]
  },
  text: {
    primary: themePalette.gray[400],
    secondary: themePalette.gray[100],
  }
};

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light" ? lightThemePalette : darkThemePalette)
  }
});

export const getThemedComponents = (mode: PaletteMode) => ({
  palette: themePalette,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1rem",
          fontWeight: 600,
          borderRadius: "8px",
          textTransform: "none" as const
        },
        outlined: {
          border: "2px solid",
          "&:hover": {
            border: "2px dashed"
          }
        },
        contained: {
          color: mode === "light" ? lightThemePalette.background.default : darkThemePalette.background.default,
          "&:hover": {
            backgroundColor: mode === "light" ? themePalette.pink[600] : themePalette.primary[300]
          }
        },
        text: {
          "&:hover": {
            color: mode === "light" ? lightThemePalette.secondary.main : darkThemePalette.secondary.main,
            background: "transparent"
          }
        }
      },
      defaultProps: {
        disableRipple: true,
        disableElevation: true
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            background: "transparent",
            color: mode === "light" ? lightThemePalette.secondary.main : darkThemePalette.secondary.main,
          }
        },
      }
    },
    MuiTypography: {
      styleOverrides: {
        h4: {
          ...mode === "light" ? {
            color: lightThemePalette.secondary.main
          } : {}
        },
        h2: {
          ...mode === "light" ? {
            color: lightThemePalette.secondary.main
          } : {}
        }
      }
    }
  }
});
