// eslint-disable-next-line import/no-unresolved
import htm from 'https://unpkg.com/htm?module';
import { h, render } from '@dropins/tools/preact.js';
import { readBlockConfig } from '../../scripts/aem.js';

const html = htm.bind(h);

const BannerCard = ({
  image, title, description, link,
}) => html`<div class="banner-card-component">
    <div class="banner-card-image">
      <img src=${image} alt=${title} />
    </div>
    <div>
      <h1 class="banner-card-title">${title}</h1>
      <p class="banner-card-description">${description}</p>
      <a href=${link} class="banner-card-link">Learn More</a>
    </div>
  </div>`;

export default async function decorate(block) {
  const {
    image, title, description, link,
  } = readBlockConfig(block);
  const app = html`<${BannerCard}
    image=${image}
    description=${description}
    title=${title}
    link=${link}
  />`;
  block.innerHTML = '';
  render(app, block);
}
