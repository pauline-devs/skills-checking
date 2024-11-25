import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.black,
    display: "flex",
    flexDirection: (props) => (props.isHorizontal ? "column" : "row"),
    height: 410,
  },
  tabs: {
    borderRight: (props) =>
      !props.isHorizontal ? `1px solid ${theme.palette.divider}` : "none",
  },
}));

const JobList = () => {
  const [isHorizontal, setIsHorizontal] = useState(window.innerWidth < 900);
  const [value, setValue] = useState(0);

  const experienceItems = {
    "Education/Arts": {
      jobTitle: "",
      duration: "",
      desc: [
        "Integrated a one year Fine Arts overview (manaa), mainly studying drawing skills/ Two Years studying Interactive design & graphic arts & obtained Bachelor degree diploma (ESMA & LISAA Nantes, France).",
        "MBA diploma - Master Degree of International Art Market (ICART, Paris), focusing on exhibition curation & art advisoring, economy, history, anthropology of the arts. I also worked as an intern at @La Galerie Cinema, Paris.",
      ],
    },
    "Education/Tech": {
      jobTitle: "",
      duration: "",
      desc: [
        "Intensive learning: Shell & C languages - 42 School, Paris.",
        "Self-taught Web development Front-end/ Back-end, 3D modeling, arts x music x crypto ecosystem - through YouTube, online courses & resources such as Awwwards.com.",
      ],
    },
    "Rap Minerz": {
      jobTitle: "Intern at @",
      duration: "MAY & JUNE 2022",
      desc: [
        "Created a Python script in order to manage Spotify playlists - using Spotipy Library & Spotipy API technologies.",
        "Developed a responsive Flask Python application from scratch, both on client and server side - under the leading team supervision.",
      ],
    },
    "Etherscore/2022": {
      jobTitle: "Front-End Engineer at @",
      duration: "2022",
      desc: [
        "Redesigned Alpha DApp: suggested UX/UI schemes & designs, connection with sustainable web3 wallet solutions, design of NFT templates and communication posts destined to Twitter or collaborators (investors, partners team).",
      ],
    },
    "Etherscore/Last mission": {
      jobTitle: "Front-End Engineer at @",
      duration: "2022 - PRESENT",
      desc: [
        "Designed with UX team, and developed from scratch: the Landing-Page + Beta Version of the DApp: blockchain, backend data & wallet integration, user input validation and error handling.",
        "Technologies in use: Vue.js, React.js, Figma, Adobe Suite, Wagmi/Viem/Web3 Modal, Node.js, TypeScript, Docker, security tools such as SonarQube.",
      ],
    },
  };

  const handleResize = () => {
    setIsHorizontal(window.innerWidth < 900);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyles({ isHorizontal });

  return (
    <div className={classes.root}>
      <Tabs
        orientation={isHorizontal ? "horizontal" : "vertical"}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} key={i} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i} key={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map((descItem, j) => (
              <FadeInSection delay={`${j + 1}00ms`} key={j}>
                <li>{descItem}</li>
              </FadeInSection>
            ))}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
