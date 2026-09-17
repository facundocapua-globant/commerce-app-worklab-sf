// Reference-only rewrite of banner-card.js using the AGENTS.md-compliant imperative
// DOM pattern (createElement, no template literals, no Preact). Not wired up as the
// block's decorator — used for the declarative-vs-imperative comparison doc.
import { readBlockConfig } from '../../scripts/aem.js';

export default async function decorate(block) {
  const {
    image, title, description, link,
  } = readBlockConfig(block);

  const card = document.createElement('div');
  card.className = 'banner-card-component';

  const imageWrapper = document.createElement('div');
  imageWrapper.className = 'banner-card-image';
  const img = document.createElement('img');
  img.src = image;
  img.alt = title;
  imageWrapper.append(img);

  const content = document.createElement('div');

  const heading = document.createElement('h1');
  heading.className = 'banner-card-title';
  heading.textContent = title;

  const paragraph = document.createElement('p');
  paragraph.className = 'banner-card-description';
  paragraph.textContent = description;

  const cta = document.createElement('a');
  cta.href = link;
  cta.className = 'banner-card-link';
  cta.textContent = 'Learn More';

  content.append(heading, paragraph, cta);
  card.append(imageWrapper, content);

  block.innerHTML = '';
  block.append(card);
}
