const fs = require('fs');

class Contenedor {
   constructor(nombre){
      this.nombre = nombre;
      this.contador = 0;
      this.producto = [];
   }

   guardar(obj){
      contador = 1
      if (contador <= 1) {

         fs.writeFile(`./${this.nombre}`, JSON.stringify(obj), 'utf-8', (err) => {
            if(err) {
               console.log('error al cargar archivo');
            }else {
               console.log('archivo creado');
            }
         });

      } else {
         fs.appendFile(`./${this.nombre}`, JSON.stringify(obj), 'utf-8', (err) => {
            if(err) {
               console.log('error al cargar archivo');
            }else {
               console.log('archivo creado');
            }
         });
      }

      
      
   }

   obtenerPorId(id) {
      fs.readFile(`./${this.nombre}`, 'utf-8', (err, data) => {
         if(err) {
            console.log('error al leer');
         }else {
            let producto = JSON.parse(date).find(e => {
               return e.id == id
            })

            console.log(producto);
         }
      })
   }

   
};

let archivos = new Contenedor('text.json');

archivos.save ({
   titulo: 'El Ojo del Mundo - Robert Jordan',
   precio: 1000,
   imagen: 'asa',
   id: archivos.contador,
})