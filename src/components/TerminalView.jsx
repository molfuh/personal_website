import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactTypingEffect from 'react-typing-effect';

export default function TerminalView({ openCode }) {
  return (
    <TerminalWrapper>
      <OpeningTerminal openCode={openCode}>
        <Terminal openCode={openCode}>
          <span>
          Welcome to: Molly_Fuhrman_Website $
          </span>
          <ReactTypingEffect
            text={['code .']}
            speed={[150]}
          />
        </Terminal>
      </OpeningTerminal>
    </TerminalWrapper>
  );
}

const TerminalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: -1;
`;

const OpeningTerminal = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  // position: ${(props) => (props.openCode ? 'absolute' : 'relative')}
  z-index: ${(props) => (props.openCode ? 1 : 0)};
  background-color: ${(props) => (props.openCode ? '#1d1d1d' : 'white')};
  // background-color: white;
  // top: 50px;
  overflow: hidden !important;
`;

const Terminal = styled.div`
  // position: absolute;
  height: 35vh;
  width: 450px;
  border: 1px solid black;
  padding: 10px;
  display: ${(props) => (props.openCode ? 'none' : 'block')};
  @media (max-width: 659px) {
    width: 70vw;
  }
  span {
    padding-right: 0.5em;
  }
`;

TerminalView.propTypes = {
  openCode: PropTypes.bool.isRequired,
};
