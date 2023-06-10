import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

import Button from '@/components/Button';

function Contact() {
  return (
    <motion.div
      className="contact max-w-containerSmall lgl:py-32 mx-auto py-32"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
        Although I’m currently looking for any new opportunities, my inbox is
        always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <div>
        <span className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4">
          <Link
            href="/documents/LETTRE_MOTIVATION_BRICE.pdf"
            className="link"
            target="_blank"
          >
            My Cover Letter.
          </Link>
        </span>
        <span className="contact-cta">
          <Button
            link="mailto:monthedjeumoubrice2000@gmail.com"
            text="Say Hello"
          />
        </span>
      </div>
    </motion.div>
  );
}

export default Contact;
