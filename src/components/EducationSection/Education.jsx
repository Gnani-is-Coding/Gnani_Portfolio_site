import React from "react";
import styled from "styled-components";
import { education } from "../../data/constants";
import EducationCard from "./EducationCard";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import EarthCanvas from "../Canvas/Earth3DModel";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  margin-top: 50px;
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;
const Title = styled.div`
  font-size: 36px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media screen and (max-width: 768px) {
    margin-top: 12px;
    font-size: 30px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.text_secondary};

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
const StyledVerticalTimeline = styled(VerticalTimeline)`
  &::before {
    background: ${({ theme }) => theme.text_primary};
  }
`;

function Education() {
  return (
    <Container id="Education">
      <Wrapper>
        <Title>Education</Title>
        <Desc>
          My Education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </Desc>

        <StyledVerticalTimeline>
          {education.map((education, index) => (
            <EducationCard key={`education-${index}`} education={education} />
          ))}
        </StyledVerticalTimeline>
        <EarthCanvas />
      </Wrapper>
    </Container>
  );
}

export default Education;
