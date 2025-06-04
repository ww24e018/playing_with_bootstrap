const template = document.createElement('template');
template.innerHTML = `
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-4Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT"
          crossorigin="anonymous">
<div class="card" style="width: 18rem;">
  <img src="" class="card-img-top" alt="alt-text-for-kartei-image">
  <div class="card-body">
    <h5 class="card-title"><slot name="kartei-name">NEED NAME</slot></h5>
    <p class="card-text"><slot name="kartei-beschreibung">NEED BESCHREIBUNG</slot></p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
`


class BoxComponent extends HTMLElement {
  constructor() {
    super();
	  this.attachShadow({mode: 'open'});
	  this.shadowRoot.appendChild(template.content.cloneNode(true));

  }

  connectedCallback() {
      this.shadowRoot.querySelector('img.card-img-top')
          .src = `https://picsum.photos/id/${Math.round(Math.random()*210,0)}/300/200`;
      const prospectiveId = this.getAttribute('boxid').trim()
      if (prospectiveId != "") {

        var mychaindebugger = function(input) {
                console.log(input);
                return(input);
            };
        
        window.fetch(`http://localhost:8080/boxes/${prospectiveId}`)
                .then((response) => response.json())
                .then((data) => mychaindebugger(data)) // die zeile und die funktion oben kann man weglassen, aber gut fuer debuging methinks.
                .then((data) => {
                    this.shadowRoot.querySelector("h5.card-title").innerHTML = data["title"];
                    this.shadowRoot.querySelector("p.card-text").innerHTML = data['description'];
                    return data;
                }, (data) => { 
                  console.log("The promise .. failed."); console.log(data); 
                  return data; 
                });


      }
      
  }

}

window.customElements.define('box-component', BoxComponent);