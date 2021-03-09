import Welcome from './Welcome.jsx';
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Menlo Regular';
    font-size: 2vh;
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