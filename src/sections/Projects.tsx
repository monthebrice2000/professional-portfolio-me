import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

function Projects() {
  const projectsData = [
    {
      image: '/project1.png',
      projectName: 'springboot-todo-app-apis',
      projectLink:
        'https://evening-garden-93563.herokuapp.com/swagger-ui/index.html',
      projectDescription:
        '🛡️🔐I built secured APIs with Spring Security and testing it with Postman API. And I deployed it in Heroku for production. This link https://evening-garden-93563.herokuapp.com/ is the host link which host all secured APIs🔒🔑👨🏻‍💻.',
      projectTech: [
        'java',
        'jwt',
        'spring',
        'jwt-authentication',
        'spring-security-jwt',
        'postman-api',
      ],
      projectExternalLinks: {
        github: 'https://github.com/monthebrice2000/springboot-todo-app-apis',
        externalLink:
          'https://github.com/monthebrice2000/springboot-todo-app-apis',
      },
    },
    {
      image: '/project2.png',
      projectName: 'protected-photo-apis-passwport-management app',
      projectLink:
        'https://monthebrice2000.github.io/protected-photo-apis-passwport-management/',
      projectDescription:
        'I built my photo protected api with express js and passport and visualize it by angular',
      projectTech: [
        'Angular',
        'Node.js',
        'Express',
        'MongoDB',
        'Typescript',
        'Styled Components',
      ],
      projectExternalLinks: {
        github:
          'https://github.com/monthebrice2000/protected-photo-apis-passwport-management',
        externalLink:
          'https://monthebrice2000.github.io/protected-photo-apis-passwport-management/',
      },
    },
    {
      image: '/project3.png',
      projectName: 'github-actions-ci-cd-workflow',
      projectLink:
        'https://github.com/monthebrice2000/github-actions-ci-cd-workflow',
      projectDescription:
        'With github actions, this project presents the templates to build and deploy our applications on the azure cloud in a continuous way without forgetting to manage the continuous integration.',
      projectTech: [
        'Microsoft Azure',
        'Github Actions',
        'Jenkins',
        'Doker & Kubernetes',
      ],
      projectExternalLinks: {
        github:
          'https://github.com/monthebrice2000/github-actions-ci-cd-workflow',
        externalLink:
          'https://github.com/monthebrice2000/github-actions-ci-cd-workflow',
      },
    },
  ];
  return (
    <div
      className="projects max-w-containerSmall lgl:py-32 mx-auto py-32"
      id="work"
    >
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={{
          visible: { opacity: 1, y: -50 },
          hidden: { opacity: 0, y: 0 },
        }}
      >
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            // projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                variants={{
                  visible: { opacity: 1, y: -50 },
                  hidden: { opacity: 0, y: 0 },
                }}
              >
                <div className="project-image">
                  <div className="project-image-overlay" />
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        target="_blank"
                        className="project-info-links-item-link"
                      >
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        target="_blank"
                        className="project-info-links-item-link"
                      >
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
