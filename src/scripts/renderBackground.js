import { renderImage } from './renderImage';

export const renderBackground = (rootElement, elements) => {
  for (let item of elements) {
    renderImage(rootElement, item);
  }
};