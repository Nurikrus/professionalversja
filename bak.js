'use strict';

let prodElems = document.querySelectorAll('.itemhover');
let quality = document.querySelector('.menubak>.bak');
const prodbak = {
    nameProduct: [],
    qualityAll: [],
    price: [],
}

/**
 * Функция счетчик для корзины.
 */

function addbak() {
    quality.lastElementChild.textContent = Number(quality.lastElementChild.textContent) + 1;
}

/**
 * Эта функция должна вызываться при клике по кнопкам.
 * @param {MouseEvent} event
 */
function clickHandler(event) {
    chouseClass(event.target.parentElement.parentElement.parentElement);
    addbak();
    quality.lastElementChild.style.display = 'block';
}

/**
 * Функция определения класса продукта.
 * @param element 
 */
function chouseClass(element) {
    if (element.className == 'item') {
        setProduct(element.children[0].children[0].children[1])
    } else {
        setProduct(element.children[0].children[1])
    };
}

/**
 * Функция создания эломентов в корзине.
 * @param {consructor} element 
 * @param {string} prodbak.nameProduct имя продукта 
 * @param {Number} prodbak.price цена продукта 
 * @param {Number} prodbak.qualityAll количество продукта
 */
function setProduct(element) {
    let index = 0;
    if (!prodbak.nameProduct.includes(element.children[0].textContent)) {
        prodbak.nameProduct.push(element.children[0].textContent);
        prodbak.price.push(element.lastElementChild.children[0].textContent);
        prodbak.qualityAll.push(1);
    } else {
        while (prodbak.nameProduct[index] != element.children[0].textContent) {
            index++;
        };
        prodbak.qualityAll[index]++;
    }
    addProduct(prodbak);
}

/**
 * Функция добавления эломентов в корзину.
 * @param {consructor} element 
 */
function addProduct(element) {
    let nameProd = document.querySelector('.inlineSet>.name');
    let qualityProd = document.querySelector('.inlineSet>.quality');
    let priceProd = document.querySelector('.inlineSet>.price');
    let priceSumProd = document.querySelector('.inlineSet>.priceSum');
    let totalSumProd = document.querySelector('.buyProd>.totalSum');
    nameProd.lastElementChild.innerHTML = '';
    qualityProd.lastElementChild.innerHTML = '';
    priceProd.lastElementChild.innerHTML = '';
    priceSumProd.lastElementChild.innerHTML = '';
    totalSumProd.lastElementChild.innerHTML = '';
    for (let i = 0; i < element.nameProduct.length; i++) {
        nameProd.lastElementChild.innerHTML += element.nameProduct[i] + '<br>';
        qualityProd.lastElementChild.innerHTML += element.qualityAll[i] + '<br>';
        priceProd.lastElementChild.innerHTML += element.price[i] + '<br>';
        priceSumProd.lastElementChild.innerHTML += element.qualityAll[i] * element.price[i] + '<br>';
        totalSumProd.lastElementChild.textContent = Number(totalSumProd.lastElementChild.textContent) + element.qualityAll[i] * element.price[i];
    }
    //priceSumProd.lastChild.textContent = element.price * element.qualityAll;
    //totalSumProd.lastChild.textContent = priceSumProd++;
}

prodElems.forEach(element => {
    element.lastElementChild.addEventListener('click', clickHandler);
});

