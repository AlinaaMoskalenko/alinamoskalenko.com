import React from 'react';
import PropTypes from 'prop-types';

import Button from "../../common/button";

import styles from './project-card.module.scss';

const ProjectCard = ({ projects }) => {
    const { imgUrl, title, description, detailsUrl, projectUrl } = projects;
    const projectImage = {
        backgroundImage: `url(${imgUrl})`
    };

    return (
        <div className={styles['project-card']}>
            <div className={styles['project-img']} style={projectImage}></div>
            <div className={styles['project-description']}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
            </div>
            <div className={styles['project-action']}>
                <Button type="arrow-text" mode="ROUTER_LINK" url={`/details/${detailsUrl}`}>details</Button>
                <Button type="arrow-text" mode="LINK" url={projectUrl}>view website</Button>
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({
      imgUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      detailsUrl: PropTypes.string.isRequired,
      projectUrl: PropTypes.string.isRequired
  })).isRequired
};

export default ProjectCard;