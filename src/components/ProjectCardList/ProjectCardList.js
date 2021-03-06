import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import project_list from "../../utils/project-list";
import ProjectCard from "../ProjectCard/ProjectCard";
import { Element } from "react-scroll";

const useStyles = makeStyles({
  "spacing-xs-4": {
    width: "inherit",
    margin: 0
  }
});

export default function ProjectCardList() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography
        id="projects"
        variant="h2"
        display="block"
        align="center"
        style={{
          margin: "16px",
          fontSize: "30px",
          textTransform: "uppercase",
          fontFamily: "'times',cursive"
        }}
      >
        <Element name="projects">Projects</Element>
      </Typography>
      <Grid
        container
        spacing={4}
        style={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        classes={{
          "spacing-xs-4": classes["spacing-xs-4"] 
        }}
      >
        {project_list.map((project, i) => (
          <ProjectCard project={project} key={i} />
        ))}
      </Grid>
    </React.Fragment>
  );
}
