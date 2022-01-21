import { id, insert } from "../methods/dom.js";
import { item } from "./item.js";

export class list {
  constructor(name, un, total) {
    this.name = name;
    this.un = un;
    this.total = total;
  }

  static $content = "";
  static $total = 0;
  static $totalDisplay = id("list-total");
  static $address = id("address");
  static $nome = id("nome");
  static $list = id("list-items");

  static def() { //prepara mensagem para Whatsapp

    this.$list.innerHTML = "";

    this.$total = 0;
    this.$content = "*Pedidos*\n\n";
    for (let i = 0; i < item.data.length; i++) {
      let $item = item.data[i];
      if ($item.total > 0) {
        let $new = new list($item.name, $item.un, $item.total);
        this.$total += $item.total;
        insert($new.element, this.$list);
        this.$content += `*${$item.un}*g - ${$item.name} | *${item.currency}${$item.total.toFixed(2).toString().replace(".", ",")}*\n`;
      }
    }

    this.$content += `\nTotal: *${item.currency}${this.$total.toFixed(2).toString().replace(".", ",")}*\nEndereço: *${this.$address.value}*`;
    this.$content += `\nPedido em nome de: *${this.$nome.value}*`;
    this.$totalDisplay.innerText = `${item.currency}${this.$total.toFixed(2).toString().replace(".", ",")}`;

  }

  get element() { //retorna para o carrinho de compras
    return `<li class="list-item">${this.un}g - ${this.name} = ${item.currency}${this.total.toFixed(2).toString().replace(".", ",")}</li>`;
  }
}