function rollTheDice2(userName: string, maxOfTries: number): string[]{
    const results: string[] = [];
    let MAX_DICE_NUMBER: number;

      MAX_DICE_NUMBER = 6;

      for (let index = 0; index < maxOfTries; index++) {
        const result: number = Math.ceil(Math.random() * MAX_DICE_NUMBER);
    
        if (result === MAX_DICE_NUMBER) {
          results.push(`${userName} is a WINNER`);
        } else {
          results.push(`${userName} is a LOSER`);
        }
      }
    
      return results;
}

const results = rollTheDice2('TypeScript', 2);

console.log(results);
    