const fetchData = async (searchTerms) => {
  const response = await axios.get('https://ombdapi.com/', {
    params: {
      apikey: 'e999c1e',
      s: searchTerms
    }
  });

  if (response.data.Error) {
    return [];
  };

  return response.data.Search;
}

const input = document.querySelector('input');

const onInput = async (event) => {
  const movies = await fetchData(event.target.value);
  for (let movie of movies) {
    const div = document.createElement('div');
    div.innerHTML = `
    <img src="${movie.Poster}" />
    <h1>${movie.Title}</h1>
    `;

    document.querySelector('target').appendChild(div);
  }
}

const debounce = (func, delay = 1000) => {
  return (...args) => {
    let timeoutId;
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func.apply(null, args)
    }, delay);
  }
}

input.addEventListener('input', debounce(onInput, 500));