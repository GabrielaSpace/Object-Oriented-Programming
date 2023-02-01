// Ejercicio POO 1
// Crear la clase Persona, con propiedades nombre, edad y género, y el método obtDetalles(), 
//que muestra por pantalla las propiedades de la persona.

class Persona{
    constructor(nombre, edad, genero){
        this.nombre= nombre;
        this.edad= edad;
        this.genero= genero;
    }
    obtDetalles(){
        console.log(`Una persona con nombre ${this.nombre}, tiene ${this.edad} años y su género es: ${this.genero} `);
    }
    }


    let persona= new Persona("Gabriela",40,"Femenino");
    persona.obtDetalles();


// Crear la clase Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo 
//y el método registrar(), que muestre por pantalla el resultado.
class Estudiante extends Persona{
    constructor(nombre, edad, genero, curso, grupo){
        super(nombre, edad, genero) //llama al constructor padre
        this.curso= curso;
        this.grupo= grupo;
    }

    registrar(){
        console.log(` Estudiante: ${this.nombre}, tiene ${this.edad} años, su género es: ${this.genero} y estudia  ${this.curso} modalidad ${this.grupo}  `);
    }

}

let estudiante= new Estudiante("Ana",44,"Femenino","FullStack","Remoto")
estudiante.registrar();

// Crear la clase Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar(), que 
//muestre por pantalla el resultado.
class Profesor extends Persona{
    constructor(nombre, edad, genero, asignatura, nivel){
        super(nombre, edad, genero) //llama al constructor padre
        this.asignatura= asignatura;
        this.nivel= nivel;
    }
    asignar(){
        console.log(` Profesor: ${this.nombre}, tiene ${this.edad} años, su género es: ${this.genero} dicta la asignatura  ${this.asignatura}, nivel ${this.nivel}  `);
    }
}

let profesor= new Profesor("Alejandro",44,"Masculino","Programación","Avanzado")
profesor.asignar();

// Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía de clases.

let persona1= new Persona("Pablo",30,"Masculino");
let persona2= new Persona("Rubén",30,"Masculino");
let estudiante1= new Estudiante("Jorge",30,"Masculino","FullStack","Remoto")
let estudiante2= new Estudiante("Fran",30,"Prefiere no decirlo","FullStack","Presencial")
let profesor1= new Profesor("Guillermo",31,"Prefiere no decirlo","Diseño","Avanzado")
let profesor2= new Profesor("Miguel",31,"Masculino","Bases de datos","Avanzado")
persona1.obtDetalles()
persona2.obtDetalles()
estudiante1.registrar()
estudiante2.registrar()
profesor1.asignar()
profesor2.asignar()
