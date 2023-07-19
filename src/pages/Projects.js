import React from "react";
import { motion } from "framer-motion";
import project1 from "../images/project1.jpg";
import project2 from "../images/project2.jpg";
import project3 from "../images/project3.jpg";
import project4 from "../images/project4.jpg";
import project5 from "../images/project5.jpg";
import project6 from "../images/project6.jpg";
import { Card } from "react-bootstrap";

const Projects = () => {
  const ProjectList = [
    {
      id: 1,
      name: "reactjs-react-router-dom_project",
      imageUrl: project1,
    },
    {
      id: 2,
      name: "Reactjs-ExpenseTrackerApp",
      imageUrl: project2,
    },
    {
      id: 3,
      name: "food order app",
      imageUrl: project3,
    },
    {
      id: 4,
      name: "cloneofusabilityhub",
      imageUrl: project4,
    },
    {
      id: 5,
      name: "CSS-Grid-MyGallery ",
      imageUrl: project5,
    },
    {
      id: 6,
      name: "Bootstrap_CSS-Museum-Of-Candy",
      imageUrl: project6,
    },
  ];
  return (
    <motion.div
      className="projects"
      animate={{
        scale: [2, 1],
        rotation: [90, 0],
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <h2>Projects</h2>
      <div className="wrapper">
        {ProjectList.map((item) => {
          return (
            <motion.div
              key={item.id}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
            >
              <Card>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title style={{ color: "white" }}>
                    {item.name}
                  </Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
