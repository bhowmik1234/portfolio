import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Crypto from "../../Assets/Projects/crypto.jpeg";
import Placement from "../../Assets/Projects/placement.png";
import Byteroot from "../../Assets/Projects/Byteroot.png";
import Rakshat from "../../Assets/Projects/rakshak.png";
import Ecom from "../../Assets/Projects/Ecom.jpeg";
import Spam from "../../Assets/Projects/spam.png";




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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Rakshat}
              isBlog={false}
              title="Rakshak"
              ghLink="https://github.com/bhowmik1234"
              description="Build a security application to securly transfer file and images in medical sector. To prevent data breach and secure the data of the patients."            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecom}
              isBlog={false}
              title="Ecommerce website"
              ghLink="https://github.com/bhowmik1234"
              description="Build a Ecommerce website where users can buy products. With AI based recommendation system."            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Spam}
              isBlog={false}
              title="Spam Detection"
              ghLink="https://github.com/bhowmik1234"
              description=" Build a spam detection system where users can detect spam emails and messages. Using NLP and Machine Learning Algorithms."            
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
