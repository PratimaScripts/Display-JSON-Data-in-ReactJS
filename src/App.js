import React from "react";
import "./styles.css";
import ExperiencesList from "./ExperiencesList";
import SkillsList from "./SkillsList";
import SocialMediaList from "./SocialMediaList";

export default function App() {
  return (
    <div className="App">
      <ExperiencesList />
      <SkillsList />
      <SocialMediaList />
    </div>
  );
}
