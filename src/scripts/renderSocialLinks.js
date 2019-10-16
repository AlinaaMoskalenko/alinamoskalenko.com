import fb from '../common/assets/ic-social/fb.svg';
import linkedin from '../common/assets/ic-social/linkedin.svg';
import github from '../common/assets/ic-social/github.svg';
import skype from '../common/assets/ic-social/skype.svg';

import { renderImage } from './renderImage';

const FB = 'https://www.facebook.com/alinaa.moskalenko';
const LINKEDIN = 'https://www.linkedin.com/in/alinamoskalenko/';
const GITHUB = 'https://github.com/AlinaaMoskalenko';
const SKYPE = 'skype:alinka.kravchenko7?chat';

export const renderSocialLinks = () => {
  const rootElement = document.createElement('div');
  const fbLink = document.createElement('a');
  const linkedinLink = document.createElement('a');
  const githubLink = document.createElement('a');
  const skypeLink = document.createElement('a');

  fbLink.setAttribute('href', FB);
  linkedinLink.setAttribute('href', LINKEDIN);
  githubLink.setAttribute('href', GITHUB);
  skypeLink.setAttribute('href', SKYPE);

  fbLink.setAttribute('target', '_blank');
  linkedinLink.setAttribute('target', '_blank');
  githubLink.setAttribute('target', '_blank');

  rootElement.classList.add('social-link');

  const icons = [
    { url: fb, alt: 'fb' },
    { url: linkedin, alt: 'linkedIn' },
    { url: github, alt: 'github' }, 
    { url: skype, alt: 'skype' }
  ];

  const links = [fbLink, linkedinLink, githubLink, skypeLink];

  for (let i = 0; i < links.length; i++) {
    renderImage(links[i], icons[i]);
  }

  rootElement.appendChild(fbLink);
  rootElement.appendChild(linkedinLink);
  rootElement.appendChild(githubLink);
  rootElement.appendChild(skypeLink);

  return rootElement;
};