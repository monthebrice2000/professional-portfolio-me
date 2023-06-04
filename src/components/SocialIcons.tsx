import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import {
  FiFacebook,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiYoutube,
} from 'react-icons/fi';

function SocialIcons() {
  const socialLinks = [
    {
      name: 'Github',
      icon: <FiGithub />,
      link: 'https://github.com/monthebrice2000',
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin />,
      link: 'https://www.linkedin.com/in/brice-monthe-0b64061a2/',
    },
    {
      name: 'Facebook',
      icon: <FiFacebook />,
      link: 'https://www.facebook.com/brice.monthe.35/',
    },
    {
      name: 'Email',
      icon: <FiMail />,
      link: 'monthedjeumoubrice2000@gmail.com',
    },
    {
      name: 'Youtube',
      icon: <FiYoutube />,
      link: 'https://www.youtube.com/channel/UCBUZvfrpcxl1oN1pDJFwEtQ',
    },
  ];
  return (
    <motion.div
      className="social-icons"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
        delay: 1.95,
      }}
    >
      <ul className="social-icons-list">
        {socialLinks.map(({ name, icon, link }) => (
          <li key={name} title={name} className="social-icons-list-item">
            <Link
              href={link}
              className="social-icons-list-item-link"
              target="_blank"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default SocialIcons;
