// const fastfood = [
//     {id: 1, title: 'Big', price: 50, kal: 40},
//     {id: 2, title: 'Small', price: 100, kal: 20},
// ];
// const ingridient = [
//     {id: 3, title: 'сыр', price: 10, kal: 20},
//     {id: 4, title: 'салат', price: 20, kal: 5}, 
//     {id: 5, title: 'картофел', price: 15, kal: 10},
//     {id: 6, title: 'приправ', price: 15, kal: 0},
//     {id: 7, title: 'майонез', price: 20, kal: 5},
// ];

const CounterPlagin = function({rootSelector, initialValue = 0, step = 1 } = {}) {
    this._value = initialValue;
    this._step = step;
    
    this._refs = this._getRefs(rootSelector);

    this._bindEvents();
    this._updateValueUi();
};

CounterPlagin.prototype._getRefs = function(rootSelector) {
    const refs = {};
    refs.container = document.querySelector(rootSelector);

    refs.incrementBtn = refs.container.querySelector('[data-increment]');
    refs.decrementBtn = refs.container.querySelector('[data-decrement]');
    refs.value = refs.container.querySelector('[data-value]');

    return refs;
};

CounterPlagin.prototype._bindEvents = function() {
    this._refs.incrementBtn.addEventListener('click', () => {
        this.increment();
        this._updateValueUi();
    });

    this._refs.decrementBtn.addEventListener('click', () => {
        this.decrement();
        this._updateValueUi();
    });
};

CounterPlagin.prototype._updateValueUi = function() {
    this._refs.value.textContent = this._value;
};

CounterPlagin.prototype.increment = function () {
    this._value += this._step;
};

CounterPlagin.prototype.decrement = function () {
    this._value -= this._step;
};

const counter1 = new CounterPlagin({rootSelector: "#counter-1", step: 1});
const counter2 = new CounterPlagin({rootSelector: "#counter-2", step: 1});

