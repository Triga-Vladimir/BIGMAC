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
    
const kal = document.querySelector('[data-kal]');
const total = document.querySelector('[data-total]');

function tota(nub1, nub2) {
    let resalt = (nub1 * 100) + (nub2 * 50);
    total.textContent = `Сумма: ${resalt}`;
};

function kallori(nub1, nub2) {
    let resalt = (nub1 * 40) + (nub2 * 20);
    kal.textContent = `Калорий: ${resalt}`;
};

CounterPlagin.prototype._bindEvents = function() {
    this._refs.incrementBtn.addEventListener('click', () => {
        
        this.increment();
        this._updateValueUi();
        tota(counter1._value, counter2._value);
        kallori(counter1._value, counter2._value);
    });

    this._refs.decrementBtn.addEventListener('click', () => {
        
        if(this._value) {

            this.decrement();
            this._updateValueUi();
            tota(counter1._value, counter2._value);
            kallori(counter1._value, counter2._value);
        }
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

