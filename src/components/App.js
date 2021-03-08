import Welcome from './Welcome.jsx';
import gif from '../hello_gif.gif';
// import '../style.css';

export default function App() {
  return (
    <>
      <Welcome gif={gif}/>
    </>
  );
}