const utils = {animal: []}
// ⚠️ No modificar nada arriba de esta línea ⚠️

/// =========================================================================== ///
/// =========================== 🦒 HENRY-ZOO 🦒 ============================ ///
/// =========================================================================== ///

/*
  1️⃣ ***** EJERCICIO 1 ***** - addAnimal 1️⃣:
  🟢 Agregar un animal a utils.animal.
  🟢 Si el animal ya existe en la base de datos, arrojar un Error('Este animal ya existe en la base de datos') 
  🟢 Retornar todos los animales si la operación fue exitosa.

  📢 PUNTOS A TENER EN CUENTA 📢
  1) Puedes acceder a los animales mediante *utils.animal*.
  2) Recuerda que el mensaje de error deben ser exactamente como lo pide el enunciado.
  3) Recuerda verificar si el animal que intentas agregar, ya existe en utils.animal.
  4) Investiga acerca de throw Error() para devolver errores.
  */

const addAnimal = (animal) => {
  const animalFount = utils.animal.find(a => a.id == animal.id)

  if(animalFount){
    throw new Error("Este animal ya existe en la base de datos");
  }else{
    utils.animal.push(animal);
    return utils.animal
  }
};

// ⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = addAnimal;
