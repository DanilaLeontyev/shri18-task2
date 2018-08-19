function updateSlider(element) {
  if (element) {
    let parent = element.parentElement,
      lastValue = parent.getAttribute('data-slider-value');

    if (lastValue === element.value) {
      return;
    }

    parent.setAttribute('data-slider-value', element.value);
    let thumb = parent.querySelector('.range-slider__thumb');

    let newVal =
      ((element.value - element.min) / (element.max - element.min)) *
      (parent.clientHeight - thumb.clientHeight);
    console.log(thumb.style.border);
    thumb.style.bottom = `${newVal - 4}px`;
  }
}

const inputs = [].slice.call(document.querySelectorAll('.range-slider input'));
inputs.forEach(input => updateSlider(input));

inputs.forEach(input =>
  input.addEventListener('input', element => updateSlider(input))
);
inputs.forEach(input =>
  input.addEventListener('change', element => updateSlider(input))
);
