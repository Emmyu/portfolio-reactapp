import React from "react";
import { Card, Container } from "react-bootstrap";
import { motion } from "framer-motion";
import project1 from "../images/robots-hands-touch-each-other-generative-ai.jpg";
import project2 from "../images/project2.jpg";

const Projects = () => {
  const projectList = [
    {
      id: 1,
      name: "Marketing site design & build",
      imageUrl: project1,
    },
    {
      id: 2,
      name: "Glide Utilities",
      imageUrl: project2,
    },
    {
      id: 3,
      name: "Noton High Street Product",
      imageUrl: project1,
    },
    {
      id: 4,
      name: "Gifts and Voucher Today",
      imageUrl: project2,
    },
    {
      id: 5,
      name: "Productkart Studio",
      imageUrl: project1,
    },
    {
      id: 6,
      name: "Library Management",
      imageUrl: project2,
    },
  ];

  return (
    <Container className="projects">
      <h2>Projects</h2>
      <div className="wrapper">
        {projectList.map((item) => (
          <motion.div
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
            }}
            key={item.id}
          >
            <Card>
              <Card.Img variant="top" src={item.imageUrl} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
              </Card.Body>
            </Card>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default Projects;
