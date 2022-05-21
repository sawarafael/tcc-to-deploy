import { CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import { theme } from "./components/Styles/theme";
import AppRoutes from "./routes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main>
        <AppRoutes />
      </main>
    </ThemeProvider>
  );
};

export default App;
