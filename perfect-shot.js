const finalPosition = (moves) => {
  let finalPos = [0, 0];
  for (let move of moves) {
    if (move === 'north') finalPos[1] += 1;
    else if (move === 'south') finalPos[1] -= 1;
    else if (move === 'east') finalPos[0] += 1;
    else if (move === 'west') finalPos[0] -= 1;
  }
  //console.log(finalPos);
  return finalPos;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']

finalPosition(moves);