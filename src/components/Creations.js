import React from "react";
import "../styles/Creations.css";
import FolderZipIcon from '@mui/icons-material/FolderZip';
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
      "Freaky Friendz Squad": {
        desc:
          " I launched my side business Freaky Friendz Squad: a streetwear and artsy brand with a hint of magic.",
        techStack: "#Shopify #Hand-drawing #Brand Design #In-Between World",
        link: "https://freakyfriendzsquad.com/",
      },
      "Ghost In The Deckshell - Sonic Pi music production": {
        desc:
          "I Introduced myself to electronic music production, using Sonic Pi software.",
        techStack: "#SonicPi #Midjourney",
        link: "https://on.soundcloud.com/cvQZXhr8xArwaUv69",
      },
      "Etherscore - Beta Dapp": {
        desc:
          "Etherscore helps you grow your web3 reputation by minting nft badges based on your web3 achievements.",
        techStack: "#React.js, #CSS, #Sonarqube, #Docker, #Git, #Typescript, #Figma, #Adobe Suit, #Wagmi/Viem/Web3 Modal",
        link: "https://beta.etherscore.network/",
      },
      "Etherscore - Rebranding & Landing Page": {
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
      "Etherscore - Test for EN/FR + dark/light switch": {
        desc:
          "Implementation of a basic web3 feature + add possibilities for language & theme switch.",
        techStack: "#React.js, #Web3, #Metamask",
        link: "https://inspiring-pastelito-26fdd8.netlify.app",
      },
      "CryptoZombies learning": {
        desc:
          "solidity & web3 training, following the cryptozombies web platform courses",
        techStack: "#Web3, #Solidity, #SmartContract",
        link: "https://github.com/pauline-rdn/crypto-zombies-learning"
      },
      "Design & Edition Bundle": {
        desc:
          "A collection of book & music covers I designed & illustrated.",
        techStack: "#Adobe Suite, #hand drawing",
        link: "https://www.behance.net/paulinestudio"
      },
      "Blender3d Freaks": {
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
                      <FolderZipIcon
                        style={{ fontSize: 35 }}
                      ></FolderZipIcon>
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