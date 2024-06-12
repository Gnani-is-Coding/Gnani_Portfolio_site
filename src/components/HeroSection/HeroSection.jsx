import React from 'react'
import styled from "styled-components"
import { Bio } from '../../data/constants'
import Typewriter  from "typewriter-effect"
import lord from "../../images/lord.webp"
import HeroBgAnimation from "../HeroBgAnimation"
import {Tilt} from "react-tilt"
import {motion} from "framer-motion"
import {headContentAnimation, headTextAnimation} from "../../utils/motion"
import StyledStarCanvas from '../Canvas/stars'

const HeroContainer =  styled.div`
display: flex;
justify-content: center;
position: relative;
padding: 80px 30px;
z-index: 1;

@media screen and (max-width: 960px){
    padding: 66px 16px;
}

@media screen and (max-width: 640px){
    padding: 32px 16px;
}

clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`
const HeroInnerContainer =  styled.div`
position : relative;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
max-width: 1100px;

@media screen and (max-width: 960px){
    flex-direction: column;
}

`
const HeroLeftContainer =  styled.div`
width: 100%;
order: 1;
@media screen and (max-width: 960px) {
    order: 2;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
}

`
const HeroRightContainer =  styled.div`
width: 100%;
order: 2;
display: flex;
justify-content: end;

@media screen and (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
}

@media screen and (max-width: 640px){
    margin-bottom: 30px;
}
`
const Title = styled.div`
font-weight: 700;
font-size: 50px;
color: ${({theme}) => theme.text_primary};
line-height: 68px;

@media screen and (max-width: 960px){
    text-align: center;
    font-size:  40px;
    line-height: 48px;
    margin-bottom: 8px;
}

`
const TextLoop = styled.div`
font-weight: 600;
font-size: 28px;
display: flex;
gap: 12px;
color: ${({theme}) => theme.text_primary};
line-height: 68px;
width: 100%;
align-items: center;

@media screen and (max-width: 960px){
    justify-content: center;
    font-size:  22px;
    line-height: 48px;
    margin-bottom: 16px;
    
}
`
const Span = styled.div`
color: ${({theme}) => theme.primary};
cursor: pointer;
`
const SubTitle = styled.div`
font-size: 20px;
line-height: 32px;
margin-bottom: 42px;
color: ${({theme}) => theme.text_primary + 95} ; //here 95 is the opacity

@media screen and (max-width: 960px){
    justify-content: center;
    font-size:  16px;
    line-height: 32px;
    
}
`
const ResumeButton = styled.a`
-webkit-appearance: button;
-moz-appearance: button;
appearance: button;
text-decoration: none;

width: 95%;
max-width: 300px;
text-align : center;
padding: 16px 0 ;

background: hsla(271, 100%, 50%, 1);
background: linear-gradient(
  225deg,
  hsla(271, 100%, 50%, 1) 0%,
  hsla(294, 100%, 50%, 1) 100%
);
background: -moz-linear-gradient(
  225deg,
  hsla(271, 100%, 50%, 1) 0%,
  hsla(294, 100%, 50%, 1) 100%
);
background: -webkit-linear-gradient(
  225deg,
  hsla(271, 100%, 50%, 1) 0%,
  hsla(294, 100%, 50%, 1) 100%
);
box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
border-radius: 50px;
font-weight: 600;
font-size: 20px;
cursor: pointer;

&:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1F2634;
    filter: brightness(1);
}
@media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
}
color: white;
`
const Img = styled.img`
border-radius: 50%;
width: 100%;
height: 100%; 
max-width: 400px;
max-height: 400px;
border: 2px solid ${({theme}) => theme.primary};

@media (max-width: 640px){
    max-width:280px;
    max-height:280px;   
}
`
const HeroBg = styled.div`
position: absolute;
display: flex;
top: 50%;
right: 0
bottom: 0;
left: 50%;
width: 100%;
height: 100%;
max-width: 1360px;
justify-content: end;
-webkit-transform: translateX(-50%) translateY(-50%);
transform: translateX(-50%) translateY(-50%);

@media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
}
`

function HeroSection() {
  return (
    <div id="About">
        <HeroContainer>
            <HeroBg>  {/*bg matrix animation*/}
                <StyledStarCanvas/>
                <HeroBgAnimation></HeroBgAnimation>
            </HeroBg>

            <motion.div {...headContentAnimation}>
            <HeroInnerContainer>
                <HeroLeftContainer>
                    <motion.div {...headTextAnimation}>
                        <Title>Hi, I am <br/> {Bio.name}</Title>
                        <TextLoop>I am a 
                            <Span>
                                <Typewriter 
                                options = {{
                                    strings: Bio.roles,
                                    loop: true,
                                    autoStart : true,
                                }}
                                />
                            </Span>
                        </TextLoop>
                    </motion.div>

                    <motion.div {...headContentAnimation}>
                        <SubTitle>{Bio.description}</SubTitle>
                    </motion.div>

                    <ResumeButton href="https://drive.google.com/file/d/1cJFsQTCN0kAp2D0-iBIrlvrnbR8gy3Wc/view" target="_blank">Check Resume </ResumeButton>
                </HeroLeftContainer>

                <HeroRightContainer>
                <motion.div {...headContentAnimation}>
                    <Tilt>
                        <Img src={lord} alt="Gnani" />
                    </Tilt>
                </motion.div>
                </HeroRightContainer>
            </HeroInnerContainer>
            </motion.div>
            
        </HeroContainer>
    </div>
  )
}

export default HeroSection