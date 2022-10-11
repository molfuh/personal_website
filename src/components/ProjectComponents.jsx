import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import myResume from './MollyFuhrmanResume2022.pdf';

export default function ProjectComponents({ openCode }) {
  return (
    <>
      <Container openCode={openCode}>
        <Scroll />
        <Title>
          <Num>1</Num>
        &nbsp;&nbsp;
          {' // Projects ' }
        </Title>
        <br />
        <Num>2</Num>
        <br />
        <MVP>
          <Num>3</Num>
          &nbsp;&nbsp;
          INT Magazine
          <br />
          <Num>4</Num>
          &nbsp;&nbsp;&nbsp;
          <span>
          Online magazine highlighting creative themes and topics
          </span>
          <br />
          <Num>5</Num>
        &nbsp;&nbsp;
        (Currently in development)
        <br />
        <Num>6</Num>
        &nbsp;&nbsp;&nbsp;
           <ProjectLink href="http://www.intmagazine.com/" target="_blank">Click here to view!</ProjectLink>
        </MVP>
        <br />
        <br />
        <br />
        <br />
        <Num>7</Num>
        <br />
        <FEC>
          <Num>8</Num>
          &nbsp;&nbsp;
          Meditative Musical Drum
          <br />
          <Num>9</Num>
          &nbsp;&nbsp;&nbsp;
          <span>
          Minimum viable product for phone app to create self-designed meditative music
          </span>
          <br />
          <Num>10</Num>
        &nbsp;
        (Currently mobile only)
        <br/>
        <Num>11</Num>
        &nbsp;&nbsp;
          <ProjectLink href="https://meditativemusicaldrum.netlify.app/" target="_blank">Click here to view!</ProjectLink>
        </FEC>
        <br />
        <br />
        <br />
        <br/>
        {screen.width < 768 ? <br /> : <></>}
        <SDC>
          <Num>12</Num>
           &nbsp;&nbsp;
          <br/>
          <Title>
          <Num>13</Num>
           &nbsp;&nbsp;
          {' // Resume ' }
          <br/>
          <Num>14</Num>
          <br/>
        </Title>
          <Num>15</Num>
          &nbsp;&nbsp;
          <span>
          <ProjectLink href={myResume} target="_blank">Click here to view!</ProjectLink>
          </span>
          <br />
          <Num>16</Num>
        </SDC>
      </Container>
    </>
  );
}

const Container = styled.div`
  position: absolute;
  top: ${(props) => (props.openCode ? '0' : '100vh')};
  overflow: hidden;
  left: 40%;
  height: 100vh;
  width: 60%;
  background-color: #1d1d1d;
  @media (max-width: 768px) {
    height: 50vh;
    width: 100vw;
    left: 0;
    font-size: 1.5vh;
    top: 55vh;
    border-top: 1px solid #909090;
  }
`;

const Scroll = styled.div`
  color: #909090;
  position: absolute;
  border: 1px solid #494949;
  height: 100vh;
`;

const Num = styled.span`
  margin-left: 5px;
  color: #909090;
`;

const Title = styled.span`
  position: relative;
  color: white;
`;

const ProjectLink = styled.a`
  color: #d09d81;
`;

const MVP = styled.div`
  position: absolute;
  color: white;
`;

const FEC = styled(MVP)``;
const SDC = styled(MVP)``;

ProjectComponents.propTypes = {
  openCode: PropTypes.bool.isRequired,
};
