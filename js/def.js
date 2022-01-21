import { category, item, waAPI, button } from "./main.js";

waAPI.countryCode = 55; // COUNTRY CODE
waAPI.number = 4196613842; // PHONE NUMBER
item.currency = "R$"; // CURRENCY

button.add("Temperos e Especiarias", "tempero");
button.add("Lanches2", "lanches2");
button.add("Lanches3", "lanches3");

category.add("Temperos e Especiarias", "tempero");
item.add("Açafrão em pó", "2.20", "açafrao.jpg", "tempero");
item.add("Alecrim", "4.20", "alecrim.jpg", "tempero");
item.add("Alho em Pó", "2.20", "alhoempo.jpg", "tempero");
item.add("Alho Granulado", "4.80", "xSalada.jpeg", "tempero");
item.add("Alho Poró", "5.20", "xSalada.jpeg", "tempero");

category.add("Lanches2", "lanches2");
item.add("X-Salada", "10,00", "xSalada.jpeg", "lanches2");
item.add("X-Tudo", "18,00", "xSalada.jpeg", "lanches2");
item.add("Especial da Casa", "20,00", "xSalada.jpeg", "lanches2");

category.add("Lanches3", "lanches3");
item.add("X-Salada", "10,00", "xSalada.jpeg", "lanches3");
item.add("X-Tudo", "18,00", "xSalada.jpeg", "lanches3");
item.add("Especial da Casa", "20,00", "xSalada.jpeg", "lanches3");
