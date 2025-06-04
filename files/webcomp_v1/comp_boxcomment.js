
const template = document.createElement('template');
template.innerHTML = `
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT"
          crossorigin="anonymous">
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

        var mychaindebugger = function(input) {
                console.log(input);
                return(input);
            };
        
        window.fetch(`http://localhost:8080/boxcomments/${prospectiveId}`)
                .then((response) => response.json())
                .then((data) => mychaindebugger(data)) // die zeile und die funktion oben kann man weglassen, aber gut fuer debuging methinks.
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