import styled, { css, keyframes } from 'styled-components';
import { useState } from 'react';

export default function Welcome({ gif }) {
  const [emailPop, useEmailPop] = useState(false);

  const HandleEmail = () => {
    navigator.clipboard.writeText('mollyfuhrman@gmail.com');
    useEmailPop(!emailPop);
}

  return (
    <>
      <StyledContainer />
      <Title>// Molly Fuhrman - Web Developer</Title>
      <StyledGif gif={gif}>
        {/* <StyledEmailPopUp active={emailPop}>
        </StyledEmailPopUp> */}
        {emailPop && <PopUp emailPop={emailPop}>
          Copied to clipboard!    
        </PopUp>}
        <Email onClick={() => HandleEmail()}>mollyfuhrman@gmail.com</Email>
        <GitHub href="https://github.com/molfuh" target="_blank">molfuh</GitHub>
        <LinkedIn href="https://www.linkedin.com/in/molly-fuhrman/" target="_blank">molly-fuhrman</LinkedIn>
        <Projects>
            <Brackets>
            {`<`}
            </Brackets>
            Projects
            <Brackets>
            {` />`}
            </Brackets>
        </Projects>
      </StyledGif>
    </>
  );
}

const Title = styled.span`
  position: absolute;
  color: white;
  font-family: 'Menlo Regular';
  font-weight: normal;
  font-size: 3vw;
  left: 40px;
  top: 5vh;
`;

// const StyledEmailPopUp = styled.div`
//   /* position: absolute; */
// `;

const visibility = keyframes`
  0% {opacity: 0}
  25% {opacity: 1}
  100% {opacity: 1}
`;

const PopUp = styled.div`
  position: absolute;
  font-family: 'Menlo Regular';
  font-weight: normal;
  font-size: 1.4vw;
  opacity: 0;
  top: 32vh;
  left: 21.5vw;
  background-color: transparent;
  color: yellowgreen;
  animation: ${props => props.emailPop && css`${visibility} ease-in 1s` };
`;

const StyledContainer = styled.div`
  background-color: #1b181b;
  height: 100vh;
  width: 100vw;
  position: absolute;
`;

const StyledGif = styled.div`
  background-color: #1b181b;
  background-image: url(${ props => props.gif });
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  height: 80vh;
  width: 75vw;
  top: 55%;
  transform: translate(0, -50%);
`;

const Email = styled.div`
  position: relative;
  color: white;
  margin-left: 29%;
  margin-top: 26%;
  font-family: 'Menlo Regular';
  font-weight: normal;
  font-size: 1.5vw;
  left: -1.5vw;
  width: 20vw;
  :hover {
      color: #ff9800;
      cursor: pointer;
  }
`;

const GitHub = styled.span`
  position: relative;
  color: white;
  margin-left: 29%;
  margin-top: 26%;
  font-family: 'Menlo Regular';
  font-weight: normal;
  font-size: 1.5vw;
  top: 0.6vh;
  left: -0.4vw;
  :hover {
      color: yellow;
      cursor: pointer;
  }
  /* position: relative;
  text-decoration: none;
  color: white;
  margin-left: 29%;
  font-family: 'Menlo Regular';
  font-weight: normal;
  font-size: 1.5vw;
  top: 0.5;
  /* left: 1vw; */
  /* :hover {
    color: yellow;
  } */
`;

const LinkedIn = styled.div`
  position: relative;
  color: white;
  margin-left: 29%;
  /* margin-top: 26%; */
  font-family: 'Menlo Regular';
  font-weight: normal;
  font-size: 1.5vw;
  left: 1vw;
  /* left: 1vw; */
  top: 1vh;
  width: 12vw;
  :hover {
      color: yellow;
      cursor: pointer;
  }
  /* position: relative;
  text-decoration: none;
  color: white;
  margin-left: 30.1%;
  font-family: 'Menlo Regular';
  font-weight: normal;
  font-size: 1.5vw;
  top: 1vw;
  :hover {
    color: yellow;
  } */
`;

const Projects = styled(GitHub)`
  position: relative;
  font-size: 1.5vw;
  color: #6da393;
  font-weight: bold;
  margin: 0;
  left: 12.5vw;
  top: 9.5vw; 
  :hover {
      color: purple;
      cursor: pointer;
  }
`;

const Brackets = styled.span`
  color: #6f6d6e;
`;