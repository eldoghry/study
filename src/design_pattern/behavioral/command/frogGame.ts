(() => {
  /* assume we have game which character is frog
    frog can eat, jump and run [commands]*/

  class Frog {
    name: string;
    age: number;
    gender: "male" | "female";
    private foodEaten: string[] = [];
    private wordSpoken: string[] = [];

    constructor(name: string, age: number, gender: "male" | "female") {
      this.age = age;
      this.name = name;
      this.gender = gender;
    }

    eat(food: string) {
      this.foodEaten.push(food);
    }

    talk(words: string[]){console.log(words) this.wordSpoken.push(...words)};

    getFoodConsumed(){return this.foodEaten}

    getWordSpoken(){return this.wordSpoken}
  }

  function game(){
    const obiFrog = new Frog('obi', 3, "male")
    const khalodiFrog = new Frog('khalodi', 10, "female")
  }

  game()
})();
