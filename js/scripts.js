function drawTree(rows) {
	var star;
	for (var i=1 ; i<=rows ; i++) {
		star = '';
		for (var j=0 ; j<i ; j++) {
			star += '*';
		}
		console.log(star);
	}
}