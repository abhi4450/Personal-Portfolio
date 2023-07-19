import React from "react";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home">
      <motion.div
        className="name"
        initial={{ x: -300, scale: 0.5 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Abhishek <font>Kumar Gupta</font>
      </motion.div>
      <motion.div
        className="desc"
        initial={{ x: 300, scale: 0.5 }}
        animate={{ x: 0, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <font>A Computer Science graduate </font>seeking
        employment
        <font> with a product-based company</font>.
      </motion.div>
    </div>
  );
};

export default Home;
