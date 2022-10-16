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
          "A responsive web-game application created for RapMinerz, with a Flask back-end.",
        techStack: "#Python(Flask), #Bootstrap, #Pandas Library",
        link: "https://apps.rapminerz.io/rhyme-panel/",
        open: "https://www.rapminerz.io/"
      },
      "Music Artworks": {
        desc:
          "Some music artworks I designed for @zeroGuidance friends.",
        techStack: "#Adobe Suite, #hand drawing, #3D design",
        link: "",
        open: ""
      },
      "Arabic Poetry": {
        desc:
          "A collection of three book covers I designed & illustrated.",
        techStack: "#Adobe Suite, #hand drawing",
        link: "",
        open: ""
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ software-creations</span>
          <div id='thinLine'></div>
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