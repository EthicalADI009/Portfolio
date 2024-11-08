import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
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
              title="Campus Nexus"
              description="The Integrated Student Management System simplifies educational administration. Built with Java, NetBeans, MySQL, and JDBC, it offers efficient solutions for managing student, improving efficiency and quality in academic institutions."
              ghLink="https://github.com/EthicalADI009/Campus_Nexus"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Smart Parking System"
              description="It is a smart car parking system using computer vision techniques. This employs the YOLOv8 object detection model to detect cars in a video feed and track their positions within designated parking areas. The simulation aims to provide real-time monitoring and visualization of the parking lot occupancy."
              ghLink="https://github.com/EthicalADI009/smart-parking-simulation"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Employee Payroll System"
              description="Develop an Employee Payroll Management System that will automate and streamline the payroll process, ensuring accurate and timely payments, while maintaining data integrity and security."
              ghLink="https://github.com/EthicalADI009/PP-PROJECT"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
