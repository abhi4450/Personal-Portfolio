import React from "react";
import { motion } from "framer-motion";
import htmlandcss from "../images/htmlandcss.jpg";
import skill2 from "../images/skill2.jpeg";
import skill3 from "../images/skill3.jpg";
import skill4 from "../images/skill4.jpeg";
import skill5 from "../images/skill5.jpg";
import skill6 from "../images/skill6.jpeg";
import { Card } from "react-bootstrap";

const Skills = () => {
  const ServicesList = [
    {
      id: 1,
      name: "HTML & CSS",
      imageUrl: htmlandcss,
    },
    {
      id: 2,
      name: "BootStrap",
      imageUrl: skill2,
    },
    {
      id: 3,
      name: "Core of JavaScript",
      imageUrl: skill3,
    },
    {
      id: 4,
      name: "Reactjs",
      imageUrl: skill4,
    },
    {
      id: 5,
      name: "nodejs",
      imageUrl: skill5,
    },
    {
      id: 6,
      name: "Data Structure and Algorithm",
      imageUrl: skill6,
    },
  ];
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="services">
        <h2>Skills</h2>
        <div className="wrapper">
          {ServicesList.map((item) => {
            return (
              <div>
                <Card>
                  <Card.Img variant="top" src={item.imageUrl} />
                  <Card.Body>
                    <Card.Title style={{ color: "white" }}>
                      {item.name}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
export default Skills;
