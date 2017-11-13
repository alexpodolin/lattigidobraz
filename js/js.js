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
	if (document.getElementById(id).style.display == "flex") {
		document.getElementById(id).style.display = "none";
	} else {
		document.getElementById(id).style.display = "flex";
	}
}
window.onload=startList;*/

// http://jemand.ru/vertikalnoe-vypadayushhee-menyu-cssjs-onclick/

// $(document).ready(function() {
// 	$.easing.def = "easeInOutQuad";
// 	$('li.button a').click(function(e) {
// 		var dropDown = $(this).parent().next();
// 		$('.dropdown').not(dropDown).slideUp('slow');
// 		dropDown.slideToggle('slow');
// 		e.preventDefault();
// 	}) 
// });

// startList = function allClose() {

// 	var hideElements = document.getElementsByClassName('course__dropdawn-menu');
// 	for ( i = 0; i < hideElements.length; i++) {
// 		hideElements[i].style.height = "0";
// 	}
// }


function openMenu(el) {
	

	// извлекаю значение аттрибута data-menu-id
	var attr = el.getAttribute("sub-menu-id");

	// по этому значению ищу индентификатор
	var idCurrent = document.getElementById(attr);

	// добавим класс
	idCurrent.classList.add('course__dropdawn-menu-open');

	// var getClass = el.getElementsByClassName('course__dropdawn-menu');
	// for ( i = 0; i < getClass.length; i++) {
	// 	getClass[i].classList.remove('course__dropdawn-menu-open');
	// 	// getClass[i].className += ' course__dropdawn-menu-open'; 
	// }

}

// window.onload = startList;