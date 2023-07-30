// 1

let input = document.querySelector('#input');
let btn = document.querySelector('#btn');

btn.addEventListener('click', function title() {
	btn.innerHTML = input.value;
});

// 2

let img = document.querySelector('#oneImg');

img.setAttribute(
	'src',
	'https://cybersport.mo.cloudinary.net/img/1200/630/fit/wp-content/uploads/2022/12/navi_ukraina.jpg'
);

// 3

let twoImg = document.querySelector('#twoImg');
let link = document.querySelector('#link');

link.setAttribute('href', 'hltv.org');

twoImg.setAttribute('alt', 'Ну синій фон і по центрі зображення текст ОК');

// 4
let element = document.querySelectorAll('li');

element[0].innerHTML = '<h2>klas</h2>';
