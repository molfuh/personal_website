import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ReactTypingEffect from 'react-typing-effect';

export default function TerminalView({ openCode }) {
  return (
    <OpeningTerminal openCode={openCode}>
      <Terminal>
        <span>
        Welcome to: Molly_Fuhrman_Website $
        </span>
        <ReactTypingEffect
          text={['code .']}
          speed={[150]}
        />
      </Terminal>
    </OpeningTerminal>
  );
}

const OpeningTerminal = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: ${(props) => (props.openCode ? 'absolute' : 'relative')}
`;

const Terminal = styled.div`
  position: absolute;
  height: 35vh;
  width: 40vw;
  border: 1px solid black;
  padding: 10px;
  @media (max-width: 768px) {
    width: 75vw;
  }
  span {
    padding-right: 0.5em;
  }
`;

TerminalView.propTypes = {
  openCode: PropTypes.bool.isRequired,
};
