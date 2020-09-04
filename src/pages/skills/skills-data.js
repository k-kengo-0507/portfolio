import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_MSSQL from "../../assets/img/skills/mssql.svg";
import L_GITHUB_PAGES from "../../assets/img/skills/github.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";

export const skills = {
  frontend: [
    {
      imgAltText: "HTML 5",
      imgSrc: L_HTML5,
      skillName: "HTML5",
    },
    {
      imgAltText: "CSS 3",
      imgSrc: L_CSS3,
      skillName: "CSS3",
    },
    {
      imgAltText: "JavaScript",
      imgSrc: L_JAVASCRIPT,
      skillName: "JavaScript",
    },
    {
      imgAltText: "React JS",
      imgSrc: L_REACT,
      skillName: "React JS",
    },
  ],

  backend: [
    {
      imgAltText: "Node.js",
      imgSrc: L_NODE_JS,
      skillName: " Node.js",
    },
    {
      imgAltText: "Express",
      imgSrc: L_EXPRESS,
      skillName: " Express",
    },
  ],

  Database: [
    {
      imgAltText: "MS-SQL",
      imgSrc: L_MSSQL,
      skillName: "MS-SQL",
    },
  ],
  
  hostingPlatform: [
    {
      imgAltText: "GitHub Pages",
      imgSrc: L_GITHUB_PAGES,
      skillName: "GitHub Pages",
    },
  ],
};