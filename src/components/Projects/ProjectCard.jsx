import React from "react";
import {
  Card,
  Image,
  Tags,
  Tag,
  Details,
  Title,
  Date,
  Description,
  ButtonGroup,
  Button,
} from "./ProjectCardStyle";

const ProjectCards = ({ project, setOpenModal }) => {
  return (
    <Card onClick={() => setOpenModal({ state: true, project: project })}>
      <Image src={project.image} />
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
        <ButtonGroup>
          <Button type="code" href={project?.github} target="new">
            Code
          </Button>
          {project?.webapp && (
            <Button type="demo" href={project?.webapp} target="new">
              Demo
            </Button>
          )}
        </ButtonGroup>
      </Details>
    </Card>
  );
};

export default ProjectCards;
