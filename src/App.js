import './App.css';
import Wave from 'react-wavify';
import Skyline from './torontoskyline.svg';
import {ParallaxProvider, Parallax} from 'react-scroll-parallax';
import {Swiper, SwiperSlide} from 'swiper/react';

import "swiper/swiper.min.css";
import "swiper/components/effect-cube/effect-cube.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, {EffectCube, Pagination} from "swiper/core";
SwiperCore.use([EffectCube, Pagination]);

function App() {
  return (
    <ParallaxProvider className="App">
      <div className="App">
        <Parallax
        y={["-500px","400px"]
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
          <Parallax
          x={["-35%", "5%"]}>
          <h3>About Me</h3>
          </Parallax>
        </div>

        <div className="projects">

          <Parallax
          x={["25%", "-8%"]}>
          <h3>Projects</h3>
          </Parallax>

          <Swiper
          effect={"cube"}
          loop={true}
          pagination={true}
          cubeEffect={{
            shadowScale: 0,
          }}
          className={"project-gallery"}>
            <SwiperSlide>
              <div>
              <h4>Pace - Running App</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <h4>Fitness Emailer Bot</h4>
            </SwiperSlide>
            <SwiperSlide>
              <h4>To-Do List - Chrome Extension</h4>
            </SwiperSlide>
          </Swiper>
        </div>
        </Parallax>
      </div>
    </ParallaxProvider>
  );
}

export default App;
