import { id, insert } from "../methods/dom.js";
import { list } from "./list.js";

export class item {
  constructor(name, price, img, $id) {
    this.name = name;
    this.price = price;
    this.img = img;
    this.id = $id;
    this.btn_subtract = "subtract" + $id;
    this.btn_sum = "sum" + $id;
    this.un = 0;
    this.unDisplay = "un" + $id;
    this.total = 0;
    this.totalDisplay = "total" + $id;
  }

  static update(obj) {
    id(obj.totalDisplay).innerText = item.currency + obj.total.toFixed(2).toString().replace(".", ",");
    id(obj.unDisplay).innerText = obj.un + " g";
  }

  static sum(obj) {
    obj.total = ((obj.un = obj.un + 100) * (parseFloat(obj.price) / 100));
    this.update(obj);
  }

  static subtract(obj) {
    if (obj.un > 0) {
      obj.total = ((obj.un = obj.un - 100) * (parseFloat(obj.price) / 100));
      this.update(obj);
    }
  }

  static id = 0;
  static currency = "R$";
  static data = [];
  static add(name, price, img, category) {

    let $new = new item(name, price, img, this.id, category);

    this.data.push($new);

    insert($new.element, id(category));

    id($new.btn_subtract).addEventListener("click", () => {
      item.subtract(this.data[$new.id]);
      list.def();
    });

    id($new.btn_sum).addEventListener("click", () => {
      item.sum(this.data[$new.id]);
      list.def();
    });

    function delay(callback, ms) {
      var timer = 0;
      return function() {
        var context = this, args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
          callback.apply(context, args);
        }, ms || 0);
      };
    }
    
    document.getElementById("search").addEventListener("keyup", delay(function(e){ //sistema de procura
      //if (e.key === 'Enter') {
        // code for enter
        var els = document.getElementsByClassName("group-item-name");
        var found = [];
        var r = document.getElementById("search").value;
        r = r.toLowerCase();
        if(r.length >= 2 || r.length == 0){
        Array.prototype.forEach.call(els, function(el) {
          if(el.firstChild.data.toLowerCase().includes(r)){
            found.push(el);
            el.parentNode.classList.remove("hidden");
            el.parentNode.classList.add("group-item");
          }else{
            el.parentNode.parentNode.classList.add("hidden");
            el.parentNode.classList.add("hidden");
            el.parentNode.classList.remove("group-item");
          }
        });

        Array.prototype.forEach.call(found, function(es) {
          es.parentNode.parentNode.classList.remove("hidden");
        });
      }
    }, 200))

    this.id++;

  }

  get element() { //retorna as caixas de produtos
    return `
      <div class="group-item">
        <img class="group-item-img" src="imgs/thumbnails/${this.img}">
        <h2 class="group-item-name">${this.name}</h2>
        <div class="group-item-price">R$${this.price.toString().replace(".", ",")}</div>
        <h3 class="group-item-total" id="${this.totalDisplay}">${item.currency}${this.total}</h3>
        <div class="ctrl-item-total">
          <button id="${this.btn_subtract}">-</button>
          <div id="${this.unDisplay}">${this.un}</div>
          <button id="${this.btn_sum}">+</button>
        </div>
      </div>
    `;
  }
}