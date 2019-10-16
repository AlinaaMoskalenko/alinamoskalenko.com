export const renderContactMe = (href = '#contact-me') => {
  const icon = 
  ` <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <path class="ic-contact" fill-rule="nonzero" d="M19.995 1.004l-1.603 17a1.128 1.128 0 0 1-.517.852 1.073 1.073 0 0 1-.974.09l-5.314-2.107L8.609 19.7a1.038 1.038 0 0 1-.726.299 1.06 1.06 0 0 1-.765-.32 1.114 1.114 0 0 1-.315-.783V16.86l7.172-9.182a.487.487 0 0 0 .056-.505.465.465 0 0 0-.42-.271.45.45 0 0 0-.297.12l-8.279 7.214-4.362-1.732a1.087 1.087 0 0 1-.67-.943c-.027-.421.186-.82.547-1.024L18.67.12a.872.872 0 0 1 .927.03c.279.187.433.519.398.859v-.004z"/>
    </svg> `;
    
  const rootElement = document.createElement('a');
  const text = document.createElement('p');
  const iconElement = document.createElement('div');

  rootElement.setAttribute('href', href);
  rootElement.classList.add('contact-me-link');

  text.textContent = 'Contact me';

  iconElement.classList.add('contact-me-link__icon');
  iconElement.innerHTML = icon;

  rootElement.appendChild(text);
  rootElement.appendChild(iconElement);

  return rootElement;
};