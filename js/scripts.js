var triangleArea1 = getTriangleArea(7, 5);
var triangleArea2 = getTriangleArea(11, 15);
var triangleArea3 = getTriangleArea(13, 9);

function getTriangleArea(a, h) {
	if (a > 0 && h > 0) {
		return a*h/2;
	} else {
		console.log('Nieprawidlowe dane');
	}
}
console.log(getTriangleArea(10, 6));
console.log(triangleArea1, triangleArea2, triangleArea3);