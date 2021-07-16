import React from "react";

import { Section, SectionText } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import AnimatedText from "../AnimatedText/AnimatedText";
import Typing from "../Typing";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section nopadding>
      <AnimatedText />
      <LeftSection>
        <SectionText>
          The purpose of JavaScript Mastery is to help aspiring and established
          developers to take their development skills to the next level and
          build awesome apps.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
