import './App.css';
import Wave from 'react-wavify';
import Skyline from './torontoskyline.svg';
import ToDoListGif from './todolist-gif.gif';
import PaceGif from './pace-gif.gif';
import FitnessBotGif from './fitnessbot-gif.gif';
import WebsiteGif from './website-gif.gif';
import BenLogo from './BenLogo-BlackBackground.png';
import {ParallaxProvider, Parallax} from 'react-scroll-parallax';
import {Swiper, SwiperSlide} from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, faCss3Alt, faFigma, faGithub, faGoogle, faHtml5, faJs, faLinkedin, faPython, faReact } from '@fortawesome/free-brands-svg-icons';

import "swiper/swiper.min.css";
import "swiper/components/effect-cube/effect-cube.min.css";
import "swiper/components/pagination/pagination.min.css";
import 'font-awesome/css/font-awesome.min.css';

import SwiperCore, {EffectCube, Pagination} from "swiper/core";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
SwiperCore.use([EffectCube, Pagination]);

function App() {
  return (
    <ParallaxProvider className="App">
      <div className="App">
        <Parallax
        y={["-350px","500px"]
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
          <div className="info">
            <h3>Nice to meet you!</h3>
            <div className="picture">
            <img src={BenLogo} alt="Ben Logo" className="benlogo"/>
            </div>
            <div className="aboutme">
              <p>
              I'm a university student and an aspiring software engineer. I've been coding for 5 years.
              <br/>
              <br/>
              I'm passionate and ambitious about creating meaningful and impactful technological solutions to everyday life. 
              <br/>
              <br/>
              I hope to expand my toolbelt by working with many new skills and technologies.
              <br/>
              <br/>
              Aside from coding, I also enjoy:
              <ul>
                <li>
                Weightlifting and playing sports
                </li>
                <li>
                Gaming
                </li>
                <li>
                Watching non-horror TV shows and films
                </li>
                <li>
                Eating food! (w/o peanuts and nuts)
                </li>
              </ul>
              </p>
            </div>
            <div className="links">
              <ul>
                <li>
                  <a href="https://github.com/bencostas">
                  <FontAwesomeIcon icon={faGithub}/>
                  </a>
                </li>
                <li>
                  <a href="mailto:bencostas@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope}/>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/bencostas/">
                  <FontAwesomeIcon icon={faLinkedin}/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="projects">
          <h3>Projects</h3>

          <p>Here's a little gallery of some of the projects I've been working on</p>

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
                <p>
                  Pace is a Running App I designed using Figma and implemented using React Native and various APIs. Quarantine has had a detrimental effect on my health, and I believe that building an application will encourage myself to get back in shape. Pace is capable of tracking and timing your runs, toggling your phone's flashlight if you plan on running when it's dark, and saving and clearing your runs using AsyncStorage.
                </p>
              </div>
              <div className="project-visual">
                <img src={PaceGif} alt="pacegif" id="pace-gif"></img>
              </div>
              <div className="project-technologies" id="pace-tech">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faReact} />
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faGoogle}/>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faFigma}/>
                  </li>
                </ul>
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
                <p>I tend to plan out my weekly fitness schedule using a Google Sheet. I created this simple script to send myself an email of the exercises and meals for the day of the week. The script was made using Python and is run on an AWS EC2 Instance Ubuntu server which uses crontab to send daily emails. Google Cloud, Service, Sheets API and smtp library were used to make the email functionality possible.</p>
              </div>
              <div className="project-visual">
                 <img src={FitnessBotGif} alt="fitnessbotgif" id="fitness-gif"></img>
              </div>
              <div className="project-technologies" id="fitness-tech">
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faAws}/>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faPython}/>
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faGoogle}/>
                  </li>
                </ul>
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
                <p>
                This is a Chrome Extension I created using Google Chrome Extension API, HTML, CSS, and JavaScript. I decided to create it strictly for the convenience of having a portable to-do list integrated into your browser. This has allowed me to be constantly productive which can be helpful during long study sessions. This application is capable of adding and deleting todos and saves them in your browser using local storage.
                </p>
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
                <p>
                  This is a portfolio website I designed using React and various APIs. I created this website to display infomraiton about myself and to feature some of the projects I have been working on. I used React Wavify and React Parallax Scrolling for the animations and swiper.js for the project gallery. This website is currently being hosted on Github Pages.
                </p>
              </div>
              <div className="project-visual">
                <img src={WebsiteGif} alt="website gif" id="website-gif"/>
              </div>
              <div className="project-technologies" id="website">
                <ul>
                  <li>
                  <FontAwesomeIcon icon={faReact} />
                  </li>
                </ul>
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
