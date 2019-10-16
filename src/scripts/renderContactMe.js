import primary from '../common/assets/ic-contact/ic-contact.svg';
import white from '../common/assets/ic-contact/ic-contact-white.svg';

import { renderImage } from './renderImage';

export const renderContactMe = (mode = 'primary', href = '#contact-me') => {
  const icon = mode === 'white' ? white : primary;
  const contactIcon = { url: icon, alt: 'letter' };

  const rootElement = document.createElement('a');
  const text = document.createElement('p');

  rootElement.setAttribute('href', href);
  rootElement.classList.add('contact-me-link');

  text.textContent = 'Contact me';

  rootElement.appendChild(text);
  renderImage(rootElement, contactIcon);

  return rootElement;
};