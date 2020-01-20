import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from './button.module.scss';

const Button = ({ type, mode, disabled, className, children: label }) => {
  const cx = classNames.bind(styles);
  const btnClasses = cx(
    'btn',
    className,
    {'secondary': type === 'secondary'},
    {'arrow': type === 'arrow'},
    {'arrow-text': type === 'arrow-text'}
  );
  
  return (
    mode ==='LINK'
      ? <a href='/' className={btnClasses}>{label}</a>
      : <button
          type='submit'
          className={btnClasses}
          disabled={disabled}>
          {label}
        </button>
  );
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
  label: PropTypes.string
};

export default Button;
