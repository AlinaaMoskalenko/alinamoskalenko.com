import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './button.module.scss';

const Button = ({ type, mode, disabled, className, children: label, url }) => {
  const cx = classNames.bind(styles);
  const btnClasses = cx(
    'btn',
    className,
    {'secondary': type === 'secondary'},
    {'arrow': type === 'arrow'},
    {'arrow-text': type === 'arrow-text'}
  );

  let button;
  if (mode === 'LINK') {
    button = <a href={url} className={styles['link-btn']}>{label}</a>;

  } else if (mode === 'ROUTER_LINK') {
    button = <Link to={url} className={styles['link-btn']}>{label}</Link>;

  } else {
    button = (
        <button
            type='submit'
            className={btnClasses}
            disabled={disabled}>
          {label}
        </button>
    );
  }
  
  return button;
};

Button.defaultProps = {
  type: 'primary',
  mode: 'BTN'
};

Button.propTypes = {
  type: PropTypes.string,
  mode: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.string,
  url: PropTypes.string
};

export default Button;
