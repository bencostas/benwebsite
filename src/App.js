import './App.css';
import Wave from 'react-wavify';
import Skyline from './torontoskyline.svg';
import ToDoListGif from './todolist-gif.gif';
import PaceGif from './pace-gif.gif';
import FitnessBotGif from './fitnessbot-gif.gif';
import {ParallaxProvider, Parallax} from 'react-scroll-parallax';
import {Swiper, SwiperSlide} from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faGithub, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

import "swiper/swiper.min.css";
import "swiper/components/effect-cube/effect-cube.min.css";
import "swiper/components/pagination/pagination.min.css";
import 'font-awesome/css/font-awesome.min.css';

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
          <h3>About Me</h3>
        </div>

        <div className="projects">
          <h3>Projects</h3>

          <Swiper
          effect={"cube"}
          loop={true}
          pagination={true}
          cubeEffect={{
            shadowScale: 0,
          }}
          className={"project-gallery"}>
            <SwiperSlide>

              <div className="project-title">
                <text className="project-text">Pace</text>
              </div>
              <div className="github-tag">
                <a href="https://github.com/bencostas/Pace-Running-App">
                  <FontAwesomeIcon icon={faGithub}/>
                </a>
              </div>
              <div className="project-description">

              </div>
              <div className="project-visual">
                <img src={PaceGif} alt="pacegif" id="pace-gif"></img>
              </div>
              <div className="project-technologies">
                <FontAwesomeIcon icon={faReact} />
              </div>

            </SwiperSlide>
            <SwiperSlide>
              <div className="project-title">
                <text className="project-text">Fitness Emailer Bot</text>
              </div>
              <div className="github-tag">
                <a href="https://github.com/bencostas/fitness-emailer-bot">
                <FontAwesomeIcon icon={faGithub}/>
                </a>
              </div>
              <div className="project-description">

              </div>
              <div className="project-visual">
                 <img src={FitnessBotGif} alt="fitnessbotgif" id="fitness-gif"></img>
              </div>
              <div className="project-technologies">

              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="project-title">
                <text>To Do List</text>
              </div>
              <div className="github-tag">
                <a href="https://github.com/bencostas/todolistextension">
                  <FontAwesomeIcon icon={faGithub}/>
                </a>
              </div>
              <div className="project-description">

              </div>
              <div className="project-visual">
                <img src={ToDoListGif} alt="todolist" id="todolist-gif"></img>
              </div>
              <div className="project-technologies" id="todolist-tech">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faHtml5}/>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCss3Alt}/>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faJs}/>
                  </li>
                </ul>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="project-title">
                <text>This Website!</text>
              </div>
              <div className="github-tag">
                <a href="https://github.com/bencostas/benwebsite">
                <FontAwesomeIcon icon={faGithub}/>
                </a>
              </div>
              <div className="project-description">

              </div>
              <div className="project-visual">

              </div>
              <div className="project-technologies">

              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        </Parallax>
      </div>
    </ParallaxProvider>
  );
}

export default App;
