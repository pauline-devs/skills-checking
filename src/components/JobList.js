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
        "Integrated a one year Fine Arts overview (manaa): mainly studying drawing skills",
        "I studied Interactive design & graphic arts: obtained a Bachelor degree diploma (ESMA & LISAA Nantes, France).",
        "MBA diploma - Master Degree of International Art Market (ICART, Paris): focusing on exhibition curation & art advisoring, economy, history, anthropology of the arts. I also was head of digital art sales as an intern at @La Galerie Cinema, Paris.",
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
        "Rap Minerz is the first french rap media with a data perspective.",
        "Getting started with Python:  I created a script that could add, delete, rank or group songs in playlists by keyword - Technologies in use: Spotipy Library & Spotipy API.",
        "Developed from scratch 'UNE RIME EN OR' (referring to 'une famille en or', the french version of 'Family Feud') a responsive web game app, both on client and server side - Tools in use: Flask Python ",
      ],
    },
    "Etherscore/2022": {
      jobTitle: "Front-End Engineer at @",
      duration: "2022",
      desc: [
        "Alpha DApp: helps you grow your web3 reputation using nfts based on your achievements. I Contributed to the app's makeover with new UX/UI schemes and designs, new nft templates, and connected client with new sustainable web3 wallet solutions.",
        "Relevant technologies: Vue.js, Figma, Adobe Suite."
      ],
    },
    "Etherscore/Last mission": {
      jobTitle: "Front-End Engineer at @",
      duration: "2022 - PRESENT",
      desc: [
        "Designed and developed, in collaboration with UX/UI team, the front-end architecture of the Landing-page and the new Beta DApp (including solid solutions for back-end, blockchain data and wallet integrations, new front-end skills acquired, user input validation and error handling).",
        "Tools in use: React.js, Sonarqube, Docker, Git, Typescript, Figma, Adobe Suite, Wagmi/Viem/Web3 Modal, Framer Motion",
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
