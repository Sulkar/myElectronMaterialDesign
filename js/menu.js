/*

	menu.js file for navigation

*/
$( document ).ready(function() {
	// variables
	const link1 = document.querySelector('#import1');
	const link2 = document.querySelector('#import2');

	// display start content
	var template = link1.import.querySelector('.section-template');
	var clone = document.importNode(template.content, true);
	document.querySelector('#myContent').appendChild(clone);

	// nav links clicked
	$('#nav1').click(function(){
		$('#myContent').html('');
		var template = link1.import.querySelector('.section-template');
		var clone = document.importNode(template.content, true);
		document.querySelector('#myContent').appendChild(clone);
		// close drawer
		drawer.open = false;
	});
	$('#nav2').click(function(){
		$('#myContent').html('');
		var template = link2.import.querySelector('.section-template');
		var clone = document.importNode(template.content, true);
		document.querySelector('#myContent').appendChild(clone);
		// close drawer
		drawer.open = false;
	});

	// change --selected modifier to drawer menu items
	var activatedClass = 'mdc-list-item--selected';
	document.querySelector('.mdc-drawer__drawer').addEventListener('click', function(event) {
		var el = event.target;
		while (el && !el.classList.contains('mdc-list-item')) {
			el = el.parentElement;
		}
		if (el) {
			var activatedItem = document.querySelector('.' + activatedClass);
			if (activatedItem) {
				activatedItem.classList.remove(activatedClass);
			}
			event.target.classList.add(activatedClass);
		}
	});

});
