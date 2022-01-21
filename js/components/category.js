import { insert, id } from "../methods/dom.js"

export class category {
  constructor(title, id) {
    this.title = title;
    this.id = id;
    this.btnid = id + "-btn"
  }

  static add(title, $id) {
    let $new = new category(title, $id);
    insert($new.element, id("categories"));
    
    
  }

  

  get element() {
    return `
      <div class="group-category hidden" id="${this.id}">
        <h2 class="group-title">${this.title}</h2>
      </div>
    `;
  }
}