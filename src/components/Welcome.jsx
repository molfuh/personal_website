import styled, { css, keyframes } from 'styled-components';
import { useState } from 'react';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";
//   import Contact from './Contact.jsx'
  

export default function Welcome({ gif }) {
  const [emailPop, useEmailPop] = useState(false);

  const HandleEmail = () => {
    navigator.clipboard.writeText('mollyfuhrman@gmail.com');
    // useEmailPop(true);
    useEmailPop(!emailPop);
}

  return (
    <>
      <StyledContainer />
      <StyledGif gif={gif}>
        <Email onClick={() => HandleEmail()}>mollyfuhrman@gmail.com</Email>
        <StyledEmailPopUp active={emailPop} />
        {/* was going to do && trick here to render "clicked!" popup */}
        {emailPop && <PopUp emailPop={emailPop}>
          Copied to clipboard!    
        </PopUp>}
        <GitHub href="https://github.com/molfuh" target="_blank">molfuh</GitHub>
        <LinkedIn href="https://www.linkedin.com/in/molly-fuhrman/" target="_blank">molly-fuhrman</LinkedIn>
        <ContactInfo>
            <Brackets>
            {`<`}
            </Brackets>
            Projects
            <Brackets>
            {` />`}
            </Brackets>
        </ContactInfo>
      </StyledGif>
    </>
  );
}

const StyledEmailPopUp = styled.div`
`;

const visibility = keyframes`
  0% {opacity: 0}
  25% {opacity: 1}
  100% {opacity: 1}
`;

const PopUp = styled.div`
  font-family: 'Menlo Regular';
  font-weight: normal;
  opacity: 0;
  height: 10%;
  width: 30%;
  position: absolute;
  /* background-color: ${props => props.emailPop && 'white' }; */
  background-color: transparent;
  color: yellowgreen;
  animation: ${props => props.emailPop && css`${visibility} ease-in 0.5s` };
  left: 30%;
  top: 50%;
`;

const StyledContainer = styled.div`
  background-color: #1b181b;
  height: 100vh;
  width: 100vw;
  position: absolute;
`;

const StyledGif = styled.div`
  background-color: black;
  background-image: url(${ props => props.gif });
  position: absolute;
  background-size: cover;
  height: 80vh;
  width: 80vw;
  top: 50%;
  transform: translate(0, -50%);
`;

const Email = styled.div`
  position: relative;
  color: white;
  margin-left: 29%;
  margin-top: 29.5%;
  font-family: 'Menlo Regular';
  font-weight: normal;
  font-size: 22px;
  width: 20px;
  :hover {
      color: blue;
      cursor: pointer;

  }
`;

const GitHub = styled.a`
  position: relative;
  text-decoration: none;
  color: white;
  margin-left: 30.1%;
  font-family: 'Menlo Regular';
  font-weight: normal;
  font-size: 22px;
  top: 14px;
  :hover {
    color: yellow;
  }
`;

const LinkedIn = styled(GitHub)`
  top: 48px;
  margin-left: -4%;
`;

const ContactInfo = styled(GitHub)`
  font-size: 24px;
  top: 235px;
  margin-left: -345px;
  color: #6da393;
  font-weight: bold;
  :hover {
      color: purple;
      cursor: pointer;
  }
`;

const Brackets = styled.span`
`;