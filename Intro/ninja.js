
class Ninja{
  constructor(name){
    this.name = name;
    this.health = 50;
    this.velocity = 3;
    this.force = 3;
  };

  sayNmae(){
    console.log(`Here ${this.name} is reported, a ninja at the service of his host`);
  };

  showStats(){
   console.log(
     `Name: ${this.name}
     Force: ${this.force}
     Velocity: ${this.velocity}
     Health: ${this.health}` 
   )
  };

  showStatsAsObject(){
    return {
       name:this.name,
       force:this.force,
       velocity:this.velocity,
       health:this.health
     } 
  };

  drinkSake(){
    this.health += 10;
  };
}

class Sensei extends Ninja{
  constructor(name){
    super();            //se debe llamar al super constructor
    this.name = name;
    this.health = 200;
    this.velocity = 10;
    this.force = 10;
    this.wisdom = 10;
  };
  speakWisdom(){
    super.drinkSake();
    console.log(this.health);
    console.log("Every 1000 mile journey starts with the first step");
  }
}

const ninja1 = new Ninja("Mikasa");
ninja1.sayNmae();
console.log(ninja1.showStatsAsObject());
ninja1.drinkSake();
console.log(ninja1.health); 


const superSensei = new Sensei("Commander Erwin");
superSensei.sayNmae();
superSensei.showStats();
superSensei.speakWisdom();



