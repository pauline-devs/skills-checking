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
      "Etherscore - rebranding": {
        desc:
          "Designed & developed Etherscore landing page, in collaboration with ux/ui team.",
        techStack: "#React.js, #CSS, #JS",
        link: "https://etherscore.network/",
        open: "https://etherscore.network/"
      },
      "Une Rime en Or": {
        desc:
          "A responsive web-game application created with RapMinerz, including Flask back-end.",
        techStack: "#Flask python, #CSS, #JS, #Pandas Library",
        link: "https://apps.rapminerz.io/rhyme-panel/",
        open: "https://apps.rapminerz.io/rhyme-panel/"
      },
      "OnChained technical test": {
        desc:
          "Implement a basic web3 feature in an app",
        techStack: "#React.js, #Web3, #Metamask",
        link: "https://github.com/pauline-rdn/etherscore-technical-test",
        open: "https://inspiring-pastelito-26fdd8.netlify.app/"
      },
      "CryptoZombies learning": {
        desc:
          "solidity & web3 exercises following courses on the cryptozombies web platform",
        techStack: "#Web3, #Solidity, #SmartContract",
        link: "https://github.com/pauline-rdn/crypto-zombies-learning"
      },
      "Blender3d Training": {
        desc:
          "3D artworks & animations side creations as a self-taught CG artist ",
        techStack: "#Blender3D, #Modelisation, #3DAnimation, #Shading, #ParticleSettings, #Adobe Suite",
        open: "https://www.artstation.com/user-6723969"
      },
      "Arabic Poetry": {
        desc:
          "A collection of three book covers I designed & illustrated.",
        techStack: "#Adobe Suite, #hand drawing",
        open: "https://www.behance.net/gallery/172747937/Arabic-poetry-book-design"
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
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderZipIcon
                        style={{ fontSize: 35 }}
                      ></FolderZipIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;