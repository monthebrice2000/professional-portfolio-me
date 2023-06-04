import { motion } from 'framer-motion';
import Link from 'next/link';
import React, { useEffect } from 'react';
// import Typed from "typed.js";
import Typewriter from 'typewriter-effect';

import Button from '@/components/Button';

function Hero() {
  useEffect(() => {
    // var typed = new Typed('#profil', {
    //   strings: ["Software engineer", "DevOps engineer", "DevSecTest engineer"],
    //   typeSpeed: 200,
    //   //backDelay: 700,
    //   backSpeed: 50,
    //   loop: true,
    //   loopCount: Infinity,
    //   cursorChar: '|',
    //   shuffle: false,
    // });
    // new Typewriter('#profil', {
    //   strings: ["Software engineer", "DevOps engineer", "DevSecTest engineer"],
    //   autoStart: true,
    //   loop: true,
    //   delay: 75,
    // });
  });

  return (
    <div className="hero">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
          delay: 0.6,
        }}
      >
        Hi, my name is
      </motion.h1>
      <motion.h2
        className="hero-title-large"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
          delay: 0.75,
        }}
      >
        MONTHE DJEUMOU Brice.
      </motion.h2>
      <motion.h3
        // className="hero-title-large hero-title-sub text-4xl font-bold text-white"
        className="hero-title-sub text-4xl font-bold text-white"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
          delay: 1.05,
        }}
      >
        {/* a futur <span id="profil">software engineer</span> */}
        <span>a futur </span>
        <Typewriter
          options={{
            strings: [
              'Software engineer',
              'DevOps engineer',
              'DevSecTestOps engineer',
            ],
            autoStart: true,
            loop: true,
            delay: 75,
            wrapperClassName: 'inline',
          }}
        />
      </motion.h3>
      <motion.p
        className="hero-text"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
          delay: 1.35,
        }}
      >
        with experience in React, Spring, Python. I have a strong foundation in
        front-end & back-end development and am skilled in creating
        user-friendly and responsive web applications using React and its
        ecosystem. Aspiring to junior Devops Engineer with expertise in creating
        top-notch digital experiences, my current focus is on automating
        application and administrating netwok products that are accessible and
        centered around user needs, as part of the team.
        <br />
        <Link href="https://github.com/monthebrice2000" className="link">
          Learn More.
        </Link>
      </motion.p>
      <motion.div
        className="hero-button"
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
          delay: 1.65,
        }}
      >
        <Button
          text="Check out my project!"
          link="https://github.com/monthebrice2000?tab=repositories"
        />
      </motion.div>
    </div>
  );
}

export default Hero;
