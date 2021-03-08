import Welcome from './Welcome.jsx';
import gif from '../hello_gif.gif';
// import '../style.css';

import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Menlo Regular';
  }
`

export default function App() {
  return (
    <>
      <Welcome />
      <GlobalStyle />
    </>
  );
}