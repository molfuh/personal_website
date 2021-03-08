import styled from 'styled-components';

export default function Welcome({ gif }) {
  return (
    <>
    {console.log(navigator)}
      <StyledContainer />
      <StyledGif gif={gif}>
        <Email onClick={() => navigator.clipboard.writeText('mollyfuhrman@gmail.com')}>mollyfuhrman@gmail.com</Email>
        <GitHub href="https://github.com/molfuh" target="_blank">molfuh</GitHub>
        <LinkedIn href="https://www.linkedin.com/in/molly-fuhrman/" target="_blank">molly-fuhrman</LinkedIn>
        <Contact>
            <Brackets>
            {`<`}
            </Brackets>
            Contact
            <Brackets>
            {`/>`}
            </Brackets>
        </Contact>
      </StyledGif>
    </>
  );
}

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

const Contact = styled(GitHub)`
  font-size: 24px;
  top: 37%;
  margin-left: -30%;
  color: #6da393;
  font-weight: bold;
  :hover {
      color: purple;
      cursor: pointer;
  }
`;

const Brackets = styled.span`
`;