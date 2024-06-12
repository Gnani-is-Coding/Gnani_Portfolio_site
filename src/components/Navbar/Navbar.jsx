import React, { useState } from 'react'
import styled, { useTheme } from "styled-components"
import {Link} from "react-router-dom"
import {Bio }from "../../data/constants"
import {MenuRounded} from "@mui/icons-material"
import { TbSquareRoundedLetterG } from "react-icons/tb";

const Nav = styled.div`
background-color: ${ ({theme}) => theme.bg };
height: 80px;
display: flex;
align-items: center;
justify-content:center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
color: #ffffff;
padding: 0px 10px 0px 10px;
`

const NavbarContainer = styled.div `
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content:space-between;
  font-size: 1rem;
`

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
`
const NavItem = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap:32px;
  padding: 0 6px;
  list-style-type: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
const NavLink = styled.a`
color: ${ ({theme}) => theme.text_primary };
font-weight: 500;
cursor: pointer;
transition: all 0.2 easy-in-out;
text-decoration: none;
&:hover {
  color: ${({theme}) => theme.primary};
}
`
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
`
const GithubButton = styled.a`
border: 1px solid ${({theme}) => theme.primary};
color: 1px solid ${({theme}) => theme.text_primary};
background: inherit;
display:flex;
justify-content: center;
align-items:center;
border-radius: 20px;
font-size: 16px;
cursor: pointer;
padding: 10px 20px;
font-size: 16px;
font-weight: 500;
transition: all 0.6s ease-in-out;
text-decoration: none;
&:hover {
  background: ${({theme}) => theme.primary};
  color: #ffffff;
}
`
const MobileIcon = styled.div`
color: ${({theme}) => theme.text_primary};
height: 100%;
display: flex;
align-items: center;
display:none;
@media screen and (max-width: 768px) {
  display: block;
} 
`
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
  background: ${({theme}) => theme.card_light + 99};
  position: absolute;
  top: 80px;
  right: 0;
  border-radius: 0 0 10% 10%;
  @media screen and (min-width: 768px){
    display: none;
  }

  transition: all 0.6s ease-in-out;   {/*For Menu option toogle animation*/}
  transform" ${({isOpen}) => 
  isOpen ? "translateY(0)" : "translateY(-100%)"};
  box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
  opacity: ${({ isOpen}) => isOpen ? "100%": "0"};
  z-index: ${( {isOpen}) => (isOpen ? "1000": "-1000")};
`

export const Navbar = () => {
  const [isOpen, setIsOpen]  = useState(false)
  const theme = useTheme()

  return (
    <Nav>
    <NavbarContainer>
      <NavbarLogo to="/"><TbSquareRoundedLetterG style={{marginRight: "-17px"}}/> <TbSquareRoundedLetterG/></NavbarLogo>

      <MobileIcon onClick={() => setIsOpen(!isOpen)}>
        <MenuRounded style={{color: "inherit", cursor: "pointer"}} />
      </MobileIcon>

      <NavItem>
        <NavLink  href="#About">About</NavLink>    {/* #About is for routing to that section */}
        <NavLink href="#Skils">Skills</NavLink>
        <NavLink href="#Experience">Experience</NavLink>
        <NavLink href="#Projects">Projects</NavLink>
        <NavLink href="#Education">Education</NavLink>
      </NavItem>

      {
        isOpen && (<MobileMenu isOpen={isOpen}>
           <NavLink onClick={() => setIsOpen(!isOpen)} href="#About">About</NavLink>
           <NavLink onClick={() => setIsOpen(!isOpen)} href="#Skills">Skills</NavLink>
           <NavLink onClick={() => setIsOpen(!isOpen)} href="#Experience">Experience</NavLink>
           <NavLink onClick={() => setIsOpen(!isOpen)} href="#Projects">Projects</NavLink>
           <NavLink onClick={() => setIsOpen(!isOpen)} href="#Education">Education</NavLink>
           <GithubButton href={Bio.github}
           style={{
            background : theme.primary,
            color: theme.text_primary,
           }}
           target="_blank"> GithubProfile</GithubButton>
        </MobileMenu>)
      }

      <ButtonContainer>
        <GithubButton href={Bio.github} target="_blank"> GithubProfile</GithubButton>
      </ButtonContainer>
    </NavbarContainer>
    </Nav>
  )
}

export default Navbar