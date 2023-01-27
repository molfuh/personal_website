import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ProjectListComponent from './ProjectListComponent.jsx';

export default function ProjectComponents({ openCode, showProjects }) {
  return (
    <>
      <Container openCode={openCode} showProjects={showProjects}>
        <Scroll />
            <ProjectListComponent/>
      </Container>
    </>
  );
}


const Container = styled.div`
  z-index: ${({showProjects}) => showProjects ? 2 : 1};
  padding: 5px;
  position: absolute;
  top: ${(props) => (props.openCode ? '0' : '100vh')};
  overflow: hidden !important;
  height: 100vh;
  width: 100vw;
  background-color: #1d1d1d;
  @media (max-width: 768px) {
    height: 100vh;
    width: 100vw;
    left: 0;
    font-size: 1.5vh;
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

ProjectComponents.propTypes = {
  openCode: PropTypes.bool.isRequired,
  showProjects: PropTypes.bool.isRequired,
};
