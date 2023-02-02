/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactTypingEffect from 'react-typing-effect';
import ProjectComponents from './ProjectComponents';
import TerminalView from './TerminalView';
import { SplitPane } from "react-collapse-pane";
import { makeStyles } from '@material-ui/core/styles';
// import '../index.css';

// const useStyles = makeStyles({
//   .Pane.horizontal:nth-child(3) {
//     /* top: 50px; */
//     overflow: visible !Important;
//     /* flex-basis: 19vh !important; */
//     /* flex: 10; */
//     position: absolute;
//     z-index: 1;
//     /* top: 68%; */
//     bottom: 30%;
// }
//   // root: {
//   //   overflow: 'visible !important'
//   //   // width: '100vw',
//   //   // height: '100vh',
//   //   // overflow: 'hidden !important'
//   // },
// });

export default function Welcome() {
  const [currentEmailMessage, changeEmailMessage] = useState('If clicked, will copy email to clipboard.');
  const [emailClicked, setEmailClick] = useState(false);
  const [openCode, setOpenCode] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [splitDirection, useSplitDirection] = useState('vertical');
  // const [collapse, useCollapseDirection] = useState('right');

  useEffect(() => {
    const timer = setTimeout(() => {
      handleOpening(handleScreenSize);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  let handleOpening = (cb) => {
    setOpenCode(true);
    cb();
  }

  let handleScreenSize = () => {
    if (window.innerWidth < 1200) {
      useSplitDirection('horizontal');
    }
    // if (window.innerWidth < 1200) {
    //   useCollapseDirection('down');
    // }
  }

  const HandleEmail = () => {
    navigator.clipboard.writeText('mollyfuhrman@gmail.com');
    changeEmailMessage('Copied to clipboard!');
    setEmailClick(true);
  };

  const HandleProjects = () => {
    setShowProjects(!showProjects);
  };

  // const classes = useStyles();

  return (
    <>
      <TerminalView openCode={openCode} />
      <SplitPaneWrapper openCode={openCode}>
      {/* <SplitPane className={classes.root} */}
      <SplitPane 
        minSizes={[200, 5]}
        initialSizes={[3, 1]}
        split={splitDirection}
        // collapseDirection={collapse}
        resizerOptions={{
            css: {
              width: '50px',
              background: 'rgba(0, 0, 0, 0)'
            },
            hoverCss: {
              cursor: 'none'
            },
              // grabberSize: 10
          }}
          // collapse={{
          //   collapseTransitionTimeout: 500,
          //   'grow'
          //   collapse,
          //   0,
          // }}
          // collapseOptions={{
          //   collapsedSize: 0,
          //   collapseTransitionTimeout: 500,
          //   buttonTransition: 'grow',
          //   collapseDirection: {collapse}
          // overlayCss: {
          //   backgroundColor: 'black'
          // }
          //   // minSize: 0
          // }}
          >
        <ListContainer>
          <StyledContainer showProjects={showProjects}>
            <Num>
              <Title>// Molly Fuhrman - Web Developer</Title>
            </Num>
            <Num/>
            <Num>
              <ExportDefault>export default </ExportDefault>
              <Function>function </Function>
              <Hello>
                Hello<Parens>{'() {'}</Parens>
              </Hello>
            </Num>
            <Num>
              <Return>return (</Return>
            </Num>
            <Num>
              <StandaloneBrackets>
              {'<>'}
              </StandaloneBrackets>
            </Num>
            <Num>
              <Greeting>
                <EmptyOpenBrackets>{'<'}</EmptyOpenBrackets>
                Greeting
                <EmptyOpenBrackets>{'>'}</EmptyOpenBrackets>
              </Greeting>
            </Num>
            <Num>
              <HelloType>
                <ReactTypingEffect
                  text={['Hello!']}
                  speed={[160]}
                  typingDelay={[1500]}
                  eraseDelay={[1500]}
                  />
              </HelloType>
            </Num>
            <Num>
              <Introduction>
                <EmptyOpenBrackets>{'<'}</EmptyOpenBrackets>
                Introduction
                <EmptyOpenBrackets>{'>'}</EmptyOpenBrackets>
              </Introduction>
            </Num>
            <Num>
              <Text>
                My name is Molly Fuhrman
              </Text>
            </Num>
            <Num>
              <Introduction>
                <EmptyOpenBrackets>{'</'}</EmptyOpenBrackets>
                Introduction
                <EmptyOpenBrackets>{'>'}</EmptyOpenBrackets>
              </Introduction>
            </Num>
            <Num>
              <Bio>
                <EmptyOpenBrackets>{'<'}</EmptyOpenBrackets>
                Bio
                <EmptyOpenBrackets>{'>'}</EmptyOpenBrackets>
              </Bio>
            </Num>
            <Num>
              <Text>
                <span>I&apos;m a full-stack software engineer.</span>
              </Text>
            </Num>
            <Num>
              <Bio>
              <EmptyOpenBrackets>{'</'}</EmptyOpenBrackets>
              Bio
              <EmptyOpenBrackets>{'>'}</EmptyOpenBrackets>
              </Bio>
            </Num>
            <Num>
              <Greeting>
                <EmptyOpenBrackets>{'</'}</EmptyOpenBrackets>
                Greeting
                <EmptyOpenBrackets>{'>'}</EmptyOpenBrackets>
              </Greeting>
            </Num>
            <Num>
              <Contact>
              <EmptyOpenBrackets>{'<'}</EmptyOpenBrackets>
              Contact
              <EmptyOpenBrackets>{'>'}</EmptyOpenBrackets>
              </Contact>
            </Num>
            <Num>
              <Key>email: </Key>
              <EmailValue onClick={HandleEmail} tabIndex="0">
                mollyfuhrman@gmail.com
                <EmailDropDownContent>
                  <span className={emailClicked && 'clicked'}>
                    {currentEmailMessage}
                  </span>
                </EmailDropDownContent>
              </EmailValue>
            </Num>
            <Num>
              <Key>github: </Key>
              <GitLIValue href="https://github.com/molfuh" target="_blank">
                github.com/molfuh
                <EmailDropDownContent>
                  If clicked, will open GitHub in new tab.
                </EmailDropDownContent>
              </GitLIValue>
            </Num>
            <Num>
              <Key>linkedin: </Key>
              <GitLIValue href="https://www.linkedin.com/in/molly-fuhrman/" target="_blank">
                linkedin.com/in/molly-fuhrman
                <EmailDropDownContent>
                  If clicked, will open LinkedIn in new tab.
                </EmailDropDownContent>
              </GitLIValue>
            </Num>
            <Num>
              <Contact>
                <EmptyOpenBrackets>{'</'}</EmptyOpenBrackets>
                Contact
                <EmptyOpenBrackets>{'>'}</EmptyOpenBrackets>
              </Contact>
            </Num>
            <Num>
              <Appreciation>
                <EmptyOpenBrackets>{'<'}</EmptyOpenBrackets>
                Appreciation
                <EmptyOpenBrackets>{'>'}</EmptyOpenBrackets>
              </Appreciation>
            </Num>
            <Num>
              <AppreciationText>
                Thank you for stopping by!
              </AppreciationText>
            </Num>
            <Num>
              <Appreciation>
                <EmptyOpenBrackets>{'</'}</EmptyOpenBrackets>
                Appreciation
                <EmptyOpenBrackets>{'>'}</EmptyOpenBrackets>
              </Appreciation>
            </Num>
            <Num/>
            <Num>
              <RecentProjs>
                {'{/* Click below to see recent projects!  */}'}
              </RecentProjs>
            </Num>
            <Num>
              <Projects>
                <EmptyOpenBrackets>{'<'}</EmptyOpenBrackets>
                  <span style={{marginRight:'7px'}}>Projects</span>
                  <Function onClick={HandleProjects}>
                    <Hover tabIndex="0">
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
            </Num>
            <Num>
              <StandaloneBrackets>
                {'</>'}
              </StandaloneBrackets>
            </Num>
            <Num>
              <Return>
                )
              </Return>
            </Num>
            <Num>
              <Parens>
                {'}'}
              </Parens>
            </Num>
            <Num/>
          </StyledContainer>
        </ListContainer>
      {showProjects ? <ProjectComponents openCode={openCode} showProjects={showProjects} /> : <NoProjects></NoProjects>}
      </SplitPane>
      </SplitPaneWrapper>
    </>
  );
}

const SplitPaneWrapper = styled.div`
  position: ${({openCode}) => openCode ? 'static' : 'absolute'};
  display: flex;
`;

const ListContainer = styled.ol`
counter-reset: item;
margin-left: 0;
padding-left: 0;
margin-top: 0;
`;

const StyledContainer = styled.main`
  z-index: ${({showProjects}) => showProjects ? 0 : 1};
  padding: 10px;
  background-color: #1d1d1d;
  height: 100vh;
  // width: 100vw;
  position: absolute;
  @media (max-width: 768px) {
    font-size: 1.5vh;
  }
`;

const NoProjects = styled.div`
  position: absolute;
  background-color: #1d1d1d;
  height: 100vh;
  width: 100vw;
  // top: 50px;
  // z-index: -1;
  // display: ${({showProjects}) => showProjects ? 'auto' : 'none'};
`;

const Num = styled.li`
  color: #909090;
  display: -webkit-box;
  margin-left: 2.5em;
  text-overflow: clip;
  white-space: nowrap;
  &:before {
      display: inline-block;
      content: counter(item) "";
      counter-increment: item;
      width: 2em;
      margin-left: -2em;
  }
  @media (max-width: 768px) {
    white-space: break-spaces;
  }
  `;

const Title = styled.div`
  position: relative;
  color: white;
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
  color: #dc7bdf;
  margin-left: 1.5em;
`;

const EmptyOpenBrackets = styled.span`
  position: relative;
  color: #8a8a8a;
`;

const StandaloneBrackets = styled(EmptyOpenBrackets)`
  margin-left: 3em;
`;

const Greeting = styled.div`
  color: #65cfb8;
  margin-left: 4.5em;
`;

const HelloType = styled.div`
  position: relative;
  color: white;
  margin-left: 6em;
`;

const Text = styled(HelloType)`
margin-left: 9em;
`;

const AppreciationText = styled(Text)`
  margin-left: 6em;
`;

const Introduction = styled(Greeting)`
  margin-left: 7.5em;
`;

const Bio = styled(Greeting)`
  margin-left: 7.5em;  
`;
const Contact = styled(Greeting)`
`;

const Key = styled.span`
  position: relative;
  color: white;
  margin-left: 6em;
`;

const EmailValue = styled.span`
  color: white;
  position: relative;
  display: inline-block;
  :hover, :focus {
    color: #ff9800;
    cursor: pointer;
  }
`;

const GitLIValue = styled.a`
  color: white;
  position: relative;
  display: inline-block;
  :hover, :focus {
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
  z-index: 3;
  ${EmailValue}:hover &,
  ${EmailValue}:focus & {
    display: block;
    top: -47px;
    color: #589bc8;
    width: 350px;
    font-size: 1.7vh;
    padding-left: 20px;
    .clicked {
      color: #4CAF50;
    }
  }
  ${GitLIValue}:hover &,
  ${GitLIValue}:focus & {
    display: block;
    top: -47px;
    color: #589bc8;
    width: 350px;
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
  margin-left: 4.5em;
`;
