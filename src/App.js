import './App.css';
import Wave from 'react-wavify';
import Skyline from './torontoskyline.svg';
import {ParallaxProvider, Parallax} from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider className="App">
      <div className="App">
        <Parallax
        y={["-500px","600px"]
        }
        >
        <h1 className="BenCostas-text">Hi, I'm Ben Costas</h1>
        </Parallax>
        <Parallax
        className="skyline"
        y={["1200px","-800px"]}>
        <img src={Skyline} alt="Toronto Skyline" className="skyline"></img>
        <Wave fill='#76c2e3ff'
        paused={false}
        options={{
          height: 70,
          amplitude: 25,
          speed: 0.3,
          points: 4
        }}/>
        <div className='wave-2'>
        <Wave fill='#6c85bdff'
        paused={false}
        options={{
          height: 30,
          amplitude: 30,
          speed: 0.3,
          points: 6
        }}/>
        </div>
        <div className="introbox">
        </div>
        </Parallax>
      </div>
    </ParallaxProvider>
  );
}

export default App;
