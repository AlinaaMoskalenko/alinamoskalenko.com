export const renderImage = (rootElement, image) => {
  const { url, alt, classname } = image;
  const img = document.createElement('img');

  img.setAttribute('src', url);
  img.setAttribute('alt', alt);
  img.classList.add(classname);
  rootElement.appendChild(img);
};