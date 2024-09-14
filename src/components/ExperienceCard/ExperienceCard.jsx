import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styled from "styled-components";
import { usePortfolio } from "../../Context.";

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;
const Image = styled.img`
  height: 50px;
  border-radius: 10px;
  margin-top: 4px;

  @media screen and (max-width: 768px) {
    height: 40px;
  }
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Role = styled.div`
  font-size: 18px;
  font-weight: 600px;
  color: ${({ theme, isDarkTheme }) => (isDarkTheme ? "#fff" : "#000")};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
  font-weight: 600;
`;
const Company = styled.div`
  font-size: 14px;
  font-weight: 500px;
  color: ${({ theme, isDarkTheme }) =>
    isDarkTheme ? theme.text_primary + 99 : "#000"};

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Date = styled.div`
  font-size: 12px;
  font-weight: 400px;
  color: ${({ theme, isDarkTheme }) =>
    isDarkTheme ? theme.text_primary + 80 : "#000"};

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme, isDarkTheme }) =>
    isDarkTheme ? theme.text_primary + 99 : "#65758c"};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Skills = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: -10px;
`;
const Span = styled.div`
  display: -webkit-box;
  max-width: 100%;
`;

const Skill = styled.div`
  border: 1px solid ${({ theme }) => theme.text_primary + 99};
  padding: 10px;
  border-radius: 8px;
  margin: 5px;
  font-size: 15px;
  color: ${({ theme, isDarkTheme }) =>
    isDarkTheme ? theme.text_primary + 99 : "#65758c"};
  font-weight: 600;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const ItemWrapper = styled.div`
display: flex;
flex-wrap: wrap;
gap; 8px;
`;

function ExperienceCard({ experience }) {
  const { isDarkTheme } = usePortfolio();
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={experience?.company}
          style={{ borderRadius: "50%", objectFit: "cover" }}
          src={experience?.img}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#1d1836",
        color: "#fff",
        boxShadow: "rgba(23,92,230,0.15) 0px 4px 24px",
        backgroundColor: isDarkTheme ? "rgba(17, 25, 40, 0.83)" : "#fff",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "6px",
        transition: "all 0.25s ease-in-out",
      }}
      contentArrowStyle={{
        borderRight: "7px solid  rgba(255, 255, 255, 0.3)",
      }}
      date={experience?.date}
    >
      <Top>
        <Image src={experience.img} />
        <Body>
          <Role isDarkTheme={isDarkTheme}>{experience.role}</Role>
          <Company isDarkTheme={isDarkTheme}>{experience.company}</Company>
          <Date isDarkTheme={isDarkTheme}>{experience.date}</Date>
        </Body>
      </Top>
      <Description isDarkTheme={isDarkTheme}>
        {experience?.desc && <Span>{experience.desc}</Span>}
        {experience?.skills && (
          <>
            <br />
            <Skills>
              <b>Skill</b>
              <ItemWrapper>
                {experience?.skills?.map((skill, index) => (
                  <Skill isDarkTheme={isDarkTheme}>• {skill} </Skill>
                ))}
              </ItemWrapper>
            </Skills>
          </>
        )}
      </Description>
    </VerticalTimelineElement>
  );
}

export default ExperienceCard;
