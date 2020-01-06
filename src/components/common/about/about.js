import React from 'react';
import PropTypes from 'prop-types';

import styles from './about.module.scss';

const p1 = {
  0 : 'Im Alina, ',
  input: 'hello world'
};

const About = ({ title, description }) => {
  // const { paragraphFirst, paragraphSecond } = description;
  const paragraphParser = (paragraph) => (
    Object.keys(paragraph).map((key, idx) =>
      key === 'input'
        ? <strong key={idx}>{paragraph[key]}</strong>
        : <span key={idx}>{paragraph[key]}</span>
    )
  );
  
  return (
    <div className={styles.aboutContainer}>
      <h2 className={styles.title}>{ title }</h2>
      <p></p>
      <p></p>
    </div>
  );
};

About.propTypes = {
  title: PropTypes.string,
  description: PropTypes.shape({
    paragraphFirst: PropTypes.string,
    paragraphSecond: PropTypes.string
  })
};

export default About;
