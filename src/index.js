import './index.scss';

import { renderSocialLinks } from './scripts/renderSocialLinks';
import { renderContactMe } from './scripts/renderContactMe';

import main_illustration from './common/assets/backgrounds/illustration_1.svg';
import texture from './common/assets/backgrounds/texture_1.svg';
import bg_1 from './common/assets/backgrounds/back_1.svg';

import { renderBackground } from './scripts/renderBackground';

// social links
const socialLinks = renderSocialLinks();

{ // first meet block
  const root = document.querySelector('.first-meet__content');
  const main = root.querySelector('.main');

  main.appendChild(socialLinks);
  root.appendChild(renderContactMe());
}

{ // background 1
  const root = document.querySelector('.grid-container-1');
  const backgroundElements = [
    { url: bg_1, classname: 'grid-item__background', alt: 'Background' },
    { url: main_illustration, classname: 'grid-item__illustration', alt: 'Illustration' },
    { url: texture, classname: 'grid-item__texture', alt: 'Texture' }
  ];

  createBackground(root, backgroundElements);
}

function createBackground(root, elements) {
  renderBackground(root, elements);
}