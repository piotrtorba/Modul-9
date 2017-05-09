var men = ['Paul', 'Bob', 'Robert', 'Henry'];
var woman = ['Melisa', 'Amanda', 'Julia', 'Kate'];
var allNames = men.concat(woman);
var newName = 'Bart';
if (allNames.indexOf(newName) === -1) {
		allNames.push(newName);
} else { 
	console.log('error');
}
console.log(allNames);