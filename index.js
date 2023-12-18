const fetchData = async (searchTerm) => {
  const response = await axios.get('http://www.omdbapi.com/', {
    params: {
      apikey: 'e999c1e',
      s: searchTerm
      // i: 'tt0848228'
    }
  });

  console.log(response.data);
}

const input = document.querySelector('input');

const debounce = (func) => {
  let timeoutId;
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, 1000)
  }
}

const onInput = debounce(event => {
  fetchData(event.target.value);
});

input.addEventListener('input', onInput)