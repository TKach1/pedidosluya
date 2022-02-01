import { insert, id } from "../methods/dom.js"

export class button {
  constructor(title, id) {
    this.title = title;
    this.id = id;
    this.btnid = id + "-btn"
  }

static add(title, $id) {
    let $new = new button(title, $id);
    insert($new.element, id("btn-container"));

    id($new.btnid).addEventListener("click", () => {
      /*
      var container = document.getElementById($new.id);

      if(container.style.display === "none"){
        container.style.display = "inline-block";
      } else {
        container.style.display = "none";
      }
      */

      var container = document.getElementById($new.id);

      var els = document.getElementsByClassName("group-category");

      Array.prototype.forEach.call(els, function(el) {
        if(el.id===$new.id){
          el.classList.toggle("hidden");
        }else{
          el.classList.add("hidden");
        }
      });

    });
    
}

get element() {
    return `
      <button class="button-release" id="${this.btnid}">${this.title}</button>
    `;
  }
}