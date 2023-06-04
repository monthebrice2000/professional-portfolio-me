import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log('Element is in view: ', isInView);
  }, [isInView]);
  return (
    <motion.div
      className="max-w-containerSmall lgl:py-32 about mx-auto flex flex-col gap-8 py-32"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Hello! My name is Brice, and I am passionate about creating,
            automating and monitoring digital content for the web. My interest
            in web development was sparked in 2019 when I created my first
            project called INTRANET MOOCs, an e-learning an educational app
            built using Java and JSP servlets.
          </p>
          <p className="about-grid-info-text">
            Fast-forward to today, I specialize in designing, developing,
            automating and monitoring high-quality solutions that delight our
            clients and exceed their expectations at Rapidops.{' '}
            {/* <Link href="https://rapidops.com" className="link" target="_blank">
              Rapidops.
            </Link> */}
          </p>

          <p className="about-grid-info-text">
            Additionally, I share my knowledge and passion with the world
            through my LinkedIn and Github, where I demonstrate how to build and
            operate full-stack applications.
          </p>
          <p className="about-grid-info-text">
            I am also working on a new project called ******, aimed at enhancing
            testing development skills to complete my fullstack development
            skills.
          </p>
          <p className="about-grid-info-text">
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">Git & Github</li>
            <li className="about-grid-info-list-item">Docker & Kubernetes</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Typescript</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Elasticsearch</li>
            <li className="about-grid-info-list-item">Kibana</li>
            <li className="about-grid-info-list-item">HTML5 & CSS3</li>
            <li className="about-grid-info-list-item">Terraform</li>
            <li className="about-grid-info-list-item">Chef</li>
            <li className="about-grid-info-list-item">
              Jenkins & Githubs Actions
            </li>
            <li className="about-grid-info-list-item">Azure & GCP & AWS</li>
            <li className="about-grid-info-list-item">FastAPI</li>
            <li className="about-grid-info-list-item">Spring</li>
            <li className="about-grid-info-list-item">PostgreSQL & Mongo DB</li>
            <li className="about-grid-info-list-item">Grafana</li>
            <li className="about-grid-info-list-item">Cypress & Gatling</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay" />
          <div className="overlay-border" />
          <div className="about-grid-photo-container">
            <Image src="/brice.png" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
