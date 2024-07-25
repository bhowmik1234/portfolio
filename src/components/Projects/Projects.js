import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Crypto from "../../Assets/Projects/crypto.jpeg";
import Placement from "../../Assets/Projects/placement.png";
import Byteroot from "../../Assets/Projects/Byteroot.png";

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
              imgPath={Crypto}
              isBlog={false}
              title="Crypto upi"
              ghLink="https://github.com/bhowmik1234"
              description="We've solved a significant problem in the payment world by building CryptoConnect, an app that combines both bank-to-bank and crypto transactions using a single UPI ID masked with a crypto wallet."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Byteroot}
              isBlog={false}
              title="Byteroot"
              ghLink="https://github.com/bhowmik1234"
              description="Build a coding application where users can post challenges and interact with others. Create a platform for sharing coding tasks and fostering community engagement. Enable users to collaborate, share solutions, and enhance their coding skills together."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Placement}
              isBlog={false}
              title="Placement Portal"
              ghLink="https://github.com/bhowmik1234"
              description="Build a placement platform where teachers can invite students and professors, post jobs, and allow students to apply for jobs. Create a comprehensive system for facilitating job placements and academic collaboration."            
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
