const template = document.createElement('template');
template.innerHTML = `
<div class="user-card">
helloworld<slot name="ihrewerbung">Dumm<b>y</b>-Werbung</slot>
</div>
`


class KarteiComponent extends HTMLElement {
  constructor() {
    super();
	
	this.attachShadow({mode: 'open'});
	this.shadowRoot.appendChild(template.content.cloneNode(true));
	this.shadowRoot.querySelector('')

  }
  // Element functionality written in here
}

window.customElements.define("kartei-component", KarteiComponent);