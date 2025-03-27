import { category, item, waAPI, button} from "./main.js";

waAPI.countryCode = 55; // COUNTRY CODE
waAPI.number = 4198979765; // PHONE NUMBER
item.currency = "R$"; // CURRENCY

export let cupons = [
    ["Luya15", 15],
    ["FECHA10", 10],
    ["BNI5", 5],
    ["VERAO", 5],
    ["ARRAIA22", 10],
    ["ASSURBS", 15]
]

button.add("Temperos e Especiarias", "tempero");
button.add("Ervanário", "ervanario");
button.add("Frutas/Oleaginosas", "frutas");
button.add("Farináceos", "farin");
button.add("Grãos/Sementes", "graos");
button.add("Aperitivos/Doces", "ape");
button.add("Confeitaria", "conf");

category.add("Temperos e Especiarias", "tempero");
item.add("Açafrão em pó", "4.50", "açafrao.jpg", "tempero");
item.add("Ana Maria", "6.00", "tempero ana maria.webp", "tempero");
item.add("Alecrim", "4.20", "alecrim_desidratado.webp", "tempero");
item.add("Alho em Pó", "5.50", "alhoempo.jpg", "tempero");
item.add("Alho Granulado ", "6.50", "alho-granulado.jpg", "tempero");
item.add("Alho Poró", "7.50", "alho_poro.jpg", "tempero");
item.add("Baiano" , "3.00", "temperobaiano.webp", "tempero");
item.add("Canela em Pó" , "5.50", "canelaempo.jpg", "tempero");
item.add("Cebola em Pó" , "5.50", "cebolaempo.jpg", "tempero");
item.add("Cebola Granulada" , "6.50", "cebolagranulada.jpg", "tempero");
item.add("Cebola Crispy" , "8.00", "cebolacrispy.jpg", "tempero");
item.add("Cebolinha" , "5.00", "cebolinha-verde.jpg", "tempero");
item.add("Chilli Mexicano" , "4.00", "chillimex.jpg", "tempero");
item.add("Chimichurri C/ Pimenta" , "6.50", "ChimichurriCPimenta.jpg", "tempero");
item.add("Chimichurri S/ Pimenta" , "6.50", "ChimichurriSPimenta.jpg", "tempero");
item.add("Chimichurri S/ Pimenta Defumado" , "6.50", "ChimichurriSPimenta.jpg", "tempero");
item.add("Chipotle" , "4.00", "Chipotle.jpg", "tempero");
item.add("Coentro em Pó" , "4.50", "CoentroemPo.jpg", "tempero");
item.add("Colorau" , "4.00", "Colorau.jpg", "tempero");
item.add("Cominho em Pó" , "4.50", "CominhoemPo.webp", "tempero");
item.add("Cravo Flor" , "16.00", "CravoFlor.jpg", "tempero");
item.add("Creme de Cebola" , "4.50", "CremedeCebola.png", "tempero");
item.add("Curry" , "4.50", "curry.webp", "tempero");
item.add("Dry Rub" , "7.50", "dryhub.webp", "tempero");
item.add("Edu Guedes" , "7.00", "tempero-edu-guedes.png", "tempero");
item.add("Ervas Finas" , "4.50", "ervasfinas.webp", "tempero");
item.add("Fit Frango" , "4.50","tempero_fit_frango.webp","tempero");
item.add("Fumaca em Pó" , "5,50","fumaca_em_po.jpg","tempero");
item.add("Gengibre Pó" , "5.50", "GengibrePó.jpg", "tempero");
item.add("Lemon Pepper" , "6.00", "LemonPepper.webp", "tempero");
item.add("Louro em Folhas" , "6.00", "LouroemFolhas.jpg", "tempero");
item.add("Manjericão" , "3.50", "manjericao.jpg", "tempero");
item.add("Manjerona" , "2.80", "manjerona.jpg", "tempero");
item.add("Molho Tártaro" , "7.00", "molho-tartaro.png", "tempero");
item.add("Mostarda em pó" , "5.00", "Mostardaempo.webp", "tempero");
item.add("Noz Moscada" , "8.00", "noz-moscada.webp", "tempero");
item.add("Orégano" , "5.00", "Oregano.webp", "tempero");
item.add("Páprica Doce" , "4.50", "PapricaDoce.webp", "tempero");
item.add("Páprica Defumada" , "4.50", "PapricaDefumada.webp", "tempero");
item.add("Páprica Picante" , "4.50", "PapricaPicante.jpg", "tempero");
item.add("Pega Marido" , "7.00", "", "tempero");
item.add("Pimenta Calabresa" , "6.50", "pimentaCalabresaFlocos.jpg", "tempero");
item.add("Pimenta Caiena" , "8.99", "pimentaCaiena.jpg", "tempero");
item.add("Sal Rosa Fino" , "1.50", "SalRosaFino.jpg", "tempero");
item.add("Sal Rosa Grosso" , "1.50", "SalRosaGrosso.webp", "tempero");
item.add("Salsa Desidratada " , "4.50", "SalsaDesidratada.jpg", "tempero");
item.add("Tomilho" , "4.80", "tomilho.webp", "tempero");
item.add("Vinagrete" , "6.00", "", "tempero");
item.add("Tempero para feijão" , "6.50", "", "tempero");


category.add("Ervanário", "ervanario");

item.add("Amora" , "3.90", "AmoraSeca.webp", "ervanario");
item.add("Alcachofra" , "4.00", "alcachofra.webp", "ervanario");
item.add("Anis Estrelado" , "18.50", "AnisEstrelado.jpg", "ervanario");
item.add("Boldo" , "11.00", "boldo.jpg", "ervanario");
item.add("Camomila" , "8.80", "Camomila.jpg", "ervanario");
item.add("Canela em Pau" , "19.50", "CanelaemPau.jpg", "ervanario");
item.add("Capim Limão" , "4.00", "capim_cidreira.webp", "ervanario");
item.add("Carqueja Amarga" , "3.00", "carqueja_amarga.jpg", "ervanario");
item.add("Cavalinha" , "5.00", "Cavalinha.webp", "ervanario");
item.add("Chá 7 Ervas " , "3.50", "Cha7Ervas.jpg", "ervanario");
item.add("Chá Verde" , "7.90", "chaverde.png", "ervanario");
item.add("Chá Baleeira" , "4.00", "baleeira.webp", "ervanario");
item.add("Dente de Leão" , "7.90", "dente-de-leao.webp", "ervanario");
item.add("Erva Cidreira" , "4.20", "ErvaCidreira.webp", "ervanario");
item.add("Erva Doce" , "6.50", "ErvaDoce.webp", "ervanario");
item.add("Erva Mate" , "3.90", "ErvaMate.jpg", "ervanario");
item.add("Espinheira Santa" , "5.30", "EspinheiraSanta.webp", "ervanario");
item.add("Eucalipto Folhas" , "2.00", "EucaliptoFolhas.webp", "ervanario");
item.add("Funcho" , "3.60", "", "ervanario");
item.add("Guaco" , "5.00", "Guaco.jpg", "ervanario");
item.add("Hibiscos" , "7.50", "Hibiscos.jpg", "ervanario");
item.add("Hortelã" , "3.50", "Hortela.webp", "ervanario");
item.add("Macela" , "10.00", "Macela.jpg", "ervanario");
item.add("Malva" , "3.50", "Malva.jpeg", "ervanario");
item.add("Mate tostado" , "4.00", "Matetostado.jpg", "ervanario");
item.add("Melissa" , "5.30", "planta-melissa.jpg", "ervanario");
item.add("Picão Preto" , "4.00", "picao-preto.webp", "ervanario");
item.add("Quebra Pedra" , "11.00", "Quebra Pedra.jpg", "ervanario");
item.add("Sene Folhas" , "1.80", "Sene Folhas.webp", "ervanario");
item.add("Salvia" , "7.00", "salvia.webp", "ervanario");



category.add("Frutas/ Oleaginosas", "frutas");
item.add("Ameixas sem caroço" , "7.20", "Ameixas sem caroço.webp", "frutas");
item.add("Amêndoa Natural" , "11.00", "Amêndoa Natural.jpg", "frutas");
item.add("Amêndoa Laminada" , "13.00", "amendoa_laminada.png", "frutas");
item.add("Amêndoa Defumada " , "13.00", "amendoa_defumada.png", "frutas");
item.add("Avelã Sem Casca" , "13.00", "avela.webp", "frutas");
item.add("Castanha de Caju Caramelizada" , "12.00", "Castanha de Caju Caramelizada.jpg", "frutas");
item.add("Castanha de Caju C/ Sal" , "13.00", "Castanha de Caju.webp", "frutas");
item.add("Castanha de Caju S/ Sal" , "13.00", "Castanha de Caju.webp", "frutas");
item.add("Castanha Mix" , "13.00", "Castanha Mix.webp", "frutas");
item.add("Castanha do Pará Inteira" , "14.00", "Castanha do Pará Inteira.png", "frutas");
item.add("Castanha do Pará Quebrada" , "10.30", "Castanha do Pará Quebrada.png", "frutas");
item.add("Cramberry" , "7.89", " ", "frutas");
item.add("Damasco Jumbo  " , "11.50", "Damasco-Jumbo.webp", "frutas");
item.add("Kiwi desidratado" , "8.20", "kiwidesidratado.webp", "frutas");
item.add("Mix de Frutas" , "14.00", "Mix de Frutas.png", "frutas");
item.add("Maçã Chips" , "13.00", "maca_desidratada_chips.webp", "frutas");
item.add("Nozes Maripoza " , "13    .00", "Nozes Maripoza.webp", "frutas");
item.add("Noz Pecan" , "17.00", "Noz Pecan.webp", "frutas");
item.add("Pistache Natural s/ casca" , "25.99", " ", "frutas");
item.add("Tâmara Jumbo" , "9.00", "Tâmara Jumbo.jpg", "frutas");
item.add("Uva Passa Branca" , "6.50", "Uva Passa Preta.webp", "frutas");
item.add("Uva Passa Preta" , "3.20", "Uva Passa Preta.webp", "frutas");

category.add("Farináceos", "farin");
item.add("Amido de Milho" , "1.50", "amido-de-milho.webp", "farin");
item.add("Farinha de Amêndoa" , "11.00", "Farinha de Amêndoa.webp", "farin");
item.add("Farinha de Amendoim" , "3.50", "farinha_de_amendoim.webp", "farin");
item.add("Farinha de Aveia " , "1.60", "farinha-de-aveia.png", "farin");
item.add("Farinha de Arroz " , "1.60", "farinha-de-aveia.png", "farin");
item.add("Farinha de Beterraba " , "9.20", "farinha-de-beterraba.jpg", "farin");
item.add("Farinha de Chia " , "3.30", "farinha_de_chia.webp", "farin");
item.add("Farinha de Centeio" , "1.50", "farinha-de-centeio.jpg", "farin");
item.add("Farinha de Coco Branca" , "3.50", "Farinha de Coco Branca.png", "farin");
item.add("Farinha de Grão de Bico" , "2.90", "farinha-de-gr_o-de-bico.jpg", "farin");
item.add("Farinha de Uva" , "6.60", "farinha-de-gr_o-de-bico.jpg", "farin");
item.add("Aveia em Flocos Fino" , "1.90", "Aveia em Flocos Fino.webp", "farin");
item.add("Aveia em Flocos Médio" , "1.90", "Aveia em Flocos Médio.jpg", "farin");
item.add("Farinha de Linhaça Dourada" , "3.00", "Farinha de Linhaça Dourada.webp", "farin");
item.add("Farinha Maca Peruana" , "8.00", "Farinha Maca Peruana.webp", "farin");
item.add("Farinha de Quinoa" , "4.90", "Farinha de Quinoa.jpg", "farin");
item.add("Farelo de Aveia ", "1.80", "Farelo de Aveia.webp", "farin");
item.add("Psyllium" , "13.00", "Psyllium.webp", "farin");
item.add("Guaraná" , "5.90", "guarana.webp", "farin");
item.add("Farinha da Felicidade" , "6.00", "Farinha Maca Peruana.webp", "farin");
item.add("Pre-Treino Natural" , "8.00", "pretreino.jpg", "farin");

category.add("Grãos/ Sementes", "graos");
item.add("Canjica Branca" , "2.20", "Canjica Branca.webp", "graos");
item.add("Chia Semente" , "6.00", "Chia Semente.jpg", "graos");
item.add("Gergelim Branco" , "4.70", "gergelim-branco.webp", "graos");
item.add("Gergelim Preto" , "6.00", "gergelim_preto.webp", "graos");
item.add("Granola Completa S/ Açúcar" , "4.70", "Granola Completa.jpg", "graos");
item.add("Grão de Bico" , "3.50", "Grão de Bico.png", "graos");
item.add("Lentilha canadense" , "3.70", "Lentilha canadense.png", "graos");
item.add("Lentilha vermelha" , "4.00", "Lentilha vermelha.png", "graos");
item.add("Linhaça Dourada" , "3.00", "linhaca-dourada.png", "graos");
item.add("Linhaça Marrom" , "2.80", "Linhaça Marrom.jpg", "graos");
item.add("Milho de Pipoca Importada" , "1.90", "Milho de Pipoca.webp", "graos");
item.add("Milho de Pipoca Gourmet" , "6.00", "Milho de Pipoca Gourmet.webp", "graos");
item.add("Milho de Pipoca Preto" , "7.00", "milho pipoca preto.jpg", "graos");
item.add("Pepita de Girassol" , "3.80", "Pepita de Girassol.jpg", "graos");
item.add("PTS" , "3.00", "PTS.webp", "graos");
item.add("Semente de Abóbora ", "9.00", "semente_de_abobora_sem_casca.webp", "graos");
item.add("Quinoa Branca" , "4.50", "quinoa-branca.png", "graos");
item.add("Quinoa Preta" , "5.50", "quinoa-preta1.png", "graos");
item.add("Quinoa Vermelha" , "5.50", "quinoa-vermelha.png", "graos");

category.add("Aperitivos/ Doces", "ape");
item.add("Aipim Chips Cebola/SalsA" , "13.50", "aipim_cebola_e_salsa.jpg", "ape");
item.add("Aipim Chips" , "13.50", "Aipim Chips.png", "ape");
item.add("Batata Doce Chips" , "13.00", "Aipim Chips.png", "ape");
item.add("Amendoim Cebola e Salsa" , "4.50", "Amendoim Cebola e Salsa.webp", "ape");
item.add("Amendoim com Chocolate" , "5.00", "Amendoim com Chocolate.webp", "ape");
item.add("Amendoim Caramelizado" , "5.00", "amendoim-caramelado.jpg", "ape");
item.add("Amendoim Japonês" , "4.50", "Amendoim Japonês.webp", "ape");
item.add("Amendoim Picante" , "4.50", "Amendoim-picante-kg.png", "ape");
item.add("Amendoim S/ Pele e S/ Sal " , "3.50", "amendoim_sem_pele.webp", "ape");
item.add("Amendoim S/ Pele e C/ Sal" , "3.50", "amendoim_sem_pele.webp", "ape");
item.add("Amendoim Tradicional" , "4.50", "amendoim.jpg", "ape");
item.add("Batata Chips Queijo " , "16.80", "batata-chips-mexicana.jpg", "ape");
item.add("Banana Chips com Canela" , "12.00", "Banana Chips.webp", "ape");
item.add("Banana Chips Salgada" , "12.00", "Banana Chips.webp", "ape");
item.add("Coquinho caramelizado com leite condensado" , "6.60", "coco_caramelizado.jpeg", "ape");
item.add("Drageado de Cappuccino", "23,50", "capuccino.jpeg", "ape");
item.add("Drageado Crocante", "15.50", "crocante.jpeg", "ape");
item.add("Drageado Caju Bland " , "23,50", "caju.jpeg", "ape");
item.add("Drageado de Nutella " , "23,50", "nutellas.jpeg", "ape");
item.add("Drageado de Uva Passa" , "15.50", "uvapassa.jpeg", "ape");
item.add("Drageado de Banana" , "15.50", "banana.jpeg", "ape");
item.add("Drageado de Limão Siciliano " , "23,50", "dragea_limao.webp", "ape");
item.add("Drageado de Cereja " , "23,50", "dragxereja.jpeg", "ape");
item.add("Drageado de Maracujá Gourmet" , "23,50", "dragmarac.jpeg", "ape");
item.add("Fini Bananinha" , "7.90", "Fini Bananinha.jpg", "ape");
item.add("Fini Beijos de Morango" , "7.90", "Beijos-de-morango-2.webp", "ape");
item.add("Fini Dentadura" , "7.90", "Fini Dentadura.jpeg", "ape");
item.add("Fini Marshmallow" , "7.90", "marshmallowFini.webp", "ape");
item.add("Fini Ursinho Brilho" , "7.90", "Fini Minhoca Brilho.jpg", "ape");
item.add("Fini Minhoca Cítrica" , "7.90", "Fini Minhoca Cítrica.jpg", "ape");
item.add("Bala de Goma" , "4.00", "balagoma.webp", "ape");
item.add("(EM FALTA) Laranja Cristal Tiras" , "8.90", "Laranja Cristal Tiras.webp", "ape");
item.add("Milho Espanhol Mostarda/Mel" , "8.50", "Milho Espanhol MostardaMel.jpg", "ape");
item.add("Mix de Vegetais Chips" , "13.00", "mixvegetais.webp", "ape");
item.add("Biscoito Vaidosa " , "5.80", "Vaidosa.jpg", "ape");
item.add("Biscoito Laka" , "5.80", "laka.jpg", "ape");
item.add("Biscoito Goiabinha" , "5.80", " ", "ape");
item.add("Biscoito Cokkie Castanha" , "7.00", " ", "ape");
item.add("Torrada Alho" , "6.50", "torradinha.jpeg", "ape");
item.add("Torrada Bacon" , "6.50", "torradinha.jpeg", "ape");
item.add("Torrada Queijo" , "6.50", "torradinha.jpeg", "ape");

category.add("Confeitaria", "conf");
item.add("Açúcar de coco" , "7.70", "Açúcar de coco.webp", "conf");
item.add("Açúcar Demerara" , "1.40", "Açúcar Demerara.jpg", "conf");
item.add("Açúcar Mascavo Escuro" , "1.80", "Açúcar Mascavo.jpg", "conf");
item.add("Bicarbonato de Sódio" , "1.70", "Bicarbonato de Sódio.webp", "conf");
item.add("Cacau em Pó " , "4.00", "Cacau em Pó.webp", "conf");
item.add("Chocolate Confete" , "6.50", "Chocolate Confete.jpg", "conf");
item.add("Chocolate em Pó 50%" , "10.00", "Chocolate em Pó.png", "conf");
item.add("Chocolate Granulado Preto" , "5.00", "Chocolate Granulado Preto.webp", "conf");
item.add("Coco Flocos Médio S/ Açúcar" , "7.00", "Coco Flocos.png", "conf");
item.add("Gotas de Chocolate Belga" , "8.00", "gotas chocolate.webp", "conf");
item.add("Laranja Premium Chá/Drinks" , "12.00", "Laranja Premium.jpg", "conf");
item.add("Leite de Coco em Pó" , "13.50", "Leite de Coco em Pó.webp", "conf");
item.add("Polvilho Azedo" , "1.80", "Polvilho-Azedo.jpg", "conf");
item.add("Polvilho Doce" , "1.80", "Polvilho Doce.jpg", "conf");
item.add("Sagu" , "3.50", "Sagu.jpg", "conf");
item.add("Sucrilhos Choco Boll" , "4.00", "Sucrilhos Choco Boll.jpg", "conf");
item.add("Sucrilhos Com Açúcar" , "3.80", "Sucrilhos Com Açúcar.jpg", "conf");
item.add("Sucrilhos Sem Açúcar" , "3.80", "sucrilhos-acucar.png", "conf");
item.add("Sucrilhos Colorido" , "4.00", "Fruit_Loops.jpg", "conf");
item.add("Tapioca 500G" , "7.00", "Tapioca.webp", "conf");
item.add("Tapioca Granulada 1KG " , "14.00", "Tapioca.webp", "conf");
item.add("Xilitol Cristal " , "7.80", "Xilitol Cristal.webp", "conf");
