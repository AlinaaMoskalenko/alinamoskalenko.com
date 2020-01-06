import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './read-more-block.module.scss';

const ReadMoreBlock = ({ text }) => {
  const [isOpened, toggleBlock] = useState(false);
  
  const label = !isOpened ? 'read more' : 'show less';
  
  return (
    <>
      <input
        id='read-more'
        type='checkbox'
        className={styles.checkbox}
        onChange={() => toggleBlock(!isOpened)} />
      <div>{text}</div>
      <label htmlFor='read-more' className={styles['read-more-block']}>
        {label}
      </label>
    </>
  );
};


ReadMoreBlock.propTypes = {
  text: PropTypes.string.isRequired
};

export default ReadMoreBlock;
