class Usuario {
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName() {
        return '${this.nombre} ${this.apellido}';
}
    addMascota(nombre){
        this.mascotas.push(nombre);
    }
    countMascotas(){
        return this.mascotas.length;
    }
    addBook (nombre, autor){
        this.libros.push({nombre,autor});
    }
    getBooksName(){
        console.log(this.libros.map((libros) => this.libros.nombre));
    }

}
const UsuarioUnico = new Usuario ("Jeremias", "Quiroga"), [{titulo:"El Señor de los Anillos", autor:"Tolkien"}], ["Galaga"]);
UsuarioUnico.addBook ("Martin Fierro", "Jose Hernandez")
UsuarioUnico.addBook ("Relato de un naufrago", "Gabriel Garcia Marquez")
UsuarioUnico.addMascota ("Pandora")
UsuarioUnico.getFullName()
UsuarioUnico.countMascotas()   
UsuarioUnico.getBooksName()

console.log (UsuarioUnico)


