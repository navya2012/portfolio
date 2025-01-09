import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import careerbridge from "../../Assets/Projects/careerbridge.png";
import buddy from "../../Assets/Projects/buddy.png";
import agios from "../../Assets/Projects/agios.png";
import galaxy from "../../Assets/Projects/galaxy.png";
import CSSProject from "../../Assets/Projects/css project.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={careerbridge}
              isBlog={false}
              title="Careerbridge Hub"
              description="It is recruitment project which has 2 roles - employer, employee.Employer will have signup, login, dashboard, , crud operations for job posts, applications lists who applied for the job.Employee will have signup , login, dashboard, job posts, can he can apply for the jobs, and applied jobs list display, working experience"
              ghLink="https://github.com/navya2012/recruitment-frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buddy}
              isBlog={false}
              title="Workout Buddy"
              description="It is related to exercises . It stores data of a person’s how many types of exercises done, how much load he carries and how many times he is doing (Count)."
              ghLink="https://github.com/navya2012/workoutbuddy-frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={agios}
              isBlog={false}
              title="Agios (Front End)"
              description="Agios is static website that i  have created as it is related to agriculture using React Js.I have divided the  website into some components like about, projects, services and home pages.I have worked on react routing, accordion, slider and some react hooks , context api and props for passing data"
              ghLink="https://github.com/navya2012/agiosproject"
              demoLink="https://agios-react-project.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={galaxy}
              isBlog={false}
              title="Galaxy Travel (Front End - React Js)"
              description="Galaxy Travel is static website that i  have created as it is related to galaxy travel using React Js.I have divided the  website into some components like training, pricing, contact and home pages.I have worked on react routing, accordion."
              ghLink="https://github.com/navya2012/galaxytravelproject"
              demoLink="https://galaxy-travel-project.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CSSProject}
              isBlog={false}
              title="Via tours (Front End - HTML,CSS)"
              description="Via tours is static website that i  have created as it is related to tours using HTML, CSS Technologies.Only simple static pages for home page using only css styles"
              ghLink="https://github.com/navya2012/CSS-ViatoursProject"
              demoLink="https://css-viatoursproject.netlify.app/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
