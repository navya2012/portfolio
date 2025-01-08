import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Careerbridge Hub"
              description="●	It is recruitment project which has 2 roles - employer, employee.Employer will have signup, login, dashboard, , crud operations for job posts, applications lists who applied for the job.Employee will have signup , login, dashboard, job posts, can he can apply for the jobs, and applied jobs list display, working experience"
              ghLink="https://github.com/navya2012/recruitment-frontend"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Workout Buddy"
              description="It is related to exercises . It stores data of a person’s how many types of exercises done, how much load he carries and how many times he is doing (Count)."
              ghLink="https://github.com/navya2012/workoutbuddy-frontend"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Agios (Front End)"
              description="Agios is static website that i  have created as it is related to agriculture using React Js.I have divided the  website into some components like about, projects, services and home pages.I have worked on react routing, accordion, slider and some react hooks , context api and props for passing data"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://agios-react-project.netlify.app/"              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
