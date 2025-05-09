import React from "react";
import "../styles/Creations.css";
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import FadeInSection from "./FadeInSection";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    const projects = {
      "Webtopia Cybertale": {
        desc:
          " A Cyber-Artsy microcosm thought as a playgroud for my WebGLlearnings - destined to be improved as my tech stack grows.",
        techStack: "#NextJs, #GSAP, #Framer motion, #react-three-fiber",
        link: "https://webtopiacybertale.netlify.app/",
      },
      "Sonic Pi": {
        desc:
          "I Introduced myself to live coding and electronic music production, using Sonic Pi software.",
        techStack: "#SonicPi #Midjourney",
        link: "https://on.soundcloud.com/cvQZXhr8xArwaUv69",
      },
      "Etherscore: Beta Dapp": {
        desc:
          "Etherscore helps you grow your web3 reputation by minting nft badges based on your web3 achievements.",
        techStack: "#React.js, #CSS, #Sonarqube, #Docker, #Git, #Typescript, #Figma, #Adobe Suit, #Wagmi/Viem/Web3 Modal, #Framer Motion",
        link: "https://beta.etherscore.network/",
      },
      "Etherscore: Rebranding the Landing Page": {
        desc:
          "I Designed, rebranded & developed Etherscore landing page and front-end architecture",
        techStack: "#React.js, #CSS, #JS",
        link: "https://etherscore.network/",
      },
      "Une Rime en Or": {
        desc:
          "A responsive web game application created for RapMinerz, including Flask back-end. The purpose behind the app is to find the most used words to rhyme with a given word, based on French rap texts.",
        techStack: "#Flask python, #CSS, #JS, #Pandas Library",
        link: "https://apps.rapminerz.io/rhyme-panel/",
      },
      "Dark/Light switch": {
        desc:
          "Implementation of a basic web3 feature, language & theme switch.",
        techStack: "#React.js, #Web3, #Metamask",
        link: "https://inspiring-pastelito-26fdd8.netlify.app",
      },
      "CryptoZombies learning": {
        desc:
          "solidity training (smart contracts for web3), following the cryptozombies web platform courses",
        techStack: "#Web3, #Solidity, #SmartContract",
        link: "https://github.com/pauline-rdn/crypto-zombies-learning"
      },
      "Behance Bundle": {
        desc:
          "A collection of book and music covers I designed and illustrated.",
        techStack: "#Adobe Suite, #hand drawing",
        link: "https://www.behance.net/paulinestudio"
      },
      "3D Freakies": {
        desc:
          "3D artworks I made as a training for self-teaching CG art ",
        techStack: "#Blender3D, #Modelisation, #3DAnimation, #Shading, #ParticleSettings, #Adobe Suite",
        link: "https://www.artstation.com/user-6723969"
      },
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ Selected work</span>
        </div>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <a href={projects[key]["link"]} target='_blank'>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <LanguageRoundedIcon 
                        style={{ fontSize: 35 }}
                      ></LanguageRoundedIcon >
                    </div>
                    <ExternalLinks></ExternalLinks>
                  </div>
                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
                </a>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;