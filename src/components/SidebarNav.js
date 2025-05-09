import React from "react";
import { Sidenav } from "rsuite";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import GitHubIcon from '@mui/icons-material/GitHub';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';

import "../styles/SidebarNav.css";
import "react-typist/dist/Typist.css";
import FadeInSection from "./FadeInSection";

const isMobile = window.innerWidth < 600;

class SidebarNav extends React.Component {
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
    const { expanded } = this.state;

    const links = [
      <a href="#intro">/ HOME</a>,
      <a href="#about">/ ABOUT</a>,
      <a href="#experience">/ EXPERIENCE</a>,
      <a href="#projects">/ CREATIONS</a>
    ];

    return (
      <div className="sidebar-nav">
        {!isMobile && (
          <Sidenav
            expanded={expanded}
            defaultOpenKeys={["3", "4"]}
            activeKey={this.state.activeKey}
            onSelect={this.handleSelect}
            appearance={"subtle"}
          >
            <Sidenav.Body>
              <div className="sidebar-links">
                {links.map((link, i) => (
                  <FadeInSection delay={`${i + 1}00ms`}>
              
                    <div>{link}</div>
                  
                  </FadeInSection>
                ))}
              </div>
            </Sidenav.Body>
          </Sidenav>
        )}
        <div className="sidebar-logos" href="/" target="_blank">
          <a href="mailto:pauline.rdn.contact@protonmail.com">
            <EmailRoundedIcon style={{ fontSize: 20 }}></EmailRoundedIcon>
          </a>
          <a href="https://www.behance.net/paulinestudio" target="_blank">
            <RemoveRedEyeOutlinedIcon src='' style={{ fontSize: 21 }}></RemoveRedEyeOutlinedIcon>
          </a>
          <a href="https://github.com/pauline-devs" target="_blank">
            <GitHubIcon src='' style={{ fontSize: 21 }}></GitHubIcon>
          </a>
          <a href="https://soundcloud.com/user-820425882" target="_blank">
            <EqualizerIcon style={{ fontSize: 21 }}></EqualizerIcon>
          </a>
        </div>
      </div>
    );
  }
}

export default SidebarNav;