import React from "react";
import ComponentsSection from "./library";
import FeaturesSection from "./features";
import GetStartedSection from "./getStarted";
import { Container } from "./styled";
import { Roadmap } from "../Roadmap";

const Landing = () => {
  return (
    <Container>
      {/* <Menu></Menu> */}
      <GetStartedSection />
    
      {/* <PartnersSection /> */}
      <FeaturesSection />
      <Roadmap
        items={[
          { title: "Launch", description: "", completed: true },
          {
            completed: true,
            title: "Component Library",
            description: "Low Code",
          },
          {
            completed: false,
            title: "Theme Library",
            description: "Less Code",
          },
          { completed: false, title: "Drag n Drop", description: "No Code" },
        ]}
      />
      <ComponentsSection />
    </Container>
  );
};

export default Landing;