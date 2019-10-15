import './index.scss';

import Background from './scripts/background';

import main_illustration from './common/assets/backgrounds/illustration_1.svg';
import texture from './common/assets/backgrounds/texture_1.svg';
import bg_1 from './common/assets/backgrounds/back_1.svg';

{ // background 1
  const root = document.querySelector('.content-block-1');
  const backgroundElements = [
    { img: bg_1, classname: 'content-block-1__background', alt: 'Background' },
    { img: main_illustration, classname: 'content-block-1__illustration', alt: 'Illustration' },
    { img: texture, classname: 'content-block-1__texture', alt: 'Texture' }
  ];

  createBackground(root, backgroundElements);
}

function createBackground(root, elements) {
  new Background(root, elements);
}