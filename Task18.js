

function validSolution(board){
  //TODO
  let str = '';
  //проверяем по горизонтали
  for (let i = 0; i < board.length; i++) {
   if (board[i].slice().sort().join('') !== '123456789') return false;
  }

  //проверяем по вертикали
  for (let j = 0; j < board.length; j++) {
    for (let k = 0; k < board.length; k++) {
      str += board[k][j];
    }
   if (str.split('').sort().join('') !== '123456789') return false;    
    str = '';
  }
  str = '';
  //проверяем блоки 3x3
  let shiftX = 0;
  let shiftZ = 0;

  while (shiftX <= 6 && shiftZ < 6){
    console.log("shiftX " + shiftX + " shiftZ " + shiftZ);
  for (let z = shiftZ; z < shiftZ + 3; z++) {
    for (let x = shiftX; x < shiftX + 3; x++) {
      console.log(board[z][x]);
      str += board[z][x];
      
    }
  }
  if (str.split('').sort().join('') !== '123456789') return false; 
  str = '';
  
//  if(shiftX === 6 && shiftZ === 3){
//
//  } else {
//    (shiftX === 6) ? (shiftZ += 3, shiftX = 0) : (shiftX += 3);
//  }

  }

  return true;
}

console.clear();
console.log(validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
])); // => true);