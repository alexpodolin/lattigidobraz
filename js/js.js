// =================================================================================
// скроем - покажем раскрывающееся меню 
// дождемся загрузки страницы
window.onload = function subMenuOpen() {
// выберем все элементы с селектором класса .course__menu
for (var a = document.querySelectorAll('.course__menu'), el, i = 0; i < a.length; i++)	
	// для каждого элемента с таким селектором регистрируем
	// обработчик события c типом click,  в качестве объекта,
	// реализующего интерфейс EventListener просто функция JavaScript.
    a[i].addEventListener('click', function (d) {
	d++;	

		// вернем в качестве функции и ее аргумента номер  элемента на который кликаем
	    return function (b) {
	        var c = document.getElementById('sub_menu_' + d);
	        el && (el.style.display = 'none');
	        c != el ? (c.style.display = 'flex', el = c) : ( el = null);
	        b = b || window.event;
	        b.preventDefault ? b.preventDefault() : b.returnValue = !1
	    }
	}

	(i));  

	// заменим background-color при нажатии, 
	// с помощью добавления класса
	var selector, elems, makeActive;
	selector = '.course__menu';
	elems = document.querySelectorAll(selector);

	makeActive = function () {
		    for (var i = 0; i < elems.length; i++) {
		        elems[i].classList.remove('сourse__menu-open');
		    }	    	

	    	this.classList.add('сourse__menu-open');   
	    	
		};

		for (var i = 0; i < elems.length; i++) {
		    elems[i].addEventListener('click', makeActive);
		}
}	
// =================================================================================


// =================================================================================
// Показать форму записи на курсы
function showEnrollForm() {
	/*var enroll = document.getElementsByClassName('enroll');
	for (i = 0; i < enroll.length; i++ ) {
		// уберем класс анимации исчезновения окна
		enroll[i].classList.remove('enroll__hide');
		enroll[i].style.display = 'flex';
	}*/
	// добавим класс с фоном для body и wrapper
	/*document.getElementsByTagName('body')[0].classList.add('body-form-bg-fadeIn');	
	var wrap = document.getElementsByClassName('wrapper');
	for (var i = 0; i < wrap.length; i++) {
		wrap[i].classList.add('wrapper-form-bg-fadeIn')
	}*/

	document.getElementById('enroll__wrapper').style.display = 'flex';

}

// Скрыть форму записи на курсы
function closeEnrollForm() {
	// добавим класс анимации с исчезновением окна
	/*var enroll = document.getElementsByClassName('enroll');
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
	}*/
	document.getElementById('enroll__wrapper').style.display = 'none';
}
// =================================================================================



