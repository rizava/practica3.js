class Persona {
  constructor(id, name, lastName, tipoRh, gender, age, cellphone, cellSos,day) {
    //atributos
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.tipoRh = tipoRh;
    this.gender = gender;
    this.age = age;
    this.cellphone = cellphone;
    this.cellSos = cellSos;
    this.day = day;
  }

  //metodos
  ingreso() {
    console.log(`
              Hola mi nombre es ${this.name} ${this.lastName}, mi tipo de sangre es${this.tipoRh}
              mi documento es ${this.id},soy de genero ${this.gender} , mi edad es ${this.age}, mi numero de celular es ${this.cellphone} y mi numero de emergencia es ${cellSos}
          `);
  }
}

let cliente = new Persona();

cliente.name = "Maria";
cliente.lastName = "la del Barrio";
cliente.id = "1019156123";
cliente.tipoRh = "O +";
cliente.gender = "Femenino";
cliente.cellphone = 87654321;
cliente.cellSos = 12345678;

let cliente2 = new Persona();

cliente.name = "Juan";
cliente.lastName = "Perez";
cliente.id = "11111111";
cliente.tipoRh = "O +";
cliente.gender = "Femenino";
cliente.cellphone = 87654321;
cliente.cellSos = 12345678;

let cliente2 = new Persona();

cliente.name = "Paula";
cliente.lastName = "lopez";
cliente.id = "22222222";
cliente.tipoRh = "O +";
cliente.gender = "Femenino";
cliente.cellphone = 0987654321;
cliente.cellSos = 1234567890;

cliente1.presentarse();
cliente2.presentarse();
cliente3.presentarse();
