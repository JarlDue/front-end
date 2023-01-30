// create a div element to attach the shadow DOM to
const host = document.createElement('div');

// attach the shadow DOM to the div
const shadowRoot = host.attachShadow({mode: 'open'});

// create a heading element and add it to the shadow DOM
const heading = document.createElement('h1');
heading.textContent = 'Hello, Shadow DOM!';
shadowRoot.appendChild(heading);

// add the host element to the document
document.body.appendChild(host);
