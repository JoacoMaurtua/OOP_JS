/* In this task, you will design a Hearthstone-style trading card game, Yu-Gi-Oh! Or Magic: The Gathering. If you are not familiar with these types of games, do not worry, we will explain what you need to know about them. */

/* In this game there will be two different types of Cards: Units and Effects. Units will be played to gain control of the board and will fight with units played by an opponent. Effects require a Unit to be targeted in order to play. */

/* Effects will require a "target" when played. They increase or decrease the power or resistance of the "Unit" they are targeting. Similarly, "Units" can attack other "Units", when they do so they decrease the "resistance" of the target by the "power" of the attacker. */

/*If we want to make sure that the target of a Unit's attack or an Effect is being played on a Unit, we can use instanceof to verify that the target is a "Unit". If not, we may want to throw an error to alert the user or programmer that the action will not be able to continue.*/

class Card{
  constructor(name,cost){
    this.name = name;
    this.cost = cost;
  }
}

class Unit extends Card{
  constructor(name,cost,power,res){
    super(name,cost); //inherits this from card
    this.power = power;
    this.res = res;
    this.effects = [];
  }
  attack(target){ //must attack another unit
    //reduce target res by power
    if(target instanceof Unit){
      target.res -= this.power;
      if(target.res <= 0){
        console.log(`the enemy ${target.name} was defeated by ${this.name}`);
      }
    
    }else{
      throw new Error("Target must be a unit!");
    }
  };

}

class Effect extends Card{

  constructor(name,cost,text,stat,magnitude){
    super(name,cost);
    this.text = text; //mostrara el texto de la carta
    this.stat = stat; 
    this.magnitude = magnitude; //modificara el valor de res del objetivo
  }

  played(target){
    if(target instanceof Unit){ //sea asegura que el objetivo sea otra unidad
      target.effects.push(this.name)

      target[this.stat] += this.magnitude;
  
    }
    else{
      throw new Error("Target must be a unit!")
    }

  };
  
};

const playerOne = new Unit('Ninja Cinturon Rojo',3,3,4);
const playerTwo = new Unit('Ninja Cinturon Negro',4,5,4);

const algoritmo = new Effect('Hard Algorithm',2,'increase the target s resistance resilience by 3','res',3);

const rechazo = new Effect('Rejection of promise not handled',1,'decrease the target s resilience by 2','res',-2);

const pp = new Effect('Pair programming',3,'increase the target s power by 2','power',2);

algoritmo.played(playerOne);

rechazo.played(playerOne);

pp.played(playerOne);

playerOne.attack(playerTwo);

console.table({playerOne,playerTwo});