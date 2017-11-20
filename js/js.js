// =================================================================================
// скроем - покажем раскрывающееся меню 
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
	// вычислим высоту появляющегося блока с отступами, границами и т.д
	var dropdownMenuHeight = idCurrent.scrollHeight;	
	// установим высоту в px
	idCurrent.style.height = dropdownMenuHeight + 'px';

	// замен background-color при нажатии, 
	// с помощью добавления класса
	var selector, elems, makeActive;
	selector = '.course__menu_item';
	elems = document.querySelectorAll(selector);

	makeActive = function () {
	    for (var i = 0; i < elems.length; i++) {
	        elems[i].classList.remove('сourse__menu_item-open');
	        // выставим высоту при скрытии окна
	        // idCurrent.style.height = '0';
	        idCurrent.style.height = '';

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
// =================================================================================


// =================================================================================
// Показать форму записи на курсы
function showEnrollForm() {
	var enroll = document.getElementsByClassName('enroll');
	for (i = 0; i < enroll.length; i++ ) {
		// уберем класс анимации исчезновения окна
		enroll[i].classList.remove('enroll__hide');
		enroll[i].style.display = 'flex';
	}
	// добавим класс с фоном для body и wrapper
	document.getElementsByTagName('body')[0].classList.add('body-form-bg-fadeIn');	
	var wrap = document.getElementsByClassName('wrapper');
	for (var i = 0; i < wrap.length; i++) {
		wrap[i].classList.add('wrapper-form-bg-fadeIn')
	}
}

// Скрыть форму записи на курсы
function closeEnrollForm() {
	// добавим класс анимации с исчезновением окна
	var enroll = document.getElementsByClassName('enroll');
	for (i = 0; i < enroll.length; i++ ) {
		enroll[i].classList.remove('enroll__hide');		
		enroll[i].style.display = 'none';
	}
	//таймаут перед тем как скрыть форму
	setTimeout(function() {
		var enroll = document.getElementsByClassName('enroll');
		for (i = 0; i < enroll.length; i++ ) {
			enroll[i].style.display = 'none';
		}
	}, 700);

	// уберем класс с фоном для body и wrapper
	document.getElementsByTagName('body')[0].classList.remove('body-form-bg-fadeIn');
	var wrap = document.getElementsByClassName('wrapper');
	for (var i = 0; i < wrap.length; i++) {
		wrap[i].classList.remove('wrapper-form-bg-fadeIn')
	}
}
// =================================================================================



