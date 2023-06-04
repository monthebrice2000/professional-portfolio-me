import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>('.underline');
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const experiences: any = [
    {
      name: 'CGI Grenoble',
      role: 'Stage Software Engineer | Junior Software Tester & Developer',
      url: 'https://www.cgi.com/france/fr-fr',
      start: 'March 2023',
      end: 'Present',
      shortDescription: [
        'I had experience working on building large test automation framework',
        // 'I had experience working on a large codebase utilizing Kibana and Elasticsearch.',
        "Throughout my work, I've utilized various technologies, including VBScript, UFT, WScript, Cucumber, Testing plan, among others.",
        // "I've also managed a small team that includes Frontend Developers, Backend Developers, and UI/UX Developers.",
        "Additionally, I've participated on many meeting of team company with the client.",
      ],
    },
    {
      name: 'IVES',
      role: 'Fullstack Web Developer',
      url: 'https://www.ives.fr/',
      start: 'May 2022',
      end: 'August 2022',
      shortDescription: [
        'I had experience working on building large web video player',
        "Throughout my work, I've utilized various technologies, including VBScript, JQuery, Javascript, HTML5/CSS3, Github Pages, among others.",
        // 'Upon graduating in 2021, I began creating content on YouTube, with the aim of enhancing my skills and working with the latest technologies, specifically React and Node.',
        // 'Over time, I have developed and shared over 50 projects using React on my channel.',
        // 'As a result, my channel has gained a substantial following, with over 11,000 subscribers to date. I have also had the pleasure of collaborating with various brands throughout my journey.',
      ],
    },
    {
      name: 'Bridge Africa',
      role: 'DEVELOPPEUR FRONTEND VUE JS 3',
      url: 'https://www.bridgeafrica.com/',
      start: 'July 2021',
      end: 'August 2021',
      shortDescription: [
        'I had experience working on building an e-ecommerce app',
        "Throughout my work, I've utilized various technologies, including VUE JS, Trello, among others.",
        // 'As the elected President of the ACES Departmental Club, I successfully led a team of board members and executive committee members to organize and execute multiple events throughout the year.',
        // 'Additionally, I secured sponsorships from reputable brands to support our events.',
        // 'Overall, it was a rewarding experience that allowed me to develop my leadership skills while contributing positively to the growth of the organization.',
      ],
    },
    // {
    //   name: 'ISTE',
    //   role: 'Web Developer',
    //   url: 'https://www.linkedin.com/company/association-of-computer-engineering-students/',
    //   start: 'November 2019',
    //   end: 'November 2020',
    //   shortDescription: [
    //     'Write modern, performant, maintainable code for a diverse array of client and internal projects',
    //     'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify',
    //     'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis',
    //   ],
    // },
    {
      name: 'GOHZE',
      role: 'Java Tester & Developer',
      url: 'https://gohze.com/en/',
      start: 'August 2020',
      end: 'February 2021',
      shortDescription: [
        'I had experience working on developing features on pWC desktop app and testing it',
        "Throughout my work, I've utilized various technologies, including Java, JUnit, Trello, among others.",
        // 'While still a student, I founded a web hosting company that offered affordable hosting services.',
        // 'With over 300 customers, the business thrived until I graduated and sold it to another company.',
      ],
    },
  ];
  return (
    <motion.div
      className="experience max-w-containerSmall lgl:py-32 mx-auto flex flex-col gap-8 py-32"
      id="experience"
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
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline" />
          {experiences.map((expereince: any, index: any) => (
            <li
              className={`exp-slider-item ${
                index === selected && 'exp-slider-item-selected'
              }`}
              onClick={() => setSelected(index)}
              key={expereince.name}
            >
              <span>{expereince.name}</span>
            </li>
          ))}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{experiences[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={experiences[selected].url} className="link">
                  {experiences[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {experiences[selected].start} - {experiences[selected].end}
            </p>
            <ul className="exp-details-list">
              {experiences[selected].shortDescription.map(
                (description: any, index: any) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
