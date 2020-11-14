// Функция, обеспечивающая появление/исчезновение кнопки "Кначалу страницы"
//
//

window.onscroll = function() {
	var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	if (scrolled > 200) {
		// Если экран прокручен более, чем на 200px вниз от верхней точки,
		// выводим блок с изображением кнопки
		document.getElementById('arrow').style.display = 'block';
	} else {
		// Убираем кнопку при меньших значениях прокрутки
		document.getElementById('arrow').style.display = 'none';
	}
}



// Функция, осуществляющая позиционирование всплывающих подсказок
// исходя из положения комментируемого объекта на видимой части страницы
//
//

document.onmousemove = moveTip;
function moveTip(e) {
	floatTipStyle = document.getElementById('floating-tip').style;
	w = 250;

	if (document.all) {
		x = event.clientX + document.body.scrollLeft;
		y = event.clientY + document.body.scrollTop;
	} else {
		x = e.pageX; // Координата X курсора
		y = e.pageY; // Координата Y курсора
	}

	if ((x + w + 10) < document.body.clientWidth) {
		floatTipStyle.left = x + 'px';
	} else {
		floatTipStyle.left = x - w + 'px';
	}

	floatTipStyle.top = y + 20 + 'px';
}


// Функция, обеспечивающая появление/исчезновение всплывающих подсказок
//
//

function toolTip(msg) {
	floatTipStyle = document.getElementById('floating-tip').style;
	if (msg) {
		// если есть текст подсказки, делаем блок видимым
		document.getElementById('floating-tip').innerHTML = msg;
		floatTipStyle.display = 'block';
		event.currentTarget.removeAttribute('title'); // удаляем стандартную подсказку
	} else {
		floatTipStyle.display = 'none'; // скрываем блок при отсутствии текста подсказки
	}
}