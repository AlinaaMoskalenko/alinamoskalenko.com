export default class Background {
  constructor(rootElement, elements) {
    this.rootElement = rootElement;
    this.elements = elements;

    this.render();
  }

  render() {
    for (let item of this.elements) {
      const { img, classname, alt } = item;

      const element = document.createElement('img');
      element.setAttribute('src', img);
      element.setAttribute('alt', alt);
      element.classList.add(classname);

      this.rootElement.appendChild(element);
    }
  }
}