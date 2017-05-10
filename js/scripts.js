var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone slonie';
var newAnimal = animal.toUpperCase();
var newText = text.replace('Papugi', (newAnimal));
var end = newText.slice(0 , 45);
console.log(end);