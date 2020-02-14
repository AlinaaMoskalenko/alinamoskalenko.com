import React from 'react';
import PropTypes from 'prop-types';

const CustomComponent = (props) => {
  const TagComponent = props.tag;
  
  return <TagComponent {...props} />
};

CustomComponent.propTypes = {
  tag: PropTypes.object
};

export default CustomComponent;
