import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SplitPane } from "react-collapse-pane";

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
          Meditative Musical Drum
          <br />
          <Num>4</Num>
          &nbsp;&nbsp;
          <span>
          Minimum viable product for phone app to create self-designed meditative music
          </span>
          <br />
          <Num>5</Num>
        &nbsp;&nbsp;&nbsp;
          <ProjectLink href="https://imgur.com/a/PLkZOSH" target="_blank">Click here to view!</ProjectLink>
        </MVP>
        <br />
        <br />
        <br />
        <Num>6</Num>
        <br />
        <FEC>
          <Num>7</Num>
          &nbsp;&nbsp;
          Bitey
          <br />
          <Num>8</Num>
          &nbsp;&nbsp;
          <span>
          Single page web app for users to view a product from a popular pet supply website
          </span>
          <br />
          <Num>9</Num>
        &nbsp;&nbsp;&nbsp;
          <ProjectLink href="https://imgur.com/a/Ir0r0fK" target="_blank">Click here to view!</ProjectLink>
        </FEC>
        <br />
        <br />
        <br />
        {window.innerWidth < 768 ? <br /> : <></>}
        <Num>10</Num>
        <SDC>
          <Num>11</Num>
          &nbsp;
          Bullseye
          <br />
          <Num>12</Num>
          &nbsp;
          <span>
          Legacy project independently scaled and deployed using service-oriented architecture
          </span>
          <br />
          <Num>13</Num>
        </SDC>
      </Container>
    </>
  );
}

const Container = styled.div`
  padding: 5px;
  position: absolute;
  top: ${(props) => (props.openCode ? '0' : '100vh')};
  overflow: hidden;
  /* left: 40%; */
  height: 100vh;
  width: 100vw;
  background-color: #1d1d1d;
  @media (max-width: 768px) {
    height: 100vh;
    width: 100vw;
    left: 0;
    font-size: 1.5vh;
    /* top: 55vh; */
    border-top: 1px solid #909090;
  }
`;

const Scroll = styled.div`
  color: #909090;
  position: absolute;
  border-left: 1px solid #494949;
  height: 100vh;
  @media (max-width: 768px) {
    border: none;
  }
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
