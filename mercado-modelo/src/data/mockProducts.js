const products = [
  { id: 1, nombre: "Manzana", precio: 1000, categoria: "frutas", imagen: "/img/manzana.jpg", detalle: "Manzanas rojas frescas, dulces y jugosas, ideales para postres y colaciones." },
  { id: 2, nombre: "Banana", precio: 950, categoria: "frutas", imagen: "/img/banana.jpg", detalle: "Bananas maduras, fuente natural de energía y potasio." },
  { id: 3, nombre: "Naranja", precio: 1130, categoria: "frutas", imagen: "/img/naranja.jpg", detalle: "Naranjas jugosas, perfectas para jugos o comer frescas." },
  { id: 4, nombre: "Mandarina", precio: 1050, categoria: "frutas", imagen: "/img/mandarina.jpg", detalle: "Mandarinas dulces y fáciles de pelar, ricas en vitamina C." },
  { id: 5, nombre: "Frutilla", precio: 2100, categoria: "frutas", imagen: "/img/frutilla.jpg", detalle: "Frutillas frescas, ideales para licuados, tortas y ensaladas de frutas." },
  { id: 6, nombre: "Ciruela", precio: 1600, categoria: "frutas", imagen: "/img/ciruela.jpg", detalle: "Ciruelas dulces y jugosas, aportan fibra y antioxidantes." },
  { id: 7, nombre: "Pera", precio: 1600, categoria: "frutas", imagen: "/img/pera.jpg", detalle: "Peras maduras y suaves, perfectas para consumir frescas o en compotas." },
  { id: 8, nombre: "Uva", precio: 2000, categoria: "frutas", imagen: "/img/uva.jpg", detalle: "Uvas dulces, frescas y sin semillas, ideales para picar." },
  { id: 9, nombre: "Ananá", precio: 2500, categoria: "frutas", imagen: "/img/anana.jpg", detalle: "Ananá tropical, refrescante y con alto contenido de vitamina C." },
  { id: 10, nombre: "Sandía", precio: 3000, categoria: "frutas", imagen: "/img/sandia.jpg", detalle: "Sandía fresca y jugosa, perfecta para los días calurosos." },
  { id: 11, nombre: "Durazno", precio: 2100, categoria: "frutas", imagen: "/img/durazno.jpg", detalle: "Duraznos amarillos, dulces y suaves, perfectos para postres." },
  { id: 12, nombre: "Tomate", precio: 1150, categoria: "verduras", imagen: "/img/tomate.jpg", detalle: "Tomates rojos y frescos, ideales para ensaladas y salsas." },
  { id: 13, nombre: "Zanahoria", precio: 990, categoria: "verduras", imagen: "/img/zanahoria.jpg", detalle: "Zanahorias frescas, crocantes y nutritivas." },
  { id: 14, nombre: "Papa", precio: 650, categoria: "verduras", imagen: "/img/papa.jpg", detalle: "Papas versátiles, perfectas para fritas, puré o guisos." },
  { id: 15, nombre: "Cebolla", precio: 700, categoria: "verduras", imagen: "/img/cebolla.jpg", detalle: "Cebollas frescas, ideales para condimentar todo tipo de comidas." },
  { id: 16, nombre: "Lechuga", precio: 780, categoria: "verduras", imagen: "/img/lechuga.jpg", detalle: "Lechuga fresca y crujiente, ideal para ensaladas." },
  { id: 17, nombre: "Espinaca", precio: 1300, categoria: "verduras", imagen: "/img/espinaca.jpg", detalle: "Espinaca fresca, rica en hierro y vitaminas." },
  { id: 18, nombre: "Acelga", precio: 790, categoria: "verduras", imagen: "/img/acelga.jpg", detalle: "Acelga fresca, ideal para tartas y guisos." },
  { id: 19, nombre: "Brócoli", precio: 1200, categoria: "verduras", imagen: "/img/brocoli.jpg", detalle: "Brócoli fresco, lleno de fibra y antioxidantes." },
  { id: 20, nombre: "Coliflor", precio: 1100, categoria: "verduras", imagen: "/img/coliflor.jpg", detalle: "Coliflor blanca y fresca, excelente para guarniciones." },
  { id: 21, nombre: "Arándanos", precio: 900, categoria: "frutas", imagen: "/img/arandanos.jpg", detalle: "Arándanos frescos, pequeños y antioxidantes." },
  { id: 22, nombre: "Pepino", precio: 850, categoria: "verduras", imagen: "/img/pepino.jpg", detalle: "Pepinos frescos y crocantes, perfectos para ensaladas." },
  { id: 23, nombre: "Apio", precio: 600, categoria: "verduras", imagen: "/img/apio.jpg", detalle: "Apio fresco, crujiente y bajo en calorías." },
  { id: 24, nombre: "Remolacha", precio: 920, categoria: "verduras", imagen: "/img/remolacha.jpg", detalle: "Remolachas dulces, ideales para ensaladas y jugos." },
  { id: 25, nombre: "Melón", precio: 1100, categoria: "frutas", imagen: "/img/melon.jpg", detalle: "Melón dulce y refrescante, perfecto para el verano." },
  { id: 26, nombre: "Pimiento", precio: 800, categoria: "verduras", imagen: "/img/pimiento.jpg", detalle: "Pimientos frescos y coloridos, ideales para saltear o asar." },
  { id: 27, nombre: "Palta", precio: 2300, categoria: "verduras", imagen: "/img/palta.jpg", detalle: "Paltas cremosas, perfectas para guacamole o ensaladas." },
  { id: 28, nombre: "Choclo", precio: 1400, categoria: "verduras", imagen: "/img/choclo.jpg", detalle: "Choclos amarillos y dulces, perfectos para hervir o asar." },
  { id: 29, nombre: "Berenjena", precio: 980, categoria: "verduras", imagen: "/img/berenjena.jpg", detalle: "Berenjenas frescas, ideales para milanesas o guisos." },
  { id: 30, nombre: "Pomelo", precio: 860, categoria: "frutas", imagen: "/img/pomelo.jpg", detalle: "Pomelos frescos y jugosos, ideales para jugos." },
  { id: 31, nombre: "Limón", precio: 650, categoria: "frutas", imagen: "/img/limon.jpg", detalle: "Limones frescos, perfectos para jugos, postres y aderezos." }
];

export default products;

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === Number(id)));
    }, 500);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.categoria === category));
    }, 500);
  });
};
