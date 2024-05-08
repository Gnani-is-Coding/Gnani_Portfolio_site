import  { ThemeProvider} from "styled-components"  //Themeprovider is a theme context 
import {darkTheme} from "./utils/themes"
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar/>
     </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
