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
        I plan to
        <a>&nbsp;focus on creative code technologies
        </a>
        &nbsp;(GSAP, Three.js and react-three using Next.js, Blender3D/Cinema4D).
        This matters to me to improve my commitment into the Web3 ecosystem, 
        <a>
        &nbsp; paying close attention to the DeFi landscape & security issues.
        </a>
      </p>
    );
    const two = (
      <p>
        <a>Outside of work,&nbsp;</a> I am interested in following the developments of art and tech.
        <br/> 
        I am <a>an enthousiastic learner who love to explore life!&nbsp;</a>
        When I log off from my computer, I wear my second suit: the one of a percussionist in Salsa/Yoruba orchestras & radio show
        host on Pinata Radio - through which I play <a href='https://on.soundcloud.com/cvQZXhr8xArwaUv69' target='_blank'>my coded tracks&nbsp;</a> and newly-found gems.
      </p>
    );
  
    const desc_items = [one, two];

    const tech_stack = [
      "Javascript ES6+",
      "Figma & Adobe Suite",
      "React.js",
      "Flask Python",
      "HTML & CSS",
      "Vue.js"
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