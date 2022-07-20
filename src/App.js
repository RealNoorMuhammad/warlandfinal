import './App.css';
import Home from './screens/Home';
import Garden from './screens/Garden';
import Slider from "./components/Slider/Slider";
import Grid from '@mui/material/Grid';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BluePrint from './screens/BluePrint';
import Info from './screens/Info';
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path = '/' exact={true} element = {<Home  />} />
          <Route path = '/Info'  element = {<Info />} /> 
          <Route path = '/garden'  element = {<Garden />} />
       
        </Routes>
      </Router>
      </ThemeProvider>
    </div>
    // <Grid container >
    //   <Grid item md={6} >     
    //     <Slider />
    //   </Grid>
    // </Grid>
  );
}

export default App;
