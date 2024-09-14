import styled, { ThemeProvider} from "styled-components"  //Themeprovider is a theme context 
import {darkTheme,lightTheme} from "./utils/themes"
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection"; 
import SkillSection from "./components/SkillSection/index.jsx"
import Experience from "./components/Experience/Experience.jsx";
import Education from "./components/EducationSection/Education.jsx";
import Projects from "./components/ProjectsSection/Projects.jsx";
import Contact from "./components/ContactSection/Contact.jsx";
import Footer from "./components/FooterSection/Footer.jsx";
import StyledStarCanvas from "./components/Canvas/stars.jsx";
import { usePortfolio } from "./Context..js";


const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

function App() {
  const {isDarkTheme} = usePortfolio()

  return (
    <ThemeProvider theme={ isDarkTheme ? darkTheme:lightTheme} >
      <BrowserRouter>
        <Navbar />
        <Body>
          {/* <StyledStarCanvas/> */}
          <div>
            <HeroSection />
            <Wrapper>
              <SkillSection />
              <Experience />
            </Wrapper>
            <Projects />
            <Wrapper>
              {/* <Education /> */}
              <Contact />
            </Wrapper>
            <Footer />
          </div>
        </Body>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;