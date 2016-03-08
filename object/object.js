var xiaoming = {
	name:'小明',
	birth:1990,
	'middle-school':'No.1 Middle School',
	height:1.70,
	weight:65,
	score:null
};
alert(xiaoming);
alert(xiaoming.name);
alert(xiaoming.birth);
alert(xiaoming['middle-school']);
alert(xiaoming['name']);
alert(xiaoming.age);
xiaoming.age = 17;
alert(xiaoming.age);
delete xiaoming.age;
alert(xiaoming.age);
alert('name' in xiaoming);
alert('age' in xiaoming);
alert('toString' in xiaoming);
alert(xiaoming.hasOwnProperty('name'));
alert(xiaoming.hasOwnProperty('toString'));
