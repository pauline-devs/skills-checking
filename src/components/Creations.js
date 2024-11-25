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
          " I launched my side business Freaky Friendz Squad, which is a magic streetwear and art brand to let oddity shine. Because All Familiar Things Were Once Strange.",
        techStack: "#Shopify #Hand-drawing #In-Between World #Lightworking #Esoterism",
        link: "https://freakyfriendzsquad.com/",
      },
      "Ghost In The Deckshell - Sonic Pi music production": {
        desc:
          "Introduced myself into electronic music production using Sonic Pi software. I create my visuals using mixed-media art I made * AI generation",
        techStack: "#SonicPi #Midjourney",
        link: "https://on.soundcloud.com/cvQZXhr8xArwaUv69",
      },
      "Etherscore - Beta Dapp": {
        desc:
          "Designed & developed Etherscore DApp, as part of UX team + collaborated with backend team: Connect Blockchain/back-end data/client side, wallet integration & more",
        techStack: "#React.js, #CSS, #Sonarqube, #Docker, #Git, #Typescript, #Figma, #Adobe Suit, #Wagmi/Viem/Web3 Modal",
        link: "https://beta.etherscore.network/",
      },
      "Etherscore - Rebranding & Landing Page": {
        desc:
          "Designed, rebranded & developed Etherscore landing page, in collaboration with ux/ui team.",
        techStack: "#React.js, #CSS, #JS",
        link: "https://etherscore.network/",
      },
      "Une Rime en Or": {
        desc:
          "A responsive web-game application created for RapMinerz, including Flask back-end.",
        techStack: "#Flask python, #CSS, #JS, #Pandas Library",
        link: "https://apps.rapminerz.io/rhyme-panel/",
      },
      "Etherscore - Test for EN/FR + dark/light switch": {
        desc:
          "Implement a basic web3 feature in an app + add possibilities for language & theme switch.",
        techStack: "#React.js, #Web3, #Metamask",
        link: "https://inspiring-pastelito-26fdd8.netlify.app",
      },
      "CryptoZombies learning": {
        desc:
          "solidity & web3 exercises following courses on the cryptozombies web platform",
        techStack: "#Web3, #Solidity, #SmartContract",
        link: "https://github.com/pauline-rdn/crypto-zombies-learning"
      },
      "Blender3d Freaks": {
        desc:
          "3D artworks as training for self-teaching CG art ",
        techStack: "#Blender3D, #Modelisation, #3DAnimation, #Shading, #ParticleSettings, #Adobe Suite",
        link: "https://www.artstation.com/user-6723969"
      },
      "Design & Edition Bundle": {
        desc:
          "A collection of book & music covers I designed & illustrated.",
        techStack: "#Adobe Suite, #hand drawing",
        link: "https://www.behance.net/paulinestudio"
      }
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