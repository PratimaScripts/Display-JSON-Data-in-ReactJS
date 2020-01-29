import React, { Component } from "react";
import data from "./data";

class SkillsList extends Component {
  render() {
    return (
      <div>
        {data.Skills.map((skill, i) => {
          return (
            <div>
              <h4 key={i}>{skill.Area}</h4>
              <ul>
                {skill.SkillSet.map((skillDetail, i) => {
                  return <li key={i}>{skillDetail.Name}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}
export default SkillsList;
