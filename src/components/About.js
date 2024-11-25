import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";
import MagicAsk from "./MagicAsk";


class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am currently working as a remote
        <a href='https://etherscore.network/' target='_blank'> UX/UI web3 designer and front-end engineer at @OnChained Lab/ Etherscore</a>.
        <br/>
        I have an affinity with Adobe Suite & Figma - Javascript, React.js and 3D tools.
        <br/> <br/>
        <a>
        I now plan to focus on creative code technologies
        </a>
        &nbsp;(WebGL, Three.js and react-three, Next.js, Blender3D/Cinema4D).
        This also matters to me to improve my commitment into the Web3 ecosystem, 
        <a>
        &nbsp; paying close attention to the DeFi landscape & security issues.
        </a>
      </p>
    );
    const two = (
      <p>
        <a>Outside of work,&nbsp;</a> I am interested in following the developments of art and tech. 
        I also have strong connection with music, I am a percussionist in traditional yoruba + salsa orchestras, and 
        I host a monthly dj set emission on Pinata Radio (Montpellier, Fr) - through which I promote <a>my coded tracks (using Sonic Pi software)&nbsp;</a> + gems I found.
        I think I am <a>an enthousiastic learner who love to explore life.</a>
      </p>
    );
  
    const desc_items = [one, two];

    const tech_stack = [
      "Javascript ES6+",
      "Figma & Adobe Suite",
      "React.js",
      "Flask Python",
      "Vue.js",
      "HTML & CSS"
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header">
            <span className="section-title">/ About me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been familiar to work with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              <br />
              {[two]}
            </div>
            <div className="about-image">
              <img src={"./assets/alakazam-1.gif"} alt='alakazam' />
              <MagicAsk></MagicAsk>
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;