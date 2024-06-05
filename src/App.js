import React from 'react';
import logo from './media/logo.png';
import bicycleBlue from './media/bicycleBlue.png';
import fc02Blue from './media/fc02Blue.png';
import zigzag from './media/zigzag.png';
import './App.css';

function App() {
  return (
    <body className='background'>

      <div className="container-fluid text-center">
        {/* Greeting */}
        <div className="greeting py-5 pb-3">
          <h1 className='display-3 pb-5'>Hello, my name is</h1>
          <h1 className="cpfont1 text-light pb-5">Chris <img src={logo} className="logo" alt="bike"></img> Polishak</h1>
          <p className='display-4'>I am a software engineer</p>
        </div>

        <div className='row py-5'></div>

        {/* About */}
        <div className='row bg-light pt-4 pb-2'>
          <div class="col-12">
            {/* What I do */}
            <h3>What I do</h3>
            <hr className='col-4'></hr>
            <p class="justify-content-lg-center align-items-center text-center px-4 py-1">Currently, I have over 4 years of professional experience as a software engineer in banking SaaS. I am a Full Stack developer working with internal and external Tools applications. In our primary app, I utilize Ruby/Ruby on Rails for back-end services in tandem with JavaScript, React and TypeScript for the front-end. In another app, I use NodeJS for back-end along with React/JS on the front-end. Previously, I worked for 2 years to help create, maintain and update back-end microservices built with NodeJS and JavaScript for Fintech companies. For the last year, I have also been serving as Scrum Master to feature teams in addition to my SE duties. This has helped me to understand the interaction between product and engineering on a much deeper level. In those duties, I facilitate scrum activities, help drive PI planning epics, lead discussions, improve processes and work cross-functionally to unblock impediments/reduce risk and help deliver on commitments. I am especially proud of my ability to work independently or collaboratively as part of a team and I am an excellent communicator. My primary focus is to become an excellent all-around software engineer and leader.
            </p>
            <p>I also have strong aspirations to work in the future as a Sales/Solutions/Implementations Engineer where I can mesh my love for software engineering with my people skills to provide value, solve complex problems and help support amazing software products. I believe that my skills and strengths align perfectly with this type of role. Have a chat with me sometime and you'll see why.
            </p>
            <br></br>
          </div>
        </div>

        {/* Technologies */}
        <div className='row py-4 pb-5 text-light'>
          <div class="col-12">
            <div class="col-12 text-center mx-auto">
              <h3>Technologies</h3>
              <hr className='col-4 bg-light'></hr>
              <div className='col-12'>
                <div className='row text-center py-4'>
                  <div className='col-4'>
                    <p>Javascript</p>
                    <i class="fab fa-js-square fa-3x"></i>
                  </div>
                  <div className='col-4'>
                    <p>NodeJS</p>
                    <i class="fab fa-node fa-3x"></i>
                  </div>
                  <div className='col-4'>
                    <p>React</p>
                    <i class="fab fa-react fa-3x"></i>
                  </div>
                </div>
              </div>

              <div className='col-12'>
                <div className='row text-center py-4'>
                  <div className='col-4'>
                    <p>Ruby</p>
                    <i class="fa fa-gem fa-3x"></i>
                  </div>
                  <div className='col-4'>
                    <p>Ruby on Rails</p>
                    <i class="far fa-gem fa-3x"></i>
                  </div>
                  <div className='col-4'>
                    <p>TypeScript</p>
                    <i class="fa fa-code fa-3x"></i>
                  </div>
                </div>
              </div>

              <div className='col-12'>
                <div className='row text-center py-4'>
                  <div className='col-4'>
                    <p>Azure DevOps</p>
                    <i class="fab fa-connectdevelop fa-3x"></i>
                  </div>
                  <div className='col-4'>
                    <p>Photoshop</p>
                    <i class="fa fa-pencil-alt fa-3x"></i>
                  </div>
                  <div className='col-4'>
                    <p>Illustrator</p>
                    <i class="fa fa-bezier-curve fa-3x"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What I bring to the table */}
        <div className='row bg-light pt-4 pb-2'>
          <div class="col-12">
            <h3>What I bring to the table</h3>
            <hr className='col-4'></hr>
            <p>As a software engineer: I am a quick study, I have a voracious appetite for learning, a positive and tenacious attitude and I have an investigative mindset with a willingness to get my hands dirty digging into complex issues. I am excellent at writing documentation and taking diligent notes, I have experience in at least 2 programming languages, I am comfortable working back-end or front-end (my preference) and I work great independently and as part of a team. My people and soft skills are top notch from working over 10 years in sales and account management prior to becoming a software engineer. These skills include: strong interpersonal skills, high emotional intelligence, leadership, decision-making, tailored product demonstrations, high touch sales experience, discovery, problem-solving, account management (from mom-and-pop to large chains like Whole Foods), prospecting, qualifying, and of course, closing. </p>
            <p>I have a passion for art and it will always be a creative outlet for me. As a result of that, I also have proficiency in graphic design with over 15 years of experience with Adobe Photoshop and Illustrator. I love to create works in printed media, digital media, logo design and branding.</p>
            <br></br>
          </div>
        </div>

        {/* Who I am */}
        <div className='row text-light py-4'>
          <div class="col-12">
            <h3>Who I am</h3>
            <hr className='col-4 bg-light'></hr>
            <p class="justify-content-lg-center align-items-center text-center px-4 py-2">
              I strive to learn something new every day. I have an achievement personality and a growth mindset. I am always working to improve my skills, setting new goals and challenging myself to meet and exceed them.
            </p>
            <p class="justify-content-lg-center align-items-center text-center px-4 py-2">
              My favorite motto is "you miss 100% of the shots that you don't take". I try new things and fail. But like Spiderman, no matter how many hits I take, I always find a way to get back up. I am a proud girl dad, a dog dad, a husband, a tech nerd, a home brewer, an artist and a true soccer fanatic.
            </p>
          </div>
        </div>

        {/* Art */}
        <div className="row pr-3 bg-light py-4">
          <div className='row text-center mx-auto'>
            <div class="col-12">
              <h4 className='bg-light'>Art Samples</h4>
              <hr className='col-4'></hr>
            </div>

            <div className="col-4 pt-5">
              <a href={zigzag} target="_blank" rel="noopener noreferrer">
                <img src={zigzag} className="pic pb-5" alt="zigzag shoes"></img>
              </a>
            </div>
            <div className="col-4">
              <a href={bicycleBlue} target="_blank" rel="noopener noreferrer">
                <img src={bicycleBlue} className="pic pb-5" alt="bike"></img>
              </a>
            </div>
            <div className="col-4 pt-5">
              <a href={fc02Blue} target="_blank" rel="noopener noreferrer">
                <img src={fc02Blue} className="pic pb-5" alt="fc02 logo"></img>
              </a>
            </div>

          </div>
        </div>

        {/* Find Me */}
        <div className='text-light pb-4'>
          <p>Where you can find me</p>
          <div className='icons'>
            <a href="https://www.linkedin.com/in/chris-polishak-7a281417/" class="btn-floating btn-fb mx-3" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-linkedin fa-3x"></i>
            </a>
            <a href="https://www.github.com/cpolishak" class="btn-floating btn-fb mx-3" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-github fa-3x"></i>
            </a>
          </div>
        </div>

      </div>

      <div className='row py-4'></div>

      <footer class="page-footer font-small fixed-bottom footer pt-0">
        {/* Copyright */}
        <div class="footer-copyright text-center py-1 text-light">© 2019 Copyright:
          Chris Polishak
        </div>
      </footer>
    </body>
  );
}

export default App;
