import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Welcome from './Welcome';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Menlo Regular';
    font-size: 2vh;
  }
`;

export default function App() {
  return (
    <>
      <Welcome />
      <GlobalStyle />
    </>
  );
}
