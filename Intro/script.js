class Vehicle{
  constructor(manufacturer,model,color){
    this.miles = 0;
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
  }
  drive(){
    this.miles += 10;
    console.log(`You drove your ${ this.constructor.name } and it now has ${this.miles} miles on it.`);
  }

  parentFunction(){
    return "This is coming from the parent!";
  }
}

class M5 extends Vehicle{ //definimos una clase que hereda de otra
  constructor(color){
    super("BMW","M5",color);//funcion que nos permite llamar a la clase padre
    this.hp = 616;
  }

  printSpecSummary(){
    console.log(
        `BMW M5 whith a 4.4L V8 Twin Turbo engine packin ${this.hp}HP and 553 lb-ft TQ`
    );
  }

  childFunction(){
    const message = super.parentFunction();//usando super tambien podemos llamar al metodo padre
    console.log(message);
  }
}

//instanciando un objeto clase vehiculo(clase padre)
const car = new Vehicle("BMW","M5","blue");
console.log(car);
car.drive();
console.log(car.miles); 

//instanciando un objeto clase M5(calse hija)
const m5 = new M5("black")
console.log(m5);
m5.drive();
console.log(m5.miles);
m5.printSpecSummary(); 
m5.childFunction();
