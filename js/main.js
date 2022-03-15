import { button } from  "./components/button.js";
import { category } from "./components/category.js";
import { item } from "./components/item.js";
import { list } from "./components/list.js";
import { insert, id } from "./methods/dom.js";
import { block, none, visibility } from "./methods/style.js";
import { waAPI } from "./methods/whatsAppAPI.js";
import { cupons } from "./def.js";

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

id("promo").addEventListener("keyup", delay(function(e){ //area de cupons
  var r = document.getElementById("promo").value;
  var col=document.getElementById("promo");
  var text=document.getElementById("cupom");
  for(var i=0; i<cupons.length; i++){
    if(r == cupons[i][0]){
      list.$discount = 1.0 - (cupons[i][1]/100);
      list.$discountshow = true;
      text.innerHTML = "Cupom Aplicado!";
      col.style.border = "2px solid green";
      list.def();
      return;
    }else{
      list.$discountshow = false;
      list.$discount = 1.0;
      text.innerHTML = "Cupom Invalido!";
      col.style.border = "2px solid red";
    }
  }
  list.def();
}, 200))

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