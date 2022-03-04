import { button } from  "./components/button.js";
import { category } from "./components/category.js";
import { item } from "./components/item.js";
import { list } from "./components/list.js";
import { insert, id } from "./methods/dom.js";
import { block, none, visibility } from "./methods/style.js";
import { waAPI } from "./methods/whatsAppAPI.js";

export { waAPI }
export { button }
export { category }
export { item }


id("list-btn").addEventListener("click", () => {
  list.def();
  if (list.$address.value != "") {
    waAPI.go(list.$content);
  }
})

id("list-close").addEventListener("click", () => {
  visibility(id("list"));
});

none(id("list"));
id("btn-finish").addEventListener("click", () => {
  visibility(id("list"));
});

id("buttonback").addEventListener("click", () => {
  console.log("btn-back");
  $('html, body').animate({ scrollTop: 0 }, 'fast');
});

$(window).on("navigate", function (event, data) {
  var direction = data.state.direction;
  if (direction == 'back') {
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  }
});