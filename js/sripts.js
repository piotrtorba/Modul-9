drawTree(7) {
	for (var i=0 ; i<7 ; i++) {
		var star = ();
		/*Hej Michal, wydaje mi sie ,ze do tego momentu kod jest OK.
		Cos chyba namieszalem w parametrach drugiej petli 'for'. Zerknij jak mozesz
		bo nie kumam bledu. Pozdr.*/
		for (var j=i++ ; j==7 ; i++) {
			var star = star += '*';
		}
	}
	console.log(star);
}