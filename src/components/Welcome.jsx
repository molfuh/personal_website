/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactTypingEffect from 'react-typing-effect';
import ProjectComponents from './ProjectComponents';
import TerminalView from './TerminalView';

export default function Welcome() {
  const [currentEmailMessage, changeEmailMessage] = useState('If clicked, will copy email to clipboard.');
  const [emailClicked, setEmailClick] = useState(false);
  const [openCode, setOpenCode] = useState(false);
  const [showProjects, setShowProjects] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpenCode(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const HandleEmail = () => {
    navigator.clipboard.writeText('mollyfuhrman@gmail.com');
    changeEmailMessage('Copied to clipboard!');
    setEmailClick(true);
  };

  const HandleProjects = () => {
    setShowProjects(!showProjects);
  };

  return (
    <>
      <TerminalView openCode={openCode} />
      <StyledContainer>
        <Title>
          <Num>1</Num>
          &nbsp;
          // Molly Fuhrman - Web Developer
        </Title>
        <Num>2</Num>
        <LineOne>
          <Num>3</Num>
          &nbsp;
          <ExportDefault>export default </ExportDefault>
          <Function>function </Function>
          <Hello>
            Hello
            <Parens>{'() {'}</Parens>
          </Hello>
        </LineOne>
        <Return>
          <Num>4</Num>
          &nbsp;&nbsp;&nbsp;
          return (
        </Return>
        <EmptyOpenBrackets>
          <Num>5</Num>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {'<>'}
        </EmptyOpenBrackets>
        <Greeting>
          <Num>6</Num>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <EmptyOpenBrackets>{'<'}</EmptyOpenBrackets>
          Greeting
          <EmptyOpenBrackets>{'>'}</EmptyOpenBrackets>
        </Greeting>
        <HelloType>
          <Num>7</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <ReactTypingEffect
            text={['Hello!']}
            speed={[160]}
            typingDelay={[1500]}
            eraseDelay={[1500]}
          />
        </HelloType>
        <Introduction>
          <Num>8</Num>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <EmptyOpenBrackets>{'<'}</EmptyOpenBrackets>
          Introduction
          <EmptyOpenBrackets>{'>'}</EmptyOpenBrackets>
          <Text>
            <Num>9</Num>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            My name is Molly Fuhrman
          </Text>
          <Num>10</Num>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <EmptyOpenBrackets>{'</'}</EmptyOpenBrackets>
          Introduction
          <EmptyOpenBrackets>{'>'}</EmptyOpenBrackets>
        </Introduction>
        <Bio>
          <Num>11</Num>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <EmptyOpenBrackets>{'<'}</EmptyOpenBrackets>
          Bio
          <EmptyOpenBrackets>{'>'}</EmptyOpenBrackets>
          <Text>
            <Num>12</Num>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            I&apos;m a full-stack software engineer.
          </Text>
          <Num>13</Num>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <EmptyOpenBrackets>{'</'}</EmptyOpenBrackets>
          Bio
          <EmptyOpenBrackets>{'>'}</EmptyOpenBrackets>
        </Bio>
        <Greeting>
          <Num>14</Num>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <EmptyOpenBrackets>{'</'}</EmptyOpenBrackets>
          Greeting
          <EmptyOpenBrackets>{'>'}</EmptyOpenBrackets>
        </Greeting>
        <Contact>
          <Num>15</Num>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <EmptyOpenBrackets>{'<'}</EmptyOpenBrackets>
          Contact
          <EmptyOpenBrackets>{'>'}</EmptyOpenBrackets>
        </Contact>

        <Num>16</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Key>email: </Key>
        <EmailValue onClick={HandleEmail}>
          mollyfuhrman@gmail.com
          <EmailDropDownContent>
            <span className={emailClicked && 'clicked'}>
              {currentEmailMessage}
            </span>
          </EmailDropDownContent>
        </EmailValue>
        <br />

        <Num>17</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Key>github: </Key>
        <GitLIValue href="https://github.com/molfuh" target="_blank">
          github.com/molfuh
          <EmailDropDownContent>
            If clicked, will open GitHub in new tab.
          </EmailDropDownContent>
        </GitLIValue>
        <br />

        <Num>18</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Key>linkedin: </Key>
        <GitLIValue href="https://www.linkedin.com/in/molly-fuhrman/" target="_blank">
          linkedin.com/in/molly-fuhrman
          <EmailDropDownContent>
            If clicked, will open LinkedIn in new tab.
          </EmailDropDownContent>
        </GitLIValue>

        <Contact>
          <Num>19</Num>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <EmptyOpenBrackets>{'</'}</EmptyOpenBrackets>
          Contact
          <EmptyOpenBrackets>{'>'}</EmptyOpenBrackets>
        </Contact>

        <Appreciation>
          <Num>20</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <EmptyOpenBrackets>{'<'}</EmptyOpenBrackets>
          Appreciation
          <EmptyOpenBrackets>{'>'}</EmptyOpenBrackets>
        </Appreciation>
        <Text>
          <Num>21</Num>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Thank you for stopping by!
        </Text>
        <Appreciation>
          <Num>22</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <EmptyOpenBrackets>{'</'}</EmptyOpenBrackets>
          Appreciation
          <EmptyOpenBrackets>{'>'}</EmptyOpenBrackets>
        </Appreciation>
        <Num>23</Num>
        <br />
        <Text>
          <Num>24</Num>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <RecentProjs>
            {'{/* Click below to see recent projects!  */}'}
          </RecentProjs>
        </Text>
        <Projects>
          <Num>25</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <EmptyOpenBrackets>{'<'}</EmptyOpenBrackets>
          Projects
          {' '}
          {' '}
          <Function onClick={HandleProjects}>
            <Hover>
              onClick=
              {'{'}
              <Hello>
                openProjects
              </Hello>
              {'}'}
            </Hover>
          </Function>
          <EmptyOpenBrackets>{' />'}</EmptyOpenBrackets>
        </Projects>
        <EmptyOpenBrackets>
          <Num>26</Num>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {'</>'}
        </EmptyOpenBrackets>
        <Return>
          <Num>27</Num>
          &nbsp;&nbsp;&nbsp;
          )
        </Return>
        <Parens>
          <Num>28</Num>
          &nbsp;
          {'}'}
        </Parens>
        {showProjects ? <ProjectComponents openCode={openCode} /> : <></>}
        <br />
        <Num>29</Num>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.main`
  background-color: #1d1d1d;
  height: 100vh;
  width: 100vw;
  position: absolute;
`;

const Num = styled.span`
  color: #909090;
  position: relative;
`;

const Title = styled.div`
  position: relative;
  color: white;
  font-size: 2.1vh;
`;

const LineOne = styled.div`
  position: relative;
`;
const ExportDefault = styled.span`
  color: #dc7bdf;
`;
const Function = styled.span`
  color: #ade0ff;
`;
const Hello = styled.span`
  color: #dee1af;
`;
const Parens = styled.span`
  position: relative;
  color: #d3bd00;
`;

const Return = styled.div`
  position: relative;
  color: #dc7bdf;
`;

const EmptyOpenBrackets = styled.span`
  position: relative;
  color: #8a8a8a;
`;

const Greeting = styled.div`
  position: relative;
  color: #65cfb8;
`;

const HelloType = styled.div`
  position: relative;
  color: white;
`;

const Text = styled(HelloType)``;

const Introduction = styled(Greeting)`
`;

const Bio = styled(Greeting)``;
const Contact = styled(Greeting)``;

const Key = styled.span`
  position: relative;
  color: white;
`;

const EmailValue = styled.span`
  color: white;
  position: relative;
  display: inline-block;
  :hover {
    color: #ff9800;
    cursor: pointer;
  }
`;

const GitLIValue = styled.a`
  color: white;
  position: relative;
  display: inline-block;
  :hover {
    color: #4FC1FF;
    cursor: pointer;
  }
`;

const EmailDropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #1d1d1d;
  color: white;
  min-width: 160px;
  border: 1px solid #4e4e4e;
  padding: 12px 16px;
  z-index: 1;
  ${EmailValue}:hover & {
    display: block;
    top: -47px;
    color: #589bc8;
    width: 500px;
    font-size: 1.7vh;
    padding-left: 20px;
    .clicked {
      color: #4CAF50;
    }
  }
  ${GitLIValue}:hover & {
    display: block;
    top: -47px;
    color: #589bc8;
    width: 500px;
    font-size: 1.7vh;
    padding-left: 20px;
  }
`;

const Appreciation = styled(Greeting)``;
const Projects = styled(Greeting)``;

const Hover = styled.span`
  :hover {
    color: #ec9ef1;
    cursor: pointer;
  }
`;

const RecentProjs = styled.span`
  color: #6f9b56;
`;
