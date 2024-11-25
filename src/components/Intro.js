import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import FadeInSection from "./FadeInSection";

class Intro extends React.Component {
    constructor() {
        super();
        this.state = {
            expanded: true,
            activeKey: "1",
            visible: "true"
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(eventKey){
        this.setState({
            activeKey: eventKey
        });
    }
    render() {
        return (
            <div id="intro">
                <Typist avgTypingDelay={120}>
                    <span className="intro-title">
                        {"hi, "}
                        <span className="intro-name">{"Pauline"}</span>
                        {" here  "}
                    </span>
                </Typist>
                <FadeInSection>
                    <div className="intro-subtitle">I am a designer and creative developer,<br/>based in Paris & Marseille, France</div>
                    <div className="intro-desc">
                        <p>
                        I have great interest in software development, human/computer interactions, implementing art and storytelling into creative experiences.
                        </p>
                    </div>
                    <a href="mailto:pauline.rdn.contact@protonmail.com" className="intro-contact">
                        <EmailRoundedIcon></EmailRoundedIcon>
                        {" Meet me here :)"}
                    </a>
                </FadeInSection>
            </div>
        );
    }
}

export default Intro;