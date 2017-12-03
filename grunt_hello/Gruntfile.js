
module.exports = function(grunt_name) {
	console.info('enter grunt function');
	function default_function(){
		console.info('enter default function');
	}
	grunt_name.registerTask('default', default_function);
	grunt_name.registerTask('world', world);

	function world() {
		console.info('from world function');
	}

	class Hello {
		sayHello(name) {
			console.info(new Date(), ' hello ', name );
		}
	}

	var hmanager = new Hello();
	hmanager.sayHello('object created using class syntax');

	grunt_name.registerTask('cat', hello_cat);
	function ooooops() {
		console.info('ooooops ');
	}
	function hello_cat() {
		console.info('from cat');
		ooooops();
		h = new Hello();
		h.sayHello('cat');
	}
	grunt_name.registerTask('dog', function() {
		console.info('from dog inner function');
	});

	grunt_name.registerTask('animal', ['dog', 'cat']);
	grunt_name.registerTask('animal2', ['cat', 'dog']);




}
