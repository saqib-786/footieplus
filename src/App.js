import "./App.css";
import Router from "./Config/AppRouter/AppRouter";
import { ThemeProvider, Typography } from '@mui/material';
import theme from './Components/Theme/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
