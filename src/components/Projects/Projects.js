import React from "react";
import Image from "next/image";
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => {
  return (
  <Section id="projects">
    <SectionDivider divider colorAlt />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((p, i) => {
        return (
          <BlogCard key={i}>
            <Image
              src={p.image}
              alt={p.title}
              width={340}
              height={166}
              layout="responsive"
            />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo className="card-info">{p.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div>
            <UtilityList>
              {p.visit && <ExternalLinks href={p.visit}>Live Demo</ExternalLinks>}
              {p.source &&  <ExternalLinks href={p.source}>Source Code</ExternalLinks>}
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
)
}

export default Projects;
