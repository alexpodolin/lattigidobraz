// скроем - покажем меню
function openMenu(el) {	

	// получим список всех элементов с классом course__dropdawn-menu-open
	// и удалим этот классу всех кроме текущего
	var elem = document.getElementsByClassName('course__dropdawn-menu-open');
		for ( i = 0; i < elem.length; i++) {
			elem[i].classList.toggle('course__dropdawn-menu-open');					
		}

	// извлекаю значение аттрибута data-menu-id
	var attr = el.getAttribute("sub-menu-id");


	// по этому значению ищу индентификатор
	var idCurrent = document.getElementById(attr);

	// добавим класс где идентификатор
	idCurrent.classList.add('course__dropdawn-menu-open');	


	// замен background-color при нажатии, 
	// с помощью добавления класса
	var selector, elems, makeActive;
	selector = '.course__menu_item';
	elems = document.querySelectorAll(selector);

	makeActive = function () {
	    for (var i = 0; i < elems.length; i++) {
	        elems[i].classList.remove('сourse__menu_item-open');
	    }
    
    	this.classList.add('сourse__menu_item-open');
	};

	for (var i = 0; i < elems.length; i++) {
	    elems[i].addEventListener('click', makeActive);
	}

}

function makeActive(el) {
	el.classList.add('сourse__menu_item-open');
}




// Показать форму записи на курсы
function showEnrollForm() {
	var enroll = document.getElementsByClassName('enroll');
	for (i = 0; i < enroll.length; i++ ) {
		enroll[i].style.display = 'flex';
	}
	//document.body.style.backgroundColor = '#535353';
}

// Скрыть форму записи на курсы
function closeEnrollForm() {
	setTimeout(closeForm(), 700);
}

function closeForm() {
	var enroll = document.getElementsByClassName('enroll');
	for (i = 0; i < enroll.length; i++ ) {
		//enroll[i].classList.add('enroll__hide');
		enroll[i].style.display = 'none';
		//document.body.style.backgroundColor = 'transparent';		
	}

}





