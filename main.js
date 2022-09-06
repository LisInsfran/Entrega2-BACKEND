const Contenedor = require("./Contenedor");

const contenedor = new Contenedor("productos.txt");

const main = async () => {
  const id1 = await contenedor.save({ title: "Remera", price: 500 });
  const id2 = await contenedor.save({ title: "Buzo", price: 600 });
  const id3 = await contenedor.save({ title: "Pantalon", price: 400 });

  console.log(id1, id2, id3); 

  const object2 = await contenedor.getById(1);
  console.log(object2); 

  await contenedor.deleteById(1);

  const allCurrentObjects = await contenedor.getAll();
  console.log(allCurrentObjects);
};

main();
