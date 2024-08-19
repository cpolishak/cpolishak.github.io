import React from "react";
import logo from "./media/logo.png";
import bicycleW from "./media/bicycleW.png";
import fc02w from "./media/fc02w.png";
import zigzag from "./media/zigzag.png";
import urlShortenerApp from "./media/urlShortenerApp.png";
import mortgageCalculator from "./media/mortgage-calculator.png";
import "./App.css";

function App() {
  return (
    <body className="background">
      <div className="container-fluid text-center">
        {/* Greeting */}
        <div className="greeting py-5 pb-3">
          <h1 className="display-3 pb-5">Hello, my name is</h1>
          <h1 className="cpfont1 text-light pb-5">
            Chris <img src={logo} className="logo" alt="bike"></img> Polishak
          </h1>
          <p className="display-4">I am a software engineer</p>
        </div>

        <div className="row py-5"></div>

        {/* About */}
        <div className="row bg-light pt-4 pb-2">
          <div className="col-12 px-4">
            {/* What I do */}
            <h3>What I do</h3>
            <hr className="col-4"></hr>
            <p>
              I am a talented and tenacious full-stack software engineer with
              over 4 years of professional experience building internal tools
              and microservices in banking SaaS. I am comfortable in both
              back-end and front-end development. I have strong people skills in
              addition to previous experience in sales that really set me apart
              from your average software developer. I am an avid note taker, I
              like writing up docs and I enjoy things like relating technical
              aspects to the non-technical crowd. I strive to be a great
              communicator, a strong independent/team contributor, a confident
              leader and to be an all-around badass software engineer.
            </p>
            <div className="col-10 mx-auto text-left pb-4">
              <li>
                4+ years experience coding in JavaScript and 2+ years experience
                working with Typescript
              </li>
              <li>
                Full Stack Development - 2+ years utilizing Ruby/Rails or NodeJS
                for back-end in tandem with JS, TS and React on the front-end
                for Admin Console and Content Management System applications
              </li>
              <li>
                NodeJS Development - 2+ years in building, maintaining and
                securing back-end microservices for banking features built in
                NodeJS integrating with distributed systems and third-party apps
                through APIs
              </li>
              <li>
                Scrum Master - Experience facilitating scrum activities, helping
                with PI planning and ART sync, leading discussions, improving
                processes and working cross-functionally to unblock
                impediments/reduce risk and helping to deliver on commitments
              </li>
              <li>
                Azure AI experience - I have formal training in generative AI
                fundamentals and in Open AI Studio provisioning custom
                generative AI models, defining parameters and more
              </li>
            </div>
            <br></br>
          </div>
        </div>

        {/* Technologies */}
        <div className="row py-4 pb-5 text-light">
          <div className="col-12">
            <div className="col-12 text-center mx-auto">
              <h3>Technologies</h3>
              <hr className="col-4 bg-light"></hr>
              <div className="col-12">
                <div className="row text-center py-4">
                  <div className="col-4">
                    <p>Javascript</p>
                    <i className="fab fa-js-square fa-3x"></i>
                  </div>
                  <div className="col-4">
                    <p>NodeJS</p>
                    <i className="fab fa-node fa-3x"></i>
                  </div>
                  <div className="col-4">
                    <p>React</p>
                    <i className="fab fa-react fa-3x"></i>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="row text-center py-4">
                  <div className="col-4">
                    <p>Ruby</p>
                    <i className="fa fa-gem fa-3x"></i>
                  </div>
                  <div className="col-4">
                    <p>Ruby on Rails</p>
                    <i className="far fa-gem fa-3x"></i>
                  </div>
                  <div className="col-4">
                    <p>TypeScript</p>
                    <i className="fa fa-code fa-3x"></i>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <div className="row text-center py-4">
                  <div className="col-4">
                    <p>Azure DevOps</p>
                    <i className="fa fa-laptop fa-3x"></i>
                  </div>
                  <div className="col-4">
                    <p>Generative AI</p>
                    <i className="fa fa-connectdevelop fa-3x"></i>
                  </div>
                  <div className="col-4">
                    <p>Photoshop</p>
                    <i className="fa fa-pencil-alt fa-3x"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What I bring to the table */}
        <div className="row bg-light pt-4 pb-2">
          <div className="col-12 px-4">
            <h3>What I bring to the table</h3>
            <hr className="col-4"></hr>
            <p>
              Coding Skills: I am a quick study, I have a voracious appetite for
              learning, a positive and tenacious attitude and I have an
              investigative mindset with a willingness to get my hands dirty
              digging into complex issues. I am excellent at writing
              documentation and taking diligent notes, I have experience in at
              least 2 programming languages, I am comfortable working back-end
              or front-end (my preference) and I work great independently and as
              part of a team.
            </p>
            <p>
              Interactive Skills: My people and soft skills are top notch from
              working over 10 years in sales and account management prior to
              becoming a software engineer. These skills include: strong
              customer-centric mindset, high emotional intelligence, leadership,
              decision-making, tailored product demonstrations, high touch sales
              experience, discovery, issue resolution, account management (from
              mom-and-pop to large chains like Whole Foods), prospecting,
              qualifying, and of course, closing.
            </p>
            <p>
              Design Skills: I have a passion for art and it will always be a
              creative outlet for me. As a result of that, I also have
              proficiency in graphic design with over 15 years of experience
              with Adobe Photoshop and Illustrator. I included some samples
              below for fun and because websites are just more interesting with
              some visuals. I love to create works in printed media, digital
              media, logo design and branding.
            </p>
            <br></br>
          </div>
        </div>

        {/* Who I am */}
        <div className="row text-light py-4">
          <div className="col-12 px-4">
            <h3>Who I am</h3>
            <hr className="col-4 bg-light"></hr>
            <p className="justify-content-lg-center align-items-center text-center py-2">
              I strive to learn something new every day. I have an achievement
              personality and a positive attitude. I am always working to
              improve my skills, setting new goals and challenging myself to
              meet and exceed them. My favorite motto is "you miss 100% of the
              shots that you don't take". I try new things and I fail, a lot.
              But like Spiderman, no matter how many hits I take, I always find
              a way to get back up. I am a proud girl dad, a husband, a tech
              nerd, a home brewer, an artist and a true soccer fanatic.
            </p>
          </div>
        </div>

        {/* Coding Projects */}
        <div className="row pr-3 bg-light py-4">
          <div className="row text-center mx-auto">
            <div className="col-12">
              <h4 className="bg-light">Coding Apps/Projects</h4>
              <hr className="col-4"></hr>
            </div>

            <div className="col-12 col-md-6 pt-2">
              <a
                href={"https://mortgage-calculator-two-omega.vercel.app/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={mortgageCalculator}
                  className="pic pb-3"
                  alt="url-shortener-app-pic"
                ></img>
              </a>
              <div className="px-4">
                <h4>Mortgage Payment Calculator</h4>
                <p className="">
                  This is a basic mortgage payment calculator app built in
                  TypeScript, React and Material UI with custom stylings added.
                  This is deployed via a Vercel Project (
                  <a href="vercel.com">vercel.com</a>). Github repo{" "}
                  <a
                    href="https://github.com/cpolishak/mortgage-calculator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                  .
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 pt-2">
              <a
                href={"https://vercel-url-shortener-omega.vercel.app/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={urlShortenerApp}
                  className="pic pb-3"
                  alt="url-shortener-app-pic"
                ></img>
              </a>
              <div className="px-4">
                <h4>Url Shortener App</h4>
                <p className="">
                  A custom built application to shorten long urls. This was a
                  passion project to learn how Bitly worked and to create my own
                  application with similar functionality. Currently built with
                  NodeJS back-end (JS), React front-end (TS) and uses Material
                  UI. It is deployed via a Vercel Project. It works in a hacky
                  way while I look for a cloud DB I would like to use. Github
                  repo{" "}
                  <a
                    href="https://github.com/cpolishak/vercel-url-shortener"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Art */}
        <div className="row text-light pr-3 py-4">
          <div className="row text-center mx-auto">
            <div className="col-12">
              <h4 className="">Art Samples</h4>
              <hr className="col-4 bg-light"></hr>
            </div>

            <div className="col-4 pt-5">
              <a href={zigzag} target="_blank" rel="noopener noreferrer">
                <img src={zigzag} className="pic pb-5" alt="zigzag shoes"></img>
              </a>
            </div>
            <div className="col-4">
              <a href={bicycleW} target="_blank" rel="noopener noreferrer">
                <img src={bicycleW} className="pic pb-5" alt="bike"></img>
              </a>
            </div>
            <div className="col-4 pt-5">
              <a href={fc02w} target="_blank" rel="noopener noreferrer">
                <img src={fc02w} className="pic pb-5" alt="fc02 logo"></img>
              </a>
            </div>
          </div>
        </div>

        {/* Find Me */}
        <div className="text-light pb-4">
          <p>Where you can find me</p>
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/chris-polishak-7a281417/"
              className="btn-floating btn-fb mx-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin fa-3x"></i>
            </a>
            <a
              href="https://www.github.com/cpolishak"
              className="btn-floating btn-fb mx-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github fa-3x"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="row py-4"></div>

      <footer className="page-footer font-small fixed-bottom footer pt-0">
        {/* Copyright */}
        <div className="footer-copyright text-center py-1 text-light">
          © 2019 Copyright: Chris Polishak
        </div>
      </footer>
    </body>
  );
}

export default App;
