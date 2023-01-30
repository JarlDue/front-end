const host = document.getElementById('host');

// attach the shadow DOM to the host element
const shadowRoot = host.attachShadow({mode: 'open'});
console.log("running script");
// fetch the template from the other html file
var link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'fitness.css'
fetch(templateUrl)
  .then(response => response.text())
  .then(data => {
    // Append the template content to the shadow root
    shadowRoot.innerHTML = data;
    shadowRoot.appendChild(link);
  })
  .catch(error => {
    shadowRoot.innerHTML = "We are sorry, but an error occurred.";
    console.error('Error fetching template:', error);
  });