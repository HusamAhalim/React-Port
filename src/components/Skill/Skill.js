import React from "react";
import { SvgIcon, Typography } from "@material-ui/core";
import "./Skill.css";
import { Element } from "react-scroll";

import skillList from "../../utils/skill-list";

export default function Skill({ skill }) {
  return (
    <React.Fragment>
      <Typography
        variant="h2"
        display="bold"
        align="center"
        style={{
          margin: "16px",
          fontSize: "30px",
          textTransform: "uppercase",
          fontFamily: '"times", cursiv'
          
        }}
      >
        <Element name="skill">Experence</Element>
      </Typography>
      <div className="skill-container">
        {skillList.map((skill, i) => (
          <div className="skill-img" key={i}>
            <SvgIcon
              titleAccess={skill.name}
              style={{ width: "auto", height: "100%" }}
              className="svg-icon"
              viewBox="0 0 24 24"
              color="primary"
            >
              <path d={skill.svgPath} />
            </SvgIcon>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}
