console.log("działa!");
var name ='Kasia';
console.log(name);
var names =['Ziutka', 'Kasia', 'Basia', 'Krysia'];
console.log(names[1]);

var num1 = 1;
var num2 = 2;

if (num1 > num2) {
	console.log('The first is bigger')
}
if (num2 >num1) {
	console.log('The second is bigger')
}
else {
	console.log('They are equal')
}

// porównania a==b => zwróci 1 równe '1' Przeciwieństwo !=
// porównanie a===b => porównuje typy => 1 jest różne od '1' Przeciwieństwo !==
// 

for (var i =0; i<names.length; i++) {
	console.log(names[i]);
}

// querySelector pobiera zawsze tylko jeden pierwszy selektor