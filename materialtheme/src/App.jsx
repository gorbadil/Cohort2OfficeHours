import Button from "@mui/material/Button";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import { green, red, blue } from "@mui/material/colors";
import "./App.css";
import Navbar from "./Navbar";
import { Typography } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[600],
      contrastText: "#fff",
    },
    secondary: {
      main: red[500],
    },
    success: {
      main: green[500],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

const BootstrapButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
  color: "#ffffff",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar />
        <br />
        <br />
        <br />
        <br />

        <h3>Yeni Alan</h3>
        <Typography variant="h4" style={{ color: red[500] }}>
          Yeni Alan
        </Typography>
        <br />
        <br />
        <br />
        <BootstrapButton variant="contained" disableRipple>
          Bootstrap
        </BootstrapButton>
        <Button color="primary" variant="contained">
          Secondary
        </Button>
        <Button color="primary" variant="contained">
          Secondary
        </Button>
        <Button color="secondary" variant="contained">
          Secondary
        </Button>
        <Button color="success" variant="contained">
          Success
        </Button>
        <Button color="error" variant="contained">
          Error
        </Button>
      </ThemeProvider>
    </div>
  );
}

export default App;
