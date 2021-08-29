import React from "react";

import { Section, SectionText } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import AnimatedText from "../AnimatedText/AnimatedText";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section nopadding>
      <AnimatedText />
      <LeftSection>
        <SectionText>
          Skilled Software Developer bringing a high level of technical
          abilities in JavaScript, React JS, .NET Core, RESTful APIs. Focused on
          delivering clean, error-free code for scalable, user-friendly designs.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
