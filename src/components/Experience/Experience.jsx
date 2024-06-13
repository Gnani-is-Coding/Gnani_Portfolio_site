import React from 'react'
import styled from "styled-components"
import { experiences } from '../../data/constants'
import ExperienceCard from '../ExperienceCard/ExperienceCard'
import { VerticalTimeline } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css";


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`
const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
width : 100%;
max-width: 1100px;
gap: 12px;
`
const Title = styled.div`
font-size: 36px;
text-align: center;
font-weight: 600;
margin-top: 20px;
color: ${({theme}) => theme.text_primary};

@media screen and  (max-width: 768px){
    margin-top: 12px;
    font-size: 30px;
}
`
const Desc = styled.div`
font-size: 18px;
text-align: center;
font-weight: 600;
margin-bottom: 40px;
color: ${({theme}) => theme.text_secondary};

@media screen and (max-width:768px) {
    font-size: 16px;
} 
`

function Experience() {
  return (
    <Container id="Experience">
        <Wrapper>
            <Title>Experience</Title>
            <Desc>
                My work experience as a fullstack developer and working
                on different companies and projects. 
            </Desc>

            <VerticalTimeline>
                {experiences.map((experience, index) => (
                    <ExperienceCard experience = {experience} key={`Experience-${index}`} />
                ))}
            </VerticalTimeline>
        </Wrapper>
    </Container>
  )
}

export default Experience