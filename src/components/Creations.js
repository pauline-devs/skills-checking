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
      "Une Rime en Or": {
        desc:
          "A responsive web-game application created with RapMinerz, including Flask back-end.",
        techStack: "#Flask python, #CSS, #JS, #Pandas Library",
        link: "https://apps.rapminerz.io/rhyme-panel/",
        open: "https://www.rapminerz.io/"
      },
      "Python-blockchain": {
        desc:
          "Blockchain based model code trial (using Flask, Node.js & React.js) - in order to better understand the technology.",
        techStack: "#Flask python, #React.js, #Node.js",
        link: "https://github.com/pauline-rdn/python-blockchain"
      },
      "matrix-rain-js": {
        desc:
          "Code matrix rain with p5.js (Misc. math symbols & Katakana char) - as part of the design of a personal project",
        techStack: "#p5.js, #blender.3D, #touch designer, #hand drawing, #adobe suite",
        link: "https://github.com/pauline-rdn/matrix-rain-js"
      },
      "Arabic Poetry": {
        desc:
          "A collection of three book covers I designed & illustrated.",
        techStack: "#Adobe Suite, #hand drawing",
        open: "https://alakazam-rough.tumblr.com/design-stuff"
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