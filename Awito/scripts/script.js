'use strict';
//Объяылнеие 
const modalAdd = document.querySelector('.modal__add'),
    addAd = document.querySelector('.add__ad'),
    modalBtnSubmit = document.querySelector('.modal__btn-submit'),
    modalSubmit = document.querySelector('.modal__submit'),
    modalItem = document.querySelector('.modal__item'),
    catalog = document.querySelector('.catalog');

//Неактивная кнопка отправить и откртыие окна (Подача объявления)     
addAd.addEventListener('click', () => {
    modalAdd.classList.remove('hide');
    modalBtnSubmit.disabled = true;
});

//Закрытие окна (Подача обЪявления)
modalAdd.addEventListener('click', (event) => {
    const target = event.target;

    if(target.classList.contains('modal__close') || (target === modalAdd)){
        modalAdd.classList.add('hide');
        modalSubmit.reset();
    }
});

//Открытие окна карточки товара
catalog.addEventListener('click', (event) => {
    if(event.target.closest('.catalog')){
        modalItem.classList.remove('hide');
    }
});

//Закрытие окна карточки товара 
modalItem.addEventListener('click', (event) => {
    if(event.target.classList.contains('modal__close') || (event.target === modalItem)){
        modalItem.classList.add('hide');
    }
});

//Работа клавиши ESC
document.addEventListener('keydown', (event) => {

    if(event.keyCode === 27){
        modalAdd.classList.add('hide');
        modalItem.classList.add('hide');
        modalSubmit.reset();
    }
});