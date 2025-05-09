import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";
import MagicAsk from "./MagicAsk";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

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
        <a href='https://www.malt.fr/profile/paulinerondeau1' target='_blank'> UX/UI web3 designer and front-end engineer</a>.
        Lately, my personal challenge has been to
        <a href='https://webtopiacybertale.netlify.app/' target='_blank'>&nbsp;develop my skills in Creative Coding technologies
        </a>
        &nbsp;(GSAP, Three.js, react-three, Blender 3D/Cinema4D).
        <br/>
        I also plan to strenghten my interest in the Blockchain ecosystem, 
        <a href='https://ufo.fm/' target='_blank'>
        &nbsp; paying close attention to arts & music news, 
        </a>
        &nbsp;the DeFi landscape & the security issues.
        <br/><br/>
        {/* <a  href='https://webtopiacybertale.netlify.app/'
            target='_blank'
            style={{display: 'flex', flexDirection:'raw', alignItems:'center', gap:'5px'}}
        >
          Discover my latest self-taught front-end project
          <OpenInNewIcon
              style={{
                fontSize: 18,
              }}
          ></OpenInNewIcon>
        </a> */}
      </p>
    );

    const two = (
      <p>
        Outside of work, I am interested in <a href='https://www.awwwards.com/' target='_blank'>following the developments of art and tech.</a>
        <br/> 
        I think I am <a href='https://www.artstation.com/user-6723969' target='_blank'>an enthousiastic learner who love to explore!&nbsp;</a>
        <br/> 
        When I log off from my computer, I enjoy creating various kinds of artsy wizardries, such as drawing characters from other worlds and <a href='https://on.soundcloud.com/EzkU7FJZA3psGmXW8' target='_blank'>coding music.</a>
      </p>
    );
  
    const desc_items = [one, two];

    const tech_stack = [
      "Javascript ES6+",
      "React.js & Vue.js",
      "Figma & Adobe Suite",
      "Shopify",
      "Flask Python",
      "HTML & CSS",
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