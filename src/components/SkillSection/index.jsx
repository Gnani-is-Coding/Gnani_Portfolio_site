import React from "react";
import styled from "styled-components";
import { skills } from "../../data/constants";
import { Tilt } from "react-tilt";
import { usePortfolio } from "../../Context.";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
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
const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  gap: 50px;
  justify-content: center;
`;
const Skill = styled.div`
  max-width: 500px;
  width: 450px;
  background-color: ${({ isDarkTheme }) =>
    `${isDarkTheme ? "rgba(17, 25, 40, 0.83)" : "#eff2f7"}`};
  border: ${({ isDarkTheme }) =>
    `1px solid ${isDarkTheme ? "rgba(255, 255, 255, 0.125)" : "#bfbfbf"}`};
  box-shadow: 0px 4 px 24px rgba(23, 92, 230, 0.15);
  border-radius: 16px;
  padding: 18px 36px;
  cursor: pointer;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 400px;
    padding: 10px 36px;
  }

  @media screen and (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
    min-width: 450px;
  }
`;
const SkillTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.text_secondary};
`;
const SkillList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;
const SkillItem = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ isDarkTheme, theme }) => {
    return isDarkTheme ? theme.text_primary + 95 : "#48494a";
  }};
  border: 1px solid ${({ theme }) => theme.text_primary + 99};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media (max-width: 760px) {
    font-size: 14px;
    padding: 8px 12px;
  }

  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;
const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`;

function SkillSection() {
  const { isDarkTheme } = usePortfolio();

  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>
          Here are some of my skills on which i have been working on past 2
          years.
        </Desc>

        <SkillsContainer>
          {skills.map((skill, index) => (
            <Tilt>
              <Skill key={`skill ${index}`} isDarkTheme={isDarkTheme}>
                <SkillTitle isDarkTheme>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item, index_x) => (
                    <SkillItem
                      key={`skill-x-${index_x}`}
                      isDarkTheme={isDarkTheme}
                    >
                      <SkillImage src={item.image} />
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            </Tilt>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
}

export default SkillSection;
