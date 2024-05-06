const menu = document.querySelector('.header__menu');
const div = document.createElement('div');
div.classList.add('header__burger');
const headerPreview = document.querySelector('.header.preview');
// headerPreview.style.backgroundColor = '#0f0f0f';

const label = document.createElement('label');
label.classList.add('nav__check')

for (let i = 0; i < 3; i+=1) {
    const span = document.createElement('span');
    label.appendChild(span);
}
const li = document.createElement('li');
li.classList.add('menu__item');
li.innerHTML = `<a class="menu__link" href="/Home/index"><img src="img/logo.svg" alt=""/></a>`;

div.appendChild(label);
menu.appendChild(div);


const menuBodyImg = document.querySelector('.menu__body:nth-of-type(1)');
const menuBodyNav = document.querySelector('.menu__body:nth-of-type(2)');
const menuBodyUl = document.querySelector('.menu__body:nth-of-type(2) ul');
menuBodyUl.prepend(li)

div.addEventListener('click', () => {
  menuBodyImg.classList.toggle('checked__burger');
  menuBodyNav.classList.toggle('checked__burger');
  header__preview.toggle('header__togled')
})

const upperSpan = document.querySelector('.nav__check span:first-child')
const middleSpan = document.querySelector('.nav__check span:nth-child(2)')
const buttonSpan = document.querySelector('.nav__check span:last-child')

label.addEventListener('click', () => {
  if (menuBodyImg.classList.contains('checked__burger')) {
    headerPreview.style.backgroundColor = '#00000074';
    upperSpan.classList.remove('upper__stick');
    middleSpan.classList.remove('middle__stick');
    buttonSpan.classList.remove('button__stick');
  } else {
    upperSpan.classList.add('upper__stick');
    middleSpan.classList.add('middle__stick');
    buttonSpan.classList.add('button__stick');
    headerPreview.style.backgroundColor = '#0f0f0f';
  }
})