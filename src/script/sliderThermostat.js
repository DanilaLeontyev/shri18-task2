function updateSlider(element) {
  if (element) {
    let parent = element.parentElement,
      lastValue = parent.getAttribute('data-slider-value');

    if (lastValue === element.value) {
      return; // No value change, no need to update then
    }

    parent.setAttribute('data-slider-value', element.value);
    let thumb = parent.querySelector('.range-slider__thumb');

    let newVal =
      ((element.value - element.min) / (element.max - element.min)) *
      (parent.clientHeight - thumb.clientHeight);

    thumb.style.bottom = `${newVal}px`;
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
