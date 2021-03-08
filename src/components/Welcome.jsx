import styled, { css, keyframes } from 'styled-components';
import { useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';

export default function Welcome() {
  const [emailPop, useEmailPop] = useState(false);

  const HandleEmail = (cb) => {
    navigator.clipboard.writeText('mollyfuhrman@gmail.com');
    useEmailPop(true);
    setTimeout(() => {
      cb();
    }, 1000);
}

const HandleState = () => {
  useEmailPop(false);
}

  return (
    <>
      <StyledContainer />
      <Title>
        <Num>1</Num>
        {`//`} Molly Fuhrman - Web Developer
      </Title>
      <Num>2</Num>
      <LineOne>
        <Num>3</Num>
        <ExportDefault>export default </ExportDefault>
        <Function>function </Function>
        <Hello>Hello <Parens>{`() {`}</Parens></Hello>
      </LineOne>
      <Return>
        <Num>4</Num>
        &nbsp;&nbsp;return (
      </Return>
      <EmptyOpenBrackets>
        <Num>5</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;{`<>`}
      </EmptyOpenBrackets>
      <Greeting>
        <Num>6</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <EmptyOpenBrackets>{`<`}</EmptyOpenBrackets>
        Greeting
        <EmptyOpenBrackets>{`>`}</EmptyOpenBrackets>
      </Greeting>
      <HelloType>
      <Num>7</Num>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <ReactTypingEffect
          text={["Hello!"]}
          speed={[160]}
          typingDelay={[1000]}
          eraseDelay={[1500]}
        />
      </HelloType>
      <Introduction>
        <Num>8</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <EmptyOpenBrackets>{`<`}</EmptyOpenBrackets>
          Introduction
        <EmptyOpenBrackets>{`>`}</EmptyOpenBrackets>
        <Text>
          <Num>9</Num>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          My name is Molly Fuhrman</Text>
        <Num>10</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <EmptyOpenBrackets>{`</`}</EmptyOpenBrackets>
          Introduction
        <EmptyOpenBrackets>{`>`}</EmptyOpenBrackets>
      </Introduction>
      <Bio>
        <Num>11</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <EmptyOpenBrackets>{`<`}</EmptyOpenBrackets>
          Bio
        <EmptyOpenBrackets>{`>`}</EmptyOpenBrackets>
        <Text>
          <Num>12</Num>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          I'm a full-stack software engineer.
        </Text>
        <Num>13</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <EmptyOpenBrackets>{`</`}</EmptyOpenBrackets>
          Bio
        <EmptyOpenBrackets>{`>`}</EmptyOpenBrackets>
      </Bio>
      <Greeting>
        <Num>14</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <EmptyOpenBrackets>{`</`}</EmptyOpenBrackets>
        Greeting
        <EmptyOpenBrackets>{`>`}</EmptyOpenBrackets>
      </Greeting>
      <Contact>
      <Num>15</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <EmptyOpenBrackets>{`<`}</EmptyOpenBrackets>
        Contact
        <EmptyOpenBrackets>{`>`}</EmptyOpenBrackets>
      </Contact>


      <EmailContact>
      <Num>16</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {/* email: 'mollyfuhrman@gmail.com', */}
        {emailPop && <PopUp emailPop={emailPop}>
          Copied to clipboard!
        </PopUp>}
        email:
        <Email onClick={() => HandleEmail(HandleState)}>mollyfuhrman@gmail.com</Email>
        <br/>
      </EmailContact>
        <Num>17</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {/* github: 'molfuh', */}
        github:
        <GitHub href="https://github.com/molfuh" target="_blank">molfuh</GitHub>
        <br/>
        <Num>18</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {/* linkedIn: 'molly-fuhrman' */}
        linkedIn:
        <LinkedIn href="https://www.linkedin.com/in/molly-fuhrman/" target="_blank">molly-fuhrman</LinkedIn>

      <Contact>
      <Num>19</Num>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <EmptyOpenBrackets>{`</`}</EmptyOpenBrackets>
        Contact
        <EmptyOpenBrackets>{`>`}</EmptyOpenBrackets>
      </Contact>
      {/* <StyledGif> */}
        {/* <StyledEmailPopUp active={emailPop}>
        </StyledEmailPopUp> */}
        {/* {emailPop && <PopUp emailPop={emailPop}>
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
        </Projects> */}
      {/* </StyledGif> */}
    </>
  );
}

const Num = styled.span`
  color: #909090;
  position: relative;
`;

const Title = styled.div`
  position: relative;
  color: white;
`;

const LineOne = styled.div`
  position: relative;
  /* top: 5vh; */
  /* color:  */
`;
const ExportDefault = styled.span`
  color: #dc7bdf;
`;
const Function = styled.span`
  color: #ade0ff;
`;
const Hello = styled.span`
  color:#d1d2a4;
`;
const Parens = styled.span`
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

const EmailContact = styled(HelloType)`
//   :hover {
//       color: #ff9800;
//       cursor: pointer;
//   }
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
  background-color: #1d1d1d;
  height: 100vh;
  width: 100vw;
  position: absolute;
`;

const StyledGif = styled.div`
  background-color: #1d1d1d;
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