import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { Link } from "react-router-dom";
import { Bio } from "../../data/constants";
import { MenuRounded } from "@mui/icons-material";
import { TbSquareRoundedLetterG } from "react-icons/tb";
import { usePortfolio } from "../../Context.";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: #ffffff;
  padding: 0px 10px 0px 10px;
  box-shadow: ${({ isDarkTheme }) =>
    `0 1px 1px 2px ${isDarkTheme ? "#2d3340" : "#000"} `};
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;

const NavbarLogo = styled(Link)`
  width: 80%;
  padding: 0 6px;
  color: inherit;
  font-weight; 500;
  font-size: 3rem;
  text-decoration: none;
  color: yellow;
  display: flex;
  align-items: center;
`;
const NavItem = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style-type: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2 easy-in-out;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
const ButtonContainer = styled.div`
width: 80%;
height: 100%;
display: flex;
justify-content: end;
align-items: center;
padding; 0 6px;

@media screen and (max-width: 768px) {
  display: none;
}
`;
const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: 1px solid ${({ theme }) => theme.text_primary};
  background: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  font-size: 16px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: #ffffff;
  }
`;
const MobileIcon = styled.div`
  color: ${({ theme }) => theme.text_primary};
  height: 100%;
  display: flex;
  align-items: center;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap:16px;
  padding: 0 6px;
  list-style-type: none;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 80px;
  right: 0;
  border-radius: 0 0 10% 10%;
  @media screen and (min-width: 768px){
    display: none;
  }

  transition: all 0.6s ease-in-out;   {/*For Menu option toogle animation*/}
  transform" ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

const ThemeBtnsContainer = styled.div`
  display: flex;
  cursor: pointer;
  @media screen and (min-width: 768px) {
  }
`;

export const Navbar = () => {
  var { isDarkTheme, setDarkTheme } = usePortfolio();
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  return (
    <Nav isDarkTheme>
      <NavbarContainer>
        <NavbarLogo to="/">
          <TbSquareRoundedLetterG style={{ marginRight: "-17px" }} />{" "}
          <TbSquareRoundedLetterG />
        </NavbarLogo>

        <ThemeBtnsContainer>
          {isDarkTheme ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-sun"
              onClick={() => setDarkTheme(false)}
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-moon"
              onClick={() => setDarkTheme(true)}
            >
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          )}
        </ThemeBtnsContainer>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit", cursor: "pointer" }} />
        </MobileIcon>

        <NavItem>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>

          <ThemeBtnsContainer>
            {isDarkTheme ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-sun"
                onClick={() => setDarkTheme(false)}
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" />
                <path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" />
                <path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" />
                <path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" />
                <path d="m19.07 4.93-1.41 1.41" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-moon"
                onClick={() => setDarkTheme(true)}
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
            )}
          </ThemeBtnsContainer>
        </NavItem>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#About">
              About
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Skills">
              Skills
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Experience">
              Experience
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Projects">
              Projects
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Education">
              Education
            </NavLink>
            <GithubButton
              href={Bio.github}
              style={{
                background: theme.primary,
                color: theme.text_primary,
              }}
              target="_blank"
            >
              {" "}
              GithubProfile
            </GithubButton>
          </MobileMenu>
        )}

        <ButtonContainer>
          <GithubButton href={Bio.github} target="_blank">
            {" "}
            GithubProfile
          </GithubButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
