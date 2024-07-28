// const menu = document.querySelector('.header__menu');
// const div = document.createElement('div');
// div.classList.add('header__burger');
// const headerPreview = document.querySelector('.header.preview');
// // headerPreview.style.backgroundColor = '#0f0f0f';

// const label = document.createElement('label');
// label.classList.add('nav__check')

// for (let i = 0; i < 3; i+=1) {
//     const span = document.createElement('span');
//     label.appendChild(span);
// }
// const li = document.createElement('li');
// li.classList.add('menu__item');
// li.innerHTML = `<a class="menu__link" href="/Home/index"><img src="img/logo.svg" alt=""/></a>`;

// div.appendChild(label);
// menu.appendChild(div);


// const menuBodyImg = document.querySelector('.menu__body:nth-of-type(1)');
// const menuBodyNav = document.querySelector('.menu__body:nth-of-type(2)');
// const menuBodyUl = document.querySelector('.menu__body:nth-of-type(2) ul');
// menuBodyUl.prepend(li)

// div.addEventListener('click', () => {
//   menuBodyImg.classList.toggle('checked__burger');
//   menuBodyNav.classList.toggle('checked__burger');
//   header__preview.toggle('header__togled')
// })

// const upperSpan = document.querySelector('.nav__check span:first-child')
// const middleSpan = document.querySelector('.nav__check span:nth-child(2)')
// const buttonSpan = document.querySelector('.nav__check span:last-child')

// label.addEventListener('click', () => {
//   if (menuBodyImg.classList.contains('checked__burger')) {
//     headerPreview.style.backgroundColor = '#00000074';
//     upperSpan.classList.remove('upper__stick');
//     middleSpan.classList.remove('middle__stick');
//     buttonSpan.classList.remove('button__stick');
//   } else {
//     upperSpan.classList.add('upper__stick');
//     middleSpan.classList.add('middle__stick');
//     buttonSpan.classList.add('button__stick');
//     headerPreview.style.backgroundColor = '#0f0f0f';
//   }
// })

// создание поведения меню на телефон
const menu = document.querySelector('.header__menu');
  
const div = document.createElement('div');
div.classList.add('header__burger');

const label = document.createElement('label');
label.classList.add('nav__check')

for (let i = 0; i < 3; i+=1) {
    const span = document.createElement('span');
    label.appendChild(span);
}

div.appendChild(label);
menu.appendChild(div);

const headerPreview = document.querySelector('.header.preview');

const menuBody = document.querySelector('.menu__body');

// создание треугольник 
const divTriangle = document.createElement('div');
 divTriangle.classList.add('triangle');
const headerMenu = document.querySelector('.header__menu')
headerMenu.appendChild(divTriangle)

// второй треугольник 
 const divTriangle2 = document.createElement('div');
 divTriangle2.classList.add('triangle2');
 
 headerMenu.appendChild(divTriangle2);

 // поведение появления подменю
const menuList = document.querySelector('.menu__body ul');
menuList.classList.add('firstUl')
const bigOpt = document.querySelector('.firstUl > li:nth-of-type(3)');
const bigOptSub = document.querySelector('.menu__item:nth-of-type(3)> .menu__sub-list');


const firstUlFourLi = document.querySelector('.firstUl > li:nth-of-type(4)');
const firstUlFifthLi = document.querySelector('.firstUl > li:nth-of-type(5)');
const firstUlSixthLi = document.querySelector('.firstUl > li:nth-of-type(6)');
const aboutSub = document.querySelector('.firstUl > li:nth-of-type(5) .menu__sub-list')

divTriangle.addEventListener('click', () => {
   bigOptSub.classList.toggle('visible__sub')
   firstUlFourLi.classList.toggle('fourth__li__big');
   firstUlFifthLi.classList.toggle('fifth__li__big');
   firstUlSixthLi.classList.toggle('sixth__li__big');
   divTriangle2.classList.toggle('triangle2__transformed-big')
   if (aboutSub.classList.contains('visible__sub')) {
     firstUlSixthLi.classList.toggle('triangle2__clicked-both')
    } else {
       console.log('it ok')
    }
})


divTriangle2.addEventListener('click', () => {
  aboutSub.classList.toggle('visible__sub')
  firstUlSixthLi.classList.toggle('sixth__li__about')
  if (bigOptSub.classList.contains('visible__sub')) {
   firstUlSixthLi.classList.toggle('triangle2__clicked-both')
  } else {
     console.log('it ok')
  }
}) // конец создания треугольника

div.addEventListener('click', () => {
  menuBody.classList.toggle('checked__burger')
  divTriangle.classList.toggle('triangle__hidden')
  divTriangle2.classList.toggle('triangle__hidden')
})

const upperSpan = document.querySelector('.nav__check span:first-child')
const middleSpan = document.querySelector('.nav__check span:nth-child(2)')
const buttonSpan = document.querySelector('.nav__check span:last-child')

label.addEventListener('click', () => {
  if (menuBody.classList.contains('checked__burger')) {
    upperSpan.classList.remove('upper__stick');
    middleSpan.classList.remove('middle__stick');
    buttonSpan.classList.remove('button__stick');
    headerPreview.style.backgroundColor = '#00000074';
  } else {
    upperSpan.classList.add('upper__stick');
    middleSpan.classList.add('middle__stick');
    buttonSpan.classList.add('button__stick');
    headerPreview.style.backgroundColor = '#0f0f0f';
  }
})

