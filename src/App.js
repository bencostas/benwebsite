import './App.css';
import Wave from 'react-wavify';
import Skyline from './torontoskyline.svg';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
