// Task1 Map
// Take an array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon]. 
// Transform it into ['apple', 'oranges' , 'empty string', 'mango', 'empty string', 'lemon] using array maps


const array = ['apple', 'oranges', '', 'mango', '', 'lemon'];

const updatedarray = array.map((array) => {
  if (array === '') {
    return ('empty string');
  } else {
    return (array);
  }
});

console.log(updatedarray);