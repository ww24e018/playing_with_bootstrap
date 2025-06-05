const template = document.createElement('template');
template.innerHTML = `
<div class="div-boxcomment">
    <p class="boxcomment-text"></p>
</div>
`

class BoxCommentComponent extends HTMLElement {
  constructor() {
    super();
	  this.attachShadow({mode: 'open'});
	  this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
      const prospectiveId = this.getAttribute('bc-id').trim()
      if (prospectiveId != "") {
        window.fetch(`http://localhost:8080/boxcomments/${prospectiveId}`)
                .then((response) => response.json())
                .then((data) => {
                    this.shadowRoot.querySelector("p.boxcomment-text").innerHTML = data['text'];
                    return data;
                }, (data) => { 
                  console.log("The promise .. failed."); console.log(data); 
                  return data; 
                });
      }
  }
}

window.customElements.define('boxcomment-component', BoxCommentComponent);