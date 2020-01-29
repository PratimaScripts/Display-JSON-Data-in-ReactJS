import React, { Component } from "react";
import data from "./data";

const socialMediaList = data.SocialMedias;

class SocialMediasList extends Component {
  render() {
    return (
      <ul>
        {socialMediaList.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    );
  }
}
export default SocialMediasList;
