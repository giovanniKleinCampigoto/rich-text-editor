let timer = 0;

export function debounce(fn, value, timeOutValue = 1000) {
  clearInterval(timer);
  timer = setInterval(() => {
    fn(value);
    clearInterval(timer);
  }, timeOutValue);
}
