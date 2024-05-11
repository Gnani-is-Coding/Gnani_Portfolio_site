import styled, { ThemeProvider} from "styled-components"  //Themeprovider is a theme context 
import {darkTheme} from "./utils/themes"
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection"; 
import SkillSection from "./components/SkillSection/index.jsx"
import Experience from "./components/Experience/Experience.jsx";
import Education from "./components/EducationSection/Education.jsx";


const Body = styled.div`
background-color: ${({theme}) => theme.bg};
width: 100%;
height: 90vh;
overflow-x: hidden;
position: relative; 
` 


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Navbar/>
        {/* <hr style={{'color': '#ffffff' }} /> */}
        <Body>
          <HeroSection/>
          <SkillSection/>
          <Experience/>
          <Education/>
        </Body>
     </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
