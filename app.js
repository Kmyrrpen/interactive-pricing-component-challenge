const slider = document.querySelector('#custom-slider__range');
const sliderFill = document.querySelector('#custom-slider__fill');

const pageviewRates = ['10K', '50K', '100K', '500K', '1M'];
const pageviewText = document.querySelector('#pageview-text>span');

const payRates = [8, 12, 16, 24, 36];
const payRateText = document.querySelector('#monthly-rate>span');
const discount = document.querySelector('#discount-checkbox');

slider.addEventListener('input', updateBox);
discount.addEventListener('input', updateBox);

function updateBox() {
    let value = Number(slider.value);
    // For the slider fill width.
    let percentage = (value * 25) + '%';
    sliderFill.style.width = percentage;
    // For the text change.
    pageviewText.innerHTML = pageviewRates[value];
    //For the price change.
    let payRate = payRates[value] - (discount.checked ? payRates[value] * 0.25 : 0);
    payRateText.innerHTML = '$' + payRate + '.00';
}

let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
if (width >= 900) {
    document.querySelector('#discount-text').innerHTML = '25% discount';
}