import React from 'react'
import styled from "styled-components"
import { Bio } from '../../data/constants'
import Typewriter  from "typewriter-effect"
import profile_pic from '../../images/Profile_Picture.jpg'
import HeroBgAnimation from "../HeroBgAnimation"
// import {Tilt} from "react-tilt"
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
font-size: 32px;
color: ${({theme}) => theme.text_primary};
line-height: 68px;

@media screen and (max-width: 960px){
    text-align: center;
    font-size:  30px;
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
font-size: 16px;
line-height: 32px;
margin-bottom: 42px;
color: ${({theme}) => theme.text_primary + 95} ; //here 95 is the opacity

@media screen and (max-width: 960px){
    justify-content: center;
    font-size:  14px;
    line-height: 32px;
    max-width:95%;
    text-align: center;
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
// const Img = styled.img`
// border-radius: 50%;
// width: 100%;
// height: 100%; 
// max-width: 400px;
// max-height: 400px;
// border: 2px solid ${({theme}) => theme.primary};

// @media (max-width: 640px){
//     max-width:280px;
//     max-height:280px;   
// }
// `
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

                
                <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"> 
                <defs>                         
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            
                <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%">
                </stop>                            
                <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>                        
                </linearGradient>                    
                </defs>  
                <mask mask-type="alpha" id ="mask1">
                 <path fill="url(#sw-gradient)" d="M22.9,-28.2C28,-22.9,29.5,-14.2,30,-6.1C30.4,2,29.9,9.5,27,16.5C24.1,23.5,18.7,30.1,11.6,33.2C4.5,36.4,
                    -4.3,36.2,-12,33.2C-19.7,30.3,-26.4,24.7,-30,17.7C-33.7,10.7,-34.2,2.3,-33.4,-6.5C-32.6,-15.3,-30.4,-24.4,-24.6,-29.5C-18.8,-34.7,-9.4,-35.7
                    ,-0.3,-35.4C8.9,-35.1,17.7,-33.4,22.9,-28.2Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0"
                style={{"transition": "all 0.3s ease 0s"}}>
                </path>
                 </mask>  
                    <g mask="url(#mask1)">            
                    <path fill="url(#sw-gradient)" d="M22.9,-28.2C28,-22.9,29.5,-14.2,30,-6.1C30.4,2,29.9,9.5,27,16.5C24.1,23.5,18.7,30.1,11.6,33.2C4.5,36.4,
                        -4.3,36.2,-12,33.2C-19.7,30.3,-26.4,24.7,-30,17.7C-33.7,10.7,-34.2,2.3,-33.4,-6.5C-32.6,-15.3,-30.4,-24.4,-24.6,-29.5C-18.8,-34.7,-9.4,-35.7
                        ,-0.3,-35.4C8.9,-35.1,17.7,-33.4,22.9,-28.2Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0"
                    style={{"transition": "all 0.3s ease 0s"}}>
                    </path>  
                    <image href={profile_pic} style={{width: '80px','height':'100px'}} alt="profile pic" x='9' y='10'/>  
                    </g>          
                </svg>
                

            

                {/* <motion.div {...headContentAnimation}>
                    <Tilt>
                        <Img src={profile_pic} alt="Gnani" />
                        
                    </Tilt>
                    
                </motion.div> */}
                </HeroRightContainer>
            </HeroInnerContainer>
            </motion.div>
                 
            {/* <svg id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">                    
            <defs>                         
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">                            
                <stop id="stop1" stop-color="rgba(248, 117, 55, 1)" offset="0%"></stop>                            
                <stop id="stop2" stop-color="rgba(251, 168, 31, 1)" offset="100%"></stop>                        
                </linearGradient>                    
                </defs>  
                <mask mask-type="alpha" id ="mask1">
                <path fill="url(#sw-gradient)" d="M19.9,-30.6C27,-30.4,34.6,-27.4,36.2,-21.9C37.7,-16.3,33.1,-8.1,32.4,-0.4C31.6,7.3,
                34.8,14.6,31.9,17.8C28.9,21,20,20.1,13.7,21.8C7.4,23.5,3.7,27.9,-2,31.4C-7.8,34.9,-15.5,37.7,-20.9,35.4C-26.2,33.1,-29.1
                ,25.8,-32.5,19.1C-36,12.3,-39.9,6.2,-39,0.5C-38,-5.1,-32.2,-10.2,-28.9,-17.1C-25.6,-24,-24.8,-32.8,-20.4,-34.5C-16,-36.2,-8,
                -30.8,-0.8,-29.4C6.4,-28.1,12.9,-30.7,19.9,-30.6Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" 
                style={{"transition": "all 0.3s ease 0s;"}} stroke="url(#sw-gradient)"></path>
                </mask>  

                <g mask="url(#mask1)">             
                <path fill="url(#sw-gradient)" d="M19.9,-30.6C27,-30.4,34.6,-27.4,36.2,-21.9C37.7,-16.3,33.1,-8.1,32.4,-0.4C31.6,7.3,
                34.8,14.6,31.9,17.8C28.9,21,20,20.1,13.7,21.8C7.4,23.5,3.7,27.9,-2,31.4C-7.8,34.9,-15.5,37.7,-20.9,35.4C-26.2,33.1,-29.1
                ,25.8,-32.5,19.1C-36,12.3,-39.9,6.2,-39,0.5C-38,-5.1,-32.2,-10.2,-28.9,-17.1C-25.6,-24,-24.8,-32.8,-20.4,-34.5C-16,-36.2,-8,
                -30.8,-0.8,-29.4C6.4,-28.1,12.9,-30.7,19.9,-30.6Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" 
                style={{"transition": "all 0.3s ease 0s;"}} stroke="url(#sw-gradient)"></path> 
                <image href={profile_pic} style={{width: '80px'}} alt="profile pic" x='16' y='18'/>
                </g>             
            </svg> */}
                 

                

                
            
        </HeroContainer>
    </div>
  )
}

export default HeroSection