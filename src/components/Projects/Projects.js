import React from "react";
import styled from "styled-components";
import Icon from "../Ui/Icon/Icon.js";
import Project from "./Project/Project.js";
import { Element } from "react-scroll";

import react from "../../assets/technologies/react-colored.svg";
import gatsby from "../../assets/technologies/gatsby-colored.svg";
import ruby from "../../assets/technologies/ruby-color.svg";
import graphql from "../../assets/technologies/graphql.1.svg";
import node from "../../assets/technologies/nodejs-color.svg";

const StyledProjects = styled.div`
  max-width: 700px;
  margin: 0 auto 0px auto;
  display: flex;
  flex-wrap: wrap;
`;

const Projects = () => (
  <Element name="projects">
    <h1 style={{ color: "white", textAlign: "center", marginBottom: "20px" }}>
      Projects
    </h1>
    <StyledProjects>
      <Project
        title="Homeful"
        description="Concept Web application to help make meaningful changes to homeless around the capital"
        github="https://github.com/alextricityy/homeful"
        live="http://www.homeful.co.uk"
      >
        <Icon src={ruby} height="40px" width="40px" />
      </Project>
      <Project
        title="Personal Blog"
        description="Gatsby blog with custom page transitions and graphCMS integration"
        github="https://github.com/alextricityy/my-blog/"
        live="#"
      >
        <Icon src={react} height="40px" width="40px" />
        <Icon src={gatsby} height="40px" width="40px" />
        <Icon src={graphql} height="40px" width="40px" />
      </Project>
      <Project
        title="Discord Bot"
        description="A Simple Discord Bot with the ability to display and change member data"
        github="http://github.com/alextricityy/discord-bot"
        live="#"
        tech="react"
      >
        <Icon src={node} height="40px" width="40px" />
      </Project>
    
      <Project
        title="This portfolio"
        description="The code for the portfolio you are currently browsing!"
        github="https://github.com/alextricityy/portfolio"
        live="https://alextricityy.github.io/portfolio"
      >
        <Icon src={react} height="40px" width="40px" />
      </Project>
    </StyledProjects>
  </Element>
);

export default Projects;
