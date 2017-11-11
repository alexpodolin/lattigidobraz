/*выпадающее меню первый вариант*/

/*var id_menu = new Array('sub_menu_1','sub_menu_2','sub_menu_3',
						'sub_menu_4','sub_menu_5','sub_menu_6',
						'sub_menu_7','sub_menu_8','sub_menu_9',
						'sub_menu_10','sub_menu_11');

// скроем все ul с id="sub_menu_
startList = function allclose() {
	for (i=0; i < id_menu.length; i++){
		document.getElementById(id_menu[i]).style.display = "none";
	}
}
function openMenu(id){
	for (i=0; i == id_menu.length; i++){
		if (id != id_menu[i]){
			document.getElementById(id_menu[i]).style.display = "none";
		}
	}
	if (document.getElementById(id).style.display == "block") {
		document.getElementById(id).style.display = "none";
	} else {
		document.getElementById(id).style.display = "block";
	}
}
window.onload=startList;*/

// http://jemand.ru/vertikalnoe-vypadayushhee-menyu-cssjs-onclick/

$(document).ready(function() {
	$.easing.def = "easeInOutQuad";
	$('li.button a').click(function(e) {
		var dropDown = $(this).parent().next();
		$('.dropdown').not(dropDown).slideUp('slow');
		dropDown.slideToggle('slow');
		e.preventDefault();
	}) 
});