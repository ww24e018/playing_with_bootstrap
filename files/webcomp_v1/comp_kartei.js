const template = document.createElement('template');
template.innerHTML = `
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT"
          crossorigin="anonymous">
<div class="card" style="width: 18rem;">
  <img src="" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"><slot name="kartei-name">NEED NAME</slot></h5>
    <p class="card-text"><slot name="kartei-beschreibung">NEED BESCHREIBUNG</slot></p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`


class KarteiComponent extends HTMLElement {
  constructor() {
    super();
	//this.attachShadow({mode: 'open'});
	//this.shadowRoot.appendChild(template.content.cloneNode(true));

    const template = document.getElementById('template-for-kartei-component');
    const templateContent = template.content;

    this.attachShadow({mode:'open'}).appendChild(
        templateContent.cloneNode(true)
    );

  }
  // Element functionality written in here
}

window.customElements.define('kartei-component', KarteiComponent);