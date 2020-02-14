import React from 'react';
import {ReactComponent as Fb} from "../../../assets/icons-social/fb.svg";
import {ReactComponent as LinkedIn} from "../../../assets/icons-social/linkedin.svg";
import {ReactComponent as Github} from "../../../assets/icons-social/github.svg";
import {ReactComponent as Skype} from "../../../assets/icons-social/skype.svg";
import socialLinks from '../../../data-server/social-links.json';
import CustomComponent from "../../common/custom-component";

import styles from './social-links.module.scss';

const SocialLinks = () => {
  const iconComponents = {
    fb: Fb,
    linkedin: LinkedIn,
    github: Github,
    skype: Skype
  };
  
  const links = socialLinks.map(({ id, url }) => (
    <a
      key={id}
      href={url}
      className={styles.link}
      target='_blank'
      rel='noopener noreferrer'
    >
      <CustomComponent tag={iconComponents[id]} className={styles.icon} />
    </a>
  ));
  
  return <div className={styles['social-links']}>{links}</div>;
};

export default SocialLinks;
