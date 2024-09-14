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
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;
const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const School = styled.div`
  font-size: 18px;
  font-weight: 600px;
  color: ${({ theme, isDarkTheme }) => (isDarkTheme ? "#fff" : "#000")};
  font-weight: 600;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
const Degree = styled.div`
  font-size: 14px;
  font-weight: 500px;
  color: ${({ theme, isDarkTheme }) => (isDarkTheme ? "#fff" : "#000")};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Date = styled.div`
  font-size: 12px;
  font-weight: 400px;
  color: ${({ theme }) => theme.text_secondary + 80};
  color: ${({ theme, isDarkTheme }) => (isDarkTheme ? "#fff" : "#000")};

  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme, isDarkTheme }) =>
    isDarkTheme ? theme.text_primary + 99 : "#0f0f0f"};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Grade = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme, isDarkTheme }) =>
    isDarkTheme ? theme.text_primary + 99 : "#65758c"};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
const Span = styled.div`
  display: -webkit-box;
  max-width: 100%;
`;
const StyledTimelineElement = styled(VerticalTimelineElement)`
  .vertical-timeline-element-icon {
    background-color: ${({ theme }) =>
      theme.primary}; // Use your theme's primary color
    box-shadow: 0 0 0 4px
        ${({ isDarkTheme }) => (isDarkTheme ? "#fff" : "#4f4b4f")},
      inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
  }
`;

const EducationCard = ({ education }) => {
  const { isDarkTheme } = usePortfolio();
  return (
    <StyledTimelineElement
      isDarkTheme={isDarkTheme}
      icon={
        <img
          width="100%"
          height="100%"
          alt={education?.school}
          style={{
            borderRadius: "50%",
            objectFit: "cover",
            border: `1px solid ${isDarkTheme ? "#000" : "#fff"}`,
          }}
          src={education?.img}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#1d1836",
        color: isDarkTheme ? "#fff" : "#0f0f0f",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        backgroundColor: isDarkTheme ? "rgba(17, 25, 40, 0.83)" : "#e7d7f5",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight: "7px solid  rgba(255, 255, 255, 0.3)",
      }}
      date={education?.date}
    >
      <Top>
        <Image src={education?.img} isDarkTheme={isDarkTheme} />
        <Body>
          <School isDarkTheme={isDarkTheme}>{education?.school}</School>
          <Degree isDarkTheme={isDarkTheme}>{education?.degree}</Degree>
          <Date isDarkTheme={isDarkTheme}>{education?.date}</Date>
        </Body>
      </Top>
      {education.grade && (
        <Grade isDarkTheme={isDarkTheme}>
          <b>Grade : </b>
          {education?.grade}
        </Grade>
      )}
      <Description isDarkTheme={isDarkTheme}>
        {education?.desc && <Span>{education.desc}</Span>}
      </Description>
    </StyledTimelineElement>
  );
};

export default EducationCard;
